<template> 

	<div class="columns is-mobile">
		<div class="column is-mobile">
			<h1 class="has-text-centered">Вы действительно хотите удалить элемент?</h1>
			<div class="has-text-centered pt-5">
				<button class="button is-danger mr-6">Да</button>
				<button class ="button is-light" @click="SentDateToParent">Отмена</button>
			</div>
			
		</div>
	</div>
	
</template>

<script>

export default ({
	data() {
		return {
			name:null
		}
	},
	methods: {
	 SentDateToParent(){
		this.$emit('closeModal')
	 }
  }
})
</script>