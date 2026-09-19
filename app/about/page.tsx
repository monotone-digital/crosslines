import type { Metadata } from 'next';
import { Factory, MapPin, ShieldCheck, UserRound } from 'lucide-react';
import { CtaBand } from '@/components/cta-band';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the Multan manufacturer behind more than 500 projects and a 66,000 sq ft facility dedicated to uPVC.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        number="07 / 08"
        title="A focused manufacturer, built at scale."
        summary="From a 66,000 sq ft facility in Multan dedicated entirely to uPVC, we manufacture windows, doors and conservatories for projects across Punjab and Pakistan."
        image="/images/workshop.webp"
        imageAlt="uPVC window manufacturing inside The Crosslines facility in Multan"
      />

      <section className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <p className="eyebrow">The Crosslines</p>
          <div>
            <h2 className="max-w-5xl text-balance text-[clamp(2.8rem,5.3vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em]">Built around one material.</h2>
            <div className="mt-10 grid gap-8 text-base leading-7 text-muted md:grid-cols-3">
              <p>The Crosslines has spent six years manufacturing in Multan and completed more than 500 projects for homeowners, builders and architects.</p>
              <p>Our focus on uPVC means we understand the profiles we carry, can match the system to the building and will say when the less expensive option is the right one.</p>
              <p>Across Punjab, we install what we manufacture. One company remains accountable for the frame, glass, hardware and fitting—from quotation to aftercare.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="overflow-hidden bg-ink px-5 py-24 text-white sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-[1480px]">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <p className="eyebrow text-gold">The facility</p>
            <div>
              <h2 className="max-w-5xl text-balance text-[clamp(3rem,5.8vw,6.6rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                66,000 square feet.
                <span className="block text-white/38">One purpose.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
                Our Multan facility is dedicated entirely to uPVC manufacturing. Its scale, specialist equipment and focused setup bring fabrication, glazing and final assembly into one operation built to compete with Pakistan&apos;s leading specialist facilities.
              </p>
            </div>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#171512] lg:grid-cols-[1.16fr_0.84fr] lg:rounded-[2rem]">
            <div className="relative min-h-[26rem] overflow-hidden sm:min-h-[34rem]">
              <img
                src="/images/facility-floor.webp"
                alt="Wide view across an organised uPVC window manufacturing floor"
                width="1760"
                height="1328"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center grayscale-[0.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/15" />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] backdrop-blur-md sm:left-7 sm:top-7">
                <Factory className="size-4 text-gold" strokeWidth={1.5} />
                Multan · South Punjab
              </div>
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 border-t border-white/22 pt-5 sm:inset-x-7 sm:bottom-7">
                <p className="max-w-md text-xl font-medium leading-tight sm:text-3xl">Dedicated entirely to uPVC manufacturing.</p>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-gold">uPVC only</span>
              </div>
            </div>

            <div className="grid divide-y divide-white/10">
              <div className="flex min-h-64 flex-col justify-between bg-gold p-7 text-ink sm:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">Dedicated facility</span>
                <div>
                  <p className="text-[clamp(4.5rem,10vw,8.5rem)] font-medium leading-[0.72] tracking-[-0.075em]">66,000</p>
                  <p className="mt-6 text-xl font-medium">square feet</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="flex min-h-52 flex-col justify-between border-b border-white/10 p-7 sm:border-b-0 sm:border-r lg:border-b lg:border-r-0 xl:border-b-0 xl:border-r sm:p-9">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Single-material focus</span>
                  <p className="text-4xl font-medium tracking-[-0.05em]">100% uPVC</p>
                </div>
                <div className="flex min-h-52 flex-col justify-between p-7 sm:p-9">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Built in Multan</span>
                  <p className="max-w-xs text-lg leading-7 text-white/68">Regional roots with the capacity to supply projects across Pakistan.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-sand px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto grid max-w-[1480px] overflow-hidden rounded-[1.5rem] bg-paper lg:grid-cols-2 lg:rounded-[2rem]">
          <div className="relative grid min-h-[34rem] place-items-center bg-ink">
            <div className="text-center">
              <span className="mx-auto flex size-32 items-center justify-center rounded-full border border-white/16 text-6xl font-medium text-gold">U</span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Portrait to be added</p>
            </div>
            <UserRound className="absolute bottom-7 right-7 size-6 text-white/25" strokeWidth={1.2} />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
            <p className="eyebrow">Leadership</p>
            <h2 className="mt-8 text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.055em]">Meet Mr. Umer Sultan.</h2>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-gold-deep">Director, The Crosslines Group</p>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted">Mr. Umer Sultan leads The Crosslines Group and oversees its direction, standards and long-term commitments.</p>
            <a href="https://wa.me/923008736655?text=Hello%20The%20Crosslines%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" className="mt-9 inline-flex self-start rounded-full bg-gold px-6 py-4 text-sm font-semibold">Speak to our sales team</a>
          </div>
        </Reveal>
      </section>

      <section className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-[1480px]">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><p className="eyebrow">Where we work</p><h2 className="text-[clamp(2.8rem,5vw,5.6rem)] font-medium leading-[0.94] tracking-[-0.055em]">Local installation. National supply.</h2></div>
          <div className="mt-16 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl bg-ink p-7 text-white sm:p-10"><MapPin className="size-7 text-gold" /><h3 className="mt-20 text-3xl font-medium">Punjab</h3><p className="mt-4 text-sm leading-6 text-white/55">We manufacture, deliver and install. Ten-year profile warranty, twelve months on hardware and lifetime support.</p></article>
            <article className="rounded-2xl border border-line p-7 sm:p-10"><Factory className="size-7 text-gold-deep" /><h3 className="mt-20 text-3xl font-medium">Rest of Pakistan</h3><p className="mt-4 text-sm leading-6 text-muted">We manufacture and deliver. The profile warranty, hardware cover and customer support remain in place.</p></article>
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-2xl border border-line p-5 text-sm text-muted"><ShieldCheck className="size-5 text-gold-deep" /> Ten years on profiles · Twelve months on hardware · Lifetime customer support</div>
        </Reveal>
      </section>

      <CtaBand />
    </main>
  );
}
