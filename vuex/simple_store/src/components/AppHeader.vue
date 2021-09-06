<template>

	<nav class="navbar container" role="navigation" aria-label="main navigation">
		<div class="navbar-brand ">
			
			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start ">
				<a class="navbar-item">
					<router-link to="/">Home</router-link>
				</a>
			</div>

			<div class="navbar-end">
				<mini-cart/>
			</div>
		</div>
	</nav>

</template>

<script>
import MiniCart from './MiniCart.vue'
export default {
	data(){
		return{
			openModal:false
		}
	
	},
	components:{
		MiniCart
	}
}
</script>


<style scoped>

</style>
