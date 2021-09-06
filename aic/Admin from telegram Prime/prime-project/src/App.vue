<template>
  <div id="app">

    <template v-if="$route.name !='Login'">
      <MenuItemBar/>
    </template>

    <template v-else>
      <Logo/>
    </template>

  </div>
	<router-view/>
</template>


<style>
  .header{
    margin-top:150px;
  }

  .card{
    border: 1px solid #E5E5E5;
    padding:30px;
    border-radius: 7px;
  }

  .container{
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
  }
</style>