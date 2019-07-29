<template lang="pug">
  .input.input--search.ai-center
    input(@focus='onFocus' @blur='onBlur' type='text' ref='search')
    AppIcon.icon-2.icon-bg(icon='search')
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'AppSearch',
  methods: {
    ...mapMutations('form', [
      'SET_FORM'
    ]),
    onFocus(e) {
      this.SET_FORM({type: 'elementFocus', items: e.target})
    },
    onBlur(e) {
      this.SET_FORM({type: 'elementFocus', items: false})
    }
  },
  mounted() {
    this.SET_FORM({type: 'searchView', items: this.$refs.search})
  },
  beforeDestroy() {
    this.SET_FORM({type: 'searchView', items: false})
  }
}
</script>
