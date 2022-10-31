import { createApp } from 'vue'
import App from './App.vue'
import Contador from './Contador.vue'

const app = createApp(App)

app.component('app-contador', Contador)
app.mount('#app')
