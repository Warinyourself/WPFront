export default function({ store, route, redirect }) {
  const needAuthorization = route.meta.map((meta) => {
    if (typeof meta.auth !== 'undefined') {
      return meta.auth
    }
    return true
  })[0]

  const user = store.state.user.user
  const isEmptyUser = !Object.keys(user).length
  const token = store.state.user.token

  if (isEmptyUser && !!token) {
    store.dispatch('user/getMe')
  } else if (isEmptyUser && needAuthorization) {
    redirect('/login')
  }
}
