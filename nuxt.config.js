require("dotenv").config();  
const { getData } = require("country-list");

export default {  
  mode: "universal",  
  /*  
   ** Headers of the page  
   */  
  head: {  
    title: "News Website",  
    meta: [  
      { charset: "utf-8" },  
      { name: "viewport", content: "width=device-width, initial-scale=1" },  
      {  
        hid: "description",  
        name: "description",  
        content: process.env.npm_package_description || ""  
      }  
    ],  
    link: [  
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },  
      {  
        rel: "stylesheet",  
        href:  
         "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"  
      }  
    ],  
    script: [  
      { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },  
      {  
        src:  
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"  
      },  
      {  
        src:  
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"  
      }  
    ]  
  },  
  /*  
   ** Customize the progress-bar color  
   */  
  loading: { color: "#fff" },  
  /*  
   ** Global CSS  
   */  
  css: [],  
  /*  
   ** Plugins to load before mounting the App  
   */  
  plugins: [],  
  /*  
   ** Nuxt.js dev-modules  
   */  
  buildModules: [],  
  /*  
   ** Nuxt.js modules  
   */  
  modules: [  
    // Doc: https://axios.nuxtjs.org/usage    
    "@nuxtjs/axios",  
    "@nuxtjs/dotenv"  
  ],  
  /*  
   ** Axios module configuration  
   ** See https://axios.nuxtjs.org/options
   */  
  axios: {},  
  /*  
   ** Build configuration  
   */  
  build: {  
    /*  
     ** You can extend webpack config here  
     */  
    extend(config, ctx) {}  
  },  
  env: {  
    apiKey: process.env.API_KEY || ""  
  },  
  router: {  
    routes: [  
      {  
        name: "index",  
        path: "/",  
        component: "pages/index.vue"  
      },  
      {  
        name: "headlines-id",  
        path: "/headlines/:countryCode?",  
        component: "pages/headlines/_countryCode.vue"  
      }  
    ]  
  },  
  generate: {  
    routes() {  
      return getData().map(d => `headlines/${d.code}`);  
    }  
  }  
};