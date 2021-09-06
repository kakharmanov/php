<template>
	<div class="stock">
		<form @submit.prevent="submit">
			<input type="text" placeholder="title" v-model="title">
			<input type="text" placeholder="body" v-model="body">
			<button type="submit">отправить</button>
			<hr>
		</form>
	</div>	
</template>

<script>
import { mapMutations } from 'vuex'

export default ({
	data(){
		return{
			title:'',
			body:''
		}
		
	},
	methods:{
		...mapMutations(['createPost']),
		submit(){
			this.createPost({
				title:this.title,
				body:this.body,
				id:Date.now()
			})
		this.title = this.body = ''	
		}
	}
})

</script>

<style scoped>
	input{
		display:block;
		border: 1px solid black;
		border-radius: 2px;
		padding: 5px;
		margin: 10px;
	}
	.stock{
		display: flex;
		justify-content: center;
	}
</style>
