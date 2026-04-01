import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@nuxt/eslint',
  ],

  css: ['~/assets/css/tailwind.css'],

  typescript: {
    strict: true,
    typeCheck: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Aldonza Gourmet - Vinos, Aceite, Azafrán, Cava y Queso Manchego',
      meta: [
        { name: 'description', content: 'Aldonza Gourmet - Productos gourmet de la Dehesa de Navamarín, Munera (Albacete). Vinos, AOVE, azafrán, cava y queso manchego DOP.' },
      ],
    },
  },

  compatibilityDate: '2026-04-01',
})
