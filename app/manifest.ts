import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Crosslines',
    short_name: 'Crosslines',
    description:
      'uPVC windows, doors and conservatories manufactured in Multan and installed across Punjab.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f4ed',
    theme_color: '#211f1b',
    lang: 'en-PK',
    icons: [
      {
        src: '/icon.png',
        sizes: '501x501',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
