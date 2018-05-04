<template lang="pug">
  .vueTitle
    span.vueTitle_name {{titleName}}
    i.vueTitle_icon.icon-right
</template>

<script>
export default {
  name:'VueTitle',
  props:{
    titleName:{
      type:String,
      default:''
    }
  }  
}
</script>

<style lang="scss" scoped>
  .vueTitle{
    height:40px;
    width: 500px;
    padding: 0px 10px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: deepskyblue;
    &_name{
      flex-grow: 1;
      text-align: center;
      color: #ffffff;
    }
    &_icon{
      flex-grow: 0;
      color: #ffffff;
    }
  }
</style>


