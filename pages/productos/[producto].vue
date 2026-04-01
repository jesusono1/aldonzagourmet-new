<template>
  <div>
    <section class="py-20 px-4 max-w-5xl mx-auto">
      <h1 class="font-display text-4xl text-burgundy-900 mb-6 capitalize">{{ route.params.producto }}</h1>
      <p class="font-body text-lg text-gray-700">Detalle del producto.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const producto = route.params.producto as string
const metaKey = `meta.productos_${producto}`

usePageSeo(`${metaKey}.title`, `${metaKey}.description`)
</script>
