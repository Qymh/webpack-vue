import Vue from 'vue'
import Router from 'vue-router'
const register=()=> import('./components/register')
const login=()=>import('./components/login.vue')
const home=()=>import('./components/home.vue')

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path:'/register',
      component:register
    },
    {
      path:'/login',
      component:login,
      meta:{
        profileid:true
      }
    },
    {
      path:'/home',
      component:home
    }
  ]
})
