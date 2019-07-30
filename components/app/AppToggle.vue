<template lang="pug">
  .toggle.ai-center.bgc-dark(@click='changeToggle' :class='classObject' )
    AppIcon.toggle__icon.icon-1.icon-darkest(v-if='type === "arrow"' icon='arrow')
    AppIcon.toggle__icon.icon-1.icon-darkest(v-if='icons[0]' :icon='icons[0]')
    .toggle__item.bgc-main
    AppIcon.toggle__icon.icon-1.icon-darkest(v-if='icons[1]' :icon='icons[1]')
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
    commit: Object,
    commitOn: Object,
    commitOff: Object,
    action: Object,
    actionOn: Object,
    actionOff: Object,
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
      const field = this.state.field

      if (field && path) {
        const value = this.$store.getters[path](field)
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
    changeToggle() {
      this.active = !this.active

      if (this.active && this.commit) {
        this.$store.commit(this.commit.path, {
          field: this.commit.field,
          value: this.active
        })
      } else if (this.active && this.commitOn) {
        console.log('ON TRUE', this.commitOn)
        this.$store.commit(this.commitOn.path, {
          field: this.commitOn.field,
          value: this.commitOn.value
        })
      } else if (!this.active && this.commit) {
        this.$store.commit(this.commit.path, {
          field: this.commit.field,
          value: this.active
        })
      } else if (!this.active && this.commitOff) {
        console.log('ON FALSE', this.commitOff)
        this.$store.commit(this.commitOff.path, {
          field: this.commitOff.field,
          value: this.commitOff.value
        })
      }
    }
  }
}
</script>
