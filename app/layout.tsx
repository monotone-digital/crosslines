import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import { Analytics } from '@/components/analytics';
import { JsonLd } from '@/components/json-ld';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, siteJsonLd } from '@/lib/seo';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#211f1b',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: 'The Crosslines | uPVC Windows & Doors in Multan',
    template: '%s | The Crosslines',
  },
  description: SITE_DESCRIPTION,
  referrer: 'origin-when-cross-origin',
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Home improvement',
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [{ url: '/favicon.png', sizes: '501x501', type: 'image/png' }],
    shortcut: '/favicon.png',
    apple: [{ url: '/favicon.png', sizes: '501x501', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          other: {
            'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
          },
        }
      : {}),
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: SITE_URL,
    siteName: SITE_NAME,
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
    <html lang="en-PK">
      <body className={`${geist.variable} antialiased`}>
        <JsonLd data={siteJsonLd} />
        <Analytics />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
