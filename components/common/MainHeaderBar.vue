<template lang="pug">
  header.header-bar.ai-center.bgc-main--second 
    .header-bar__title
      h2 {{ $t(determinePathByName($route.name)) }}
    AppAvatar.icon-3
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'MenuHeaderBar',
  computed: {
    ...mapGetters('page', [
      'determinePathByName',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'logout',
    ]),
  }
}
</script>
