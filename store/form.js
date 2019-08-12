export const state = () => ({
  forms: [],
  searchInput: '',
  searchLoading: false,
  elementFocus: false,
  searchView: false,
  formError: false
})

export const mutations = {
  SET_STATE_FORM(state, { key, value }) {
    state[key] = value
  },
  SET_FORM(state, { name }) {
    state.forms.push({
      name: name,
      children: []
    })
  },
  DELETE_FORM(state, { name }) {
    state.forms.splice(state.forms.length - 1, 1)
  },
  ADD_INPUT_IN_FORM(state, payload) {
    state.forms[state.forms.length - 1].children.push(payload)
  },
  SET_INPUT_ERRORS(state, { child, errors }) {
    child.errors = errors
  },
  UPDATE_INPUT_IN_FORM(state, { child, body }) {
    for (const [key, value] of Object.entries(body)) {
      child[key] = value
    }
  }
}

export const getters = {
  getFormByName: (state, getters) => ({ name }) => {
    return state.forms.find((form) => {
      return form.name === name
    })
  },
  getInputByName: (state, getters) => ({ name }) => {
    return state.forms
      .map((form) => {
        return form.children
      })
      .flat()
      .find((child) => {
        return child.name === name
      })
  },
  getInputErrors: (state, getters) => ({ value, validators }) => {
    const answers = []

    for (const [key, options] of Object.entries(validators)) {
      answers.push(getters[key]({ value, options }))
    }

    return answers.filter((answer, i) => typeof answer === 'object')
  },
  hasFormErrors: (state, getters) => (name) => {
    const form = getters.getFormByName(name)

    // eslint-disable-next-line no-console
    console.log(form.children)
    return form.children
      .map((input) => {
        return !!input.errors.length
      })
      .includes(true)
  },
  letters: (state, getters) => ({ value, options }) => {
    if (/^([a-zA-Z]|\s)+$/.test(value)) {
      return true
    }
    return { pathText: 'forms.errors.letters' }
  },
  required: (state, getters) => ({ value, options }) => {
    if (value) {
      return true
    }
    return { pathText: 'forms.errors.required' }
  }
}

export const actions = {
  async SUBMIT_FORM({ getters, commit, dispatch }, { name }) {
    // lowercase
    await dispatch('checkForm', { name })

    const hasErrors = getters.hasFormErrors({ name })

    if (!hasErrors) {
      const answer = await dispatch('GET_VALUES_FROM_FORM', { name })

      // eslint-disable-next-line no-console
      console.log(hasErrors, 'In VUEX', answer)

      // Not required
      // commit('DELETE_FORM', { name })
    }
  },
  async checkForm({ getters, dispatch }, { name }) {
    const form = getters.getFormByName({ name })

    await Promise.all(
      form.children.map(async (input) => {
        const error = await dispatch('CHECK_INPUT_VALIDATION', {
          name: input.name
        })

        return error
      })
    )
  },
  GET_VALUES_FROM_FORM({ getters }, { name }) {
    // lowercase
    const form = getters.getFormByName({ name })
    const answer = {}

    form.children.forEach((input) => {
      answer[input.name] = input.value
    })

    return answer
  },
  CHECK_INPUT_VALIDATION({ getters, dispatch }, { name }) {
    const child = getters.getInputByName({ name })

    const errors = getters.getInputErrors({
      value: child.value,
      validators: child.validators
    })

    if (errors.length) {
      dispatch('SET_INPUT_ERRORS', {
        name: child.name,
        errors
      })
    } else {
      dispatch('SET_INPUT_ERRORS', {
        name: child.name,
        errors: []
      })
    }
  },
  SET_INPUT_ERRORS({ getters, commit }, { name, errors }) {
    const child = getters.getInputByName({ name })

    commit('SET_INPUT_ERRORS', { child, errors })
  },
  UPDATE_INPUT_IN_FORM({ getters, commit, dispatch }, { name, body }) {
    const child = getters.getInputByName({ name })

    commit('UPDATE_INPUT_IN_FORM', { child, body })
    dispatch('CHECK_INPUT_VALIDATION', { name })
  }
}
