import type { Metadata } from 'next';

export const SITE_NAME = 'The Crosslines';
export const SITE_URL = 'https://thecrosslinesgroup.com';
export const SITE_DESCRIPTION =
  'uPVC windows, doors and conservatories manufactured in Multan and installed across Punjab, with a ten-year profile warranty and lifetime support.';

export const businessDetails = {
  phoneDisplay: '0300 873 6655',
  phoneInternational: '+923008736655',
  email: 'thecrosslinesgroup28@gmail.com',
  address: 'Head Office, Gujjar Chowk, Qadirpur Ran Bypass, Multan',
  mapUrl: 'https://share.google/ab8KzWjphfcYqemXK',
  socialProfiles: [
    'https://share.google/ab8KzWjphfcYqemXK',
    'https://www.facebook.com/p/The-Crosslines-61570975897869/',
    'https://www.instagram.com/thecrosslinesfactory/',
    'https://www.tiktok.com/@the.crosslines',
  ],
} as const;

type SocialImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

type CreateMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | '/';
  image?: SocialImage;
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

const defaultSocialImage: SocialImage = {
  url: '/og.webp',
  width: 2688,
  height: 1520,
  alt: 'The Crosslines uPVC windows, doors and conservatories',
};

export function createMetadata({
  title,
  description,
  path,
  image = defaultSocialImage,
  absoluteTitle = false,
  noIndex = false,
}: CreateMetadataOptions): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = new URL(path, SITE_URL).toString();
  const imageUrl = new URL(image.url, SITE_URL).toString();

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_PK',
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: true,
            googleBot: { index: false, follow: true },
          },
        }
      : {}),
  };
}

type JsonLdObject = Record<string, unknown>;

const serviceAreas: JsonLdObject[] = [
  { '@type': 'City', name: 'Multan' },
  { '@type': 'City', name: 'Lahore' },
  { '@type': 'City', name: 'Bahawalpur' },
  { '@type': 'City', name: 'Dera Ghazi Khan' },
  { '@type': 'City', name: 'Faisalabad' },
  { '@type': 'City', name: 'Islamabad' },
  { '@type': 'AdministrativeArea', name: 'South Punjab' },
  { '@type': 'AdministrativeArea', name: 'Punjab, Pakistan' },
  { '@type': 'Country', name: 'Pakistan' },
];

export const siteJsonLd: JsonLdObject = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${SITE_URL}/#business`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION,
      foundingDate: '2019',
      slogan: 'Made in Multan. Installed across Punjab. Supported for life.',
      logo: {
        '@type': 'ImageObject',
        '@id': `${SITE_URL}/#logo`,
        url: `${SITE_URL}/brand/crosslines-mark.png`,
        contentUrl: `${SITE_URL}/brand/crosslines-mark.png`,
        width: 501,
        height: 501,
        caption: SITE_NAME,
      },
      image: `${SITE_URL}/og.webp`,
      telephone: businessDetails.phoneInternational,
      email: businessDetails.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Head Office, Gujjar Chowk, Qadirpur Ran Bypass',
        addressLocality: 'Multan',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
      hasMap: businessDetails.mapUrl,
      publicAccess: true,
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'https://schema.org/Monday',
          'https://schema.org/Tuesday',
          'https://schema.org/Wednesday',
          'https://schema.org/Thursday',
          'https://schema.org/Saturday',
          'https://schema.org/Sunday',
        ],
        opens: '09:00',
        closes: '17:00',
      },
      areaServed: serviceAreas,
      currenciesAccepted: 'PKR',
      knowsLanguage: ['en-PK'],
      sameAs: businessDetails.socialProfiles,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: businessDetails.phoneInternational,
        contactType: 'sales and customer service',
        areaServed: 'PK',
        availableLanguage: ['English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: 'en-PK',
      publisher: { '@id': `${SITE_URL}/#business` },
    },
  ],
};

type ServiceSchema = {
  name: string;
  serviceType: string;
  description: string;
  installationArea?: 'Punjab' | 'Pakistan';
};

type CreatePageJsonLdOptions = {
  name: string;
  description: string;
  path: `/${string}` | '/';
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  image?: string;
  service?: ServiceSchema;
};

export function createPageJsonLd({
  name,
  description,
  path,
  type = 'WebPage',
  image,
  service,
}: CreatePageJsonLdOptions): JsonLdObject {
  const url = new URL(path, SITE_URL).toString();
  const breadcrumbId = `${url}#breadcrumb`;
  const serviceId = `${url}#service`;
  const graph: JsonLdObject[] = [
    {
      '@type': type,
      '@id': `${url}#webpage`,
      url,
      name,
      description,
      inLanguage: 'en-PK',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
      ...(path !== '/' ? { breadcrumb: { '@id': breadcrumbId } } : {}),
      ...(image
        ? {
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: new URL(image, SITE_URL).toString(),
            },
          }
        : {}),
      ...(service ? { mainEntity: { '@id': serviceId } } : {}),
    },
  ];

  if (path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name,
          item: url,
        },
      ],
    });
  }

  if (service) {
    graph.push({
      '@type': 'Service',
      '@id': serviceId,
      url,
      name: service.name,
      serviceType: service.serviceType,
      description: service.description,
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed:
        service.installationArea === 'Pakistan'
          ? { '@type': 'Country', name: 'Pakistan' }
          : { '@type': 'AdministrativeArea', name: 'Punjab, Pakistan' },
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
