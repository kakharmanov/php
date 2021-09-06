<template>
	<div class="block">
		<form @submit.prevent="submit">
			<input type="text" placeholder="title" v-model="title">
			<input type="text" placeholder="body" v-model="body">
			<button type='submit'>Отправить</button>
			<hr>  
		</form>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default ({
	data(){
		return {
			title:'',
			body:''
		}
	},
	methods: {
		...mapMutations(['NewPosts']),
		submit(){
			this.NewPosts(
				{
					title:this.title,
					body:this.body,
					id: Date.now()
				}
			);
			this.title = this.body = '';
		}
	}
})
</script>

<style scoped>
	input{
		display: block;
		width: 100%;
		border: 1px solid black;
		border-radius: 2px;
		margin-bottom: 10px;
	}
	.block{
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>