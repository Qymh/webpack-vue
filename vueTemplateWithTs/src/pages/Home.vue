<template lang="pug">
  .home
    vue-title.title(
      title="Axios" href="/axios"
      :showRightArrow="true")
    vue-title.title(
      title="Jsx" href="/jsx"
      :showRightArrow="true")
    vue-title.title(
      title="Vuex" href="/vuex"
      :showRightArrow="true")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  import VueTitle from '@/components/VueTitle.vue'

  @Component({
    components:{
      VueTitle
    },
    beforeRouteEnter(to,from,next){
      next(vm=>{
        console.log(to)
      })
    }
  })
  export default class Home extends Vue{
    
  }
</script>

<style lang="scss" scoped>
  .title{
    margin-bottom: 0.2rem;
  }
</style>

