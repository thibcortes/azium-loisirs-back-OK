const path = require('path')
const axios = require('axios')

module.exports = {
  router: {},
  plugins: [{
    src: '~/plugins/lodash.js',
    ssr: true
  },
  {
    src: '~/plugins/ga.js',
    ssr: false
  },
  {
    src: '~/plugins/components',
    ssr: true
  },
  ],
  serverMiddleware: [],
  head: {
    title: 'Azium Loisirs',
    meta: [{
      charset: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      hid: 'description',
      name: 'description',
      content: 'description here',
    },
    ],
    link: [{
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Open+Sans',
    },
    {
      rel: 'stylesheet',
      href: 'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      integrity: 'sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt',
      crossorigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css",
    },
    ],
  },
  script:[
    {
      src:'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
    },
    {
      src:'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js',
    },
  ],
  loading: {
    color: '#D84551',
    height: '3px',
  },
  build: {
    vendor: ['axios'],
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.splice(0, 0, {
          test: /\.js$/,
          include: [path.resolve(__dirname, './node_modules/vue2-google-maps')],
          loader: 'babel-loader',
        })
      }
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    },
    extractCSS: true,
  },
  css: [{
    src: '~assets/css/main.scss',
    lang: 'scss'
  }],
  modules: [
    ['nuxt-buefy', {
      defaultIconPack: 'far'
    }]
  ],
  generate: {
    routes: function () {
      return axios.get('https://api.azium.fr/wp-json/wp/v2/posts').then((res) => {
        return res.data.map((post) => {
          return '/actualites/' + post.slug
        })
      })
    }
  }
}
