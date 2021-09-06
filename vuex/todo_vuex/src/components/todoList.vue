<template>
	<div>
		<Todo v-for="(todo, index) in getAllPosts" :key="index" :todo="todo" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Todo from './todo.vue'

export default {
	components:{
		Todo
	},
	computed:{
		...mapGetters(['getAllPosts']),
	}
}
</script>