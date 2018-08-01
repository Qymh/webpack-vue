<template lang="pug">
  div
    div
      vue-title(titleName="图片")
      div
        img.image(src="~images/banner1.jpg")
        div.image.bkImage
    div
      vue-title(titleName="icon")
      div
        i.icon-camera
        i.icon-cart
        i.icon-check(style="color:red")
    div
      vue-title(titleName="vuex")
      div
        span 计算数值:
        span {{computedMyStore}}
      div
        button(@click="changeMyStore('increase')") 点击增加
        button(@click="changeMyStore('substract')") 点击减少
    div
      vue-title(titleName="postcss")
      div.postcss 123
    
</template>

<script>
import VueTitle from 'components/VueTitle'

import { mapGetters, mapActions } from 'vuex'
import tools from 'lib/tools'

export default {
  name: 'Home',
  components: {
    VueTitle
  },
  computed: {
    ...mapGetters({
      computedMyStore: 'computedMyStore'
    })
  },
  methods: {
    ...mapActions({
      changeMyStore: 'changeMyStore'
    }),
    doSomething() {
      tools.sayHello()
      tools.saySomething()
    }
  }
}
</script>

<style lang="scss" scoped>
.colorWhite {
  color: #ffffff;
}
.image {
  height: 200px;
  width: 500px;
}
.bkImage {
  background-image: url('~images/banner2.jpg');
  background-size: cover;
}
.postcss {
  transition: all 0.2s ease-in-out;
  animation: fadeIn ease-in-out infinite 1s;
  transform: translate(50%);
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
