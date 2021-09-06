<template>
	<div>

		<Button label="Добавить" icon="pi pi-user-plus" class="p-button-danger" @click="openModal"/>

			<Dialog header="Добавить сотрудника" class="p-text-center" v-model:visible="displayModal" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '30vw'}" :modal="true">
				<form action="/staff" method="post" @submit.prevent="loginAttempt">	
					
					<span class="p-float-label">
						<label for="username">Ф.И.О:</label>
						<InputText id="name" class="p-inputtext-sm"  type="name" placeholder="Ф.И.О" v-model="name" required/>
					</span>

					<span class="p-float-label">
						<label for="email">E-mail:</label>
						<InputText id="email" type="email" class="p-inputtext-sm" placeholder="Электронная почта" v-model="email" required/>
					</span>

					<span class="p-float-label">
						<label for="username">Пароль:</label>
						<InputText type="password"  class="p-inputtext-sm" placeholder="Пароль" v-model="password" v-show="!showPass" required/>
						<InputText type="text"  class="p-inputtext-sm" placeholder="Пароль" v-model="password" v-show="showPass" required/>
					</span>
					
					<Button class="p-button p-mt-3" @click="showPass=!showPass">
						<span v-show="!showPass">Показать пароль</span>
						<span v-show="showPass">Скрыть пароль</span>
					</Button>

					<div class="p-mt-6">
						<Button label="Yes" icon="pi pi-check" type="submit"/>
						<Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
					</div>
						
				</form>
			</Dialog>

	</div>
</template>

<script>

import axios from 'axios'
	export default ({
		data(){
			return{
				displayModal: false,
				name:null,
				email:null,
				password:null,
				showPass:false,
			}
		},
		methods:{
			async loginAttempt() {
        		await axios.post('admin/users', {
					Email: this.email,
					Password: this.password,
					Name:this.name,
     			})
				this.updateList()
				this.closeModal()
			},
			openModal() {
         	this.displayModal = true
      	},
      	closeModal() {
         	this.displayModal = false
      	},
			updateList(){
				this.$emit('UpdateList')
			}
		}
	})

</script>