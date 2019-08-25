<template lang="pug">
  .tabs-item(:class='classObject')
    slot
</template>

<script>
export default {
  name: 'AppTabsItem',
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
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      request: false
    }
  },
  computed: {
    active() {
      if (this.state === this.value) {
        if (Object.keys(this.action).length && !this.request) {
          this.$store.dispatch(this.action.path)
          this.changeData({ key: 'request', value: true })
        }

        return true
      }
      return false
    },
    classObject() {
      const classObject = {}
      classObject['.tabs-item--active'] = this.active

      return classObject
    }
  }
}
</script>
