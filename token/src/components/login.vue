<template lang="pug">
  .loginBox
    form.h500.w500.pt50.ov(
      autoComplete="off" style="margin:0 auto"
      flex="cross:center dir:top"
    )
      p.mb10.colorSky(flex="cross:center main:center") 登陆
      p.mb10.colorSky(flex="cross:center main:center" v-show="error") {{error}}
      //- 名字
      p.mb10.ov.pr
        input.input-big(
          name="name"
          v-model="name"
          v-validate="'required|min:4|max:10'"
        )
        span.dib.colorSky.pa.w300.h30.lh30.ml10(
          v-show="fields.name.touched&&fields.name.invalid"
          style="left:200px;"
        ) 请输入4位到10位之间的名字
      //- 密码
      p.mb10.ov.pr
        input.input-big(
          type="password"
          name="pass"
          v-model="pass"
          v-validate="'required|min:4|max:10'"
        )
        span.dib.colorSky.pa.w300.h30.lh30.ml10(
          v-show="fields.pass.touched&&fields.pass.invalid"
          style="left:200px;"
        ) 请输入4位到10位之间的密码
      //- 提交按钮
      button.btn-big(
        type="button"
        @click="login"
      ) 提交
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import auth from '../js/auth'

Vue.use(VeeValidate)

export default {
  created () {
    console.log(navigator.userAgent)
  },
  data () {
    return {
      name:'',
      pass:'',
      error:''  
    }
  },
  methods: { 
    login(){
      this.$validator.validateAll().then(res=>{
        // 认证成功
        if(res){
          const user={
            name:this.name,
            pass:this.pass
          }
          auth.login(this,user,'error')
        }
        // 认证失败
        else{
          this.name=''
          this.pass=''
          this.error='不符合验证'
        }
      })
    }
  }
}
</script>

