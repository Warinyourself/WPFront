<template lang="pug">
  .menu(
    @click='onClick'
    @mouseleave='onMouseLeave'
    @mouseover='onMouseOver'
  )
    .menu__item
      slot
    transition(name='router-animation')
      .menu__body(
        @click='closeAfterClick'
        v-if='isActive'
      )
        slot(name='body')
</template>

<script>
export default {
  name: 'AppAvatar',
  props: {
    modifier: {
      type: String,
      default: 'classic'
    },
    on: {
      type: String,
      default: 'hover'
    },
    delay: {
      type: Number,
      default: 0
    },
    isCloseAfterClick: {
      type: Boolean,
      default: true
    },
    actions: {
      type: Object,
      default: () => Object.create(null)
    }
  },
  data() {
    return {
      isActive: false,
      timeOutDelay: null
    }
  },
  methods: {
    onMouseLeave(event) {
      if (this.on === 'hover') {
        this.timeOutDelay = setTimeout(
          () => (this.isActive = false),
          this.delay
        )
      }
    },
    onMouseOver(event) {
      if (this.on === 'hover') {
        this.isActive = true
        clearTimeout(this.timeOutDelay)
      }
    },
    onClick(event) {
      if (this.on === 'click') {
        this.isActive = !this.isActive
      }
    },
    closeAfterClick() {
      if (this.isCloseAfterClick) {
        this.isActive = false
      }
    }
  }
}
</script>

<style lang="stylus">
.menu
  position relative

.menu__body
  box-shadow 0 0 5px rgba(0, 0, 0, .3)
  border 1px solid main-color
  border-radius 4px
  background white
  position absolute
  z-index 3
  bottom 0
  left 0
  transform translate(-100%, 100%)
</style>
