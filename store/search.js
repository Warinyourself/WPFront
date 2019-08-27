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
      const answer = await this.$axios.get('/products', {
        params: {
          id: id
        }
      })

      product = answer.data[0]
      commit('ADD_PRODUCT', product)
    }

    return product
  },
  createProduct({ state }, data) {
    // eslint-disable-next-line no-console
    console.log(data, 'FORM STATE')
    return data
  },
  deleteProduct({ state }, id) {
    // eslint-disable-next-line no-console
    console.log(id, 'DELETE PRODUCT FORM STATE')
  }
}
