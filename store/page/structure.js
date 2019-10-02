export const state = () => ({
  mainMenu: [
    {
      name: 'articles',
      pathText: 'pages.articles.title',
      icon: 'events'
    },
    {
      name: 'schedule',
      pathText: 'pages.schedule.title',
      icon: 'schedule'
    },
    {
      name: 'search',
      pathText: 'pages.search.title',
      icon: 'search'
    },
    {
      name: 'statistics',
      pathText: 'pages.statistics.title',
      icon: 'statistics'
    },
    {
      name: 'settings',
      pathText: 'pages.settings.title',
      icon: 'settings'
    }
  ]
})

export const mutations = {
  SET_STATE_PAGE_STRUCTURE: (state, { key, value }) => {
    state[key] = value
  }
}
