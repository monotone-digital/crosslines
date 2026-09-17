import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  DoorOpen,
  MoveHorizontal,
  PanelsTopLeft,
  ShieldCheck,
} from 'lucide-react';
import { CtaBand } from '@/components/cta-band';
import { PageHero } from '@/components/page-hero';
import { ProfileTierStrip } from '@/components/profile-tier-strip';
import { Reveal } from '@/components/reveal';
import { WarrantyStrip } from '@/components/warranty-strip';

export const metadata: Metadata = {
  title: 'uPVC Doors in Multan',
  description:
    'Made-to-measure casement, sliding and lift-and-slide uPVC doors manufactured in Multan and installed across Punjab.',
};

const doorTypes = [
  {
    id: 'casement',
    number: '01',
    icon: DoorOpen,
    title: 'Casement doors',
    movement: 'Hinged movement',
    image: '/images/door-type-casement.webp',
    imageAlt:
      'A black double-leaf uPVC casement door with one hinged leaf opened inward',
    copy: 'Single or double-leaf hinged doors with the tightest compression seal we offer.',
    limit: 'They require swing space, and wind can catch an open leaf.',
  },
  {
    id: 'sliding',
    number: '02',
    icon: MoveHorizontal,
    title: 'Sliding doors',
    movement: 'Two or three tracks',
    image: '/images/door-type-sliding.webp',
    imageAlt:
      'A two-panel black uPVC sliding patio door with one panel moved halfway open',
    copy: 'Two- and three-track systems for patios and terraces, with no floor space lost.',
    limit:
      'The seal is lighter than a casement and wide sashes become heavier to move.',
  },
  {
    id: 'lift-slide',
    number: '03',
    icon: PanelsTopLeft,
    title: 'Lift & slide',
    movement: 'Lift, roll, then seal',
    image: '/images/door-type-lift-slide.webp',
    imageAlt:
      'A wide black uPVC lift-and-slide door opening a living room to a landscaped lawn',
    copy: 'A large sash lifts clear of its seals before rolling, then drops back to compress them when closed.',
    limit:
      'Its deeper frame, hardware and structural needs should be planned before the opening is built.',
  },
];

export default function DoorsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Doors"
        number="03 / 08"
        title="Built for the weight they carry."
        summary="A door is heavy, moves many times a day and carries a lock. We specify the frame, hardware and glass around those three facts."
        image="/images/doors-lift-slide.webp"
        imageAlt="A wide black uPVC sliding door opening onto a landscaped courtyard"
      />

      <section className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-[1480px]">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <h2 className="max-w-lg text-balance text-[clamp(2.8rem,5.3vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em]">
              Door types
            </h2>
            <p className="max-w-3xl self-end text-lg leading-8 text-muted sm:text-xl">
              The right movement for the span. Three ways a door can open, each
              trading swing space, seal and sash weight differently. The width
              of the opening usually decides which one is sensible.
            </p>
          </div>
          <div className="mt-16 grid gap-4 lg:grid-cols-12">
            {doorTypes.slice(0, 1).map((door) => {
              const Icon = door.icon;

              return (
                <article
                  key={door.id}
                  className="group relative min-h-[38rem] overflow-hidden rounded-[1.5rem] bg-ink text-white lg:col-span-5 lg:min-h-[46rem] lg:rounded-[2rem]"
                >
                  <Image
                    src={door.image}
                    alt={door.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/15" />
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
                    <span className="text-xs font-semibold tracking-[0.18em] text-white/68">
                      {door.number}
                    </span>
                    <span className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-black/10 backdrop-blur-md">
                      <Icon className="size-5" strokeWidth={1.4} />
                    </span>
                  </div>
                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-line bg-paper p-6 sm:inset-x-7 sm:bottom-7 sm:p-7">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
                      {door.movement}
                    </p>
                    <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-ink sm:text-4xl">
                      {door.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-muted">
                      {door.copy}
                    </p>
                    <p className="mt-5 border-t border-line pt-4 text-xs leading-5 text-muted">
                      <strong className="font-semibold text-ink">
                        Consider:
                      </strong>{' '}
                      {door.limit}
                    </p>
                  </div>
                </article>
              );
            })}

            <div className="grid gap-4 lg:col-span-7">
              {doorTypes.slice(1).map((door) => {
                const Icon = door.icon;

                return (
                  <article
                    key={door.id}
                    className="group grid min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-line bg-sand sm:grid-cols-[0.95fr_1.05fr] lg:rounded-[2rem]"
                  >
                    <div className="relative min-h-64 overflow-hidden sm:min-h-0">
                      <Image
                        src={door.image}
                        alt={door.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 48vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                    <div className="flex flex-col justify-between bg-paper p-6 sm:p-7 lg:p-8">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-[0.18em] text-gold-deep">
                          {door.number}
                        </span>
                        <span className="flex size-10 items-center justify-center rounded-full bg-sand text-gold-deep">
                          <Icon className="size-[1.125rem]" strokeWidth={1.4} />
                        </span>
                      </div>
                      <div className="mt-10">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
                          {door.movement}
                        </p>
                        <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em]">
                          {door.title}
                        </h3>
                        <p className="mt-4 text-sm leading-6 text-muted">
                          {door.copy}
                        </p>
                        <p className="mt-5 border-t border-line pt-4 text-xs leading-5 text-muted">
                          <strong className="font-semibold text-ink">
                            Consider:
                          </strong>{' '}
                          {door.limit}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-ink px-5 py-24 text-white sm:px-8 sm:py-32">
        <Reveal className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] lg:rounded-[2rem]">
            <img
              src="/images/doors-lift-slide.webp"
              alt="Large lift-and-slide uPVC doors in a living room"
              width="2560"
              height="1440"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow !text-gold">Lift & slide</p>
            <h2 className="mt-8 text-balance text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.055em]">
              Wide glass. A proper seal.
            </h2>
            <p className="mt-7 text-base leading-7 text-white/60">
              Turn the handle and the sash lifts clear of its seal, rolling
              almost weightlessly. Turn it back and the sash drops to compress
              the seal like a hinged door.
            </p>
            <p className="mt-5 text-sm leading-6 text-white/50">
              Usually the right answer for a large living space opening onto a
              lawn or terrace. It is worth discussing before the walls go up.
            </p>
            <Link
              href="/contact#quote"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-gold"
            >
              Discuss the opening <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <ShieldCheck className="size-8 text-gold-deep" strokeWidth={1.4} />
          </div>
          <div>
            <h2 className="text-balance text-[clamp(2.8rem,5vw,5.6rem)] font-medium leading-[0.94] tracking-[-0.055em]">
              Hardware matters
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted">
              Doors wear at the parts that move. Hinges drop, rollers flatten,
              handles work loose and multipoint locks stop lining up. That is why hardware
              must be specified to the weight of the leaf.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
              {['Handles', 'Hinges', 'Rollers', 'Multipoint locks'].map(
                (item) => (
                  <div key={item} className="bg-paper p-5 text-sm font-medium">
                    {item}
                  </div>
                ),
              )}
            </div>
            <p className="mt-6 text-sm leading-6 text-muted">
              Hardware is covered for twelve months. After that, we still source
              and fit replacement parts for anything we installed.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-sand px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <p className="eyebrow">Glass for doors</p>
          <div>
            <h2 className="text-balance text-[clamp(2.8rem,5vw,5.6rem)] font-medium leading-[0.94] tracking-[-0.055em]">
              The largest pane in the room deserves more thought.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted">
              Single, double and triple glazing is available across all door
              types. We use 10mm as standard, with 8mm and 12mm available where
              the opening, exposure or noise level calls for it.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">
              On a door, the case for heavier glazing is stronger: it is usually
              the pane people stand closest to and the largest area of glass
              facing outside.
            </p>
          </div>
        </Reveal>
      </section>

      <ProfileTierStrip />
      <WarrantyStrip />
      <CtaBand
        title="Bring us the span before the walls go up."
        copy="For wide sliding and lift-and-slide openings, an early conversation makes the finished door better—and prevents expensive corrections later."
      />
    </main>
  );
}
