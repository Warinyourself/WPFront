<template lang="pug">
  button.button.ai-center(
    :class='classObject'
    @click='handleClick'
    v-on='$listeners'
    v-bind='$attrs'
  )
    AppIcon(v-if='icon' :icon='icon' :class='[`icon-${iconSize}`]')
    .button__body(:class='{"ml-2": icon}' v-if='$slots.default')
      slot.ln-0
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AppButton',
  props: {
    modifier: {
      type: String,
      default: 'classic'
    },
    value: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconSize: {
      type: [String, Number],
      default: 3
    },
    iconsPosition: {
      type: String,
      default: 'left'
    },
    state: {
      type: String,
      default: null
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
      const classObject = {}
      const classToggle = 'button--' + this.modifier

      if (this.state !== null) {
        classObject['button--active'] = this.state === this.value
      }

      classObject[classToggle] = true

      return classObject
    }
  },
  methods: {
    ...mapActions(['globalDistributor']),
    handleClick() {
      this.globalDistributor(
        this.actions
          .filter((action) => {
            return action.on === 'click'
          })
          .map((action) => {
            return Object.assign({ value: this.value }, action)
          })
      )
    }
  }
}
</script>
