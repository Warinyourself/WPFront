export const state = () => ({
  isDark: false,
  minimizeMenu: false,
  language: 'en',
  mainMenu: [
    {
      name: 'news',
      icon: 'events',
    },
    {
      name: 'schedule',
      icon: 'schedule',
    },
    {
      name: 'search',
      icon: 'search',
    },
    {
      name: 'statistics',
      icon: 'statistics',
    },
    {
      name: 'settings',
      icon: 'settings',
    }
  ]
})

export const mutations = {
  SET_STATE_PAGE: (state, payload) => {
    state[payload.field] = payload.value
  },
  TOGGLE_MENU: (state) => {
    state.minimizeMenu = !state.minimizeMenu
  },
  CHANGE_LANGUAGE: (state, payload) => {
    // console.log('CHANGE_LANGUAGE', this)
    // console.log('CHANGE_LANGUAGE', $router)

    // Maybe sync this i18n
    
    // this.$i18n.locale = 'ru'
    state[payload.field] = payload.value
  }
}

export const getters = {
  getStatePage: state => (field) => {
    return state[field]
  },
  determinePathByName: state => (name) => {
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
  },
  activeWindows: (state, rootState) => {
    const activeWindows = []

    // Structure
    //   name (store value)
    //   cancelParams
    //     field (commit name)
    //     value (commit value)

    // first step is over modal windows

    // second step is focus elements

    return activeWindows
  }
}

export const actions = {
  CANCEL_SOMETHING: ({ getters, commit, rootState }) => {
    const activeWindows = getters.activeWindows
    const focus = rootState.form.elementFocus

    if (rootState.form.elementFocus) {
      focus.blur()
    } else if (activeWindows.length) {
      commit('SET_STATE_PAGE', activeWindows[activeWindows.length - 1].cancelParams)
    }
  },
  DONE_SOMETHING: ({ getters, commit }) => {
    const activeWindows = getters.activeWindows

    if (activeWindows.length) {
      commit('SET_STATE_PAGE', activeWindows[activeWindows.length - 1].doneParams)
    }
  }
}
