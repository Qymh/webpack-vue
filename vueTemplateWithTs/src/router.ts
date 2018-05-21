import Vue,{AsyncComponent} from 'vue'
import Router,{RouteConfig} from 'vue-router'

Vue.use(Router)

const Home:AsyncComponent=()=>import('@/pages/Home.vue')
const Axios:AsyncComponent=()=>import('@/pages/Axios.vue')
const Jsx:AsyncComponent=()=>import('@/pages/Jsx.vue')
const Vuex:AsyncComponent=()=>import('@/pages/Vuex.vue')

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
  },
  {
    path:'/vuex',
    component:Vuex
  }
]

const router:Router=new Router({
  mode:'history',
  routes:routes
})

export default router