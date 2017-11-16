<template lang="pug">
  li
    .view
      input(
        type="checkbox"
        :checked="todo.done"
        @change="toggleTodo({todo:todo})"
      )
      label(@dbclick="editing=true")
      button(@click="deleteTodo({todo:todo})")
    input(
      v-show="editing"
      v-focus="editing"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit"
    )
</template>

<script>

import {mapMutations} from 'vuex'

export default {
  name:'todo',
  props:['todo'],
  data () {
    return {
      editing:false
    }
  },
  directives: {
    focus(el,{value},{context}){
      if(value){
        context.$nextTick(()=>{
          el.focus()
        })
      }
    }
  },
  methods: {
    ...mapMutations({
      toggleTodo,
      editTodo,
      deleteTodo
    })
  }
}
</script>

