import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index.js'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // All available well data in the database (Array)
    wells: null,
    // Token 
    token: null,
    userName: null,
    // The well data which is going to be edited by the user (object)
    editedWell: null,
    // The well history data (object)
    wellHistory: null
  },
  mutations: {
    // Sending the Token to the state
    authUser (state, token) {
      state.token = token;
    },
    // Sending well data to the state
    setWells (state, wellsList) {
      state.wells = wellsList;
    },
    // Sending the well data, which is going to be edited (selected by the user), to the state
    setEditedWellData (state, wellData) {
      state.editedWell = wellData;
    },
    // Clearing the Token from the state
    clearAuthData(state) {
      state.token = null;
    },
    // Sending the well history data to the state
    setWellHistory(state,  wellHistData) {
      state.wellHistory = wellHistData;
    }
  },
  actions: {
    // Registering the user by its username & password (post request)
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
    // 
    signin ({ commit }, authData) {
      // Sign in the user (post request)
      axios.post('/api/v1/admin/authenticate', {
        username: authData.username,
        password: authData.password
      })
        .then(res => {
          // Commiting 'authUser' mutation to store the Token in the state
          commit('authUser', res.data.token);
          // Storing the Token in Local Storage to allow the user to reload the page
          localStorage.setItem('token', res.data.token);
          // Redirecting the user to the WellList page to see the result of signin, which is the well data
          router.push({ name: 'WellsList' });
        })
        .catch(error => console.log(error))

    },
    // Signing in the user automatically after the page reload
    autoSignin({ commit }) {
      // Getting the token from the local storage
      const token = localStorage.getItem('token');
      // Check to see if there is a token in local storage
      if (!token) {
        return
      }

      // Sending the Token to the mutation
      commit('authUser', token);
    },
    // Logging out the user
    logout({ commit }) {
      // Deleting the Token from the state
      commit('clearAuthData');
      // Deleting the Token from the Local Storage
      localStorage.removeItem('token');
      // redirecting the user to the Welcome page after deleting the Token 
      router.replace({ name: 'WelcomePage' });
    },
    // Getting all the available well data from the database
    getWells({ commit }) {

      axios.get('/api/v1/well')
      .then(res => {
        // Sending all well data to the state
        commit('setWells', res.data);
      })
      .catch(err => console.log(err))
    },
    // Adding the new well to the database
    addNewWell({ commit, state }, newWellData) {

      // Check to see if the user signed in by checking the Token in the state
      if (!state.token) {
        return
      }

      // POST request along with Token in the Header, taken from the state, in order to be able to add the new well to the database
      axios.post('/api/v1/well', newWellData, {
        headers: {
          Authorization: `Token ${state.token}`
        }
      })
        .then (res => {
          // Redirecting the user to the WellList page to see the new well in the database & the UI
          router.push({name: 'WellsList'});
        })
        .catch(err => console.log(err))
    },
    // Getting the well data, which is going to be edited (selected by the user), from the database
    editWell({ commit, state, dispatch }, wellIdUwid) {
      // Check to see if the user signed in by checking the Token in the state
      if (!state.token) {
        alert('Please sign in to update the well!');
        return
      }

      // Getting the well data, which is going to be edited (selected by the user), using a GET request by the Well ID
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
        // sending the well data (editing well data) to the mutation
        commit('setEditedWellData', wellData);
        // redirecting the user to the Edit page
        router.push({ name: 'EditWell'})
      })     
    },
    // sending the updated well data to the database using PUT request
    getUpdateWell({ commit, state }, updatedWellData) {
      
      // PUT request along with Token in the Header, taken from the state, in order to be able to update the database
      if (confirm('Are you sure you want to update this well?')) {
        axios.put(`/api/v1/well/${updatedWellData.wellId}`, updatedWellData , {
          headers: {
            Authorization: `Token ${state.token}`
          }
        })
          .then (res => {
            // Redirecting the user to the WellList page to see the updated well data
            router.push({ name: 'WellsList'});
          })
          .catch(err => console.log(err))
      }
    },
    // Deleting the selected well
    deleteWell({ commit, state, dispatch }, wellId) {
      // Check to see if the user signed in by checking the Token in the state
      if (!state.token) {
        alert('Please sign in to delete the well!');
        return
      }

      // DELETE request along with Token in the Header, taken from the state, in order to be able to delete the well in the database
      if (confirm('Are you sure you want to delete this well?')) {
        axios.delete(`/api/v1/well/${wellId}`, {
          headers: {
            Authorization: `Token ${state.token}`
          }
        })
          .then (res => {
            // Getting the new available wells in the database (after deleting a well) by dispatching getWells Action
            dispatch('getWells');
          })
          .catch(err => console.log(err))
      }

    },
    // Getting the well history using well ID & GET request
    getHistory({ commit }, wellNameId) {
      axios.get(`/api/v1/well/${wellNameId.wellId}/history`)
      .then(res => {
        const wellHistData = {
          histData: res.data,
          wellName: wellNameId.wellName
        };
        // Sending the well history data to the mutation
        commit('setWellHistory', wellHistData);
      })
      .catch(err => console.log(err))
    }

    
  },
  getters: {
    // Getting the updated well data from the state
    editedWellData(state) {
      return state.editedWell;
    },
    // updating the UI state based on Authentication state (updating the Navbar items)
    isAuthenticated(state) {
      return state.token !== null;
    },
    // Getting the well history data from the state
    getWellHistData(state) {
      return state.wellHistory;
    }
  }
})