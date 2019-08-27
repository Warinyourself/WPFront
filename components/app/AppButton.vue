<template lang="pug">
  button.button.ai-center.bgc-main--lighter(@click='handleClick' :class='classObject' v-bind='$attrs' :type='this.type')
    AppIcon.icon-3(v-if='icon' :icon='icon')
    .button__body(:class='{"ml-2": icon}' v-if='$slots.default')
      slot.ln-0
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AppButton',
  props: {
    type: {
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
    iconsPosition: {
      type: String,
      default: 'left'
    },
    disabled: {
      type: Boolean,
      default: null
    },
    actions: {
      type: Array,
      default: () => []
    },
    state: {
      type: String,
      default: null
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
      const classToggle = 'button--' + this.type

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
