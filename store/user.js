export const state = () => ({
  token: '',
  status: 'Offline',
  user: {},
  isLogin: false
})

export const mutations = {
  SET_STATE_USER: (state, { key, value }) => {
    state[key] = value
  }
}

export const actions = {
  async login({ commit, dispatch, rootGetters }, values) {
    values = Object.keys(values).length
      ? values
      : rootGetters['page/form/getValuesFromForm']('login')
    let answer

    try {
      answer = await this.$axios.$post('/login', values)
    } catch (error) {
      // In future notification up
      console.error(error, answer)
    }

    if (answer.access_token) {
      commit('SET_STATE_USER', {
        key: 'token',
        value: answer.access_token
      })

      window.$nuxt.$cookies.set('token', answer.access_token)

      await dispatch('getMe')
      this.$router.push({ name: 'index' })
    } else {
      return answer
    }
  },
  async create({ commit, dispatch, rootGetters }, values) {
    values = rootGetters['page/form/getValuesFromForm']('signUp')
    let answer

    try {
      answer = await this.$axios.$post('/users/', values)
    } catch (error) {
      // In future notification up
      console.error(error, answer)
    }

    if (answer.id) {
      await dispatch('login', {
        username: values.email,
        password: values.password
      })
    } else {
      return answer
    }
  },
  async update({ state }, values) {
    let answer

    try {
      answer = await this.$axios.put('/users/' + state.user.id, values)
    } catch (error) {
      // In future notification up
      console.error(error, answer)
    }

    // TODO mayby add to back errors key in answer
    if (answer.data.errors) {
      return answer
    }
  },
  logout({ commit }) {
    this.$router.push({ name: 'login' })
    window.$nuxt.$cookies.set('token', '')
    commit('SET_STATE_USER', { value: '', key: 'token' })
    commit('SET_STATE_USER', { key: 'isLogin', value: false })
  },
  updateLocalStorage(state, payload) {
    const user = Object.assign(
      JSON.parse(localStorage.getItem('user') || {}),
      payload
    )

    localStorage.setItem('user', JSON.stringify(user))
  },
  async getMe({ commit, dispatch }) {
    let answer

    try {
      answer = await this.$axios.$get('/me')
      commit('SET_STATE_USER', { key: 'user', value: answer })
      commit('SET_STATE_USER', { key: 'isLogin', value: true })
    } catch (error) {
      if (process.browser) {
        await dispatch('logout')
      }
      return 'needLogin'
    }
  }
}
