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
    let answer = { data: false }

    try {
      answer = await this.$auth.loginWith('local', { data })
      console.log('PUSH TO INDEX AFTER AUTH', answer)
      this.$router.push({ name: 'index' })
    } catch (error) {
      // TODO In future set up notification on errors
      console.error(error, answer)
    }

    return answer.data
  },
  async create(state, { password, email }) {
    const answer = await this.$axios.post('/user/create', { email, password })

    console.log(answer.data)
  },
  async logout() {
    await this.$auth.logout()
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
