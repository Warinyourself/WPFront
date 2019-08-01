<template lang="pug">
  .wrapper(:class='{"dark-theme": isDark}')
    AppIconDefs
    MainMenu
    .page-content(:class='{"open-menu--margin": !minimizeMenu}')
      MainHeaderBar
      Nuxt.main-content
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import MainMenu from '@/components/common/MainMenu.vue'
import MainHeaderBar from '@/components/common/MainHeaderBar.vue'

export default {
  components: {
    MainMenu,
    MainHeaderBar
  },
  computed: {
    ...mapState('page', [
      'minimizeMenu',
      'isDark',
      'language'
    ])
  },
  watch: {
    language() {
      this.$i18n.locale = this.language;
    }
  },
  methods: {
    ...mapActions('page', [
      'CANCEL_SOMETHING',
      'DONE_SOMETHING'
    ]),
    ...mapMutations('page', ['TOGGLE_MENU']),
    handleKeyUp(e) {
      const KEYCODE_ENTER = 13
      const KEYCODE_ESCAPE = 27
      const KEYCODE_B = 66

      if (e.keyCode === KEYCODE_ENTER) {
        this.DONE_SOMETHING()
      } else if (e.keyCode === KEYCODE_ESCAPE) {
        this.CANCEL_SOMETHING()
      } else if (e.keyCode === KEYCODE_B && e.ctrlKey) {
        this.TOGGLE_MENU()
      } else {
        //console.log(e, e.keyCode === KEYCODE_B, e.ctrlKey)
      }
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('keyup', this.handleKeyUp, { passive: false })
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('keyup', this.handleKeyUp)
    }
  }
}
</script>
