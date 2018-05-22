<script lang="tsx">
  import {CreateElement} from 'vue'
  import {Component,Vue} from 'vue-property-decorator'

  @Component({})
  export default class MyJsx extends Vue{
    render(h:any){
      return h('div','123')
    }
  }
</script>
