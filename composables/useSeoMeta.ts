export function usePageSeo(titleKey: string, descriptionKey: string) {
  const { t } = useI18n()
  const route = useRoute()
  const { locale } = useI18n()

  const title = computed(() => t(titleKey))
  const description = computed(() => t(descriptionKey))
  const url = computed(() => `https://aldonzagourmet.com${route.fullPath}`)

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Aldonza Gourmet' },
      { property: 'og:locale', content: computed(() => locale.value === 'es' ? 'es_ES' : 'en_GB') },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ],
    htmlAttrs: {
      lang: locale,
    },
  })
}
