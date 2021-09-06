<template>
  <div id="app">
    <TodoList :todos="todos" @delete-todo="delete1"/>
  </div>
</template>

<script>
  import TodoList from './components/TodoList.vue'
  export default{
    components:{
      TodoList
    },
    data(){
      return{
        todos:['Шекспир', 'Махатма-Ганди', 'Мухаммад-Али', 'Ошо', 'Рамштаин', 'Hally Barry']
      }
    },
    methods:{
      delete1(index){
        this.todos.splice(index,1);
      }
    }
  }
</script>

<style>
  /* @import '~bulma/css/bulma.css'; */
</style>
