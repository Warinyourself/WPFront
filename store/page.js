export const state = () => ({
  openMainMenu: true,
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
}

export const getters = {
  activeWindows: (state) => {
    let activeWindows = [];

    // first step is menu
    activeWindows.push({
      name: 'mainMenu',
      cancelParams: {
        type: 'openMainMenu',
        value: false,
      },
      doneParams: {
        type: 'openMainMenu',
        value: true,
      },
    });
    
    // second step is over windows
    
    // third step is focus elements

    return activeWindows;
  }
}

export const actions = { 
  CANCEL_SOMETHING: ({getters, commit}) => {
    let activeWindows = getters.activeWindows;

    if (activeWindows.length) {
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

