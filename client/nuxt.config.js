require("dotenv").config();

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.SITE_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.SITE_DESCRIPTION }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/loading.vue',

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-notifications.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv'
  ],

  /*
   ** Router configuration
   */
  router: {
    middleware: ['auth']
  },

  /*
    ** Axios module configuration
    */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.API_ENDPOINT
  },

  /*
   ** Auth configuration
   */
  auth: {
    strategies: {
      password_grant_custom: {
        _scheme: "~/auth/schemes/PassportPasswordScheme.js",
        client_id: process.env.PASSPORT_PASSWORD_GRANT_ID,
        client_secret: process.env.PASSPORT_PASSWORD_GRANT_SECRET,
        endpoints: {
          login: {
            url: "/oauth/token",
            method: "post",
            propertyName: "access_token"
          },
          user: {
            url: "/api/user"
          },
          logout: false
        }
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
