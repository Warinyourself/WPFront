<template lang="pug">
  .container
    h4 {{ $t('pages.favorites.introduction') }}
</template>

<script>
export default {
  name: 'FavoritesPage',
  metaInfo() {
    return {
      title: this.$t('pages.favorites.title')
    }
  }
}
</script>
