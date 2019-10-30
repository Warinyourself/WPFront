<template lang="pug">
  .profile.container
    .profile__info.flex
      AppUploadBox(
        set-image
        :actions=`[
          {
            type: 'action',
            path: 'user/updateAvatar',
            on: 'upload'
          }
        ]`
      )
        .profile__avatar
      .profile__body.fd-column.w-100
        .profile__header.jc-space-between
          h2 {{ user.username }}
          AppButton.p-1(
            :actions=`[
              {
                type: 'action',
                structure: 'ROUTER_PUSH',
                value: '/profile/edit',
                on: 'click'
              }
            ]`
            icon='settings'
            :iconSize='2'
          )
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
        ArchiveBlock(
          :data=`{
            title: 'Update'
          }`
        )
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ArchiveBlock from '@/components/common/user/ArchiveBlock'

export default {
  name: 'ProfilePage',
  metaInfo() {
    return {
      title: this.$t('pages.profile.title')
    }
  },
  components: {
    ArchiveBlock
  },
  computed: {
    ...mapState('user', ['user'])
  },
  mounted() {
    this.getMe()
  },
  methods: {
    ...mapActions('user', ['getMe'])
  }
}
</script>

<style lang="stylus">
.block
  padding 15px
  border-radius 4px
  overflow hidden

.profile__avatar
  flex-shrink 0
  width 150px
  height 150px
  background rgba(0, 0, 0, .5)
  border-radius 50%
</style>
