<template>
  <div>
    <section class="py-20 px-4 max-w-5xl mx-auto">
      <h1 class="font-display text-4xl text-burgundy-900 mb-6 capitalize">Beneficios — {{ route.params.producto }}</h1>
      <p class="font-body text-lg text-gray-700">Propiedades y beneficios para la salud.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
