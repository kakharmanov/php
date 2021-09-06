<template>
  <div id="app">
    <Nav class="mb-6"></Nav>
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default ({
  components:{
    Nav,
  }
});
</script>

<style >

  @font-face {
    font-family: 'CaslonPro-Italic';
    src: url('./fonts/ACaslonPro-Italic.eot');
    src: local('☺'), url('fonts/ACaslonPro-Italic.woff') format('woff'), url('fonts/ACaslonPro-Italic.ttf') format('truetype'), url('fonts/ACaslonPro-Italic.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }


  @import '~bulma/css/bulma.css';


</style>
