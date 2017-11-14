<template lang="pug">
  .shoppingCart
    product-list
    .h50
    cart-list
</template>

<script>
import productList from './components/public/productList'
import cartList from './components/public/cartList'

export default {
  components: {
    'product-list':productList,
    'cart-list':cartList
  }
}
</script>

<style lang="scss">
  @import './style/base/reset.scss';
</style>


