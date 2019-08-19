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
    const { path, key, value } = object
    const answer = {}

    if (key) {
      answer.key = key
    } else {
      return value
    }

    return { path, value }
  }
}

export const actions = {
  globalCommit({ state, commit }, object) {
    const { path, key, value } = object
    const property = getters('determineObject')()

    // eslint-disable-next-line no-console
    console.log(path, key, value)

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
