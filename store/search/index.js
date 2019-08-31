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
  determineActionByTab({ state }) {
    switch (state.activeTab) {
      case 'products':
        this.$router.push({ name: 'search-product-create' })
        break
      case 'recipes':
        console.log('Click recipes')
        break
      case 'courses':
        console.log('Click courses')
    }
  }
}
