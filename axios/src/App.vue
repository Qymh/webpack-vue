<template lang="pug">
  .test 
</template>

<script>

import axios from 'axios'

export default {
  created () {
    // axios.get('https://json.qymh.org.cn/api/personWeb_home/value')
    // .then(res=>{
    //   console.log(res.headers)
    // },res=>{
    //   console.log(res.response)
    // })
    axios.post('https://json.qymh.org.cn/login',
      {name:'test',pass:'123'}
    )
    .then(res=>{
      console.log(res)
    },res=>{
      console.log(res)
    })
    
  }
}
</script>

<style lang="scss">
  @import './style/base/reset.scss';
</style>


