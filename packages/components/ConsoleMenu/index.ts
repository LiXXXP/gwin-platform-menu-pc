import type { App } from 'vue'
import ConsoleMenu from './index.vue'

type SFCWithInstall<T> = T & { install(app: App): void } // vue 安装

// 安装
ConsoleMenu.install = (app: App) => {
  app.component(ConsoleMenu.name, ConsoleMenu)
}

const InConsoleMenu: SFCWithInstall<typeof ConsoleMenu> = ConsoleMenu as SFCWithInstall<typeof ConsoleMenu> // 增加类型
export default InConsoleMenu
