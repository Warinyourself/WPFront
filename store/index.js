export const strict = true

export const state = () => ({
  loading: false,
  error: false,
  url: '',
})

export const mutations = {
  set(state, {type, items}) {
    state[type] = items
  },
}
