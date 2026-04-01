<template>
  <div>
    <section class="py-20 px-4 max-w-5xl mx-auto">
      <h1 class="font-display text-4xl text-burgundy-900 mb-6">{{ $t('nav.blog') }}</h1>
      <p class="font-body text-lg text-gray-700">Noticias y artículos de Aldonza Gourmet.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: 'Blog | Aldonza Gourmet',
  meta: [
    { name: 'description', content: 'Noticias y artículos de Aldonza Gourmet.' },
  ],
})
</script>
