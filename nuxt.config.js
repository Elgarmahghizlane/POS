export default {
  server: {
    port: 8080,
    host: 'localhost',
    timing: false
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Connexion',
    titleTemplate: '%s - MyMeal POS',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap' }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/global.css',
    '~/assets/widths.css',
    '~/assets/heights.css',
    '~/assets/fontSizes.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/BVToolTip',
    '~/plugins/BVCollapse',
    '~/plugins/FnTools'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  router: {
    middleware: ['auth'],
    fallback: true,
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    },
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
  },
  bootstrapVue: {
    icons: true
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8080/'
    // baseURL: 'http://api.pos.mymeal.ma/'
  },
  auth: {
    redirect: {
      login: '/login',
      home: '/',
      logout: '/login',
      callback: false
    },
    watchLoggedIn: true,
    rewriteRedirects: true,
    localStorage: false, // REALLY not secure, so nah
    resetOnError: true, // kick the user if any error happens w/ the auth
    strategies: {
      local: {
        token: {
          prefix: 'mymeal_pos.',
          property: 'jwt',
          required: true,
          type: 'Bearer',
          maxAge: 86400 * 15,
          global: true
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: false },
          logout: { url: '/auth/logout', method: 'post', propertyName: false },
          user: { url: '/auth/me', method: 'get', propertyName: false }
        }
      }
    },
    cookie: {
      prefix: 'beegup.auth.',
      options: {
        secure: true,
        maxAge: 86400 * 15
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  env: {
    PRINTER1: 'http://192.168.0.5/',
    PRINTER2: 'http://192.168.0.6/',
    PRINTER3: 'http://192.168.0.7/'
  }
}
