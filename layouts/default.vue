<template lang="pug">
  .wrapper
    AppIconDefs
    MainMenu
    Nuxt.main-content(:class='{"open-menu--margin": openMainMenu}')
</template>

<script>
import MainMenu from '@/components/common/MainMenu.vue'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    MainMenu,
  },
  computed: {
    ...mapState('page', [
      'openMainMenu',
    ]),
  },
  methods: {
    ...mapActions('page', [
      'CANCEL_SOMETHING',
      'DONE_SOMETHING',
    ]),
    handleKeyUp(e) {
      const KEYCODE_ENTER = 13,
            KEYCODE_ESCAPE = 27;

      if (e.keyCode === KEYCODE_ENTER) {
        // Unfocus (not done) -> Close (done)
        this.DONE_SOMETHING();
      } else if (e.keyCode === KEYCODE_ESCAPE) {
        // Unfocus (not done) -> Close (done)
        this.CANCEL_SOMETHING();
      } else {
        console.log(e);
      }
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('keyup', this.handleKeyUp, {passive: false})
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('keyup', this.handleKeyUp);
    }
  }
}
</script>
