<template lang="pug">
  .container
    h1 Here favorites page
    p {{ $t('pages.favorites.introduction') }}
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
