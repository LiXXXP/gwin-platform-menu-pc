<template>
  <console-menu :menu-list="data"></console-menu>
</template>

<script setup lang="ts">
import { ConsoleMenu, MenuItem } from '~/components/index' // 开发
import { computed } from 'vue-demi'
import { useRouter } from 'vue-router'
import { RouteConfig } from '#/global'

const router = useRouter()

const data = computed(() => {
  const menuList: MenuItem[] = []
  const routes = router.getRoutes()
  console.log(routes)
  console.log(router.options.routes)
  router.options.routes.forEach((route) => {
    const menuItem: MenuItem | undefined = generateMenuItem(route as RouteConfig)
    if (menuItem) {
      menuList.push(menuItem)
    }
  })
  return menuList
})

function generateMenuItem(route: RouteConfig, parent?: MenuItem): MenuItem | undefined {
  if (!route.hidden && route.meta) {
    const menuItem = route.meta as MenuItem
    if (parent) {
      if (parent.router === '/') {
        menuItem.router = parent.router + route.path
      } else {
        menuItem.router = parent.router + '/' + route.path
      }
    } else {
      menuItem.router = route.path
    }
    if (route.children) {
      menuItem.child = []
      route.children.forEach((r) => {
        const subMenuItem: MenuItem | undefined = generateMenuItem(r as RouteConfig, menuItem)
        if (subMenuItem) {
          menuItem.child?.push(subMenuItem)
        }
      })
    }
    return menuItem
  }
  return undefined
}
</script>

<style lang="scss" scoped></style>
