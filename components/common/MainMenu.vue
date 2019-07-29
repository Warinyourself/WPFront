<template lang="pug">
  menu.menu--main.bgc-light(:class='{"menu--minimize": minimizeMenu}')
    ul 
      NuxtLink.menu__link(v-for='(item, i) in mainMenu' :key='i' :to='item.link') 
        .menu__icon-box
          AppIcon.menu__icon.icon-3.icon-darkest(:icon='item.icon')
        h4.color-dark-link {{item.name}}
    .menu__footer
      AppToggle(:icons='["sun", "moon"]'
                :state='{path: "page/getStatePage", type: "isDark"}'
                :commit='{type: "isDark", path: "page/SET_PAGE"}')
      AppToggle(type='arrow'
                :state='{path: "page/getStatePage", type: "minimizeMenu"}'
                :commit='{type: "minimizeMenu", path: "page/SET_PAGE"}')
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MenuMenu',
  computed: {
    ...mapState('page', [
      'minimizeMenu',
      'mainMenu',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'logout',
    ])
  }
}
</script>
