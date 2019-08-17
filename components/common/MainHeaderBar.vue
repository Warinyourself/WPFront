<template lang="pug">
  header.header-bar.ai-center.bgc-main--light
    .header-bar__title
      h2 {{ $t(determineKeyFori18nByTitleMenu($route.name)) }}
    AppAvatar.icon-3
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MenuHeaderBar',
  computed: {
    ...mapGetters('page/locales', ['determineKeyFori18nByTitleMenu'])
  },
  methods: {
    ...mapActions('user', ['logout'])
  }
}
</script>
