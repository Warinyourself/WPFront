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
  async login(state, { email, password }) {
    const answer = await this.$axios.post('/login', { email, password })

    localStorage.setItem('token', answer.data.token)
    this.$router.push({ name: 'index' })
  },
  async create(state, { password, email }) {
    const answer = await this.$axios.post('/create-user', { email, password })

    // eslint-disable-next-line no-console
    console.log(answer.data)
  },
  logout() {
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
  async checkAuth({ token }) {
    const answer = await this.$axios.get('/head', {
      headers: { 'x-access-token': localStorage.getItem('token') }
    })

    // eslint-disable-next-line no-console
    console.log(answer)
  }
}
