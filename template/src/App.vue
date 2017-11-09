<template>
  <div>
    <div>123</div>
    <div>123</div>
    <router-view></router-view>
  </div>
</template>

<script>

import $ from 'zepto'

export default {
  mounted () {
    console.log($('div'))
  }
}
</script>

<style lang="scss">
  div{
    color:blue;
  }
</style>


