<template lang="pug">
  .wrapper(:class='{"dark-theme": isDark}')
    AppIconDefs
    MainMenu
    Nuxt.main-content(:class='{"open-menu--margin": openMainMenu}')
</template>

<script>
import MainMenu from '@/components/common/MainMenu.vue'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    MainMenu,
  },
  computed: {
    ...mapState('page', [
      'openMainMenu',
      'isDark'
    ]),
  },
  methods: {
    ...mapActions('page', [
      'CANCEL_SOMETHING',
      'DONE_SOMETHING',
    ]),
    ...mapMutations('page', [
      'TOGGLE_MENU'
    ]),
    handleKeyUp(e) {
      const KEYCODE_ENTER = 13,
            KEYCODE_ESCAPE = 27,
            KEYCODE_B = 66;

      if (e.keyCode === KEYCODE_ENTER) {
        this.DONE_SOMETHING();
      } else if (e.keyCode === KEYCODE_ESCAPE) {
        this.CANCEL_SOMETHING();
      } else if (e.keyCode === KEYCODE_B && e.ctrlKey) {
        console.log('toggle');
        this.TOGGLE_MENU();
      } else {
        console.log(e, e.keyCode === KEYCODE_B, e.ctrlKey);
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
