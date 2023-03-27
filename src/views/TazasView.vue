<template>
  <NavbarComp />
  <h1 class="animate__animated animate__bounce">TazasView</h1>
</template>

<script setup>
import NavbarComp from '@components/NavbarComp.vue'
defineProps({
  name: 'TazasView',
  components: {
    NavbarComp,
  }
})
</script>

<style scoped>
</style>
