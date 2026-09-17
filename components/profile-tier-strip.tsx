import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProfileBrandLogo } from "@/components/profile-brand-logo";
import { profileBrands } from "@/content/profile-brands";

export function ProfileTierStrip() {
  return (
    <section className="border-y border-line bg-paper px-5 py-8 sm:px-8">
      <div className="mx-auto grid max-w-[1480px] gap-6 lg:grid-cols-[0.48fr_minmax(0,1.2fr)_auto] lg:items-center">
        <div>
          <p className="eyebrow">Profiles we offer</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
            Five manufacturers across three carefully selected series.
          </p>
        </div>

        <div
          className="profile-marquee min-w-0"
          aria-label="Profile manufacturers available from The Crosslines"
        >
          <div className="profile-marquee-track">
            {[false, true].map((duplicate) => (
              <div
                key={duplicate ? "duplicate" : "original"}
                className="profile-marquee-group"
                aria-hidden={duplicate ? true : undefined}
              >
                {profileBrands.map((brand) => (
                  <ProfileBrandLogo
                    key={(duplicate ? "duplicate" : "original") + "-" + brand.id}
                    brand={brand}
                    compact
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/systems"
          className="group inline-flex min-h-11 justify-self-start items-center gap-2 rounded-full bg-ink px-5 text-xs font-semibold text-white lg:justify-self-end"
        >
          Compare profiles
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
