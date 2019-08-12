<template lang="pug">
  .input.input-search.ai-center
    input(v-model='search' @input='handleInput' @focus='onFocus' @blur='onBlur' type='text' ref='search')
    AppIcon.icon-2.icon-bg(icon='search')
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AppSearch',
  props: {
    delayType: {
      type: String,
      default: 'debounce'
    },
    delay: {
      type: Number,
      default: 500
    },
    commit: {
      type: Object,
      default: () => Object.create(null)
    },
    action: {
      type: Object,
      default: () => Object.create(null)
    }
  },
  data() {
    return {
      search: '',
      timeout: false
    }
  },
  mounted() {
    this.SET_STATE_FORM({ key: 'searchView', items: this.$refs.search })
  },
  beforeDestroy() {
    this.SET_STATE_FORM({ key: 'searchView', items: false })
  },
  methods: {
    ...mapMutations('form', ['SET_STATE_FORM']),
    handleInput(e) {
      if (this.delay && this.delayType === 'debounce') {
        this.debounce(this.updateStore, e, false)
      } else if (this.delay && this.delayType === 'throttle') {
        // Create throttle function
      } else if (this.delayType === 'none') {
        this.updateStore(e)
      }
    },
    updateStore(e) {
      this.$store.commit(this.commit.path, {
        key: this.commit.key,
        value: e.target.value
      })
    },
    onFocus(e) {
      this.SET_STATE_FORM({ key: 'elementFocus', items: e.target })
    },
    onBlur(e) {
      this.SET_STATE_FORM({ key: 'elementFocus', items: false })
    }
  }
}
</script>
