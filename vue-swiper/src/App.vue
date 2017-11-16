<template lang="pug">
  .test
    swiper(:options="swiperOption" ref="test" style="height:200px")
      swiper-slide.fl.col50(v-for="banner in banners")
        span {{banner}}
    .swiper-pagination
</template>

<script>

import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

export default {
  data () {
    return {
      swiperOption:{
        direction:'horizontal', // 方向
        freeMode:false, // 滚动自适应
        // effect:'fade', // 动画效果
        pagination:'.swiper-pagination' // 进度点
      },
      banners:[1,2,3]
    }
  },
  mounted () {
    // console.log(this.$refs.test.swiper.slideTo(2))
    let swiper=this.$refs.test.swiper
    console.log(swiper.progress)
  }
}
</script>

<style lang="scss">
  @import './style/base/reset.scss';
</style>


