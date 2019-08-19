<template lang="pug">
  transition(name='router-animation')
    .mobal__background(@click='closeMonal' v-if='isOpen')
      .modal__body.bgc-main--lightest(@click.stop :class='classObject')
        slot
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'AppModalWindow',
  props: {
    type: {
      type: String,
      default: 'classic'
    },
    name: {
      type: String,
      default: 'classic'
    }
  },
  provide() {
    const modal = {}
    Object.defineProperty(modal, 'name', {
      enumerable: true,
      get: () => this.name
    })
    return { modal }
  },
  computed: {
    ...mapGetters('page', ['isOpenModal']),
    isOpen() {
      return this.isOpenModal(this.name)
    },
    classObject() {
      const classToggle = 'modal--' + this.type
      const classObject = {}

      classObject[classToggle] = true

      return classObject
    }
  },
  methods: {
    ...mapMutations('page', ['CLOSE_MODAL']),
    closeMonal() {
      this.CLOSE_MODAL(this.name)
    }
  }
}
</script>
