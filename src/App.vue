<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
  import '@/assets/css/style.css'
  import Header from '@/components/header/Header.vue'
  import Footer from '@/components/Footer/Footer.vue'
  export default {
    name: 'app',
    components: {
      'app-header': Header,
      'app-footer': Footer
    },
    created() {
      this.$store.dispatch('autoSignin');
    }
  }
</script>

<style>
  /* #app {
     background-color: #adadad;
  } */

</style>
















