<template lang="pug">
  .container

</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProfilePage',
  metaInfo() {
    return {
      title: this.$t('pages.profile.title')
    }
  },
  mounted() {
    this.getMe()
  },
  methods: {
    ...mapActions('user', ['getMe'])
  }
}
</script>
