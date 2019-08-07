<template lang="pug">
  transition(name='router-animation')
    .mobal__background(@click='closeMonal' v-if='isView')
      .modal__body.bgc-main--second(@click.stop :class='classObject')
        slot
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'AppModalWindow',
  props: {
    type: {
      type: String,
      default: 'classic'
    },
    name: {
      type: String,
      default: 'Classic'
    }
  },
  computed: {
    ...mapState('page', ['modalWindows']),
    isView() {
      return !!this.modalWindows.find(item => item === this.name)
    },
    classObject() {
      const classToggle = 'modal--' + this.type
      const classObject = {}

      classObject[classToggle] = true

      return classObject
    }
  },
  methods: {
    ...mapMutations('page', [
      'CLOSE_MODAL'
    ]),
    closeMonal() {
      this.CLOSE_MODAL(this.name)
    }
  }
}
</script>
