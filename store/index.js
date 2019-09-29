export const strict = true

export const mutations = {
  SET_STATE(state, { key, value }) {
    state[key] = value
  }
}
export const getters = {
  determineProperty: (state, getters) => (object) => {
    const { key, value } = object

    if (key === undefined) {
      return value
    } else {
      const uselessValues = ['on', 'path', 'type']
      const objectProperty = Object.assign({}, object)

      uselessValues.forEach((useless) => {
        delete objectProperty[useless]
      })

      return objectProperty
    }
  },
  determinePath: (state, getters) => ({ path, structure, internalState }) => {
    if (path !== undefined) {
      return path
    } else if (structure) {
      switch (structure) {
        case 'EXPAND_BLOCK':
          if (internalState) {
            return 'page/EXPAND_BLOCK'
          } else {
            return 'page/CLOSE_EXPAND_BLOCK'
          }
        case 'ROUTER_PUSH':
          return 'page/pushRoute'
      }
    }
    // eslint-disable-next-line no-console
    console.error('DETERMINE PATH OR STRUCTURE')
  }
}

export const actions = {
  async globalDistributor({ dispatch }, functions) {
    const answer = await Promise.all(
      functions.map((funcObject) => {
        if (funcObject.type === 'commit') {
          return dispatch('globalCommit', funcObject)
        } else {
          return dispatch('globalAction', funcObject)
        }
      })
    )

    return answer
  },
  async globalCommit({ commit }, object) {
    const path = getters.determinePath()(object)
    const property = getters.determineProperty()(object)
    const answer = await commit(path, property, { root: true })

    return answer
  },
  async globalAction({ dispatch }, object) {
    const path = getters.determinePath()(object)
    const property = getters.determineProperty()(object)
    const answer = await dispatch(path, property, { root: true })

    return answer
  }
}
