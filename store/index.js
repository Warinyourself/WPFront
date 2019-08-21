export const strict = true

export const state = () => ({
  loading: false,
  error: false,
  url: 'localhost:8080'
})

export const mutations = {
  SET_STATE(state, { key, value }) {
    state[key] = value
  }
}
export const getters = {
  determineObject: (state, getters) => (object) => {
    const { key, value } = object

    if (key === undefined) {
      return value
    } else {
      return object
    }
  },
  determinePath: (state, getters) => ({ path, structure, internalState }) => {
    if (path !== undefined) {
      return path
    } else if (structure) {
      switch (structure) {
        case 'EXPAND_BLOCK':
          if (internalState) {
            return 'page/ADD_EXPAND_BLOCK'
          } else {
            return 'page/CLOSE_EXPAND_BLOCK'
          }
      }
    }

    // eslint-disable-next-line no-console
    console.error('FETERMINE PATH OR STRUCTURE')
  }
}

export const actions = {
  globalCommit({ commit }, object) {
    const property = getters.determineObject()(object)
    const path = getters.determinePath()(object)

    commit(path, property, { root: true })
  },
  globalAction({ dispatch }, object) {
    const property = getters.determineObject()(object)
    const path = getters.determinePath()(object)

    dispatch(path, property, { root: true })
  }
}
