import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
    props:true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
