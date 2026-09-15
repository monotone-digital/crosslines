import type { ProfileBrand } from '@/content/profile-brands';

export function ProfileBrandLogo({
  brand,
  compact = false,
}: {
  brand: ProfileBrand;
  compact?: boolean;
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-xl border ${brand.logoSurface === 'dark' ? 'border-white/12 bg-ink' : 'border-black/8 bg-white'} ${compact ? 'h-11 w-[8.25rem] px-3' : 'h-14 w-40 px-4'}`}
    >
      <img
        src={brand.logo}
        alt={`${brand.name} logo`}
        width={brand.logoWidth}
        height={brand.logoHeight}
        loading="lazy"
        decoding="async"
        className={`w-auto max-w-full object-contain ${brand.logoClass}`}
      />
    </span>
  );
}
