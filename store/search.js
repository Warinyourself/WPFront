export const state = () => ({
  searchInput: '',
  activeTab: 'products'
})

export const mutations = {
  SET_STATE_SEARCH: (state, { key, value }) => {
    state[key] = value
  }
}

export const getters = {
  getStateSearch: (state, getters) => (key) => {
    return state[key]
  }
}

export const actions = {
  createProduct({ state }) {
    // eslint-disable-next-line no-console
    console.log(state)
  }
}
