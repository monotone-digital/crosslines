import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProfileBrandLogo } from '@/components/profile-brand-logo';
import { profileBrands } from '@/content/profile-brands';

export function ProfileTierStrip() {
  return (
    <section className="border-y border-line bg-paper px-5 py-8 sm:px-8">
      <div className="mx-auto grid max-w-[1480px] gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
        <div>
          <p className="eyebrow">Profiles we offer</p>
          <p className="mt-3 text-sm text-muted">
            Five manufacturers across three clearly numbered tiers.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 lg:justify-end">
          {profileBrands.map((brand) => (
            <ProfileBrandLogo key={brand.id} brand={brand} compact />
          ))}
          <Link
            href="/systems"
            className="ml-1 inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-xs font-semibold text-white"
          >
            Compare profiles <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
