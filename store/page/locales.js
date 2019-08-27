export const state = () => ({
  language: 'en',
  routing: {
    index: 'menu.main',
    profile: 'menu.profile',
    statistics: 'menu.statistics',
    search: 'menu.search',
    schedule: 'menu.schedule',
    news: 'menu.news',
    settings: 'menu.settings'
  }
})

export const mutations = {
  SET_STATE_PAGE_LOCALES(state, { key, value }) {
    state[key] = value
  },
  CHANGE_LANGUAGE(state, { key, value }) {
    this.app.i18n.locale = value
    state[key] = value
  }
}

export const getters = {
  getStatePageLocales: (state, getters) => (key) => {
    return state[key]
  },
  determineKeyFori18nByTitleMenu: ({ routing }) => (name) => {
    return routing[name] || 'route.unknow'
  }
}

export const actions = {
  determineKeyFori18nByRouting({ state }, { name }) {
    return state.routing[name] || 'route.unknow'
  }
}
