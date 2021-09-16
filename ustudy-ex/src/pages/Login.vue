<template>
	<div>
		<div class="header">
		<div class="container has-text-centered">
			<img class="my-4" src="../assets/u-study_logo.svg" alt="logo">
		</div>
	</div>

	<section class="login is-flex is-justify-content-center ">
		<div class="login-inner is-flex is-flex-direction-column">
			<h5 class="text-singin mb-5 has-text-weight-medium">Авторизация</h5>
			<input class="input main-input-setting mb-5" type="text" placeholder="Логин">
			<input class="input main-input-setting" type="text" placeholder="Пароль">
			<button class="button is-info mt-5 is-align-self-flex-end">Войти</button>
		</div>
	</section>
</div>

	
</template>

<script>

export default {
	
}

</script>

<style scoped>
	.header{
		border-bottom:1px solid #D0D4D9;
	}

	.login{
		margin-top: 260px;
	}
	.login-inner{
		width: 328px;
		height: 214px;
	}

	.main-input-setting{
		display: block;
		margin: auto;
	}
	.text-singin{
		line-height: 21px;
		font-weight:normal;
		font-size: 18px;
	}
</style>