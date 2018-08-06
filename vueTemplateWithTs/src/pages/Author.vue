<template lang="pug">
  div
    base-header(text="getAuthor")
    div.btn
      button(@click="getAuthor") 点击获取作者信息
    div.infor
      div 姓名:{{author.name}}
      div 年龄:{{author.age}}
      div 性别:{{author.sex}}
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { Getter, Action } from 'vuex-class'
  import BaseHeader from '@/components/BaseHeader.vue'
  @Component({
    components: {
      BaseHeader
    }
  })
  export default class Author extends Vue {
    @Getter('author/author') author: author.author
    @Action('author/getAuthor') getAuthor: any
  }
</script>

<style lang="scss" scoped>
  .btn {
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .infor{
    > div {
      height: 1rem;
      color: deepskyblue;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>

