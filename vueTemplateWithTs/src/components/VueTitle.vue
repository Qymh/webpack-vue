<template lang="pug">
  a.vueTitle(:href="href")
    span {{title}}
    i.icon-right
</template>

<script lang="ts">
  import {Vue,Component,Prop} from 'vue-property-decorator'

  @Component
  export default class VueTitle extends Vue{
    @Prop()
    private title:string

    @Prop({default:'javascript:void(0)'})
    private href:string
  }
</script>

<style lang="scss" scoped>
  .vueTitle{
    height:40px;
    background-color: deepskyblue;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    span{
      display: flex;
      justify-content: center;
      flex-grow: 1;
    }
    i{
      font-size: 12px;
      flex-grow: 0;
    }
  }
</style>

