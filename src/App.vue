<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
  import '@/assets/css/style.css'
  import Header from '@/components/header/Header.vue'
  export default {
    name: 'app',
    components: {
      'app-header': Header
    },
    created() {
      this.$store.dispatch('autoSignin');
    }
  }
</script>

<style>

</style>
















