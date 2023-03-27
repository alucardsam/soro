<template>
  <div className="w-full bg-white rounded-lg p-4 flex flex-col gap-4 items-center justify-center md:justify-between">
    <h1 className="uppercase font-semibold cursor-pointer text-xl">
      Brand
    </h1>
    <nav className="flex items-center gap-4">
      <a href="#" className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">
        Inicio
      </a>
      <a href="#" className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">
        Nostros
      </a>
      <a href="#" className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">
        Servicios
      </a>
      <a href="#" className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">
        Blog
      </a>
      <a href="#" className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">
        Contacto
      </a>
    </nav>
  </div>
</template>

<script setup>
defineProps({
  name: 'NavbarV1'
})
</script>

<style scoped></style>