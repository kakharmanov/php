import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';
import Buefy from 'buefy';
import './axios';
import './script';
import 'buefy/dist/buefy.css'
import '../public/styles/style.css'

import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Buefy)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  axios,
  data: () => ({
    user: {},
  }),
}).$mount('#app')

