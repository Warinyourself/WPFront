<template lang="pug">
  .avatar(@click='goToUser')
    AppIcon(icon='user')
</template>

<script>
export default {
  name: 'AppAvatar',
  props: {
    img: String,
    id: Number
  },
  methods: {
    goToUser() {
      this.$router.push({ name: 'profile' })
    }
  }
}
</script>
