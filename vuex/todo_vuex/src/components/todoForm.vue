<template>
	<div>
		<input type="text" v-model="newTodoItem">
		<span></span>
		<button @click="addNewTodo()">submit</button>
	</div>
</template>

<script>
export default {
	data(){
		return{
			newTodoItem:''
		}
	},
	methods:{
		addNewTodo(){
			this.$store.dispatch('addNewTodo', this.newTodoItem)
			this.newTodoItem = ''
		}
	}
}
</script>