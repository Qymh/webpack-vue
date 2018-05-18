<template lang="pug">
  .home
    vue-title(title="Axios" href="/axios")
    vue-title(title="Jsx" href="/jsx")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  import VueTitle from 'components/VueTitle.vue'

  @Component({
    components:{
      VueTitle
    }
  })
  export default class Home extends Vue{
    
  }
</script>
