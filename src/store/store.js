import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index.js'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wells: null,
    // token: localStorage.getItem('token') || null,
    token: null,
    userName: null,
    editedWell: null,
    wellHistory: null
  },
  mutations: {
    authUser (state, token) {
      // localStorage.setItem('token', userData.token)
      state.token = token;
      // state.userName = userData.userName;
    },
    setWells (state, wellsList) {
      state.wells = wellsList;
    },
    setEditedWellData (state, wellData) {
      state.editedWell = wellData;
    },
    clearAuthData(state) {
      // localStorage.removeItem('token');
      state.token = null;
    },
    setWellHistory(state,  wellHistData) {
      state.wellHistory = wellHistData;
    }
  },
  actions: {
    signup ({ commit }, authData) {

      axios.post('/api/v1/admin/register', {
        username: authData.username,
        password: authData.password
      })
        .then(res => {
          router.push({ name: 'Signin' });
        })
        .catch(error => console.log(error))

    },
    signin ({ commit }, authData) {

      axios.post('/api/v1/admin/authenticate', {
        username: authData.username,
        password: authData.password
      })
        .then(res => {
          commit('authUser', res.data.token);
          localStorage.setItem('token', res.data.token);
          router.push({ name: 'WellsList' });
        })
        .catch(error => console.log(error))

    },
    autoSignin({ commit }) {
      const token = localStorage.getItem('token');
      if (!token) {
        return
      }
      commit('authUser', token);
    },
    logout({ commit }) {
      commit('clearAuthData');
      localStorage.removeItem('token');
      router.replace({ name: 'WelcomePage' });
    },
    getWells({ commit }) {

      axios.get('/api/v1/well')
      .then(res => {
        commit('setWells', res.data);
        // console.log(res.data);
      })
      .catch(err => console.log(err))
    },
    addNewWell({ commit, state }, newWellData) {

      if (!state.token) {
        return
      }

      axios.post('/api/v1/well', newWellData, {
        headers: {
          Authorization: `Token ${state.token}`
        }
      })
        .then (res => {
          router.push({name: 'WellsList'});
        })
        .catch(err => console.log(err))
    },
    editWell({ commit, state, dispatch }, wellIdUwid) {
      if (!state.token) {
        alert('Please sign in to update the well!');
        return
      }

      axios.get(`/api/v1/well?uwid=${wellIdUwid.wellUWID}`)
      .then(res => {
        const wellData = {
          wellName: res.data[0].wellName,
          wellId: res.data[0].id,
          uwid: res.data[0].uwid,
          licenseNumber: res.data[0].licenseNumber,
          area: res.data[0].area,
          field: res.data[0].field,
          totalDepth: res.data[0].totalDepth,
          drillingDate: res.data[0].drillingDate,
          status: res.data[0].status
        }

        return wellData;
      })
      .then(wellData => {
        dispatch('getEditedWellData', wellData);
        router.push({ name: 'EditWell'})
      })       
      

    },
    getEditedWellData({ commit }, wellData) {
      commit('setEditedWellData', wellData);
    },
    getUpdateWell({ commit, state }, updatedWellData) {
      
      if (confirm('Are you sure you want to update this well?')) {
        axios.put(`/api/v1/well/${updatedWellData.wellId}`, updatedWellData , {
          headers: {
            Authorization: `Token ${state.token}`
          }
        })
          .then (res => {
            router.push({ name: 'WellsList'});
          })
          .catch(err => console.log(err))
      }
    },
    deleteWell({ commit, state, dispatch }, wellId) {
      if (!state.token) {
        alert('Please sign in to delete the well!');
        return
      }

      if (confirm('Are you sure you want to delete this well?')) {
        axios.delete(`/api/v1/well/${wellId}`, {
          headers: {
            Authorization: `Token ${state.token}`
          }
        })
          .then (res => {
            dispatch('getWells');
          })
          .catch(err => console.log(err))
      }

    },
    getHistory({ commit }, wellNameId) {
      axios.get(`/api/v1/well/${wellNameId.wellId}/history`)
      .then(res => {
        const wellHistData = {
          histData: res.data,
          wellName: wellNameId.wellName
        };
        commit('setWellHistory', wellHistData);
      })
      .catch(err => console.log(err))
    }

    
  },
  getters: {
    editedWellData(state) {
      return state.editedWell;
    },
    isAuthenticated(state) {
      return state.token !== null;
    },
    getWellHistData(state) {
      return state.wellHistory;
    }
  }
})