import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router'
import store from './store'
const app = createApp(App);

import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

app.use(PrimeVue);
app.use(store);
app.use(router);

app.mount('#app');
