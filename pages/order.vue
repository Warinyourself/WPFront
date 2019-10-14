<template lang="pug">
  .container
    h4 {{ $t('pages.order.introduction') }}
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
