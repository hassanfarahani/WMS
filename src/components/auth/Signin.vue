<template>
  <div id="signin">
    <div class="signin-form">
      <div class="signin-title">
        <h2>Sign In to XYZ Corporation</h2>
      </div>
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="username">Username</label>
          <input
                  type="text"
                  id="username"
                  v-model="username">
        </div>

        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
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