import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import PrimeVue from 'primevue/config'


import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './axios'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import MenuItemBar from './components/MenuBar'
import Logo from './components/NavLogo'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import Paginator from 'primevue/paginator'
import Dialog from 'primevue/dialog'
import ConfirmationService from 'primevue/confirmationservice'
import ConfirmDialog from 'primevue/confirmdialog'
import Calendar from 'primevue/calendar'
import Message from 'primevue/message'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.use(ConfirmationService)

app.component('InputText', InputText)
app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('Logo', Logo)
app.component('MenuItemBar', MenuItemBar)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Dialog', Dialog)
app.component('ConfirmDialog', ConfirmDialog)
app.component('Paginator', Paginator)
app.component('Calendar', Calendar)
app.component('Message', Message)


app.mount("#app");
