import Vue from 'vue'
import App from './App.vue'
import store from './store'
import {createRouter} from './router'


export default new Vue({
  el: '#app',
  router: createRouter(),
  store,
  render: h => h(App)
})