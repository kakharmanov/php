import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Authorization'] = 'Barrier '+ localStorage.getItem('token');
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'http://18.191.211.145:8081/'