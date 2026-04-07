import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const app = createApp(App)

app.mixin({
  created() {
    if (this.$options.metaInfo) {
      if (typeof document !== 'undefined') {
        const title = this.$options.metaInfo.title || 'ConectaUNET';
        document.title = title;
      }
    }
  }
})

app.use(router)
app.component('AppHeader', AppHeader)
app.component('AppFooter', AppFooter)
app.mount('#app')
