export const state = () => ({
  isDark: false,
  minimizeMenu: false,
  mainMenu: [
        {
          name: 'Новости',
          icon: 'events',
          link: {name: 'news'}
        },
        {
          name: 'Расписание',
          icon: 'schedule',
          link: {name: 'schedule'}
        },
        {
          name: 'Поиск',
          icon: 'search',
          link: {name: 'search'}
        },
        {
          name: 'Диаграмма',
          icon: 'statistics',
          link: {name: 'statistics'}
        },
        {
          name: 'Настройки',
          icon: 'settings',
          link: {name: 'settings'}
        },
      ],
})

export const mutations = {
  SET_PAGE: (state, payload) => {
    state[payload.type] = payload.value;
  },
  TOGGLE_MENU: (state) => {
    state.minimizeMenu = !state.minimizeMenu;
  }
}

export const getters = {
  getStatePage: (state) => (type) => {
    return state[type];
  },
  determineNameByRoute: (state) => (route) => {
    let title = route.name;

    switch (title) {
      case 'statistics':
        title = 'Статистика';
        break;
      case 'search':
        title = 'Поиск';
        break;
      case 'schedule':
        title = 'Расписание';
        break;
      case 'news':
        title = 'События';
        break;
      case 'settings':
        title = 'Настройки';
        break;
    }

    return title;
  },
  activeWindows: (state, rootState) => {
    let activeWindows = [];

    // Structure
    //   name (store value)
    //   cancelParams 
    //     type (commit name)
    //     value (commit value)
    
    // first step is over modal windows
    
    // second step is focus elements

    return activeWindows;
  }
}

export const actions = { 
  CANCEL_SOMETHING: ({getters, commit, rootState}) => {
    let activeWindows = getters.activeWindows,
        focus = rootState.form.elementFocus;

    if (rootState.form.elementFocus) {
      focus.blur();
    } else if (activeWindows.length) {
      commit('SET_PAGE', activeWindows[activeWindows.length - 1].cancelParams);
    }
  },
  DONE_SOMETHING: ({getters, commit}) => {
    let activeWindows = getters.activeWindows;

    if (activeWindows.length) {
      commit('SET_PAGE', activeWindows[activeWindows.length - 1].doneParams);
    }
  },
}

