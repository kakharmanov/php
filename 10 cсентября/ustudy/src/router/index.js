import VueRouter from "vue-router";
import Login from '../pages/Login.vue'
import NotFound from '../components/404.vue'
import AdminDashboard  from "../components/Admin/TableDashboard.vue";
import Admin  from "../pages/Layouts/Admin.vue";
import AdminUsers from "../components/Admin/TableUser.vue";
import Testolog from "../pages/Layouts/Testolog.vue"
import ProductTable from "../components/Testolog/ProductTable.vue"
import OrderTable from "../components/Testolog/OrderTable.vue"
import TestTable from "../components/Testolog/TestTable.vue"


export default new VueRouter({
	mode: "history",
	routes:  [
		{
			path:"/login",
			component:Login
		},
		{
			path:"/",
			component:Login
		},
		{
			path:"/admin",
			component:Admin,
			children: [
				{
				  path: '',
				  component: AdminDashboard
				},
				{
					path: 'users',
					component: AdminUsers
				}
			]
		},
		{
			path:'/testolog',
			component:Testolog,
			children: [
				{
				  path: '',
				  component: ProductTable
				},
				{
					path:'orders',
					component:OrderTable
				},
				{
					path:'tests',
					component:TestTable
				}
			]
		},
		{
			path:"*",
			component:NotFound
		}
	]
})