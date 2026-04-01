export function useOrganizationSchema() {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Aldonza Gourmet',
          url: 'https://aldonzagourmet.com',
          logo: 'https://aldonzagourmet.com/images/logo.png',
          description: 'Productos gourmet españoles: vinos, cavas, aceite de oliva virgen extra, azafrán y queso manchego DOP. Elaborados en la Dehesa de Navamarín, Munera (Albacete).',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Crta. N-430 Km 462,3',
            addressLocality: 'Munera',
            addressRegion: 'Albacete',
            postalCode: '02612',
            addressCountry: 'ES',
          },
          telephone: '+34967217711',
          email: 'info@aldonzagourmet.com',
          sameAs: [
            'https://www.facebook.com/aldonzagourmet',
            'https://www.instagram.com/aldonzagourmet',
            'https://twitter.com/aldonzagourmet',
            'https://www.youtube.com/aldonzagourmet',
          ],
        }),
      },
    ],
  })
}

export function useLocalBusinessSchema() {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://aldonzagourmet.com/#localbusiness',
          name: 'Aldonza Gourmet',
          image: 'https://aldonzagourmet.com/images/logo.png',
          url: 'https://aldonzagourmet.com',
          telephone: '+34967217711',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Crta. N-430 Km 462,3',
            addressLocality: 'Munera',
            addressRegion: 'Albacete',
            postalCode: '02612',
            addressCountry: 'ES',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 38.9447,
            longitude: -2.4917,
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '09:00',
            closes: '18:00',
          },
        }),
      },
    ],
  })
}

export function useBreadcrumbSchema(items: { name: string; url: string }[]) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `https://aldonzagourmet.com${item.url}`,
          })),
        }),
      },
    ],
  })
}

export function useProductSchema(product: {
  name: string
  description: string
  image?: string
  category: string
}) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.description,
          image: product.image,
          category: product.category,
          brand: {
            '@type': 'Brand',
            name: 'Aldonza Gourmet',
          },
          manufacturer: {
            '@type': 'Organization',
            name: 'Aldonza Gourmet',
          },
        }),
      },
    ],
  })
}
