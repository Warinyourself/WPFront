<template lang="pug">
  .avatar(@click='goToUser')
    AppIcon(icon='user')
</template>

<script>

export default {
  name: 'AvatarComponent',
  props: {
    img: {
      type: String,
    },
    id: {
      type: Number,
    }
  },
  methods: {
    goToUser() {
      this.$router.push({name: 'profile'})
    }
  }
}
</script>
