import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import Upload from './components/Upload/index.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('Upload', Upload)


app.mount('#app')
