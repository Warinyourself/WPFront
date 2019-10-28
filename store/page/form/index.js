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
      name,
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
  SET_INPUT_ERROR(state, { child, error }) {
    child.errors = [...child.errors, error]
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
  getFormByName: (state, getters) => (name) => {
    return state.forms.find((form) => {
      return form.name === name
    })
  },
  getValuesFromForm: (state, getters) => (name) => {
    const form = getters.getFormByName(name)
    const answer = {}

    form.children.forEach((input) => {
      answer[input.name] = input.value
    })

    return answer
  },
  hasFormErrors: (state, getters) => (name) => {
    const form = getters.getFormByName(name)
    let arr = []

    if (form) {
      arr = form.children
        .map((input) => {
          return !!getters.getInputErrors(input.value, input.validators).length
        })
        .filter(Boolean)
    }

    return !!arr.length
  },
  getInputByName: (state, getters) => (name) => {
    return state.forms
      .map((form) => {
        return form.children
      })
      .flat()
      .find((child) => {
        return child.name === name
      })
  },
  getInputErrors: (state, getters) => (value, validators) => {
    const answers = []

    for (const [key, options] of Object.entries(validators)) {
      answers.push(getters[key](value, options))
    }

    return answers.filter((answer, i) => typeof answer === 'object')
  },
  email: (state, getters) => (value, options) => {
    const emailRex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if (emailRex.test(value)) {
      return true
    }
    return { pathText: 'forms.errors.email' }
  },
  letters: (state, getters) => (value, options) => {
    if (/^([a-zA-Z]|\s)+$/.test(value)) {
      return true
    }
    return { pathText: 'forms.errors.letters' }
  },
  required: (state, getters) => (value, options) => {
    if (value || !options) {
      return true
    }
    return { pathText: 'forms.errors.required' }
  },
  number: (state, getters) => (value, options) => {
    if (/^\d{0,}$/.test(value)) {
      return true
    }
    return { pathText: 'forms.errors.number' }
  }
}

export const actions = {
  addInputInForm({ state, commit }, { formName, input }) {
    const addInput = (function() {
      let iterations = 0

      return function() {
        const form = state.forms.find((form) => {
          return form.name === formName
        })

        if (form === undefined && iterations <= 3) {
          iterations++
          setTimeout(addInput, 1000)
        } else if (iterations > 3) {
          console.error('Add form error')
          console.log('Form name', formName, 'Input', input)
        } else {
          commit('ADD_INPUT_IN_FORM', { formName, input })
        }
      }
    })()

    addInput()
  },
  async checkFormErors({ getters, dispatch }, { name }) {
    const form = getters.getFormByName(name)
    const answer = await Promise.all(
      form.children.map(async (input) => {
        const error = await dispatch('checkInputValidation', {
          name: input.name
        })

        return error
      })
    )

    return answer
  },
  async submitForm({ getters, commit, dispatch }, { name, functions }) {
    const errors = await dispatch('checkFormErors', { name })
    if (errors.length) {
      console.log('Form has errors', errors)
    }

    const hasErrors = getters.hasFormErrors(name)

    if (!hasErrors) {
      const values = getters.getValuesFromForm(name)
      functions = functions.map((func) => {
        return Object.assign({ value: values }, func)
      })

      const response = await dispatch('globalDistributor', functions, {
        root: true
      })

      response.forEach((answer) => {
        if (answer) {
          Object.keys(answer).forEach((inputName) => {
            const child = getters.getInputByName(inputName)

            commit('SET_INPUT_ERROR', { child, error: answer[inputName] })
          })
        }
      })
    }
  },
  checkInputValidation({ getters, dispatch }, { name }) {
    const child = getters.getInputByName(name)

    const errors = getters.getInputErrors(child.value, child.validators)

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
    const child = getters.getInputByName(name)

    commit('SET_INPUT_ERRORS', { child, errors })
  },
  updateInputInForm({ getters, commit, dispatch }, { name, body }) {
    const child = getters.getInputByName(name)

    commit('UPDATE_INPUT_IN_FORM', { child, body })
    dispatch('checkInputValidation', { name })
  }
}
