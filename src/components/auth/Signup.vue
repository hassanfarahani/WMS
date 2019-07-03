<template>
  <div id="signup">

    <div class="wrap">
      <h2>Sign up Here</h2>
          <form @submit.prevent.enter="onSubmit">
              <input type="text" placeholder="username ..." class="username" v-model="username" required>
              <input type="password" class="password" placeholder="password ..." v-model="password" required>
              <button type="submit" class="resister-btn"><strong>Sign Up</strong></button>
          </form>
    </div>

  </div>
</template>


<script>

  export default {
    data () {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          username: this.username,
          password: this.password,
        }

        this.$store.dispatch('signup', formData);
      }
    }
  }
</script>

<style>


</style>