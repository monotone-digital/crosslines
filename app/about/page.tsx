import type { Metadata } from 'next';
import { Factory, MapPin, ShieldCheck, UserRound } from 'lucide-react';
import { CtaBand } from '@/components/cta-band';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the Multan manufacturer behind more than 2,000 uPVC window, door and conservatory projects.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        number="07 / 08"
        title="We make them—and fit them ourselves."
        summary="One material, one manufacturing team and one point of accountability from quotation to support."
        image="/images/workshop.webp"
        imageAlt="The Crosslines-style uPVC fabrication workshop in Multan"
      />

      <section className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <p className="eyebrow">The Crosslines</p>
          <div>
            <h2 className="max-w-5xl text-balance text-[clamp(2.8rem,5.3vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em]">A deliberate focus on uPVC.</h2>
            <div className="mt-10 grid gap-8 text-base leading-7 text-muted md:grid-cols-2">
              <p>The Crosslines has been manufacturing in Multan for six years. In that time we have completed more than 2,000 projects for homeowners, builders and architects.</p>
              <p>Working in one material means we know the profiles we carry, can match the tier to the building and are willing to say when the less expensive option is the right one.</p>
              <p>Across Punjab, we install what we manufacture. One company is accountable for the frame, glass, hardware and fitting.</p>
              <p>If something we installed needs attention years later, we remain the people who come and look at it.</p>
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
            <p className="eyebrow">The person who answers</p>
            <h2 className="mt-8 text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.055em]">Meet Umer.</h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted">Enquiries are answered by Umer, who owns the business. Not a sales team or call centre—the person responsible for the quote, specification and support.</p>
            <a href="https://wa.me/923457291119?text=Hello%20Umer%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" className="mt-9 inline-flex self-start rounded-full bg-gold px-6 py-4 text-sm font-semibold">Message Umer</a>
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
