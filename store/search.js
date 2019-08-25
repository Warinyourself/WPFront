export const state = () => ({
  searchInput: '',
  activeTab: 'products',
  products: []
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
  async getProducts({ state, commit }) {
    const response = await this.$axios.get('/products')

    commit('SET_STATE_SEARCH', { key: 'products', value: response.data })
  },
  createProduct({ state }, data) {
    return data
  }
}
