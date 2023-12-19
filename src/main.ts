// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import router from './router'

import { createPinia } from 'pinia'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'
import './style.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
// 创建Pinia
const pinia = createPinia()

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {} // import Quasar plugins and add here
  /*
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
  */
})
myApp.use(router)
myApp.use(pinia)

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
