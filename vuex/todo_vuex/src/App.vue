<template>
  <div id="app">
    <h1>Todo Application</h1>
    <h2>Completed: {{completedTodos}}</h2>
    <h2>Pending: {{pendingTodos}}</h2>  
    <todo-form></todo-form>
    <todo-list></todo-list>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import todoList from './components/todoList.vue'
import todoForm from './components/todoForm.vue'

export default {
  name: 'App',
  components:{
    todoList,
    todoForm
  },
  computed:{
    ...mapGetters(['completedTodos', 'pendingTodos'])
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
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
