<template>
  <svg-icon v-if="icon" :icon-class="icon" />
  <span class="console-menu-container__title">{{ title }}</span>
</template>

<script setup lang="ts">
interface Props {
  icon?: string
  title: string
}

withDefaults(defineProps<Props>(), {
  icon: undefined
})
</script>
