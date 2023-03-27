<template>
  <NavbarImgComp />
</template>

<script setup>
import NavbarImgComp from '@components/NavbarImgComp.vue'
defineProps({
  name: 'InicioView',
  components: {
    NavbarImgComp,
  }
})
</script>

<style scoped>
</style>
