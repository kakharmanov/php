<template>
	<div class="column column is-one-fifth">
		<div class="card">
			<div class="card-image">
				<figure class="image is-4by3">
					<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
				</figure>
			</div>
			<div class="card-content">
				<div class="media">
					<div class="media-content">
						<router-link :to="{name:'product', params:{id:product.id}}">{{product.title}}</router-link>
						<strong class="is-block">${{product.userId}}</strong>
						<p>{{product.body}}</p>
					</div>
					
				</div>
				<button class="is-small button is-success" @click="addToCart">Add product to cart</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props:["product"],
	methods:{
		addToCart(){
			this.$store.dispatch("addProductToCart", {
				product:this.product,
        		quantity:1
			})	
		}
	}
}
</script>