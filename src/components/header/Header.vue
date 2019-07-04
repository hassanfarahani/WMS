<template>
  <header id="header">
      <div class="logo">
        <router-link :to="{name: 'WelcomePage'}"><i>XYZ Corporation</i></router-link>
      </div>

      <nav class="navbar">

        <ul :class="[{ active: openNav },'navbar-list' ]">
          <li class="navbar-list-item" @click="openNav=!openNav">
            <router-link :to="{name: 'WellsList'}" active-class="active" exact><a>Wells List</a></router-link>
          </li>
          <li v-if="auth" class="navbar-list-item"  @click="openNav=!openNav">
            <router-link :to="{name: 'AddWell'}" active-class="active" exact>Add a New Well</router-link>
          </li>
          <li v-if="!auth"  class="navbar-list-item" @click="openNav=!openNav">
            <router-link :to="{name: 'Signin'}" active-class="active" exact>Sign In</router-link>
          </li>
          <li v-if="!auth" class="navbar-list-item" @click="openNav=!openNav">
            <router-link :to="{name: 'Signup'}" active-class="active" exact>Sign Up</router-link>
          </li>
          <li class="navbar-list-item" @click="openNav=!openNav">
            <router-link :to="{name: 'About'}" active-class="active" exact>About XYZ</router-link>
          </li>
          <li v-if="auth"  class="navbar-list-item" @click="openNav=!openNav">
            <button @click="onLogout" class="logout" active-class="active" exact>Logout</button>
          </li>
        </ul>

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
    // updating the UI state based on Authentication state (TRUE or FALSE)
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    // Logging out the user
    onLogout() {
      this.$store.dispatch('logout');
    },
    // Toggle mobile menu
    toggleMenu() {
      this.openNav = !this.openNav;
    }
  }
}
</script>


<style scoped>

  @media (max-width: 768px) {

      .active {
          display: block;
      }
  }


</style>