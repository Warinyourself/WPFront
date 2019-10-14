export default function({ app, store, route, redirect }) {
  const needAuthorization = route.meta.map((meta) => {
    if (typeof meta.auth !== 'undefined') {
      return meta.auth
    }
    return true
  })[0]

  const user = store.state.user.user
  const isEmptyUser = !Object.keys(user).length
  const token = app.context.app.$cookies.get('token')

  if (isEmptyUser && !!token && needAuthorization) {
    store.dispatch('user/getMe')
  } else if (isEmptyUser && needAuthorization) {
    redirect('/login')
  }
}
