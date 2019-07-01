<template>
  <div class="welcome-img">
    <div id="welcome">
      <div class="cta">
        <router-link :to="{name: 'Signup'}">Sign Up</router-link>
        <router-link :to="{name: 'Signin'}">Sign In</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #welcome {
    width: 80%;
    margin: auto;
  }

  /* .welcome-img {
    height: 90vh;
    background-image: linear-gradient(to right bottom,rgba(#909196,0.1), rgba(#909196,0.1)),url(../../assets/img/background-image.jpg);
    background-size: cover;
    background-position: top;
  } */

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .cta {
    width: 300px;
    margin: auto;
    text-align: center;
  }

  .cta a {
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid #521751;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
    color: #521751;
  }

  .cta a:hover,
  .cta a:active {
    background-color: #521751;
    color: white;
  }
</style>