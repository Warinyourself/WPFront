<template lang="pug">
  .tabs
    .tabs-items(ref='body' :style='`transform: translateX(-${(width || 1000) * index}px)`')
      slot
</template>

<script>
export default {
  name: 'AppTabs',
  props: {
    commit: {
      type: Object,
      default: () => Object.create(null)
    },
    action: {
      type: Object,
      default: () => Object.create(null)
    },
    state: {
      type: String,
      default: 'products'
    }
  },
  data() {
    return {
      width: 0
    }
  },
  computed: {
    index() {
      return this.items.indexOf(this.state)
    },
    items() {
      return this.$slots.default.map((tab) => {
        return tab.componentOptions.propsData.value
      })
    }
  },
  updated() {
    setTimeout(() => {
      this.width = this.$refs.body.offsetWidth
    }, 0)
  }
}
</script>
