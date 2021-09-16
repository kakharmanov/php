import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'


Vue.use(VueRouter)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
