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
    
    section(v-show="todos.length")
      input(
        type="checkbox"
        :checked="allChecked"
        @change=toggleAll({done:!allChecked})
      )
      label(for="toggle-all")
    
    //- 尾部
    footer.footer(v-show="todos.length")
      span
        strong {{remaning}}
        {{remaning|pluralize('item')}} left
      ul
        li(v-for="(val,key) in filters")
          a(:href="'#/'+key" @click="visibility=key")
            |{{key|capitalize}}
      button(
        v-show="todos.length>remaning"
        @click="clearCompleted"> clear
      )
</template>

<script>
import {mapState,mapMutations} from 'vuex'

const filters={
  all:todos=>todos,
  active:todos=>todos.filter(todo=>!todo.done),
  completed:todos=>todos.filter(todo=>todo.done)
}

export default {
  data () {
    return {
      visibility:'all',
      filters  
    }
  },
  computed: {
    ...mapState({
      todos:'todos'
    }),
    allChecked(){
      return this.todos.every(todo=>todo.done)
    },
    filteredTodos(){
      return this.filters[visibility](this.todos)
    },
    remaning(){
      return this.todos.filter(todo=>!todo.done).length
    }
  },
  methods: {
    ...mapMutations({
      toggleAll,
      clearCompleted
    }),
    addTodo(e){
      var text=e.target.value
      if(text.trim()){
        this.$store.commit('addTodo',{text})
      }
    }
  },
  filters: {
    // 首字母大写
    capitalize:s=>s.charAt(0).toUpperCase()+s.slice(1),
    // 复数
    pluralize:(n,w)=>n===1?w:(w+'s')
  }
}
</script>

