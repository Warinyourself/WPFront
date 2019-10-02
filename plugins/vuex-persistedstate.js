import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'vuex',
      paths: [
        'user.token',
        'page.isDark',
        'page.minimizeMenu',
        'page.language',
        'search.activeTab'
      ]
    })(store)
  })
}
