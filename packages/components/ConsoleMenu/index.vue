<template>
  <el-scrollbar class="console-menu-container">
    <div v-if="title" class="console-menu-menuTile">{{ title }}</div>
    <el-menu
      v-if="route"
      :default-active="route.path"
      active-text-color="#3C7DFF"
      background-color="#2A2F37"
      class="el-menu-vertical"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <sidebar-item v-for="(item, index) in menuList" :key="index" :item="item"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
export default {
  name: 'ConsoleMenu'
}
</script>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { MenuItem } from '../interface'
import SidebarItem from './sidebar-item.vue'

const route = useRoute()
const router = useRouter()

const emit = defineEmits(['handleOpen', 'handleClose', 'handleSelect'])

interface MenuProps {
  title?: string
  menuList: MenuItem[]
}

withDefaults(defineProps<MenuProps>(), {
  title: ''
})

// 打开sub-menu 展开的回调
const handleOpen = (index: string) => {
  console.log(index, '展开的回调@handleOpen')
  emit('handleOpen', index)
}

// 关闭sub-menu 收起的回调
const handleClose = (index: string) => {
  console.log(index, '收起的回调@handleClose')
  emit('handleClose', index)
}

// 菜单激活回调
const handleSelect = (index: string, keyPath: string[]) => {
  console.log(index, keyPath, '菜单激活回调 @handleSelect')
  emit('handleSelect', index)
  router.push(index)
}
</script>
