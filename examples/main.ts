import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/element-variables.scss'

import './styles/index.scss' // global css

import WebComponent from '~/components/index' // 开发
import '~/theme-default/index.scss' // 开发

// svg-icon
import SvgIcon from '@gwin/svg-icon'
import '@gwin/svg-icon/lib/theme-default/index.css'

import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(ElementPlus).use(WebComponent).use(router).use(store).use(SvgIcon).mount('#app')
