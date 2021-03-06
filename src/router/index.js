import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store.js'


import WelcomePage from '@/components/welcome/welcome.vue'
import WellsList from '@/components/Wells/WellsList.vue'
import Signup from '@/components/auth/Signup.vue'
import Signin from '@/components/auth/Signin.vue'
import AddWell from '@/components/Wells/AddWell.vue'
import EditWell from '@/components/Wells/EditWell.vue'
import WellHistory from '@/components/Wells/WellHistory.vue'
import About from '@/components/About/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/wellslist',
      name: 'WellsList',
      component: WellsList
    },
    {
      path: '/addwell',
      name: 'AddWell',
      component: AddWell,
      // Check for availability of token in the store in order to allow for adding a well (check to see if user signed in or not)
      beforeEnter: (to, from, next) => {
        if (store.state.token) {
          next();
        } else {
          alert('You need to signin to add a new Well!')
          next({ name: 'Signin' });
        }
      }
    },
    {
      path: '/editwell',
      name: 'EditWell',
      component: EditWell
    },
    {
      path: '/wellhistory',
      name: 'WellHistory',
      component: WellHistory
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
