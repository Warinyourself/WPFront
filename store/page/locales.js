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
    let title = name

    switch (title) {
      case 'index':
        title = 'menu.main'
        break
      case 'profile':
        title = 'menu.profile'
        break
      case 'statistics':
        title = 'menu.statistics'
        break
      case 'search':
        title = 'menu.search'
        break
      case 'schedule':
        title = 'menu.schedule'
        break
      case 'news':
        title = 'menu.news'
        break
      case 'settings':
        title = 'menu.settings'
        break
    }

    return title
  }
}
