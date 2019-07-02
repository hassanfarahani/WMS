<template>
  <div id="signin">

    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><strong>Sign In to XYZ Corporation</strong></h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">

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
                    <button type="submit"><strong>Submit</strong></button>
                  </div>
              </form>
          </div>

          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>

        </div>
      </div>
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