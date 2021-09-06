<template>
	<div class="container is-flex is-align-content-stretch is-flex-wrap-wrap">
		<Product v-for="product in getAllPost" :key="product.id" :product="product" />
	</div>	
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import Product from './ProductCart.vue'

export default {
	components:{
		Product
	},
	computed:mapGetters(["getAllPost"]),
	methods:{
		...mapActions(["getProducts"])
	},
	async mounted(){
		this.getProducts()
	}
}
</script>

<style>

</style>