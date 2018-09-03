import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('./pages/Home.vue')
    }
  ]
});
