import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import {DraggableTree} from 'vue-draggable-nested-tree'


Vue.use(Buefy)
Vue.use(DraggableTree)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
