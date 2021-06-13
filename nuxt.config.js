import env from './env' // 环境配置文件
export default {
  mode: 'spa',
  env: {
    // BASE_URL: env[process.env.NODE_ENV].BASE_URL,
    // NODE_ENV: env[process.env.NODE_ENV].NODE_ENV,
    // PROXY_URL: env[process.env.NODE_ENV].BASE_URL
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '慧展云',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/common/common.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/vuex-persistedstate.client.js'

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    prefix: '/api',
    credentials: false,
    proxy: true
  },
  proxy: {
    '/api/': {
      target: 'https://i.news.qq.com',
      pathRewrite: {
        '^/api/': ''
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    base: '/nuxt-vr'
  },
  generate: {
    dir: 'docs',
    subFolder: false
  }
}
