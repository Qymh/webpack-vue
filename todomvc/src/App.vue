<template lang="pug">
  section.todoapp
    //- 头部
    header.header
      h1 todos
      input.new-todo(
        autofocus
        placeholder="what needs to be done"
        @keyup.enter="addTodo"
      )
    //- 主要的部分
    section(v-show="todos.length")
      input(
        type="checkbox"
        :checked="allChecked"
        @change=""
      )
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
  computed: {
    ...mapState({
      todos:'todos'
    }),
    allChecked(){
      return this.todos.every(todo=>todo.done)
    }
  },
  methods: {
    ...mapMutations({

    }),
    addTodo(e){
      var text=e.target.value
      if(text.trim()){
        this.$store.commit('addTodo',{text})
      }
    }
  },
  mounted () {
    
  }
}
</script>

