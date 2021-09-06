<template>
  <div>
    <section class="section has-text-left container">
      <h1 class="title">{{product.title}}</h1>
      <div>
        <img src="https://via.placeholder.com/150x100" alt="">
      </div>
      <p>{{product.body}}</p>
      <strong>Price: ${{product.userId}}</strong>
      <input class="is-block px-2 py-2 mx-2 my-2" placeholder="amount of product" type="text">
      <button class="button is-danger is-block mt-4" @click="addToCart">Add to Cart</button>
    </section>
  </div>
</template>

<script>

export default {
 props:['id'],
 computed:{
  product(){
    return this.$store.getters.getPost;
  }
 },
 mounted(){
  this.$store.dispatch("getProduct",this.id)
 },
 methods:{
  addToCart(){
    this.$store.dispatch("addProductToCart",{
      product:this.product,
      quantity:1
    })
  }
 }
}
</script>