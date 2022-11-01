import { createApp } from 'vue'
import App from './App.vue'
import Contadores from './Contadores.vue'

const app = createApp(App)

app.component('app-contadores', Contadores)
app.mount('#app')
