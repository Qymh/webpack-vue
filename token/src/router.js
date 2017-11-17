import Vue from 'vue'
import Router from 'vue-router'
import register from './components/register'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path:'/register',
      component:register
    }
  ]
})
