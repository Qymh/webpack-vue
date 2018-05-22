<template lang="pug">
  .axios
    vue-title(
      :showLeftArrow="true"
      :title="loadingText")
    div.infor(
      v-for="(article,index) in articles"
      :key="index"
      @click="showTitle(article.title)") {{article.title}}
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
import VueTitle from '@/components/VueTitle.vue'
import articles from '@/actions/articles'

@Component({
  components:{
    VueTitle
  }
})

export default class Axios extends Vue{
  private articles:any[]=[]
  private finish:boolean=false

  private get loadingText(){
    return this.finish?'加载完成':'正在加载...'
  }

  private showTitle(title:string):void{
    alert(title)
  }

  private created () {
    articles.getArticles(this).then(data=>{
      this.articles=data
      this.finish=true
    }).catch(err=>{
      
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
    border-bottom:1px solid #dddddd;
    cursor: pointer;
  }
</style>


