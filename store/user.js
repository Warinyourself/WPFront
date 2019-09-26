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
    const values = rootGetters['page/form/getValuesFromForm']('login')
    let answer

    try {
      // answer = await this.$axios.post('/login', values)
      console.log(this.$auth)
      await this.$auth.loginWith('local', {
        data: values
      })
    } catch (error) {
      // In future notification up
      console.error(error, answer)
    }

    return answer.data
  },
  async create(state, { password, email }) {
    const answer = await this.$axios.post('/user/create', { email, password })

    console.log(answer.data)
  },
  logout() {
    console.log('LOG OUT')
    localStorage.removeItem('token')

    this.$router.push({ name: 'login' })
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
