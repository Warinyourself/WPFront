<template lang="pug">
  .profile.container
    .profile__info.flex
      .profile__avatar.mr-2
      .profile__body.fd-column
        h2 {{ user.username }}
        p.m-0.f-11auto {{ user.description }}
        p.m-0 Y.O. {{ user.age }} 🎂
    .mt-5
      h3.mb-2 Goals 🌟
      .flex
        .block.bgc-main--light
            h5 Goals title
    .mt-5
      h3.mb-2 Favorites 💕
      .flex
        .block.favorite-block.bgc-main--light
          .favorite-block__info
            h5 Favorite
    .mt-5
      h3.mb-2 Achievements 🎉
      .flex
        .block.bgc-main--light.br-50
          h5 ACHIVE
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

<style lang="stylus" scoped>
.block
  padding 15px
  border-radius 4px
  overflow hidden

.profile__avatar
  width 150px
  height 150px
  background rgba(0, 0, 0, .5)
  border-radius 50%
</style>
