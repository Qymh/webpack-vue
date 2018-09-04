<template lang="pug">
  .toast(v-if="message") {{message}}
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      timer: '',
      message: ''
    };
  },
  created() {
    this.$bus.on('toast', this.toast);
  },
  methods: {
    toast(message) {
      this.message = message;
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.message = '';
      }, 1500);
    }
  }
};
</script>
