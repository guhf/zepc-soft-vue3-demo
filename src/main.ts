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

// 全局警告
// app.config.warnHandler = (msg, vm, trace) => {

// }

// 全局错误
app.config.errorHandler = (err, vm, info) => {

}


app.mount('#app')
