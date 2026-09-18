import type { Metadata } from 'next';
import {
  ArrowDown,
  Layers3,
  Shield,
  SunMedium,
  Thermometer,
  Weight,
  Wind,
} from 'lucide-react';
import { CtaBand } from '@/components/cta-band';
import { PageHero } from '@/components/page-hero';
import { ProfileBrandLogo } from '@/components/profile-brand-logo';
import { Reveal } from '@/components/reveal';
import { WarrantyStrip } from '@/components/warranty-strip';
import { profileTiers } from '@/content/profile-brands';

export const metadata: Metadata = {
  title: 'uPVC Profiles & Systems in Multan',
  description:
    'Compare five uPVC profile manufacturers across three tiers and learn what to look for in profile construction, seals, reinforcement and colour performance.',
};

const qualities = [
  [
    Layers3,
    'Profile class',
    'EN 12608 grades profile wall thickness. Class A is thicker; Class B is lighter and less expensive to produce.',
  ],
  [
    Wind,
    'Chambers',
    'Hollow compartments trap air and slow heat and sound. Most quality systems run five or more.',
  ],
  [
    Shield,
    'Seals',
    'Two seals is standard. Three holds a closed sash measurably tighter against Pakistani dust.',
  ],
  [
    Thermometer,
    'Frame heat transfer',
    'Published as Uf in W/m²K. Lower is better. Do not confuse it with the whole-window Uw figure. ',
  ],
  [
    Weight,
    'Reinforcement',
    'Large windows and doors need steel inside the profile to remain straight. It is invisible once assembled.',
  ],
  [
    SunMedium,
    'UV and colour',
    'Stabiliser chemistry and profile grade determine how the frame behaves under years of intense sun.',
  ],
];

export default function SystemsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Profiles & Systems"
        number="05 / 08"
        title="Know the profile. Know who stands behind it."
        summary="Five profile manufacturers across three tiers, supported by a practical guide to what matters inside the frame."
        image="/images/profile-tiers.webp"
        imageAlt="Three uPVC profile systems with different frame depths and chamber structures"
      />

      <section className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-[1480px]">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <h2 className="max-w-lg text-balance text-[clamp(2.8rem,5.3vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em]">
              Buyer’s guide
            </h2>
            <p className="max-w-3xl self-end text-lg leading-8 text-muted sm:text-xl">
              What separates a good window from a cheap one is not brand
              language. These are the things worth comparing in writing.
            </p>
          </div>
          <div className="mt-16 grid border-l border-t border-line md:grid-cols-2 lg:grid-cols-3">
            {qualities.map(([Icon, title, copy], index) => {
              const IconComponent = Icon as typeof Layers3;
              return (
                <article
                  key={title as string}
                  className="min-h-[24rem] border-b border-r border-line p-7 transition-colors hover:bg-sand sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <IconComponent
                      className="size-7 text-gold-deep"
                      strokeWidth={1.3}
                    />
                    <span className="text-xs text-muted">0{index + 1}</span>
                  </div>
                  <h3 className="mt-20 text-3xl font-medium tracking-tight">
                    {title as string}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-muted">
                    {copy as string}
                  </p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="bg-ink px-5 py-24 text-white sm:px-8 sm:py-32">
        <Reveal className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow !text-gold">Take this to any supplier</p>
            <ArrowDown className="mt-10 size-8 text-gold" strokeWidth={1.3} />
          </div>
          <div>
            <h2 className="text-[clamp(2.8rem,5vw,5.6rem)] font-medium leading-[0.94] tracking-[-0.055em]">
              Six questions worth asking.
            </h2>
            <ol className="mt-12 border-t border-white/14">
              {[
                'Which profile class is it, A or B?',
                'How many chambers, and how many seals?',
                'What is the frame’s Uf figure?',
                'Is the frame reinforced, and where?',
                'Is there a written colour guarantee, and how long?',
                'Who covers the installation if something fails?',
              ].map((question, index) => (
                <li
                  key={question}
                  className="grid grid-cols-[3rem_1fr] border-b border-white/14 py-5 text-lg sm:text-xl"
                >
                  <span className="text-sm text-gold">0{index + 1}</span>
                  {question}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      <section className="bg-sand px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-[1480px]">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="eyebrow">Profile manufacturers</p>
              <p className="mt-6 max-w-sm text-sm leading-6 text-muted">
                The company behind a system matters: documentation, continuity
                and access to the right profile all begin there.
              </p>
            </div>
            <div>
              <h2 className="text-balance text-[clamp(2.8rem,5vw,5.6rem)] font-medium leading-[0.94] tracking-[-0.055em]">
                Five companies. Three tiers.
              </h2>
              <p className="mt-7 max-w-3xl text-base leading-7 text-muted">
                We select the exact system after understanding the opening,
                exposure and budget. The companies below show the profile range
                available through Crosslines.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-5">
            {profileTiers.map((tier) => (
              <article
                key={tier.id}
                className="overflow-hidden rounded-[1.5rem] border border-line bg-paper lg:rounded-[2rem]"
              >
                <div className="grid gap-8 border-b border-line p-7 sm:p-9 lg:grid-cols-[0.45fr_1.55fr] lg:p-11">
                  <div className="flex items-start justify-between gap-5 lg:block">
                    <p className="text-4xl font-medium tracking-[-0.05em] text-gold-deep">
                      {tier.number}
                    </p>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-muted lg:mt-4">
                      {tier.label}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                      {tier.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">
                      {tier.summary}
                    </p>
                  </div>
                </div>

                <div
                  className={`grid gap-px bg-line ${tier.brands.length > 1 ? 'lg:grid-cols-2' : ''}`}
                >
                  {tier.brands.map((brand) => (
                    <div key={brand.id} className="bg-paper p-7 sm:p-9 lg:p-11">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <ProfileBrandLogo brand={brand} />
                        <span className="rounded-full border border-line px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted">
                          {brand.country}
                        </span>
                      </div>
                      <h4 className="mt-9 text-3xl font-medium tracking-[-0.035em]">
                        {brand.name}
                      </h4>
                      <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">
                        {brand.detail}
                      </p>
                      <div className="mt-7 flex flex-wrap gap-2">
                        {brand.facts.map((fact) => (
                          <span
                            key={fact}
                            className="rounded-full bg-sand px-3 py-2 text-[0.68rem] font-medium text-ink/68"
                          >
                            {fact}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-8 rounded-[1.5rem] bg-ink p-7 text-white sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:rounded-[2rem] lg:p-12">
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.035em] text-gold sm:text-4xl">
                How to read the tiers
              </h2>
              <p className="mt-5 text-sm text-white/45">
                Crosslines selection guide
              </p>
            </div>
            <div className="grid gap-6 text-sm leading-6 text-white/58 md:grid-cols-2">
              <p>
                The tiers organise our profile range by origin, documentation,
                system breadth and local availability. They are not a universal
                performance score: the right answer still depends on the exact
                system and opening.
              </p>
              <p>
                Exact series names are intentionally excluded here. Any numeric
                performance figure belongs to the specific system named in your
                written quote and will not be attributed to a manufacturer as a
                whole.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <WarrantyStrip />
      <CtaBand
        title="Not sure which tier you need?"
        copy="Tell us the building, how long you plan to keep it and how exposed the elevation is. That is usually enough to point you in the right direction."
      />
    </main>
  );
}
