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
  async login({ rootGetters }) {
    const values = rootGetters['page/form/getValuesFromForm']('login')
    const answer = await this.$axios.post('/login', values)

    // localStorage.setItem('token', answer.data.token)
    // this.$router.push({ name: 'index' })

    return answer
  },
  async create(state, { password, email }) {
    const answer = await this.$axios.post('/create-user', { email, password })

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

    console.log(answer)
  }
}
