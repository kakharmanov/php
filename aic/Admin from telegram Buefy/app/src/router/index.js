import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue"
import Reports from "../views/Reports.vue"
import Staff from "../views/Staff.vue"
import Statistics from "../views/Statistics.vue"
import Forgot from "../components/Forgot.vue"
import Reset from "../components/ResetPass.vue"
import axios from 'axios';

Vue.use(VueRouter);


const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta:{title:'Авторизация'}
  },
  {
    path: "/logout",
    name: "Logout",
    component: Login,
    meta:{title:'Выход'}
  },
  {
    path: "/admin/reports",
    name: "Report",
    component: Reports,
    meta:{title:'Отчеты'}
  },
  {
    path: "/admin/staff",
    name: "Staff",
    component: Staff,
    meta:{title:'Сотрудники'}
  },
  {
    path: "/admin/statistics",
    name: "Statistics",
    component: Statistics,
    meta:{title:'Статистика'}
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: Forgot,
    meta:{title:'Забыл пароль'}
  },
  {
    path: "/reset",
    name: "Reset",
    component: Reset,
    meta:{title:'Сброс'}
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  var token = localStorage.getItem('token');
  // проверяем - если токена нет, и станица не логин или восстановление , то переходим на логин  
  if ((to.name !== 'Login' && to.name !='Forgot'  ) && !token) next({ name: 'Login' })
  else if (to.name === 'Logout' && token) {
      localStorage.removeItem('token'); next({ name: 'Login' });
      axios.defaults.headers.common['Authorization'] = null;
  }
  else next()  
  // next()

})

export default router;


