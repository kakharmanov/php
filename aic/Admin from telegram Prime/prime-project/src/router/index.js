import { createRouter, createWebHistory } from "vue-router";
import axios from 'axios';
import Reports from "../pages/Reports";
import Staff from "../pages/Staff";
import Statistics from "../pages/Statistics";
import Login from "../pages/Login";

const routes = [
  {
    path: "/",
    name: "Reports",
    component: Reports,
    meta:{title:'Отчеты'}
  },
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
    path: "/reports",
    name: "Report",
    component: Reports,
    meta:{title:'Отчеты'}
  },
  {
    path: "/staff",
    name: "Staff",
    component: Staff,
    meta:{title:'Сотрудники'}
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: Statistics,
    meta:{title:'Статистика'}
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
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
})

export default router;
