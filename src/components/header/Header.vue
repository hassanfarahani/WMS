<template>
  <header id="header">
      <div class="logo">
        <router-link :to="{name: 'WelcomePage'}">XYZ Corporation</router-link>
      </div>

      <!-- <nav :class="['navbar', { active: openNav }]"> -->
      <nav v-if="!openNav" class="navbar">

        <ul class="navbar-list">
          <li class="navbar-list-item" @click="openNav=!openNav">
            <router-link :to="{name: 'WellsList'}" active-class="active">Wells List</router-link>
          </li>
          <li v-if="auth" class="navbar-list-item"  @click="openNav=!openNav">
            <router-link :to="{name: 'AddWell'}" active-class="active">Add a New Well</router-link>
          </li>
          <li v-if="!auth"  class="navbar-list-item" @click="openNav=!openNav">
            <router-link :to="{name: 'Signin'}" active-class="active">Sign In</router-link>
          </li>
          <li v-if="!auth" class="navbar-list-item" @click="openNav=!openNav">
            <router-link :to="{name: 'Signup'}" active-class="active">Sign Up</router-link>
          </li>
          <li v-if="auth"  class="navbar-list-item" @click="openNav=!openNav">
            <button @click="onLogout" class="logout" active-class="active">Logout</button>
          </li>
        </ul>

        <!-- 
                <div class="logo">
        <router-link :to="{name: 'WelcomePage'}">XYZ Corporation</router-link>
      </div>
          <ul class="navbar-list">
          <li class="navbar-list-item">
            <router-link :to="{name: 'WellsList'}">Wells List</router-link>
          </li>
          <li v-if="auth" class="navbar-list-item">
            <router-link :to="{name: 'AddWell'}">Add a New Well</router-link>
          </li>
          <li v-if="!auth" class="navbar-list-item">
            <router-link :to="{name: 'Signin'}">Sign In</router-link>
          </li>
          <li v-if="!auth" class="navbar-list-item">
            <router-link :to="{name: 'Signup'}">Sign Up</router-link>
          </li>
          <li v-if="auth" class="navbar-list-item">
            <button @click="onLogout" class="logout">Logout</button>
          </li>
        </ul> -->
      </nav>
      <div @click="toggleMenu" class="toggle">
            <i class="fa fa-bars menu"></i>
      </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      openNav: false
    }
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout');
    },
    toggleMenu() {
      this.openNav = !this.openNav;
    }
  }
}
</script>


<style>



</style>