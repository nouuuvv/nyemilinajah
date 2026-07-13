import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.nyemilinajah.my.id/sitemap.xml',
    host: 'https://www.nyemilinajah.my.id',
  };
}
