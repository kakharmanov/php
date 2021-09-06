<template> 

	<div class="columns is-mobile">
		<div class="column is-mobile">
	<form action="/admin/staff" method="post" @submit.prevent="loginAttempt">
			<h2 class="title has-text-centered">Добавить сотрудника</h2>
			<div class="field">
				<p class="control has-icons-left has-icons-left">
					<span class="is-size-7 has-text-left">Имя</span>
					<input class="input" type="name" placeholder="Имя" v-model="name" pattern="[а-яА-ЯёЁa-zA-Z]{3,20}" required>
				</p>
			</div>

			<div class="field">
				<p class="control has-icons-left has-icons-left">
					<span class="is-size-7 has-text-left">E-mail</span>
					<input class="input" type="email" placeholder="E-mail" v-model="email">
				</p>
			</div>

			<div class="field">
				<p class="control has-icons-left">
					<span class="is-size-7">Пароль</span>
					<input class="input" type="password" placeholder="Password"  v-model="password" v-show="!showPass" required>
					<input class="input" type="text" placeholder="Password"  v-model="password" v-show="showPass" required>
				</p>
			</div>
			<a class="button is-primary is-small" @click="showPass=!showPass">
				<span v-show="!showPass">Показать пароль</span>
				<span v-show="showPass">Скрыть пароль</span>
			</a> 
			<div class="has-text-centered mt-5">
				<button class="button is-danger" native-type="submit">ДОБАВИТЬ</button>
			</div>
	</form>
			
		</div>
	</div>
	
</template>

<script>
import axios from 'axios'

export default ({
	data() {
		return {
			name:null,
			email:null,
			password:null,
			showPass:false,
		}
	},
	methods: {
      async loginAttempt() {
        await axios.post('admin/users', {
			Email: this.email,
			Password: this.password,
			Name:this.name
      })
		this.SentDateToParent();     
    },
	 SentDateToParent(){
		this.$emit('closeModal')
	 }
  }
})
</script>

<style>
.modal 
.modal-content {
   width: 30%;
}

@media screen and (max-width:768px){
	
	.modal 
	.modal-content {
		width: 95%;
	}

	.box:not(:last-child), .content:not(:last-child), .notification:not(:last-child), .progress:not(:last-child), .table:not(:last-child), .table-container:not(:last-child), .title:not(:last-child), .subtitle:not(:last-child), .block:not(:last-child), .highlight:not(:last-child), .breadcrumb:not(:last-child), .level:not(:last-child), .message:not(:last-child), .pagination:not(:last-child), .tabs:not(:last-child) {
		margin-bottom: 0.5rem;
	}

	.title {
		color: #363636;
		font-size: 25px;
		font-weight: 600;
		line-height: 1.125;
	}

} 
</style>