<template lang="pug">
  .test userName:{{userName}}
    .btn-small(v-show="userName" @click="clearUser") 注销
</template>

<script>
import auth from '../js/auth'
import axios from 'axios'

export default {
  beforeCreate () {
    // 异步发送带一个token的请求头判断用户是否登陆,成功后返回用户的名字
    axios.post('http://127.0.0.1:8080/user',{},auth.getAuthHeader()).then(res=>{
      if(res.data!='error'){
        this.userName=res.data
      }
    })
  },
  data () {
    return {
      userName:''
    }
  },
  methods: {
    clearUser(){
      auth.clearAuth()
    }
  }
}
</script>

