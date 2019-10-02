export const state = () => ({
  email: '',
  surname: '',
  token: '',
  status: 'Offline'
})

export const mutations = {
  SET_STATE_USER: (state, { key, value }) => {
    state[key] = value
  }
}

export const actions = {
  async login({ commit, rootGetters }) {
    const values = rootGetters['page/form/getValuesFromForm']('login')
    let answer

    try {
      answer = await this.$axios.$post('/login', values)
    } catch (error) {
      // In future notification up
      console.error(error, answer)
    }

    if (answer.access_token) {
      localStorage.setItem('token', answer.access_token)
      commit('SET_STATE_USER', {
        key: 'token',
        value: answer.access_token
      })
      this.$router.push({ name: 'index' })
    } else {
      return answer
    }
  },
  async create(store, { password, email }) {
    const answer = await this.$axios.post('/user/create', { email, password })

    console.log(answer.data)
  },
  logout({ commit }) {
    this.$router.push({ name: 'login' })
    commit('SET_STATE_USER', { value: '', key: 'token' })
  },
  updateLocalStorage(state, payload) {
    const user = Object.assign(
      JSON.parse(localStorage.getItem('user') || {}),
      payload
    )

    localStorage.setItem('user', JSON.stringify(user))
  },
  async getMe() {
    const answer = await this.$axios.$get('/me')

    console.log(answer)
  }
}
