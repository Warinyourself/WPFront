export const state = () => ({
  searchInput: '',
  activeTab: 'products'
})

export const mutations = {
  SET_STATE_SEARCH: (state, payload) => {
    state[payload.field] = payload.value
  }
}

export const getters = {
  getStateSearch: state => (field) => {
    return state[field]
  }
}

export const actions = {}
