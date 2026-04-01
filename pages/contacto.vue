<template>
  <div>
    <section class="py-20 px-4 max-w-5xl mx-auto">
      <h1 class="font-display text-4xl text-burgundy-900 mb-6">{{ $t('nav.contacto') }}</h1>
      <p class="font-body text-lg text-gray-700">{{ $t('common.direccion') }}</p>
      <p class="font-body text-lg text-gray-700">Tel: {{ $t('common.telefono') }} · {{ $t('common.email') }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
usePageSeo('meta.contacto.title', 'meta.contacto.description')
useLocalBusinessSchema()
</script>
