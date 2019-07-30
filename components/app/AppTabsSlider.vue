<template lang="pug">
  .tabs.ai-center.bgc-dark(@changeTab='changeTab' :class='classObject' )
    slot
</template>

<script>
import { mapState } from 'vuex'

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
      type: Object
    },
    commitOn: {
      type: Object
    },
    commitOff: {
      type: Object
    },
    action: {
      type: Object
    },
    actionOn: {
      type: Object
    },
    actionOff: {
      type: Object
    },
    state: {
      type: Object,
      default: () => {
        return {}
      }
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
    // changeToggle() {
    // this.active = !this.active;

    // if (this.active && (this.commitOn || this.commit)) {
    // this.$store.commit(this.commit.path, {type: this.commit.type, value: this.active})
    // } else if (!this.active && (this.commitOff || this.commit)) {
    // this.$store.commit(this.commit.path, {type: this.commit.type, value: this.active})
    // }
    // },
  }
}
</script>
