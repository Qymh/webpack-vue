import Vue from 'vue'
import fastclick from 'fastclick'
import App from '@/App.vue'
import store from './store'
import router from './router'

import 'amfe-flexible'

if('addEventListener' in document){
  document.addEventListener('DOMContentLoaded',()=>{
    (fastclick as any).attach(document.body)
  },false)
}

const app:Vue=new Vue({
  el: '#app',
  router:router,
  store:store,
  render: h => h(App)
})

export default app 