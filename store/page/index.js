export const state = () => ({
  isDark: false,
  minimizeMenu: false,
  modalWindows: []
})

export const mutations = {
  SET_STATE_PAGE: (state, { key, value }) => {
    state[key] = value
  },
  TOGGLE_MENU: (state) => {
    state.minimizeMenu = !state.minimizeMenu
  },
  ADD_ACTIVE_MODAL: (state, payload) => {
    state.modalWindows.push(payload)
  },
  CLOSE_MODAL: (state, { name }) => {
    state.modalWindows.splice(state.modalWindows.indexOf(name), 1)
  }
}

export const getters = {
  getStatePage: (state, getters) => (key) => {
    return state[key]
  },
  isOpenModal: (state, getters) => (name) => {
    return state.modalWindows.includes(name)
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
  cancelSomething: ({ getters, commit, rootState }) => {
    const activeWindows = getters.activeWindows
    const focus = rootState.form.elementFocus

    if (rootState.form.elementFocus) {
      focus.blur()
    } else if (activeWindows.length) {
      commit(
        'SET_STATE_PAGE',
        activeWindows[activeWindows.length - 1].cancelParams
      )
    }
  },
  doneSomething: ({ getters, commit }) => {
    const activeWindows = getters.activeWindows

    if (activeWindows.length) {
      commit(
        'SET_STATE_PAGE',
        activeWindows[activeWindows.length - 1].doneParams
      )
    }
  }
}
