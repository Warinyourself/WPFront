export const state = () => ({
  forms: [],
  searchInput: '',
  searchLoading: false,
  elementFocus: false,
  searchView: false
})

export const mutations = {
  SET_STATE_FORM(state, payload) {
    state[payload.field] = payload.value;
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
    state.forms[state.forms.length - 1].children.push(payload);
  },
  SET_INPUT_ERRORS(state, {formName, inputName, errors}) {
    let child = state.forms.find(form => form.name === formName)
                .children.find(child => child.name === inputName);

    child.errors = errors;
  }
}

export const getters = {
  getFormByName: (state) => (name) => {
    return state.forms.find(form => form.name === name);
  },
  checkInputValidation: (state, getters) => ({value, validators}) => {
    let answers = [];

    for (let [key, options] of Object.entries(validators)) {
      answers.push(getters[key]({value: value, options: options}));
    }

    return answers.filter(answer => typeof(answer) === 'object')
  },
  required: (state) => ({value, options}) => {
    if (!value) {
      return {text: 'Поле обязательное'};
    } 
    return true;
  },
}

export const actions = {
  SUBMIT_FORM({state, getters, commit}, {name}) {
    let children = getters.getFormByName(name).children;

    children.forEach((child) => {
      let errors = getters.checkInputValidation({
        value: child.node.value,
        validators: child.validators
      });

      if (errors.length) {
        commit('SET_INPUT_ERRORS', {
          formName: name,
          inputName: child.name,
          errors, errors
        })
      }
    })
  }
}
