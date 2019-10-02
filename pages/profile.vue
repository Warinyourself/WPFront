<template lang="pug">
  .container
    h2 User #[span {{ user.name }} {{ user.middle_name }} {{ user.surname }}]
    h2 Username&Email: #[span {{ user.username }}&{{ user.email }}]
    h3 Age&Weight: #[span {{ user.age }}&{{ user.weight }}]
    h4 Status&Description: #[span {{ user.status }}&{{ user.description }}]

</template>

<script>
import { mapState, mapActions } from 'vuex'

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
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapActions('user', ['getMe'])
  }
}
</script>
