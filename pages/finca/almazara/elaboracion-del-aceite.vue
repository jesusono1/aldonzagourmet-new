<template>
  <div>
    <section class="py-20 px-4 max-w-5xl mx-auto">
      <h1 class="font-display text-4xl text-burgundy-900 mb-6">{{ $t('elaboracion.aceite.titulo') }}</h1>
      <p class="font-body text-lg text-gray-700">{{ $t('elaboracion.aceite.intro') }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
usePageSeo('meta.elaboracion_aceite.title', 'meta.elaboracion_aceite.description')
</script>
