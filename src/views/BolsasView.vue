<template>
  <NavbarComp />
  <h1>BolsasView</h1>
</template>

<script setup>
import NavbarComp from '@components/NavbarComp.vue'
defineProps({
  name: 'BolsasView',
  components: {
    NavbarComp,
  }
})
</script>

<style scoped>
</style>
