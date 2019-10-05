export const state = () => ({
  language: 'en',
  routing: {
    index: 'pages.index.title',
    profile: 'pages.profile.title',
    statistics: 'pages.statistics.title',
    search: 'pages.search.title',
    courses: 'pages.courses.title',
    home: 'pages.home.title',
    kitchen: 'pages.kitchen.title',
    order: 'pages.order.title',
    favorites: 'pages.favorites.title',
    schedule: 'pages.schedule.title',
    articles: 'pages.articles.title',
    settings: 'pages.settings.title'
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
  determineKeyFori18nByTitleRoute: ({ routing }) => (name) => {
    return routing[name] || 'route.unknow'
  }
}
