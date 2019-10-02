<template lang="pug">
  header.header-bar.ai-center.bgc-main--light
    .header-bar__title
      h2.fs-4 {{ $t(determineKeyFori18nByTitleRoute($route.name)) }}
    AppButton.mt-1(
      :actions=`[
        {
          type: 'action',
          path: "user/logout",
          on: "click"
        }
      ]`
      icon='exit'
    )
    AppAvatar.icon-3
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MenuHeaderBar',
  computed: {
    ...mapGetters('page/locales', ['determineKeyFori18nByTitleRoute'])
  }
}
</script>
