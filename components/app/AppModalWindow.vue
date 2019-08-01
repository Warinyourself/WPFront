<template lang="pug">
  .modul(:class='classObject' v-if='isView')
    AppIcon.icon-3(icon='user')
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppModalWindow',
  props: {
    name: {
      type: String,
      default: 'Default'
    },
    type: {
      type: String,
      default: 'classic'
    },
    title: {
      type: String,
      default: 'Classic'
    }
  },
  computed: {
    ...mapState('page', ['modalWindows']),
    isView() {
      return !!this.modalWindows.find(item => item === this.title)
    },
    classObject() {
      const classToggle = 'toggle--' + this.type
      const classObject = {}

      classObject[classToggle] = true

      return classObject
    }
  },
  methods: {
    goToUser() {
      this.$router.push({ name: 'profile' })
    }
  }
}
</script>
