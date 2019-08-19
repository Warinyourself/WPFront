<template lang="pug">
  .expand-block(v-if='isOpen')
    slot
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'AppExpand1337',
  props: {
    name: {
      type: String,
      default: 'classic'
    },
    type: {
      type: String,
      default: 'classic'
    },
    values: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    ...mapGetters('page', ['isExpandBlock']),
    isOpen() {
      return this.isExpandBlock(this.name)
    }
  },
  methods: {
    ...mapMutations('page', ['CLOSE_EXPAND_BLOCK']),
    closeMonal() {
      this.CLOSE_EXPAND_BLOCK(this.name)
    }
  }
}
</script>
