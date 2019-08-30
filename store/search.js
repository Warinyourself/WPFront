export const state = () => ({
  searchInput: '',
  activeTab: 'products',
  products: []
})

export const mutations = {
  SET_STATE_SEARCH: (state, { key, value }) => {
    state[key] = value
  },
  ADD_PRODUCT: (state, product) => {
    state.products.push(product)
  }
}

export const getters = {
  getStateSearch: (state, getters) => (key) => {
    return state[key]
  },
  getProduct: (state, getters) => (id) => {
    return state.products.find((product) => {
      return product.id === id
    })
  }
}

export const actions = {
  async getProducts({ state, commit }) {
    const response = await this.$axios.get('/products')

    commit('SET_STATE_SEARCH', { key: 'products', value: response.data })
  },
  async getProduct({ getters, commit }, id) {
    let product = getters.getProduct(id)

    if (product === undefined) {
      const response = await this.$axios.get('/products', {
        params: {
          id
        }
      })

      product = response.data[0]
      commit('ADD_PRODUCT', product)
    }

    return product
  },
  async createProduct({ state }, product) {
    // eslint-disable-next-line no-console
    console.log(product, 'FORM STATE')
    const response = await this.$axios.post('/products/create', product)

    return response
  },
  async deleteProduct({ state, dispatch }, id) {
    // eslint-disable-next-line no-console
    console.log(id, 'DELETE PRODUCT FORM STATE')
    await this.$axios.post('/products/delete', { id })

    dispatch('getProducts')
  }
}
