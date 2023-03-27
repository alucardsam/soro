<template>
  <div class="w-full bg-white rounded-lg p-4 flex flex-col gap-4 items-center justify-center md:justify-between">
    <h1 class="uppercase font-semibold cursor-pointer text-xl">
      <router-link to="/">SORO</router-link>
    </h1>
    <nav class="flex items-center gap-4">
      <!-- <router-link to="/" class="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">Inicio</router-link> -->
      <router-link to="/tazas" class="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">Tazas</router-link>
      <router-link to="/playeras" class="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">Playeras</router-link>
      <router-link to="/bolsas" class="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">Bolsas</router-link>
      <router-link to="/llaveros" class="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">Llaveros</router-link>
      <router-link to="/stickers" class="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">Stickers</router-link>
      <router-link to="/contactanos" class="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">Contactanos</router-link>
    </nav>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
defineProps({
  name: 'NavbarV3'
})
const route = useRoute()
console.log(route.path)
</script>

<style scoped></style>