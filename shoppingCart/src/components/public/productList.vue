<template lang="pug">
  .test
    p(v-for="product in productsArr")
      span.mr10 {{product.name}}
      span.mr10 {{product.price}}
      span.mr10 {{product.quantity}}
      button(@click="addToCart(product)") 删除
</template>

<script>

import {mapGetters,mapActions} from 'vuex'

export default {
  created () {
    this.$store.dispatch('getAllProducts')
  },
  data () {
    return {
      test:1  
    }
  },
  computed: mapGetters({
    productsArr:'productsAll'
  }),
  methods: mapActions({
    addToCart:'addToCart'
  })
}
</script>

