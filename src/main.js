import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

window.vm = app.mount('#app')
