<template lang="pug">
  .toggle.ai-center(
    :class='classObject'
    @click='changeToggle'
    v-on='$listeners'
    v-bind='$attrs'
  )
    AppIcon.toggle__icon.icon-1.icon-darkest(v-if='modifier === "arrow"' icon='arrow')
    AppIcon.toggle__icon.icon-1.icon-darkest(v-if='icons && icons[0]' :icon='icons[0]')
    span.toggle__text(v-if='values && values[0]') {{values[0]}}
    .toggle__item.bgc-main
    AppIcon.toggle__icon.icon-1.icon-darkest(v-if='icons && icons[1]' :icon='icons[1]')
    span.toggle__text(v-if='values && values[1]') {{values[1]}}
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AppToggle',
  props: {
    modifier: {
      type: String,
      default: 'classic'
    },
    icons: {
      type: Array,
      default: () => ['', '']
    },
    values: {
      type: Array,
      default: () => []
    },
    state: {
      type: [Boolean, String],
      default: null
    },
    commit: {
      type: Object,
      default: () => Object.create(null)
    },
    actions: {
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
    classObject() {
      const classToggle = 'toggle--' + this.modifier
      const classObject = {}

      if (this.state !== null) {
        let value = this.state

        if (this.values.length) {
          value = this.values[0] !== value

          classObject['toggle--active'] = value
          this.changeData({ key: 'active', value })
        } else {
          classObject['toggle--active'] = value
          this.changeData({ key: 'active', value })
        }
      } else {
        classObject['toggle--active'] = this.active
      }

      classObject[classToggle] = true

      return classObject
    }
  },
  methods: {
    ...mapActions(['globalDistributor']),
    changeToggle() {
      this.active = !this.active

      this.globalDistributor(
        this.actions
          .filter((action) => {
            return action.on === 'change'
          })
          .map((action) => {
            const object = {
              value: this.values[Number(this.active)] || this.active,
              internalState: this.active
            }
            return Object.assign(object, action)
          })
      )
    }
  }
}
</script>
