<template>
  <div>
    <section class="relative h-screen flex items-center justify-center bg-dark">
      <div class="text-center">
        <h1 class="font-brand text-7xl text-burgundy-50 mb-4">Aldonza Gourmet</h1>
        <p class="font-display text-2xl text-burgundy-200">{{ $t('home.slogan') }}</p>
        <p class="font-body text-lg text-burgundy-300 mt-6 max-w-2xl mx-auto">{{ $t('home.intro') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('meta.home.title'),
  meta: [
    { name: 'description', content: t('meta.home.description') },
  ],
})
</script>
