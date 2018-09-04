import Vue from 'vue';
import VueBus from 'vue-bus';
import App from './App.vue';
import router from './router';
import store from './store';
import toast from './lib/toast';
import Toast from './components/toast.vue';

Vue.use(VueBus);
Vue.use(toast);

Vue.component('Toast', Toast);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
