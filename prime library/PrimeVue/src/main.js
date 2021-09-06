import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Fieldset from 'primevue/fieldset';
import TreeSelect from 'primevue/treeselect';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons



const app = createApp(App);
app.use(PrimeVue)
app.component('Button', Button);
app.component('Fieldset', Fieldset);
app.component('TreeSelect', TreeSelect);
app.mount("#app")
