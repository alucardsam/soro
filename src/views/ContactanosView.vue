<template>
  <NavbarComp />
  <h1>ContactanosView</h1>
</template>

<script setup>
import NavbarComp from '@components/NavbarComp.vue'
defineProps({
  name: 'ContactanosView',
  components: {
    NavbarComp,
  }
})
</script>

<style scoped>
</style>
