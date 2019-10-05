export const state = () => ({
  mainMenu: [
    {
      name: 'home',
      pathText: 'pages.home.title',
      icon: 'home'
    },
    {
      name: 'courses',
      pathText: 'pages.courses.title',
      icon: 'courses'
    },
    {
      name: 'kitchen',
      pathText: 'pages.kitchen.title',
      icon: 'recipes'
    },
    {
      name: 'search',
      pathText: 'pages.search.title',
      icon: 'search'
    },
    {
      name: 'order',
      pathText: 'pages.order.title',
      icon: 'order'
    }
  ]
})

export const mutations = {
  SET_STATE_PAGE_STRUCTURE: (state, { key, value }) => {
    state[key] = value
  }
}
