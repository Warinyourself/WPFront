export const state = () => ({
  forms: [[]],
  searchInput: '',
  searchLoading: false,
  elementFocus: false,
  searchView: false
})

export const mutations = {
  SET_FORM(state, payload) {
    state[payload.field] = payload.value
  }
}

export const getters = {
  required: (state) => {},
  checkForm: (state) => {}
}
