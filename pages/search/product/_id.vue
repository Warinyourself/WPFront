<template lang="pug">
  div.container.search-page
    .product-wrapper(v-if='product')
      p {{product.name}} | {{product.description}} | {{product.id}}
    .product-wrapper(v-else)
      p Product Not Found
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SearchPageProduct',
  data() {
    return {
      product: false
    }
  },
  async mounted() {
    this.product = await this.getProduct(this.$route.params.id)
  },
  methods: {
    ...mapActions('search/product', ['getProduct'])
  }
}
</script>
