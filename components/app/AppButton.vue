<template lang="pug">
  button.button.ai-center.bgc-main--lighter(@click='handleClick' :class='classObject' v-bind='$attrs' :type='this.type')
    AppIcon.icon-3(v-if='icon' :icon='icon')
    .button__body(:class='{"ml-2": icon}' v-if='$slots.default')
      slot.ln-0
</template>

<script>
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
    commit: {
      type: Object,
      default: () => Object.create(null)
    },
    action: {
      type: Object,
      default: () => Object.create(null)
    },
    disabled: Boolean,
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
      const classToggle = 'button--' + this.type
      const classObject = {}

      const path = this.state.path
      const key = this.state.key

      if (key && path) {
        const value = this.$store.getters[path](key)
        classObject['button--active'] = value === this.value
      }

      classObject[classToggle] = true

      return classObject
    }
  },
  methods: {
    handleClick() {
      if (this.value && this.commit) {
        if (this.commit.key) {
          this.$store.commit(this.commit.path, {
            key: this.commit.key,
            value: this.value
          })
        } else {
          this.$store.commit(this.commit.path, this.value)
        }
      }
    }
  }
}
</script>
