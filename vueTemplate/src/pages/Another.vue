<template lang="pug">
  .another
    span(@click="todo") 123456
</template>

<script>
import tools from 'lib/tools'

export default {
  name: 'Another',
  methods: {
    todo() {
      tools.saySomething()
    }
  }
}
</script>
