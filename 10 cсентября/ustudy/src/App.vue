<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
import Admin from './pages/Layouts/Admin.vue'
import Login from './pages/Login.vue'
export default {
  components:{
    Admin,
    Login
  },
  name: 'App'
}

</script>

<style>
  @import "reset.css";
  @import "~bulma/css/bulma.css";
  @import "style.css";

  *{
    box-sizing: border-box !important;
    padding: 0;
    margin: 0;
    /* font-family: 'Noto'; */
  }
  p{
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none !important;
    color:black !important;
  }
  html{
    background-color: white;
    color: #4A4A4A;
  }

</style>
