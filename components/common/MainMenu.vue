<template lang="pug">
  menu.menu--main.bgc-light(:class='{"menu--minimize": minimizeMenu}')
    ul
      NuxtLink.menu__link(v-for='(item, i) in mainMenu' :key='i' :to='{ name: item.name }')
        .menu__icon-box
          AppIcon.menu__icon.icon-3.icon-darker(:icon='item.icon')
        h4.color-dark-link {{ $t(determineKeyFori18nByTitleMenu(item.name)) }}
    .menu__footer
      AppToggle(:values='["ru", "en"]'
                :state='{ key: "language", path: "page/getStatePage"}'
                :commit='{key: "language", path: "page/CHANGE_LANGUAGE"}')
      AppToggle(:icons='["sun", "moon"]'
                :state='{ key: "isDark", path: "page/getStatePage"}'
                :commit='{key: "isDark", path: "page/SET_STATE_PAGE"}')
      AppToggle(type='arrow'
                :state='{key: "minimizeMenu", path: "page/getStatePage"}'
                :commit='{key: "minimizeMenu", path: "page/SET_STATE_PAGE"}')
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'MenuMenu',
  computed: {
    ...mapState('page', ['minimizeMenu', 'mainMenu']),
    ...mapGetters('page', ['determineKeyFori18nByTitleMenu'])
  },
  methods: {
    ...mapActions('user', ['logout'])
  }
}
</script>
