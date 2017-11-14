<template lang="pug">
  .test
    .test1
      input(
        name="email"
        type="email"
        v-validate="'required|email'"
        placeholder="email"
        data-vv-scope="test"
      )
      span(v-show="fields.$test.email.touched&&errors.has('test.email')") 请输入正确的邮箱
      span(v-show="fields.$test.email.valid") 正确
    .test2
      input(
        name="person"
        v-model="now"
        v-validate="'required|differName'"
      )
      span(v-show="errors.has('person')") {{errors.first('person')}}    
</template>

<script>

import Vue from 'vue'
import VeeValidate from 'vee-validate'
import {Validator} from 'vee-validate'

Vue.use(VeeValidate)

export default {
  data () {
    return {
      now:'',
      name:['test1','test2']
    }
  },
  beforeCreate () {
    const isDiffer=value=>new Promise(resolve=>{
      setTimeout(()=>{
        if(this.name.length===0) return

        if(this.name.indexOf(value)===-1){
          return resolve({
            valid:true
          })
        }

        return resolve({
          valid:false,
          data:{
            message:`${value} is not allowed`
          }
        })
      },200)
    })

    Validator.extend('differName',{
      validate:isDiffer,
      getMessage: (field, params, data) => data.message
    })
  }
}
</script>

<style lang="scss">
  @import './style/base/reset.scss';
</style>


