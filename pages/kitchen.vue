<template lang="pug">
  .container
    h1 Here kitchen page
    p {{ $t('pages.kitchen.introduction') }}
</template>

<script>
export default {
  name: 'KitchenPage',
  metaInfo() {
    return {
      title: this.$t('pages.kitchen.title')
    }
  }
}
</script>
