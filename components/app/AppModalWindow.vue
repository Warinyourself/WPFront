<template lang="pug">
  transition(name='router-animation')
    .mobal__background(@click='closeMonal' v-if='isView')
      .modal__body.bgc-main--second(:class='classObject')
        AppIcon.icon-3(icon='user')
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
      console.log('CLOSE');
      this.CLOSE_MODAL(this.title)
    }
  }
}
</script>
