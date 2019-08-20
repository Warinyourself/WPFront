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

    // eslint-disable-next-line no-console
    console.log(value, key, object)
    if (key === undefined) {
      return value
    } else {
      return value
    }
  },
  determinePath: (state, getters) => ({ path, structure, value }) => {
    if (path !== undefined) {
      return path
    } else if (structure) {
      switch (structure) {
        case 'EXPAND_BLOCK':
          if (value) {
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
    const { key, value } = object
    const property = getters.determineObject()(object)
    const path = getters.determinePath()(object)

    // eslint-disable-next-line no-console
    console.log(
      `value: ${object}
      path :${path},
      key: ${key},
      value: ${value},
      property: ${property}`
    )

    commit(path, property, { root: true })
  },
  globalAction({ dispatch }, object) {
    const { path, key, value } = object
    const property = getters('determineObject')()

    // eslint-disable-next-line no-console
    console.log(path, key, value)

    dispatch(path, property, { root: true })
  }
}
