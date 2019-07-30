export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    console.log(error)
    const code = parseInt(error.response && error.response.status)
    if (code === 405) {
      redirect('/login')
    }
  })
}