<template>
	<div>
		<NavBarBefore></NavBarBefore>
		<div class="login-params has-text-centered is-flex is-flex-direction-column is-justify-content-center  is-align-items-center">	
				<div class="login-inner">
					<h5 class="text-singin mb-5 has-text-weight-medium has-text-left">Авторизация</h5>
					<input class="input main-input-setting mb-5" type="text" placeholder="Логин">
					<input class="input main-input-setting" type="text" placeholder="Пароль">
					<div class="has-text-right">
						<button class="button is-info mt-5">Войти</button>
					</div>
				</div>
		</div>
	</div>
</template>

<script>
import NavBarBefore from '../components/NavBarBefore.vue'

export default {
	components:{
		NavBarBefore
	}
}

</script>

<style scoped>
	.login-params{
		height: calc(100vh - 5.190rem);
		width: 100vw;
	}

</style>