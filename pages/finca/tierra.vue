<template>
  <div>
    <section class="py-20 px-4 max-w-5xl mx-auto">
      <h1 class="font-display text-4xl text-burgundy-900 mb-6">{{ $t('nav.tierra') }}</h1>
      <p class="font-body text-lg text-gray-700">{{ $t('finca.tierra.intro') }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
usePageSeo('meta.finca_tierra.title', 'meta.finca_tierra.description')
</script>
