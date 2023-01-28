import type { App } from 'vue'

// 组件引入
import ConsoleMenu from './ConsoleMenu'

// 所有组件
const components: any[] = [ConsoleMenu]

/**
 * 组件注册
 * @param app Vue对象
 */
const install = (app: App) => {
  components.forEach((component) => app.component(component.name, component))
}

export { ConsoleMenu }

// 导出接口
export * from './interface'

// 全部导出
export default {
  install,
  ...components
}
