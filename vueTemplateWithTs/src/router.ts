import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig } from 'vue-router'

Vue.use(Router)

const Author: AsyncComponent = () => import('@/pages/Author.vue')

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Author
  }
]

const router: Router = new Router({
  mode: 'history',
  routes: routes
})

export default router
