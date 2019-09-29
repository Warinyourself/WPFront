<template lang="pug">
  .wrapper(:class='{"dark-theme": isDark}')
    AppIconDefs
    Nuxt
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PageWithoutMenu',
  computed: {
    ...mapState('page', ['isDark'])
  }
}
</script>
