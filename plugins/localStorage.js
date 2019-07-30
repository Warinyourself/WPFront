import createPersistedState from 'vuex-persistedstate'

export default ({  store  }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'vuex',
      paths: [
        'page.isDark',
        'page.minimizeMenu',
        'page.language'
      ]
    })(store)
  })
}
