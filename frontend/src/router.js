import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Signin from './components/Signin.vue'
import Dashboard from './components/Dashboard.vue'
// import VueChartJS from './components/charts/VueChartJS'
// import VueChartKick from './components/charts/VueChartKick'
// import VueCharts from './components/charts/VueCharts'

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    }
  ]
})

export default router;