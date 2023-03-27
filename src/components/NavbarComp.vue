<template>
  <div class="w-full bg-white rounded-lg p-4 flex flex-col gap-4 items-center justify-center md:justify-between">
    <h1 class="uppercase font-semibold cursor-pointer text-xl">
      <router-link to="/">SORO</router-link>
    </h1>
    <nav class="flex items-center gap-4">
      <router-link to="/tazas" class="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors" :class="{ 'bg-gray-100' : activePath.tazas }">Tazas</router-link>
      <router-link to="/playeras" class="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors" :class="{ 'bg-gray-100' : activePath.playeras }">Playeras</router-link>
      <router-link to="/bolsas" class="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors" :class="{ 'bg-gray-100' : activePath.bolsas }">Bolsas</router-link>
      <router-link to="/llaveros" class="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors" :class="{ 'bg-gray-100' : activePath.llaveros }">Llaveros</router-link>
      <router-link to="/stickers" class="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors" :class="{ 'bg-gray-100' : activePath.stickers }">Stickers</router-link>
      <router-link to="/contactanos" class="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors" :class="{ 'bg-gray-100' : activePath.contactanos }">Contactanos</router-link>
    </nav>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
defineProps({
  name: 'NavbarComp'
})
const route = useRoute()
const activePath = computed(() => {
  const objectPath = {
    inicio: false,
    tazas: false,
    playeras: false,
    bolsas: false,
    llaveros: false,
    stickers: false,
    contactanos: false
  }
  switch (route.path) {
    case '/':
      objectPath.inicio = true
      break
    case '/tazas':
      objectPath.tazas = true
      break
    case '/playeras':
      objectPath.playeras = true
      break
    case '/bolsas':
      objectPath.bolsas = true
      break
    case '/llaveros':
      objectPath.llaveros = true
      break
    case '/stickers':
      objectPath.stickers = true
      break
    case '/contactanos':
      objectPath.contactanos = true
      break
  }
  console.log(route.path, objectPath)
  return objectPath
})
</script>

<style scoped></style>