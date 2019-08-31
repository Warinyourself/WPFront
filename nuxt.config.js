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

  loading: { color: '#36a2fd' },

  // transition: {
  // name: 'router-animation',
  // },

  /*
   ** Global CSS
   */
  css: ['@/assets/style/index.styl'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-meta.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/i18n.js' },
    { src: '~/plugins/app/mixins.js' },
    { src: '~/plugins/app/methods.js' },
    { src: '~/plugins/app/components.js' },
    { src: '~/plugins/app/directives.js' },
    { src: '~plugins/vuex-router-sync.js', ssr: false },
    { src: '~/plugins/vuex-persistedstate.js', ssr: false }
  ],

  modules: [
    '@nuxtjs/axios', // https://axios.nuxtjs.org/extend
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],

  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://localhost:8080/'
  },

  manifest: {
    name: 'WP',
    display: 'standalone',
    background_color: '#19102e',
    theme_color: '#150d28'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}
