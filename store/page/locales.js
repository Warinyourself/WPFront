export const state = () => ({
  language: 'en'
})

export const mutations = {
  SET_STATE_PAGE_LOCALES: (state, { key, value }) => {
    state[key] = value
  },
  CHANGE_LANGUAGE: (state, { key, value }) => {
    // Maybe sync this i18n
    // this.$i18n.locale = 'ru'
    state[key] = value
  }
}

export const getters = {
  getStatePageLocales: (state, getters) => (key) => {
    return state[key]
  },
  determineKeyFori18nByTitleMenu: () => (name) => {
    switch (name) {
      case 'index':
        return 'menu.main'
      case 'profile':
        return 'menu.profile'
      case 'statistics':
        return 'menu.statistics'
      case 'search':
        return 'menu.search'
      case 'schedule':
        return 'menu.schedule'
      case 'news':
        return 'menu.news'
      case 'settings':
        return 'menu.settings'
      default:
        return 'route.unknow'
    }
  }
}
