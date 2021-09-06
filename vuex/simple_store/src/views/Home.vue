<template>
  <div class="home">
    <ProductsList/>
  </div>
</template>

<script>
import ProductsList from '../components/ProductList.vue'
export default {
  name: 'Home',
  components: {
    ProductsList
  }
}
</script>