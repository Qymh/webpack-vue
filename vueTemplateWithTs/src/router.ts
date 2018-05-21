import Vue from 'vue'
import Router,{RouterOptions,RouteConfig} from 'vue-router'

Vue.use(Router)

const Home=()=>import('pages/Home.vue')
const Axios=()=>import('pages/Axios.vue')
const Jsx=()=>import('pages/Jsx.vue')

const routes:RouteConfig[]=[
  {
    path:'/',
    component:Home
  },
  {
    path:'/axios',
    component:Axios
  },
  {
    path:'/jsx',
    component:Jsx
  }
]

export const createRouter = () => new Router({ mode: 'history', routes: routes })