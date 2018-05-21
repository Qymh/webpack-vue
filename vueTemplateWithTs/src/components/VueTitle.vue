<template lang="pug">
  a.vueTitle(:href="href")
    i.empty(
      v-if="!showLeftArrow")
    i.icon-back(
      @click="toBack"
      v-if="showLeftArrow")
    span {{title}}
    i.icon-right(
      v-if="showRightArrow")
    i.empty(
      v-if="!showRightArrow")
</template>

<script lang="ts">
  import {Vue,Component,Prop} from 'vue-property-decorator'

  @Component
  export default class VueTitle extends Vue{
    @Prop({default:false})
    private showLeftArrow:boolean

    @Prop({default:false})
    private showRightArrow:boolean

    @Prop({default:''})
    private title:string

    @Prop({default:'javascript:void(0)'})
    private href:string

    private toBack():void{
      this.$router.go(-1)
    }
  }
</script>

<style lang="scss" scoped>
  .vueTitle{
    height:1rem;
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
      width: 0.5rem;
      font-size: 16px !important;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 0;
    }
  }
</style>

