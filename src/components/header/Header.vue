<template>
  <header id="header">
      <div class="logo">
        <router-link :to="{name: 'WelcomePage'}">XYZ Corporation</router-link>
      </div>
      <nav class="navbar">
        <ul class="navbar-list">
          <li v-if="!auth" class="navbar-list-item">
            <router-link :to="{name: 'Signup'}"  data-toggle="modal" data-target="#mySignup-Modal">Sign Up</router-link>
          </li>
          <li v-if="!auth" class="navbar-list-item">
            <router-link :to="{name: 'Signin'}"  data-toggle="modal" data-target="#myModal">Sign In</router-link>
          </li>
          <li class="navbar-list-item">
            <router-link :to="{name: 'WellsList'}">Wells List</router-link>
          </li>
          <li v-if="auth" class="navbar-list-item">
            <router-link :to="{name: 'AddWell'}">Add a New Well</router-link>
          </li>
          <li v-if="auth" class="navbar-list-item">
            <button @click="onLogout" class="logout">Logout</button>
          </li>
        </ul>
      </nav>
  </header>
</template>

<script>
export default {
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>


<style>

</style>