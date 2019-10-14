<template lang="pug">
  .container
    h4 {{ $t('pages.kitchen.introduction') }}
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
