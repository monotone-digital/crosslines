export type ProfileBrand = {
  id: string;
  name: string;
  country: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  logoSurface: 'light' | 'dark';
  logoClass: string;
  summary: string;
  detail: string;
  facts: string[];
};

export type ProfileTier = {
  id: string;
  number: string;
  label: string;
  title: string;
  summary: string;
  brands: ProfileBrand[];
};

export const profileTiers: ProfileTier[] = [
  {
    id: 'tier-1',
    number: '01',
    label: 'Tier 1',
    title: 'Imported German & Turkish',
    summary:
      'International manufacturers with broad system portfolios and an established third-party certification footprint.',
    brands: [
      {
        id: 'aluplast',
        name: 'Aluplast',
        country: 'Germany',
        logo: '/brand/profiles/aluplast.svg',
        logoWidth: 836,
        logoHeight: 385,
        logoSurface: 'light',
        logoClass: 'h-9 scale-[1.35]',
        summary:
          'A German uPVC systems manufacturer with an established European certification footprint.',
        detail:
          'Aluplast is a German manufacturer of uPVC window, door and sliding systems. Its published certification footprint includes RAL, ift Rosenheim, the Passive House Institute, TÜV Süd ISO 9001, CE and Rewindo.',
        facts: [
          'Germany',
          'European certification',
          'Window, door & sliding systems',
        ],
      },
      {
        id: 'asas',
        name: 'ASAŞ / Asaspen',
        country: 'Türkiye',
        logo: '/brand/profiles/asas.png',
        logoWidth: 123,
        logoHeight: 33,
        logoSurface: 'dark',
        logoClass: 'h-6',
        summary:
          'The window-systems division of ASAŞ, a Turkish industrial group founded in 1990.',
        detail:
          'Founded in 1990, ASAŞ operates across 90 countries and six continents, with a 400,000 m² production facility and approximately 3,000 employees. Asaspen is its window-systems arm, and those systems carry the VERATEC brand.',
        facts: ['Founded 1990', '90 countries', 'ASAŞ · Asaspen · VERATEC'],
      },
    ],
  },
  {
    id: 'tier-2',
    number: '02',
    label: 'Tier 2',
    title: 'Imported Turkish',
    summary:
      'Established Turkish manufacturers with published technical documentation and strong residential value.',
    brands: [
      {
        id: 'wintech',
        name: 'Wintech',
        country: 'Türkiye',
        logo: '/brand/profiles/wintech.png',
        logoWidth: 1333,
        logoHeight: 362,
        logoSurface: 'light',
        logoClass: 'h-9 scale-[1.15]',
        summary:
          'An ADO Group profile brand founded in Antalya in 1997, with an established Pakistan channel.',
        detail:
          'Wintech is a profile brand of ADO Group, founded in Antalya in 1997. The manufacturer publishes European-standard technical documentation and maintains a dedicated Pakistan contact channel.',
        facts: ['ADO Group', 'Founded 1997', 'Pakistan market channel'],
      },
      {
        id: 'winer',
        name: 'Winer',
        country: 'Türkiye',
        logo: '/brand/profiles/winer.svg',
        logoWidth: 607,
        logoHeight: 210,
        logoSurface: 'light',
        logoClass: 'h-8',
        summary:
          'An Eryap Group profile brand produced in Gaziantep with published Turkish and European certifications.',
        detail:
          'Winer is an Eryap Group brand produced at its Gaziantep facilities. Its published certifications include ISO 9001, ISO 14001, TS 5358 EN 12608, CE, TSE and SKZ certification for laminate foils.',
        facts: ['Eryap Group', 'Gaziantep', 'ISO · CE · TSE · SKZ'],
      },
    ],
  },
  {
    id: 'tier-3',
    number: '03',
    label: 'Tier 3',
    title: 'Pakistani profiles',
    summary:
      'Local supply keeps replacement parts accessible and gives rentals and cost-conscious builds a practical option.',
    brands: [
      {
        id: 'skypen',
        name: 'Skypen',
        country: 'Pakistan',
        logo: '/brand/profiles/skypen.png',
        logoWidth: 500,
        logoHeight: 98,
        logoSurface: 'light',
        logoClass: 'h-7',
        summary:
          'A Karachi-based Pakistani profile supplier with sales coverage across major cities.',
        detail:
          'Skypen is headquartered in Karachi and publishes sales coverage across Karachi, Lahore and Islamabad. Its public range covers casement, sliding and lift-and-slide categories; comparable profile-performance figures are not currently published.',
        facts: ['Pakistan', 'Karachi head office', 'Locally accessible supply'],
      },
    ],
  },
];

export const profileBrands = profileTiers.flatMap((tier) => tier.brands);
