import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = () => import('pages/home')
const Another = () => import('pages/another')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/another',
      component: Another
    }
  ]
})
