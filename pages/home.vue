<template lang="pug">
  .container
    h1 Here home page
    p {{ $t('pages.home.introduction') }}
</template>

<script>
export default {
  name: 'HomePage',
  metaInfo() {
    return {
      title: this.$t('pages.home.title')
    }
  }
}
</script>
