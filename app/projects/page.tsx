import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, Camera, Home, Ruler } from 'lucide-react';
import { CtaBand } from '@/components/cta-band';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { projects } from '@/content/projects';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Projects',
  description:
    'A growing archive of residential, commercial and builder uPVC projects by The Crosslines across Punjab.',
  path: '/projects',
  noIndex: true,
});

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Projects"
        number="06 / 08"
        title="More than one hundred projects in six years."
        summary="Homes, commercial buildings and builder contracts across Punjab—and supply projects across Pakistan."
        image="/images/hero-residence.webp"
        imageAlt="A contemporary home with extensive black uPVC windows and doors"
      />

      <section className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-[1480px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-7 max-w-4xl text-balance text-[clamp(2.8rem,5.3vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em]">Real projects.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted">Each published project will include its city, product, profile tier and year. No generic imagery will be presented as completed work.</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2" aria-label="Future project filters">
            {['All products', 'Windows', 'Doors', 'Conservatories', 'City filter pending'].map((filter, index) => (
              <span key={filter} className={`rounded-full border px-4 py-2 text-xs font-semibold ${index === 0 ? 'border-ink bg-ink text-white' : 'border-line text-muted'}`}>{filter}</span>
            ))}
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.slug} className="group overflow-hidden rounded-2xl border border-line bg-sand">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,#eee6d5,#f8f5ee)]" />
                  <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,transparent_49.6%,rgba(208,174,106,0.24)_50%,transparent_50.4%)]">
                    <Camera className="size-8 text-gold-deep/35" strokeWidth={1.2} />
                  </div>
                  <span className="absolute left-5 top-5 rounded-full bg-paper/90 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-gold-deep">Awaiting photography</span>
                </div>
                <div className="flex items-center justify-between border-t border-line p-5">
                  <div><p className="font-medium">Project {String(index + 1).padStart(2, '0')}</p><p className="mt-1 text-xs text-muted">Details to be approved</p></div>
                  <ArrowRight className="size-4 text-muted" />
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-ink px-5 py-24 text-white sm:px-8 sm:py-32">
        <Reveal className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid grid-cols-2 gap-3 self-start">
            {[Building2, Home, Ruler, Camera].map((Icon, index) => (
              <div key={index} className="flex aspect-square items-end rounded-2xl border border-white/12 p-5"><Icon className="size-8 text-gold" strokeWidth={1.3} /></div>
            ))}
          </div>
          <div>
            <p className="eyebrow !text-gold">For builders & contractors</p>
            <h2 className="mt-8 text-balance text-[clamp(3rem,5.2vw,6rem)] font-medium leading-[0.92] tracking-[-0.055em]">Three quotes from one drawing set.</h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/60">We can quote all three profile tiers against the same drawings, so you can price the project properly before committing to a specification.</p>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/50">We manufacture in Multan and install across Punjab. Profiles carry a ten-year warranty, hardware carries twelve months and replacement parts remain available afterwards.</p>
            <Link href="/contact#quote" className="mt-9 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-4 text-sm font-semibold text-ink">Request a builder quote <ArrowRight className="size-4" /></Link>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </main>
  );
}
