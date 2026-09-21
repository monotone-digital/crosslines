import type { Metadata } from 'next';
import { Compass, Ruler, SunMedium, ThermometerSun } from 'lucide-react';
import { CtaBand } from '@/components/cta-band';
import { JsonLd } from '@/components/json-ld';
import { PageHero } from '@/components/page-hero';
import { ProfileTierStrip } from '@/components/profile-tier-strip';
import { Reveal } from '@/components/reveal';
import { WarrantyStrip } from '@/components/warranty-strip';
import { createMetadata, createPageJsonLd } from '@/lib/seo';

const pageTitle = 'uPVC Conservatories in Multan';
const pageDescription =
  'Made-to-measure uPVC conservatories and garden rooms designed around orientation, shade and year-round use in Pakistan.';

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/conservatories',
  image: {
    url: '/images/conservatory.webp',
    width: 2304,
    height: 1728,
    alt: 'Black-framed uPVC conservatory by The Crosslines',
  },
});

export default function ConservatoriesPage() {
  return (
    <main>
      <JsonLd
        data={createPageJsonLd({
          name: pageTitle,
          description: pageDescription,
          path: '/conservatories',
          image: '/images/conservatory.webp',
          service: {
            name: 'uPVC Conservatory Design and Installation',
            serviceType: 'Made-to-measure uPVC conservatories and garden rooms',
            description: pageDescription,
          },
        })}
      />
      <PageHero
        eyebrow="Conservatories"
        number="04 / 08"
        title="A room that belongs to the garden."
        summary="Built in uPVC and designed around how the room will actually be used through a Multan summer."
        image="/images/conservatory.webp"
        imageAlt="A black-framed glass conservatory attached to a warm ivory home"
        primaryLabel="Book a site survey"
      />

      <section className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="eyebrow">Why build one</p>
          <div>
            <h2 className="max-w-5xl text-balance text-[clamp(2.8rem,5.3vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em]">
              The walls stop behaving like walls.
            </h2>
            <div className="mt-10 grid gap-8 text-base leading-7 text-muted md:grid-cols-2">
              <p>
                A conservatory changes how a house gets used: breakfast where
                the morning light reaches, a room for plants, somewhere to sit
                in December when the lawn looks its best.
              </p>
              <p>
                It is made mostly of glass, and that is the point. You get the
                garden without being outside, and the light without the dust.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-sand px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-[1480px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <p className="eyebrow">Designed from the site</p>
            <h2 className="text-balance text-[clamp(2.8rem,5.2vw,5.8rem)] font-medium leading-[0.94] tracking-[-0.055em]">
              Orientation decides almost everything.
            </h2>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line lg:grid-cols-4">
            {[
              [
                Compass,
                'Direction',
                'Where the room faces changes the light it receives and the heat it holds.',
              ],
              [
                SunMedium,
                'Shade',
                'Roof, overhang and surrounding walls determine whether the room remains usable in June.',
              ],
              [
                ThermometerSun,
                'Glass',
                'Our recommended 6–10–6 double glazing is the starting point; orientation and use decide whether another spacer or glazing build is better.',
              ],
              [
                Ruler,
                'Span',
                'The frame stays as slim as the opening safely allows, preserving the reason for building it.',
              ],
            ].map(([Icon, title, copy], index) => {
              const IconComponent = Icon as typeof Compass;
              return (
                <article
                  key={title as string}
                  className="min-h-[23rem] bg-paper p-7 sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <IconComponent
                      className="size-7 text-gold-deep"
                      strokeWidth={1.4}
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
        <Reveal className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow !text-gold">The first step</p>
            <h2 className="mt-8 text-balance text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.055em]">
              Every conservatory begins with a site visit.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/60">
              Partly for measurements. Mostly because the way the space faces
              decides whether it becomes a room you live in or one you avoid for
              half the year.
            </p>
            <a
              href="https://wa.me/923008736655?text=Hello%20The%20Crosslines%2C%20I%20would%20like%20to%20book%20a%20conservatory%20site%20survey."
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex rounded-full bg-gold px-6 py-4 text-sm font-semibold text-ink"
            >
              Book a survey on WhatsApp
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] lg:rounded-[2rem]">
            <img
              src="/images/conservatory.webp"
              alt="A conservatory designed for a warm-climate garden"
              width="2304"
              height="1728"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <ProfileTierStrip />
      <WarrantyStrip />
      <CtaBand
        title="A conservatory cannot be priced well from a list."
        copy="Start with a site survey. We will look at the opening, direction, shade and intended use before specifying the frame and glass."
      />
    </main>
  );
}
