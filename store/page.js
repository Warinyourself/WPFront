export const state = () => ({
  openMainMenu: true,
  isDark: false,
  mainMenu: [
        {
          name: 'Новости',
          icon: 'love',
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
    state.openMainMenu = !state.openMainMenu;
  }
}

export const getters = {
  activeWindows: (state, rootState) => {
    let activeWindows = [];

    // first step is menu
    activeWindows.push({
      name: 'mainMenu',
      active: state.openMainMenu,
      cancelParams: {
        type: 'openMainMenu',
        value: false,
      },
      doneParams: {
        type: 'openMainMenu',
        value: true,
      },
    });
    
    // second step is over modal windows
    
    // third step is focus elements

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

