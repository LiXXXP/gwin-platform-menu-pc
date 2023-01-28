<template>
  <template v-if="item.child">
    <el-sub-menu v-if="item.child.length > 1" :index="item.router">
      <template #title>
        <item :icon="item.icon" :title="item.title"></item>
      </template>
      <el-menu-item-group>
        <sidebar-item v-for="child in item.child" :key="child.router" :item="child"></sidebar-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item v-if="item.child.length === 1" :index="item.child[0].router">
      <item :icon="item.icon" :title="item.title"></item>
    </el-menu-item>
  </template>
  <el-menu-item v-else :index="item.router">
    <item :icon="item.icon" :title="item.title"></item>
  </el-menu-item>
</template>

<script setup lang="ts">
import { MenuItem } from '../interface'
import Item from './item.vue'

interface Props {
  item: MenuItem
}

withDefaults(defineProps<Props>(), {})
</script>
