import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'
import './assets/main.css'
import 'quasar/dist/quasar.css'
import 'uno.css'
import { router } from '@/router'

createApp(App).use(Quasar, { config: {
  brand: {
    primary: '#6200ee',
    secondary: '#958da5',
    accent: '#b48392',

    dark: '#1d1d1d',

    positive: '#21BA45',
    negative: '#C10015',
    info: '#31CCEC',
    warning: '#F2C037',
  },
},
}).use(router).mount('#app')
