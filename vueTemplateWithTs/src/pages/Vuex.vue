<template lang="pug">
  div
    vue-title(
      :showLeftArrow="true"
      :title="loadingText")
    div.click(@click="dosomething") ClickToGetInfor
    div.infor(
      v-for="(article,index) in infor"
      :key="index") {{article.title}}
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  import {State,Getter,Action,Mutation} from 'vuex-class'
  import VueTitle from '@/components/VueTitle.vue'

  @Component({
    components:{
      VueTitle
    }
  })
  export default class Vuex extends Vue{
    @Getter('count/infor') infor
    @Action('count/getInfor') getInfor

    private loadingType:number=0

    private get loadingText(){
      let text:string=''
      switch (this.loadingType) {
        case 0:
          text='等待加载'
          break
        case 1:
          text='正在加载...'
          break
        case 2:
          text='加载完成'
          break
      }
      return text
    }

    private dosomething(){
      this.loadingType=1
      this.getInfor(this).then(res=>{
        this.loadingType=2
      })
    }
  }
</script>

<style lang="scss" scoped>
  .infor{
    height:1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #666;
  }
  .click{
    height:1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #666;
  }
</style>

