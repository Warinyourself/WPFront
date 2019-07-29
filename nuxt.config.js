export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#ff1c76' },

  //transition: {
    //name: 'router-animation',
  //},

  /*
   ** Global CSS
   */
  css: [
    '@/assets/style/index.styl',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-meta.js',
    '~/plugins/axios.js',
    '~/plugins/app-components.js',
    {src: '~plugins/vuex-router-sync.js', ssr: false},
    {src: '~/plugins/localStorage.js', ssr: false }
  ],

  modules: [
    '@nuxtjs/axios', // https://axios.nuxtjs.org/extend
    '@nuxtjs/pwa',
    //'@nuxtjs/eslint-module'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://localhost:8080/'
  },

  manifest: {
    "name": "CAC",
    "display": "standalone",
    "background_color": "#19102e",
    "theme_color": "#150d28"
  },
  
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
