import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

import './assets/main.css'
import 'uno.css'
// element css
import 'element-plus/dist/index.css'
// element dark(内置暗黑模式)
import 'element-plus/theme-chalk/dark/css-vars.css'

createApp(App).use(ElementPlus).mount('#app')
