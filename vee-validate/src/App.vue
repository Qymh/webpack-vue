<template lang="pug">
  .test
    .test1
      input(
        name="email"
        v-validate="'required|emailIm'"
      )
      span(v-show="fields.email.invalid&&fields.email.touched") 您的邮箱地址有误   
    .test2
      input(
        name="tel"
        v-validate="'required|telIm'"
      )
      span(v-show="fields.tel.invalid&&fields.tel.touched") 您的电话号码有误   
</template>

<script>
import validate from './validate'
validate()

export default {
  data () {
    return {
      now:'',
      name:['test1','test2']
    }
  },
  beforeCreate () {
    
  }
}
</script>

<style lang="scss">
  @import './style/base/reset.scss';
</style>


