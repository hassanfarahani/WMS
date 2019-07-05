<template>
  <div id="signup">

    <div class="wrap">
      <h2>Sign up Here</h2>
          <form @submit.prevent.enter="onSubmit">
              <input type="text" placeholder="username ..."
                 :class="['username', { invalid: $v.username.$error }]" 
                 @blur="$v.username.$touch()" 
                 v-model="username">
                 <p class="username-error" v-if="!$v.username.minLength">Username should be at least 6 characters</p>
                 <!-- <p class="username-error" v-if="!$v.username.required">This field must not be empty</p> -->
              <input type="password" placeholder="password ..." 
              :class="['password', { invalid: $v.password.$error }]"
              @blur="$v.password.$touch()"
              v-model="password" required>
              <p class="password-error" v-if="!$v.password.minLen">Your password should be at least 8 characters</p>
              <input type="password" class="password" placeholder="confirm password ..." 
              :class="['password', { invalid: $v.confirmPassword.$error }]"
              @blur="$v.confirmPassword.$touch"
              v-model="confirmPassword">
              <p class="password-error" v-if="!$v.confirmPassword.sameAs">Passwords must be identical</p>
              <button type="submit" class="resister-btn" :disabled="$v.$invalid"><strong>Sign Up</strong></button>
          </form>
    </div>

  </div>
</template>


<script>
  import { required, minLength, sameAs } from 'vuelidate/lib/validators'

  export default {
    data () {
      return {
        username: '',
        password: '',
        confirmPassword: ''
      }
    },
    validations: {
      username: {
        required,
        minLength: minLength(6)
      },
      password: {
        required,
        minLen: minLength(8)
      },
      confirmPassword: {
        sameAs: sameAs('password')
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

<style scoped>

.username.invalid input {
    border: 1px solid red;
    background-color: #ffc9aa;
}


</style>