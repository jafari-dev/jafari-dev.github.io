import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://jafari.dev';
  const locales = ['en', 'fa'];

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${base}/${l}`])),
      },
    },
    ...locales.map((locale) => ({
      url: `${base}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: locale === 'en' ? 1 : 0.9,
    })),
  ];
}
