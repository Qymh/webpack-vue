<template lang="pug">
  .registerBox
    form.h500.w500.pt50.ov(
      autoComplete="off" style="margin:0 auto"
      flex="cross:center dir:top"
    )
      p.mb10.colorSky(flex="cross:center main:center") 注册
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
        @click="rigister"
      ) 提交
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import axios from 'axios'

Vue.use(VeeValidate)

export default {
  data () {
    return {
      name:'',
      pass:''  
    }
  },
  methods: {
    rigister(){
      const user={
        name:this.name,
        pass:this.pass
      }
      axios.post('http://127.0.0.1:8080/register',user).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

