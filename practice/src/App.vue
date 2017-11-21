<template lang="pug">
  
</template>

<script>

import {tool} from './assets/js/utils'

export default {
  created () {
    var arr=['1','1','2','5','1']
    console.log(tool.sortArr(arr,-1))
    console.log(this.$route)
  }
}
</script>

<style lang="scss">
  @import './assets/style/base/reset.scss'
</style>


