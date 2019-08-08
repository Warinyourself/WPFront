<template lang="pug">
  .input.input--search.ai-center
    input(v-model='search' @input='handleInput' @focus='onFocus' @blur='onBlur' type='text' ref='search')
    AppIcon.icon-2.icon-bg(icon='search')
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'AppSearch',
  data() {
    return {
      search: '',
      timeout: false,
    }
  },
  props: {
    delayType: {
      type: String,
      default: 'debounce',
    },
    delay: {
      type: Number,
      default: 500,
    },
    commit: Object,
    action: Object,
  },
  methods: {
    ...mapMutations('form', ['SET_STATE_FORM']),
    handleInput(e) {
      if (this.delay && this.delayType === 'debounce') {
        this.debounce(this.updateStore, e, false);
      } else if (this.delay && this.delayType === 'throttle') {
        console.log('create throttle function');
      } else if (this.delayType === 'none'){
        this.updateStore(e);
      }
    },
    updateStore(e) {
      this.$store.commit(this.commit.path, {field: this.commit.field, value: e.target.value})
    },
    onFocus(e) {
      this.SET_STATE_FORM({ field: 'elementFocus', items: e.target })
    },
    onBlur(e) {
      this.SET_STATE_FORM({ field: 'elementFocus', items: false })
    },
  },
  mounted() {
    this.SET_STATE_FORM({ field: 'searchView', items: this.$refs.search })
  },
  beforeDestroy() {
    this.SET_STATE_FORM({ field: 'searchView', items: false })
  }
}
</script>
