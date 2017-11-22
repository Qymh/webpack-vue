import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import '../src/assets/js/alert'
import 'mint-ui/lib/style.min.css'

Vue.use(VueResource)

router.beforeEach((to, from, next) => {
  next()
})

Vue.http.options.emulateJSON = true;

new Vue({
  router,
  render:h=>h(App)
}).$mount('#app')
