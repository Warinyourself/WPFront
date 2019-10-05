<template lang="pug">
  .avatar(@click='goToUser')
    AppIcon(icon='user')
</template>

<script>
export default {
  name: 'AppAvatar',
  props: {
    img: {
      type: String,
      default: null
    },
    id: {
      type: Number,
      default: null
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goToUser() {
      if (!this.disabled) {
        this.$router.push({ name: 'profile' })
      }
    }
  }
}
</script>
