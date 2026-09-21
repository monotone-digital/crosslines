import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const routes = [
  {
    path: '',
    priority: 1,
    images: [
      '/images/hero-residence.webp',
      '/images/service-windows.webp',
      '/images/service-doors.webp',
      '/images/service-glass.webp',
      '/images/service-conservatories.webp',
    ],
  },
  {
    path: '/windows',
    priority: 0.9,
    images: [
      '/images/windows-casement.webp',
      '/images/window-type-casement.webp',
      '/images/window-type-sliding-2-track.webp',
      '/images/window-type-sliding-3-track.webp',
      '/images/window-type-fixed.webp',
    ],
  },
  {
    path: '/doors',
    priority: 0.9,
    images: [
      '/images/doors-lift-slide.webp',
      '/images/door-type-casement.webp',
      '/images/door-type-sliding.webp',
      '/images/door-type-lift-slide.webp',
    ],
  },
  {
    path: '/conservatories',
    priority: 0.9,
    images: ['/images/conservatory.webp', '/images/service-conservatories.webp'],
  },
  {
    path: '/systems',
    priority: 0.8,
    images: ['/images/profile-tiers.webp', '/images/profile-cutaway.webp'],
  },
  {
    path: '/about',
    priority: 0.7,
    images: ['/images/workshop.webp', '/images/facility-floor.webp'],
  },
  {
    path: '/contact',
    priority: 0.8,
    images: [],
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    changeFrequency: route.path === '' ? 'weekly' : 'monthly',
    priority: route.priority,
    images: route.images.map((image) => `${SITE_URL}${image}`),
  }));
}
