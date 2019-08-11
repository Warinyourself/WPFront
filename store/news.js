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
      link: { name: 'news' }
    }
  ]
})

export const mutations = {
  SET_STATE_NEWS: (state, payload) => {
    state[payload.field] = payload.value
  }
}

export const actions = {}
