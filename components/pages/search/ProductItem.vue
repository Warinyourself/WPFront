<template lang="pug">
  .product-block.flex.p-2.bgc-main--light(v-if='product')
    .product-block__image.mr-2(:style='`background-image: ${product.image ? product.image : "none"}`')
      AppIcon.w-100.h-100(v-if='!product.image' icon='products')
    .block
      h5.product-block__title.fs-3 {{product.name}}
      .product-block__description.text--additional.mt-1 {{product.description}}
      NuxtLink(:to='{name: "search-product-id", params: {id: product.id}}') Link {{product.id}}
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      default: () => Object.create(null)
    }
  },
  computed: {
    classObject() {
      const classObject = {}
      classObject['.tabs-item--active'] = this.active

      return classObject
    }
  }
}
</script>
