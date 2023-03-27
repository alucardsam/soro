<template>
  <NavbarComp />
  <h1>StickersView</h1>
</template>

<script setup>
import NavbarComp from '@components/NavbarComp.vue'
defineProps({
  name: 'StickersView',
  components: {
    NavbarComp,
  }
})
</script>

<style scoped>
</style>
