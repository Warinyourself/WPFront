<template lang="pug">
  div.container
    button(@click='checkAuth') Check
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MainPage',
  methods: {
    ...mapActions('user', ['checkAuth'])
  }
}
</script>
