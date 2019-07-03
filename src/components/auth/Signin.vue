<template>
  <div id="signin">

    <div class="wrap">
      <h2>Sign In Here</h2>
          <form @submit.prevent.enter="onSubmit">
              <input type="text" placeholder="username ..." class="username" v-model="username" required>
              <input type="password" class="password" placeholder="password ..." v-model="password" required>
              <button type="submit" class="resister-btn"><strong>Sign In</strong></button>
          </form>
          <div class="goToSignup">Need an account? &nbsp; <router-link :to="{name: 'Signup'}">Sign Up</router-link></div>
    </div>

  </div> 
   
</template>

<script>

  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          username: this.username,
          password: this.password,
        }
      this.$store.dispatch('signin', formData)  ;
      }
    }
  }
</script>

<style>

</style>