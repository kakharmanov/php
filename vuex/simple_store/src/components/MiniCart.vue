<template>
	<div class="navbar-item has-dropdown is-active width px-2 py-2">
		<a class="navbar-link" @click="openModal=!openModal">
			В корзине: {{getAmountOfproducts}} 
		</a>
		<div >
			<div class="navbar-dropdown" v-if="openModal" >
				<div class="px-2 is-flex is-justify-content-space-between" v-for="item in getCart" :key="item.product.id">
					<div >
						<strong>{{item.product.title}}</strong>
						<div class="desing__product_item">{{item.quantity}} x ${{item.product.userId}}</div>
					</div>
					<a href="#" class="button is-danger is-small">remove</a>
				</div>
				<hr>
				<div class="is-flex is-justify-content-space-between px-2">
					<span>Total price:${{getCartTotalPrice}}</span>
					<a href="#" class="button is-small" @click="RemoveAll">Remove All</a>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex'
export default({
	data(){
		return{
			openModal:false
		}
	},
	computed:{
		...mapGetters(['getCart', 'getAmountOfproducts', 'getCartTotalPrice']),
		...mapMutations(['SET_REMOVE_ALL'])
	},
	mounted(){
		this.$store.dispatch("getCartItem")
	},
	methods:{
		RemoveAll(){
			this.SET_REMOVE_ALL
		}
	}
	
})

</script>

<style scoped>
.width{
	width: 320px;
}
.desing__product_item{
	text-align: left;
}
</style>