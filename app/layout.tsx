import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Analytics } from '@/components/analytics';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { WhatsAppButton } from '@/components/whatsapp-button';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thecrosslinesgroup.com'),
  title: {
    default: 'The Crosslines | uPVC Windows & Doors in Multan',
    template: '%s | The Crosslines',
  },
  description:
    'uPVC windows, doors and conservatories manufactured in Multan and installed across Punjab, with a ten-year profile warranty and lifetime support.',
  openGraph: {
    type: 'website',
    url: 'https://thecrosslinesgroup.com',
    siteName: 'The Crosslines',
    title: 'The Crosslines | uPVC Windows & Doors in Multan',
    description: 'Made in Multan. Installed across Punjab. Supported for life.',
    images: [{ url: '/og.webp', width: 2688, height: 1520, alt: 'The Crosslines — uPVC windows, doors and conservatories' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Crosslines | uPVC Windows & Doors in Multan',
    description: 'Made in Multan. Installed across Punjab. Supported for life.',
    images: ['/og.webp'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        <Analytics />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
