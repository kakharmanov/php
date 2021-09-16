<template>
  <!-- <Login></Login> -->
  <Dashboard></Dashboard>
</template>

<script>

import Login from './pages/Login.vue'
import Dashboard from './pages/MainDashboard.vue'

export default {
  components:{
    Login,
    Dashboard
  },
  name: 'App'
}

</script>

<style>
  @import "~bulma/css/bulma.css";
  
  *{
    box-sizing: border-box !important;
    padding: 0;
    margin: 0;
  }
  p{
    padding: 0;
    margin: 0;
  }
  html{
    background-color: white;
    color: #4A4A4A;
  }

</style>
