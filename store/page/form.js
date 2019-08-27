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
    const index = state.forms.findIndex((form) => {
      return form.name === name
    })

    state.forms.splice(index, 1)
  },
  ADD_INPUT_IN_FORM(state, { formName, input }) {
    const form = state.forms.find((form) => {
      return form.name === formName
    })

    form.children.push(input)
  },
  DELETE_INPUT_FROM_FORM(state, { name, formName }) {
    const formChildren = state.forms.find((form) => {
      return form.name === formName
    }).children

    const childIndex = formChildren.findIndex((child) => {
      return child.name === name
    })

    formChildren.splice(childIndex, 1)
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
  getValuesFromForm: (state, getters) => ({ name }) => {
    const form = getters.getFormByName({ name })
    const answer = {}

    form.children.forEach((input) => {
      answer[input.name] = input.value
    })

    return answer
  },
  hasFormErrors: (state, getters) => ({ name }) => {
    const form = getters.getFormByName({ name })

    return form.children
      .map((input) => {
        return !!input.errors.length
      })
      .includes(true)
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
  letters: (state, getters) => ({ value, options }) => {
    if (/^([a-zA-Z]|\s)+$/.test(value)) {
      return true
    }
    return { pathText: 'forms.errors.letters' }
  },
  required: (state, getters) => ({ value, options }) => {
    if (value || !options) {
      return true
    }
    return { pathText: 'forms.errors.required' }
  }
}

export const actions = {
  async checkFormErors({ getters, dispatch }, { name }) {
    const form = getters.getFormByName({ name })

    await Promise.all(
      form.children.map(async (input) => {
        const error = await dispatch('checkInputValidation', {
          name: input.name
        })

        return error
      })
    )
  },
  async submitForm({ getters, commit, dispatch }, { name, close, func }) {
    await dispatch('checkFormErors', { name })

    const hasErrors = getters.hasFormErrors({ name })

    if (!hasErrors) {
      const values = getters.getValuesFromForm({ name })
      const response = await dispatch(func.path, values, { root: true })

      // eslint-disable-next-line no-console
      console.log(response, values)

      if (close) {
        if (close.type === 'modal') {
          this.commit('page/CLOSE_MODAL', close.name, { root: true })
        }
      }
    }
  },
  checkInputValidation({ getters, dispatch }, { name }) {
    const child = getters.getInputByName({ name })

    const errors = getters.getInputErrors({
      value: child.value,
      validators: child.validators
    })

    if (errors.length) {
      dispatch('setInputErrors', {
        name: child.name,
        errors
      })
    } else {
      dispatch('setInputErrors', {
        name: child.name,
        errors: []
      })
    }
  },
  setInputErrors({ getters, commit }, { name, errors }) {
    const child = getters.getInputByName({ name })

    commit('SET_INPUT_ERRORS', { child, errors })
  },
  updateInputInForm({ getters, commit, dispatch }, { name, body }) {
    const child = getters.getInputByName({ name })

    commit('UPDATE_INPUT_IN_FORM', { child, body })
    dispatch('checkInputValidation', { name })
  }
}
