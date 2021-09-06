const ARR = []
export default{
	state: {
		products:[],
		product:[],
		cart:[],

	},
	mutations: {
		SET_PRODUCTS(state,products){
			state.products = products;
		},
		SET_PRODUCT(state, product){
			state.product = product;
		},
		ADD_TO_CART(state,{product,quantity}){
			
			let productInCart = state.cart.find(item =>{
				return item.product.id === product.id
			});

			if(productInCart){
				productInCart.quantity += quantity
				return;
			}

			state.cart.push({product,quantity})

			localStorage.setItem("product",JSON.stringify(state.cart))

		},
		SET_CART(state, cartitems ){
			state.cart = cartitems 
		},
		SET_REMOVE_ALL(state){
			state.cart = []
			localStorage.removeItem("product");
		}
	},
	actions: {
		async getProducts({commit}){
			const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
			const products = await res.json()
			commit('SET_PRODUCTS',products)
		},
		async getProduct({commit}, productId){
			const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`)
			const product = await response.json()
			commit('SET_PRODUCT', product)
		},
		addProductToCart({commit}, {product, quantity}){
			commit('ADD_TO_CART', {product,quantity})
		},
		getCartItem({commit}){
			const product_data = JSON.parse(localStorage.getItem("product"))
			commit('SET_CART', product_data)
		}
	},
	getters:{
		getAllPost(state){
			return state.products
		},
		getPost(state){
			return state.product
		},
		getCart(state){
			return state.cart
		},
		getAmountOfproducts(state){
			return state.cart.length
		},
		getCartTotalPrice(state){
			let total = 0
			
			state.cart.forEach(item => {
				total += item.product.userId * item.quantity;
			});

			return total;
		}
	}
}