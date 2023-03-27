<template>
  <NavbarComp />
  <h1>LlaverosView</h1>
</template>

<script setup>
import NavbarComp from '@components/NavbarComp.vue'
defineProps({
  name: 'LlaverosView',
  components: {
    NavbarComp,
  }
})
</script>

<style scoped>
</style>
