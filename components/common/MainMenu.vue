<template lang="pug">
  menu.menu--main.bgc--light(:class='{"menu--minimize": minimizeMenu}')
    ul
      NuxtLink.menu__link(v-for='(item, i) in mainMenu' :key='i' :to='{ name: item.name }')
        .menu__icon-box
          AppIcon.menu__icon.icon-3.icon-darker(:icon='item.icon')
        h4.color-dark-link {{ $t(item.pathText) }}
    .menu__footer
      AppToggle(
        :values='["ru", "en"]'
        :state='language'
        :actions=`[
          {
            type: "commit",
            path: "page/locales/CHANGE_LANGUAGE",
            key: "language",
            on: "change"
          }
        ]`
      )
      AppToggle(
        :icons='["sun", "moon"]'
        :state='isDark'
        :actions=`[
          {
            type: "commit",
            path: "page/SET_STATE_PAGE",
            key: "isDark",
            on: "change"
          }
        ]`
      )
      AppToggle(
        modifier='arrow'
        :state='minimizeMenu'
        :actions=`[
          {
            type: "commit",
            path: "page/SET_STATE_PAGE",
            key: "minimizeMenu",
            on: "change"
          }
        ]`
      )
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MenuMenu',
  computed: {
    ...mapState('page', ['minimizeMenu', 'isDark', 'mainMenu']),
    ...mapState('page/structure', ['mainMenu']),
    ...mapState('page/locales', ['language'])
  }
}
</script>
