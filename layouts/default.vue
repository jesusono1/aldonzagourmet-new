<template>
  <div class="min-h-screen flex flex-col font-body">
    <header class="bg-dark text-white">
      <nav class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <NuxtLinkLocale to="/" class="font-brand text-3xl text-burgundy-50">
          Aldonza Gourmet
        </NuxtLinkLocale>
        <ul class="hidden lg:flex items-center gap-8 text-sm font-medium">
          <li><NuxtLinkLocale to="/finca/tierra" class="hover:text-accent transition-colors">{{ $t('nav.finca') }}</NuxtLinkLocale></li>
          <li><NuxtLinkLocale to="/productos" class="hover:text-accent transition-colors">{{ $t('nav.productos') }}</NuxtLinkLocale></li>
          <li><NuxtLinkLocale to="/experiencias" class="hover:text-accent transition-colors">{{ $t('nav.experiencias') }}</NuxtLinkLocale></li>
          <li><NuxtLinkLocale to="/blog" class="hover:text-accent transition-colors">{{ $t('nav.blog') }}</NuxtLinkLocale></li>
          <li>
            <a href="https://tienda.aldonzagourmet.com" target="_blank" rel="noopener"
               class="bg-burgundy-900 text-white px-4 py-2 rounded hover:bg-burgundy-800 transition-colors">
              {{ $t('nav.tienda') }}
            </a>
          </li>
          <li><NuxtLinkLocale to="/contacto" class="hover:text-accent transition-colors">{{ $t('nav.contacto') }}</NuxtLinkLocale></li>
          <li>
            <div class="flex gap-2 text-xs text-burgundy-300">
              <NuxtLink v-for="loc in locales" :key="loc.code"
                :to="switchLocalePath(loc.code)"
                class="hover:text-white transition-colors"
                :class="{ 'text-accent font-bold': locale === loc.code }">
                {{ loc.code.toUpperCase() }}
              </NuxtLink>
            </div>
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="bg-dark text-burgundy-200 py-12">
      <div class="max-w-7xl mx-auto px-4 text-center text-sm">
        <p class="font-brand text-2xl text-burgundy-50 mb-4">Aldonza Gourmet</p>
        <p>{{ $t('common.direccion') }}</p>
        <p class="mt-1">Tel: {{ $t('common.telefono') }} · {{ $t('common.email') }}</p>
        <p class="mt-4 text-burgundy-400">&copy; {{ new Date().getFullYear() }} Aldonza Gourmet. {{ $t('common.footer_copyright') }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

useOrganizationSchema()
</script>
