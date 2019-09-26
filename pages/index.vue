<template lang="pug">
  .container
    h1 I don't know what in shoutd be too
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MainPage',
  mounted() {
    this.getMe()
  },
  methods: {
    ...mapActions('user', ['getMe'])
  }
}
</script>
