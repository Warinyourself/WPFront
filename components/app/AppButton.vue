<template lang="pug">
  .button.ai-center(@click='handleClick' :class='classObject' )
    AppIcon.icon-3(v-if='icon' :icon='icon')
    .button__body(:class='{"ml-2": icon}' v-if='$slots.default')
      slot.ln-0
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppButton',
  mounted() {
    console.log(this.$slots)
  },
  props: {
    type: {
      type: String,
      default: 'classic'
    },
    icon: String,
    value: String,
    iconsPosition: {
      type: String,
      default: 'left'
    },
    commit: Object,
    action: Object,
    disabled: Boolean,
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
      const classToggle = 'button--' + this.type
      const classObject = {}

      const path = this.state.path
      const field = this.state.field

      if (field && path) {
        let value = this.$store.getters[path](field);
        classObject['button--active'] = value === this.value;
      } 

      classObject[classToggle] = true

      return classObject
    }
  },
  methods: {
    handleClick() {
      if (this.value && this.commit) {
        console.log('TAB state')
        if (this.commit.field) {
          this.$store.commit(this.commit.path, {
            field: this.commit.field,
            value: this.value
          })
        } else {
          this.$store.commit(this.commit.path, this.value)
        }
      }
      // if (this.active && (this.commitOn || this.commit)) {
      // this.$store.commit(this.commit.path, {type: this.commit.type, value: this.active})
      // } else if (!this.active && (this.commitOff || this.commit)) {
      // this.$store.commit(this.commit.path, {type: this.commit.type, value: this.active})
      // }
    }
  }
}
</script>
