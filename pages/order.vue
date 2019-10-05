<template lang="pug">
  .container
    h1 Here order page
    p {{ $t('pages.order.introduction') }}
</template>

<script>
export default {
  name: 'OrderPage',
  metaInfo() {
    return {
      title: this.$t('pages.order.title')
    }
  }
}
</script>
