<template>

	<div>
		<Button label="Удалить" icon="pi pi-times" class="p-button-danger p-button-sm" @click="openModal"/>
		<Dialog header="Предупреждающее окно" class="p-text-center" v-model:visible="displayModal" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '25vw', height:'19vw'}" :modal="true">
			<h2>Вы действительно хотите выполнить удаление?</h2>
			<Button class="p-my-3 p-mx-3 " @click="DeleteUser">Да</Button>
			<Button class="p-my-3 p-mx-3 " @click="displayModal=!displayModal">Нет</Button>
		</Dialog>
	</div>

</template>

<script>

	export default ({

		data(){
			return{
				displayModal: false
			}
		},
		methods:{
			openModal() {
         	this.displayModal = true
      	},
			closeModal() {
				this.displayModal = false
			},
			DeleteUser(){
				//пока метода нет((
			}
		}
	})

</script>