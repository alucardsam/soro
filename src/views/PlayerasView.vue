<template>
  <NavbarComp />
  <h1>PlayerasView</h1>
</template>

<script setup>
import NavbarComp from '@components/NavbarComp.vue'
defineProps({
  name: 'PlayerasView',
  components: {
    NavbarComp,
  }
})
</script>

<style scoped>
</style>
