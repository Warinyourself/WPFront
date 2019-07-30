export const strict = true

export const state = () => ({
  loading: false,
  error: false,
  url: ''
})

export const mutations = {
  SET(state, { field, value }) {
    state[field] = value
  }
}
