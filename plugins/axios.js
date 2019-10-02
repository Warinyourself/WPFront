export default ({ $axios, redirect, store }) => {
  $axios.onRequest((config) => {
    if (store.state.user.token) {
      config.headers.Authorization = 'Bearer ' + store.state.user.token
    }
    // eslint-disable-next-line no-console
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    // eslint-disable-next-line no-console
    console.log(error)
    const code = parseInt(error.response && error.response.status)
    if (code === 405) {
      redirect('/login')
    }
  })
}
