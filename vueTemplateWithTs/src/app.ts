import Vue from 'vue'
import fastclick from 'fastclick'
import { Component } from 'vue-property-decorator'
import App from '@/App.vue'
import store from './store'
import router from './router'

import 'amfe-flexible'

if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    () => { fastclick.attach(document.body) },
    false
  )
}

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])

const app: Vue = new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})

export default app
