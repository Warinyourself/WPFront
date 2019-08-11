export const state = () => ({
  email: '',
  token: '',
  status: 'Offline'
})

export const mutations = {
  CHANGE_EMAIL: (state, value) => {
    state.email = value
  }
}

export const actions = {
  async login({}, { email, password }) {
    const answer = await this.$axios.post('/login', { email, password })

    localStorage.setItem('token', answer.data.token)
    this.$router.push({ name: 'index' })
  },
  async create(state, { password, email }) {
    const answer = await this.$axios.post('/create-user', { email, password })

    console.log(answer.data)
  },
  logout() {
    localStorage.removeItem('token')

    this.$router.push({ name: 'login' })
  },
  updateLocalStorage({}, payload) {
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

    console.log(answer)
  }
}
