export const state = () => ({
  email: '',
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
    const data = rootGetters['page/form/getValuesFromForm']('login')
    let answer

    try {
      answer = await this.$auth.loginWith('local', { data })
    } catch (error) {
      // In future notification up
      console.error(error, answer)
    }

    if (answer.data.access_token) {
      localStorage.setItem('token', answer.data.access_token)
      commit('SET_STATE_USER', {
        key: 'token',
        value: 'answer.data.access_token'
      })
      this.$router.push({ name: 'index' })
      console.log('PUSH TO INDEX')
    } else {
      return answer.data
    }
  },
  async create(state, { password, email }) {
    const answer = await this.$axios.post('/user/create', { email, password })

    console.log(answer.data)
  },
  async logout() {
    console.log('LOG OUT')
    await this.$auth.logout()
    // this.$router.push({ name: 'login' })
  },
  updateLocalStorage(state, payload) {
    const user = Object.assign(
      JSON.parse(localStorage.getItem('user') || {}),
      payload
    )

    localStorage.setItem('user', JSON.stringify(user))
  },
  async getMe() {
    const answer = await this.$axios.get('/me', {
      headers: { Authorization: localStorage.getItem('token') }
    })

    console.log(answer)
  }
}
