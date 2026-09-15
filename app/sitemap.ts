import type { MetadataRoute } from 'next';

const routes = ['', '/windows', '/doors', '/conservatories', '/systems', '/projects', '/about', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://thecrosslinesgroup.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/contact' ? 0.9 : 0.8,
  }));
}
