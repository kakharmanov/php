<template>
  <div id="app">
    <NewPosts/>
   <h1>количество постов: {{postsCount}}</h1>
    <div class="post" v-for="post in validPost" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>  
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NewPosts from './components/NewPosts.vue';

export default {
  name: 'App',
  components:{
    NewPosts
  },
  computed:mapGetters(["validPost","postsCount"]),
  methods:mapActions(["fetchPosts"]),
  async mounted(){
    this.fetchPosts(4);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}
.post{
  border:1px solid black;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 20px;
}
</style>
