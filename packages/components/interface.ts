export interface MenuItem {
  title: string
  icon: string
  path?: string
  router?: string
  child?: MenuItem[]
}
