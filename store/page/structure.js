export const state = () => ({
  mainMenu: [
    {
      name: 'articles',
      icon: 'events'
    },
    {
      name: 'schedule',
      icon: 'schedule'
    },
    {
      name: 'search',
      icon: 'search'
    },
    {
      name: 'statistics',
      icon: 'statistics'
    },
    {
      name: 'settings',
      icon: 'settings'
    }
  ]
})

export const mutations = {
  SET_STATE_PAGE_STRUCTURE: (state, { key, value }) => {
    state[key] = value
  }
}
