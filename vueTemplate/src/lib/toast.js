import Vue from 'vue';
const Toast = Object.create(null);

function toast(message) {
  Vue.bus.emit('toast', message);
}

Toast.install = Vue => {
  Vue.prototype.$toast = toast;
};

export default Toast;
