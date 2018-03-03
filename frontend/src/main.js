import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import router from './router.js'
import {
  config
} from './helpers/firebaseConfig'
import bulma from 'bulma'
import Charts from 'chart.js'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)
Vue.use(VueChartkick, {
  Chartkick
})
Vue.use(VueRouter)


new Vue({
  router,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/signin')
      }
    });
  },
  el: '#app',
  render: h => h(App)
});