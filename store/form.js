export const state = () => ({
  forms: [],
  searchInput: '',
  searchLoading: false,
  elementFocus: false,
  searchView: false
})

export const mutations = {
  SET_STATE_FORM(state, payload) {
    state[payload.field] = payload.value
  },
  SET_FORM(state, payload) {
    state.forms.push({
      name: payload.name,
      children: []
    })
  },
  DELETE_FORM(state) {
    state.forms.splice(state.forms.length - 1, 1)
  },
  ADD_INPUT_IN_FORM(state, payload) {
    state.forms[state.forms.length - 1].children.push(payload)
  },
  SET_INPUT_ERRORS(state, { formName, inputName, errors }) {
    const child = state.forms
      .find(form => form.name === formName)
      .children.find((child) => child.name === inputName)

    child.errors = errors
  },
  DELETE_INPUT_ERRORS(state, { formName, inputName, errors }) {
    const child = state.forms
      .find(form => form.name === formName)
      .children.find((child) => child.name === inputName)

    child.errors = []
  }
}

export const getters = {
  getFormByName: (state) => (name) => {
    return state.forms.find(form => form.name === name)
  },
  getInputByName: (state) => (name) => {
    return state.forms
      .map(form => form.children)
      .flat()
      .find(child => child.name === name)
  },
  checkInputValidation: (state, getters) => ({ value, validators }) => {
    const answers = []

    for (const [key, options] of Object.entries(validators)) {
      answers.push(getters[key]({ value: value, options: options }))
    }

    return answers.filter(answer => typeof answer === 'object')
  },
  required: (state) => ({ value, options }) => {
    console.log(value, 'REQURED')
    if (!value) {
      console.log('THROW ERROR REQUIRED')
      return { pathText: 'forms.errors.required' }
    }
    return true
  }
}

export const actions = {
  SUBMIT_FORM({ state, getters, commit }, { name }) {
    const children = getters.getFormByName(name).children

    children.forEach((child) => {
      const errors = getters.checkInputValidation({
        value: child.value,
        validators: child.validators
      })

      if (errors.length) {
        commit('SET_INPUT_ERRORS', {
          formName: name,
          inputName: child.name,
          errors,

          errors
        })
      } else {
        commit('DELETE_INPUT_ERRORS', {
          formName: name,
          inputName: child.name
        })
      }
    })
  }
}
