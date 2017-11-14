<template lang="pug">
  .cartBox
    p(v-for="p in cartsInner")
      span {{p.name}}
      span {{p.quantity}}
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  computed:mapGetters({
    cartsInner:'cartsAll'
  })
}
</script>

