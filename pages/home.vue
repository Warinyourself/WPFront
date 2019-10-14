<template lang="pug">
  .container
    h4 {{ $t('pages.home.introduction') }}
</template>

<script>
export default {
  name: 'HomePage',
  auth: true,
  meta: {
    auth: false
  },
  metaInfo() {
    return {
      title: this.$t('pages.home.title')
    }
  }
}
</script>
