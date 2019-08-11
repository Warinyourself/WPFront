export default ({ $axios, redirect }) => {
  $axios.onRequest((config) => {
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
