<template lang="pug">
  menu.menu--main.bgc-light(:class='{"menu--minimize": minimizeMenu}')
    ul
      NuxtLink.menu__link(v-for='(item, i) in mainMenu' :key='i' :to='{ name: item.name }')
        .menu__icon-box
          AppIcon.menu__icon.icon-3.icon-darker(:icon='item.icon')
        h4.color-dark-link {{ $t(determinePathByName(item.name)) }}
    .menu__footer
      AppToggle(:values='["ru", "en"]'
                :state='{ field: "language", path: "page/getStatePage"}'
                :commit='{field: "language", path: "page/CHANGE_LANGUAGE"}')
      AppToggle(:icons='["sun", "moon"]'
                :state='{ field: "isDark", path: "page/getStatePage"}'
                :commit='{field: "isDark", path: "page/SET_STATE_PAGE"}')
      AppToggle(type='arrow'
                :state='{field: "minimizeMenu", path: "page/getStatePage"}'
                :commit='{field: "minimizeMenu", path: "page/SET_STATE_PAGE"}')
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'MenuMenu',
  computed: {
    ...mapState('page', ['minimizeMenu', 'mainMenu']),
    ...mapGetters('page', ['determinePathByName'])
  },
  methods: {
    ...mapActions('user', ['logout'])
  }
}
</script>
