import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import firebaseui from 'firebaseui';
import router from './router.js'
import {
  config
} from './helpers/firebaseConfig'

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