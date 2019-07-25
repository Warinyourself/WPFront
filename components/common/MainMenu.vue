<template lang="pug">
  transition(name='slide-out-left')
    menu.menu--main(v-if='openMainMenu')
      AppAvatar
      ul 
        NuxtLink.menu__link(v-for='(item, i) in mainMenu' :key='i' :to='item.link') 
          AppIcon.menu__icon(:icon='item.icon')
          h5 {{item.name}}
      .menu__footer
        AppToggle(:commit='{type: "isDark", path: "page/SET_PAGE"}')
        button.button--logout.ai-center(@click='logout') 
          AppIcon.icon--2.mr--2(icon='exit')
          span.lh-0 Выйти
</template>

<script>
import AppAvatar from '@/components/ui/AppAvatar.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MenuMenu',
  components: {
    AppAvatar,
  },
  computed: {
    ...mapState('page', [
      'openMainMenu',
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
