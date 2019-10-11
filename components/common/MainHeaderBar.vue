<template lang="pug">
  header.header-bar.ai-center
    .header-bar__title
      h2.fs-4 {{ $t(determineKeyFori18nByTitleRoute($route.name)) }}
    AppMenu(
      :delay='250'
      :styleComponent=`{
        transform: 'translate(0%, calc(100% + 15px))',
        right: '-5px',
        bottom: 0
      }`
    )
      AppAvatar.icon-3
      template(v-slot:body)
        AppButton(
          modifier='menu'
          iconSize='2'
          :actions=`[
            {
              type: 'action',
              structure: 'ROUTER_PUSH',
              value: 'profile',
              on: 'click'
            }
          ]`
          icon='profile'
        ) {{ $t('pages.profile.title') }}
        AppButton(
          modifier='menu'
          iconSize='2'
          :actions=`[
            {
              type: 'action',
              structure: 'ROUTER_PUSH',
              value: 'favorites',
              on: 'click'
            }
          ]`
          icon='favorites'
        ) {{ $t('pages.favorites.title') }}
        AppButton(
          modifier='menu'
          iconSize='2'
          :actions=`[
            {
              type: 'action',
              structure: 'ROUTER_PUSH',
              value: 'settings',
              on: 'click'
            }
          ]`
          icon='settings'
        ) {{ $t('pages.settings.title') }}
        AppButton(
          modifier='menu'
          iconSize='2'
          :actions=`[
            {
              type: 'action',
              path: 'user/logout',
              on: 'click'
            }
          ]`
          icon='exit'
        )  {{ $t('forms.buttons.logout') }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MenuHeaderBar',
  computed: {
    ...mapGetters('page/locales', ['determineKeyFori18nByTitleRoute'])
  }
}
</script>
