<template lang="pug">
  .tabs.ai-center.bgc-dark(@changeTab='changeTab' :class='classObject' )
    slot
</template>

<script>
export default {
  name: 'AppToggle',
  props: {
    type: {
      type: String,
      default: 'classic'
    },
    icons: {
      type: Array,
      default: () => ['', '']
    },
    commit: {
      type: Object,
      default: () => Object.create(null)
    },
    action: {
      type: Object,
      default: () => Object.create(null)
    },
    state: {
      type: Object,
      default: () => Object.create(null)
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    classObject() {
      const classToggle = 'toggle--' + this.type
      const classObject = {}

      const path = this.state.path
      const type = this.state.type

      if (type && path) {
        const value = this.$store.getters[path](type)
        classObject['toggle--active'] = value
        this.active = value
      } else {
        classObject['toggle--active'] = this.active
      }

      classObject[classToggle] = true

      return classObject
    }
  },
  methods: {
    changeTab() {
      console.log('CHANGE TAB')
    }
  }
}
</script>
