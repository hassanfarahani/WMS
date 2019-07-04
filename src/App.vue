<template>
  <div id="app">
    <app-header />
      <transition name="slide"  mode="out-in" appear>
          <router-view></router-view>
      </transition>
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
      // Automatic signing in the user after reloading the page
      this.$store.dispatch('autoSignin');
    }
  }
</script>

<style>
  .slide-enter-active {
    animation: slide-in 800ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 400ms ease-out forwards;
  }


  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    } 
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    0% {
      opacity: 1;
      transform: translateX(0);
    } 
    100% {
      opacity: 0;
      transform: translateX(20px);
    }
  }

</style>
















