import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { CtaBand } from '@/components/cta-band';
import { PageHero } from '@/components/page-hero';
import { ProfileTierStrip } from '@/components/profile-tier-strip';
import { Reveal } from '@/components/reveal';
import { WarrantyStrip } from '@/components/warranty-strip';
import { WindowTypeExplorer } from '@/components/window-type-explorer';

export const metadata: Metadata = {
  title: 'uPVC Windows in Multan',
  description:
    'Made-to-measure casement, sliding and fixed uPVC windows for homes and building projects across Punjab.',
};

export default function WindowsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Windows"
        number="02 / 08"
        title="The wall opening decides the window."
        summary="Every type is available across all three profile tiers. The type decides how it opens. The tier decides how it ages."
        image="/images/windows-casement.webp"
        imageAlt="An open black uPVC casement window in a light interior"
      />

      <section className="bg-paper px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="mx-auto max-w-[1480px]">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
            <h2 className="max-w-lg text-balance text-[clamp(2.5rem,4.2vw,4.8rem)] font-medium leading-[0.94] tracking-[-0.05em]">
              Four window types
            </h2>
            <p className="max-w-2xl self-end text-lg leading-8 text-muted sm:text-xl">
              One opening often uses more than one type. We work it out room
              by room.
            </p>
          </div>
          <WindowTypeExplorer />
        </Reveal>
      </section>

      <section
        id="glass"
        className="bg-ink px-5 py-24 text-white sm:px-8 sm:py-32"
      >
        <Reveal className="mx-auto grid max-w-[1480px] gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[34rem] overflow-hidden rounded-[1.5rem] bg-paper lg:rounded-[2rem]">
            <img
              src="/images/profile-cutaway.webp"
              alt="A window profile holding insulated glazing"
              width="2304"
              height="1728"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow !text-gold">Glass</p>
            <h2 className="mt-8 text-balance text-[clamp(3rem,5.3vw,6rem)] font-medium leading-[0.93] tracking-[-0.055em]">
              One pane, two or three.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/60">
              The sealed cavity between panes slows heat because trapped air
              conducts it poorly. In Multan, that earns its money on a summer
              afternoon—and again on a main road, where the second pane cuts
              noise.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ['10mm', 'Our standard'],
                ['8mm', 'For smaller openings'],
                ['12mm', 'For large spans or noise'],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/12 p-5"
                >
                  <p className="text-3xl font-medium text-gold">{value}</p>
                  <p className="mt-2 text-xs text-white/48">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm leading-6 text-white/52">
              A bedroom on a main road and a store room off an internal
              courtyard are not the same problem. We specify the glass per
              opening.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-[1480px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <h2 className="text-[clamp(2.8rem,5vw,5.6rem)] font-medium leading-none tracking-[-0.055em]">
              Finishes
            </h2>
            <p className="text-[clamp(2.3rem,4.2vw,4.6rem)] font-medium leading-none tracking-[-0.05em] text-muted">
              White, woodgrain and black.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              ['White', 'bg-[#f5f4ef]', 'Clean and architectural'],
              ['Woodgrain laminate', 'woodgrain', 'Warm, natural character'],
              ['Black', 'bg-[#222220]', 'Crisp, contemporary contrast'],
            ].map(([title, style, description]) => (
              <article
                key={title}
                className="overflow-hidden rounded-2xl border border-line bg-white"
              >
                <div className={`aspect-[4/3] ${style}`} />
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="mt-1 text-xs text-muted">{description}</p>
                  </div>
                  <Check className="size-4 text-gold-deep" />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
            You choose from physical swatches, so the colour you pick is not
            dependent on lighting in somebody else’s photograph.
          </p>
        </Reveal>
      </section>

      <section className="bg-sand px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-[clamp(2.8rem,5vw,5.6rem)] font-medium leading-[0.94] tracking-[-0.055em]">
            The frame decides the rest
          </h2>
          <div>
            <p className="max-w-2xl text-xl leading-8 text-muted">
              The part you cannot change later. Glass, hardware and seals all
              fit into the profile. Its grade, chambers, reinforcement and
              seals decide how the window performs long after fitting.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">
              Most of that does not show in a showroom. It shows in year eight,
              in a frame that still closes tightly against dust and a colour
              that has not moved.
            </p>
            <Link
              href="/systems"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-gold-deep"
            >
              See the three tiers of profile <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <ProfileTierStrip />
      <WarrantyStrip />
      <CtaBand />
    </main>
  );
}
