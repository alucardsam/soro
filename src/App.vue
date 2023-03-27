<template>
  <!-- <router-view v-slot="{ Component, route }">
    <transition name="custom-classes" :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view> -->
  <router-view />
</template>

<script setup>
defineProps({
  name: 'App',
})
</script>

<style scoped>
</style>
