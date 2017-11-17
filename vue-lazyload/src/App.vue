<template lang="pug">
  .test
    img.dib.col100.h50(v-for="img in imgBox" :src="img")
</template>

<script>

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
  preload:1.3,
  error:'./img/banner_1.jpg',
  loading:'./img/index_banner_1.jpg',
  attempt: 1,
})

export default {
  data () {
    return {
      imgBox:[
        require('../static/images/img/default.png')
      ]
    }
  }
}
</script>

<style lang="scss">
  @import './style/base/reset.scss';
</style>


