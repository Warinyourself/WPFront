export const state = () => ({
  openMainMenu: true,
  news: [
          {
            title: 'Новости',
            id: '28',
            views: 9831,
            liked: 129,
            date: '28 May',
            description: 'Описание',
            tags: ['низкоуглеводная еда', 'сыроедение', 'польза', 'здоровье'],
            link: {name: 'news'}
          },
      ],
})

export const mutations = {
  SET_NEWS: (state, payload) => {
    state[payload.type] = payload.value;
  },
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

