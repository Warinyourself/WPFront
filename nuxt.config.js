export default {
  mode: 'universal',

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

  transition: {
    name: 'router-animation'
  },

  router: {
    middleware: ['auth']
  },

  css: ['@/assets/style/index.styl'],

  plugins: [
    { src: '~/plugins/i18n.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/vue-meta.js' },
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
    'cookie-universal-nuxt',
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
    baseURL: 'http://back:8080/',
    browserBaseURL: 'http://localhost:8080/'
  },

  manifest: {
    name: 'WP',
    display: 'standalone',
    background_color: '#19102e',
    theme_color: '#150d28'
  },

  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}
