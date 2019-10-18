export default async function({ app, store, route, redirect }) {
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
    const answer = await store.dispatch('user/getMe')
    if (answer === 'needLogin') {
      redirect('/login')
    }
  } else if (isEmptyUser && needAuthorization) {
    redirect('/login')
  }
}
