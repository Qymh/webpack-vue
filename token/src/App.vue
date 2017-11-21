<template lang="pug">
  .authBox
    router-view 
</template>

<script>

import auth from './js/auth'

export default {
  beforeCreate () {
    auth.checkAuth()
    let bool=auth.authenticated
    if(!bool&&window.location.pathname!='/register'){
      this.$router.push('/login')
    }else{
      this.token=localStorage.getItem('token')
    }
  },
  data () {
    return {
      token:''
    }
  }
}
</script>

<style lang="scss">
  @import './style/base/reset.scss';
</style>


