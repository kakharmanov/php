import Vue from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';


import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

Vue.config.productionTip = false
Vue.use(PrimeVue);
Vue.component('Button ', Button );


new Vue({
  render: h => h(App),
}).$mount('#app')
