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
    }
  },
  methods: {
    goToUser() {
      this.$router.push({ name: 'profile' })
    }
  }
}
</script>
