import Link from 'next/link';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  DraftingCompass,
  Factory,
  Ruler,
  ScanLine,
  ShieldCheck,
  SunMedium,
  Wind,
} from 'lucide-react';
import { CtaBand } from '@/components/cta-band';
import { ProfileBrandLogo } from '@/components/profile-brand-logo';
import { Reveal } from '@/components/reveal';
import { WarrantyStrip } from '@/components/warranty-strip';
import { profileTiers } from '@/content/profile-brands';

const proof = [
  ['6 years', 'Manufacturing and installing'],
  ['500+', 'Projects completed'],
  ['10 years', 'Warranty on the profile'],
  ['Lifetime', 'Customer support'],
];

const services = [
  {
    index: '01',
    title: 'Windows',
    href: '/windows',
    copy: 'Casement, sliding and fixed systems, made to the exact size of every opening.',
    image: '/images/service-windows.webp',
    imageAlt:
      'A black uPVC casement window opening onto a warm, landscaped courtyard',
  },
  {
    index: '02',
    title: 'Doors',
    href: '/doors',
    copy: 'Casement, sliding and lift & slide doors engineered around their span and weight.',
    image: '/images/service-doors.webp',
    imageAlt:
      'A wide black uPVC lift-and-slide door connecting a refined living room to a courtyard',
  },
  {
    index: '03',
    title: 'Glass',
    href: '/windows#glass',
    copy: 'Double glazing helps keep rooms cooler, quieter and more comfortable throughout the year.',
    image: '/images/service-glass.webp',
    imageAlt:
      'Cutaway close-up of two glass panes and their sealed spacer inside a black uPVC frame',
  },
  {
    index: '04',
    title: 'Conservatories',
    href: '/conservatories',
    copy: 'Light-filled garden rooms designed around orientation, shade and a Multan summer.',
    image: '/images/service-conservatories.webp',
    imageAlt: 'A black-framed uPVC conservatory attached to a warm ivory home',
  },
];

const whyCrosslines = [
  {
    index: '01',
    icon: BadgeCheck,
    title: 'Genuine Profiles. Verified Sources.',
    body: [
      'We use carefully selected, genuine uPVC profile systems from established sources. We believe the identity and origin of a profile should be clear, verifiable and backed by genuine manufacturing standards.',
    ],
  },
  {
    index: '02',
    icon: ScanLine,
    title: 'Machine-Processed Glazing.',
    body: [
      'Our double-glazed units are processed using dedicated machinery rather than relying solely on manual assembly.',
      'Where specified, insulating glass units are filled with argon gas, and we work closely with our glass suppliers to verify the quality and consistency of the units supplied to our projects.',
    ],
  },
  {
    index: '03',
    icon: DraftingCompass,
    title: 'Engineering According to the Window.',
    body: [
      'There is no single reinforcement or hardware specification suitable for every window.',
      'We consider factors such as window height, sash dimensions, configuration, reinforcement requirements, hardware selection and overall load when specifying a system.',
    ],
  },
  {
    index: '04',
    icon: ShieldCheck,
    title: 'We Don’t Engineer for the Lowest Quote.',
    body: [
      'A window can look identical from the outside while the materials and engineering inside can be completely different.',
      'Reducing the quote may mean changes to glass, reinforcement, hardware, glazing methods or other components—details that may not be visible at the time of installation but can matter over years of use.',
      'At The Crosslines, our objective is not simply to manufacture a window that looks good on delivery day. It is to deliver a system engineered for long-term performance, reliability and everyday use.',
    ],
  },
  {
    index: '05',
    icon: Ruler,
    title: 'A Window Is a Long-Term Investment.',
    body: [
      'When choosing uPVC windows and doors, the lowest quotation does not always represent the lowest long-term cost.',
    ],
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative h-svh overflow-hidden px-3 pb-3 pt-24 sm:px-5 sm:pb-5 sm:pt-28">
        <div className="relative mx-auto grid h-full min-h-0 max-w-[1560px] overflow-hidden rounded-[1.5rem] bg-ink lg:grid-cols-[0.88fr_1.12fr] lg:rounded-[2rem]">
          <div className="hero-copy-panel relative z-10 min-h-0 overflow-hidden bg-gradient-to-b from-ink/80 via-ink/90 to-ink p-6 text-white sm:p-8 lg:bg-ink lg:p-10 xl:p-12 2xl:p-14">
            <div className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/55">
              <span className="h-px w-8 bg-gold" />
              Made in Multan · Installed across Punjab
            </div>

            <div className="hero-content">
              <p className="reveal-up mb-4 font-serif text-xl italic text-gold sm:mb-5 sm:text-2xl">
                Made and fitted by us.
              </p>
              <h1 className="hero-title reveal-up reveal-delay-1 max-w-4xl text-balance font-medium leading-[0.87] tracking-[-0.065em]">
                uPVC windows, doors and conservatories.
              </h1>
              <p className="reveal-up reveal-delay-2 mt-4 max-w-xl text-sm leading-6 text-white/66 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
                uPVC windows, doors and conservatories, manufactured and
                installed by one accountable team.
              </p>
              <div className="reveal-up reveal-delay-3 mt-5 flex flex-nowrap gap-2 sm:mt-7 sm:gap-3">
                <a
                  className="group inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-gold px-4 text-xs font-semibold text-ink transition-transform hover:-translate-y-0.5 sm:min-h-12 sm:gap-3 sm:px-6 sm:text-sm"
                  href="https://wa.me/923008736655?text=Hello%20The%20Crosslines%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                >
                  Start on WhatsApp
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link
                  className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-white/22 px-4 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-ink sm:min-h-12 sm:px-6 sm:text-sm"
                  href="/contact#quote"
                >
                  Request a quote
                </Link>
              </div>
            </div>

            <div className="hidden items-end justify-between border-t border-white/12 pt-4 text-[0.68rem] text-white/45 sm:flex">
              <span>uPVC · GLASS · INSTALLATION</span>
              <ArrowDownRight className="size-5 text-gold" />
            </div>
          </div>

          <div className="hero-image absolute inset-0 min-h-0 overflow-hidden lg:relative lg:inset-auto">
            <img
              src="/images/hero-residence.webp"
              alt="A contemporary residence fitted with black uPVC windows and sliding doors"
              width="2560"
              height="1440"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between rounded-2xl border border-white/25 bg-white/10 p-4 text-white backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:p-5">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Complete responsibility
                </p>
                <p className="mt-1 max-w-sm text-sm sm:text-base">
                  Frame, glass, hardware and fitting—from one manufacturer.
                </p>
              </div>
              <span className="hidden size-11 items-center justify-center rounded-full bg-white text-ink sm:flex">
                <ArrowDownRight className="size-4" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper px-5 sm:px-8">
        <div className="mx-auto grid max-w-[1480px] grid-cols-2 lg:grid-cols-4">
          {proof.map(([value, label], index) => (
            <div
              key={value}
              className={`py-8 sm:py-10 ${index % 2 ? 'border-l border-line pl-5 sm:pl-8' : ''} ${index > 1 ? 'border-t border-line lg:border-t-0' : ''} ${index === 2 ? 'lg:border-l lg:pl-8' : ''}`}
            >
              <p className="text-3xl font-medium tracking-[-0.045em] text-ink sm:text-4xl">
                {value}
              </p>
              <p className="mt-2 max-w-[11rem] text-xs leading-5 text-muted">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h2 className="text-balance text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.06em] text-ink">
                What we make
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                The best window is not a product off a shelf. It is the right
                system for the room around it.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-12">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group relative min-h-[28rem] overflow-hidden rounded-[1.5rem] bg-ink sm:min-h-[34rem] lg:rounded-[2rem] ${index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}`}
              >
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  width="2048"
                  height="1536"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-black/5 to-black/78 transition-colors duration-500 group-hover:to-black/84" />

                <div className="absolute left-5 top-5 flex size-11 items-center justify-center rounded-full border border-white/30 bg-black/10 text-xs font-semibold text-white backdrop-blur-md sm:left-7 sm:top-7">
                  {service.index}
                </div>

                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/25 bg-black/18 p-5 text-white backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-6">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <h3 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-white/72">
                        {service.copy}
                      </p>
                    </div>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-white sm:px-8 sm:py-32">
        <Reveal className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="max-w-xl text-balance text-[clamp(2.8rem,5vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.055em]">
              Three tiers of profile
            </h2>
            <p className="mt-7 max-w-md text-base leading-7 text-white/58">
              We carry several systems across three tiers, which means we have
              no reason to push you past what your project requires.
            </p>
            <Link
              href="/systems"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-gold"
            >
              Compare the profiles <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-4">
            {profileTiers.map((tier) => (
              <article
                key={tier.id}
                className="rounded-2xl border border-white/12 p-6 transition-colors hover:bg-white/[0.04] sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs text-gold">{tier.number}</span>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-white/42">
                    {tier.label}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-medium tracking-tight sm:text-3xl">
                  {tier.title}
                </h3>
                <p className="mt-2 font-serif text-base italic text-gold/90 sm:text-lg">
                  {tier.tagline}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/54">
                  {tier.summary}
                </p>
                <div
                  className={`mt-7 grid gap-3 ${tier.brands.length > 1 ? 'md:grid-cols-2' : ''}`}
                >
                  {tier.brands.map((brand) => (
                    <div
                      key={brand.id}
                      className="rounded-xl border border-white/10 bg-white/[0.035] p-4"
                    >
                      <ProfileBrandLogo brand={brand} compact />
                      <p className="mt-4 text-xs leading-5 text-white/48">
                        {brand.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
            <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
              <img
                src="/images/profile-tiers.webp"
                alt="Three uPVC profile systems with different frame depths and chamber structures"
                width="2304"
                height="1728"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-5 left-5 rounded-full bg-paper px-4 py-2 text-xs font-semibold text-ink">
                Three profile tiers. One honest recommendation.
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="why-crosslines"
        className="scroll-mt-28 bg-paper px-3 py-5 sm:px-5 sm:py-8"
      >
        <div className="relative mx-auto max-w-[1560px] overflow-hidden rounded-[1.5rem] border border-line bg-sand text-ink lg:rounded-[2rem]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'linear-gradient(rgba(87,72,48,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(87,72,48,0.11) 1px, transparent 1px)',
              backgroundSize: '5rem 5rem',
            }}
          />
          <div
            className="pointer-events-none absolute -left-40 top-1/3 size-[32rem] rounded-full bg-gold/20 blur-[120px]"
            aria-hidden="true"
          />

          <div className="relative grid lg:grid-cols-[0.78fr_1.22fr]">
            <div className="border-b border-line p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-14 xl:p-16">
              <div className="lg:sticky lg:top-32">
                <p className="inline-flex items-center gap-3 rounded-full border border-gold/45 bg-paper/75 px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] text-gold-deep shadow-[0_0.75rem_2rem_rgba(88,71,40,0.08)] backdrop-blur-sm sm:text-base">
                  <span className="h-px w-8 bg-gold-deep" />
                  Why The Crosslines?
                </p>
                <h2 className="mt-8 max-w-xl text-balance text-[clamp(3.2rem,5.6vw,6.5rem)] font-medium leading-[0.87] tracking-[-0.067em]">
                  Because what’s inside matters.
                </h2>
                <p className="mt-8 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  At The Crosslines, we believe a window or door should be
                  engineered for the long term—not simply priced to win a
                  quotation.
                </p>

                <div className="mt-10 overflow-hidden rounded-2xl border border-ink/10 bg-ink text-white shadow-[0_1.5rem_4rem_rgba(24,22,18,0.12)]">
                  <div className="flex items-start justify-between gap-6 p-6 sm:p-7">
                    <div>
                      <p className="text-[clamp(2.9rem,5vw,5.2rem)] font-medium leading-none tracking-[-0.06em] text-gold">
                        66,000
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/48">
                        sq. ft. dedicated facility
                      </p>
                    </div>
                    <Factory className="size-8 shrink-0 text-gold" strokeWidth={1.25} />
                  </div>
                  <p className="border-t border-white/10 px-6 py-5 text-sm leading-6 text-white/58 sm:px-7">
                    Focused entirely on uPVC manufacturing, supported by
                    premium imported fabrication machinery and a process built
                    around precision, consistency and quality control.
                  </p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-line">
              {whyCrosslines.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <article
                    key={reason.index}
                    className="group grid gap-7 p-7 transition-colors duration-500 hover:bg-white/55 sm:p-10 md:grid-cols-[4.5rem_1fr] lg:p-12 xl:p-14"
                  >
                    <div className="flex items-center justify-between md:block">
                      <span className="text-xs font-semibold tracking-[0.18em] text-gold-deep">
                        {reason.index}
                      </span>
                      <span
                        className="why-icon relative flex size-12 items-center justify-center rounded-full border border-gold/45 bg-gold/10 text-gold-deep transition duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:border-ink group-hover:bg-ink group-hover:text-gold md:mt-8"
                        style={{ animationDelay: `${index * 420}ms` }}
                        aria-hidden="true"
                      >
                        <span className="why-icon-ring absolute inset-[-0.32rem] rounded-full border border-gold/30" />
                        <IconComponent className="size-5" strokeWidth={1.35} />
                      </span>
                    </div>

                    <div>
                      <h3 className="max-w-2xl text-balance text-2xl font-medium leading-tight tracking-[-0.038em] transition-colors duration-300 group-hover:text-gold-deep sm:text-3xl">
                        {reason.title}
                      </h3>
                      <span className="mt-5 block h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-20 group-hover:bg-gold" />
                      <div className="mt-5 max-w-3xl space-y-4">
                        {reason.body.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-sm leading-6 text-muted sm:text-[0.95rem] sm:leading-7"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative border-t border-gold/30 bg-gold/10 px-7 py-10 sm:px-10 sm:py-12 lg:px-14 xl:px-16">
            <p className="mx-auto max-w-5xl text-balance text-center font-serif text-2xl italic leading-snug text-ink sm:text-3xl lg:text-4xl">
              Choose the system. Understand the specification. Know what is
              going inside your window.
            </p>
            <div className="mx-auto mt-8 flex max-w-3xl items-center gap-5 text-ink/45">
              <span className="h-px flex-1 bg-ink/15" />
              <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
                The Crosslines · Precision in Every Frame · Confidence in Every
                Project
              </p>
              <span className="h-px flex-1 bg-ink/15" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="mx-auto max-w-[1480px]">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="text-balance text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Built for Pakistan
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Heat, dust and sun decide how a window performs here.
            </p>
          </div>
          <div className="mt-12 grid overflow-hidden rounded-[1.5rem] border border-line bg-sand lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative min-h-64 overflow-hidden sm:min-h-80 lg:min-h-0">
              <img
                src="/images/south-punjab-climate.webp"
                alt="A black double-glazed uPVC window separating a sunlit Pakistani cityscape from a calm interior"
                width="2496"
                height="1664"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/15 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:bottom-6 sm:left-6">
                Pakistan · Summer conditions
              </p>
            </div>

            <div className="bg-paper px-5 sm:px-7">
              {[
                [
                  SunMedium,
                  'Heat',
                  'The frame and sealed 6–10–6 double-glazed unit work together to slow heat transfer and reduce the load on air conditioning.',
                ],
                [
                  Wind,
                  'Dust',
                  'Two seals is standard. Three holds a closed window tighter against the dust Pakistan lives with.',
                ],
                [
                  Ruler,
                  'Sun',
                  'Profile grade and stabiliser chemistry decide whether a frame keeps its colour and shape.',
                ],
              ].map(([Icon, title, copy], index) => {
                const IconComponent = Icon as typeof SunMedium;
                return (
                  <article
                    key={title as string}
                    className={`grid grid-cols-[2.75rem_1fr] gap-4 py-6 sm:gap-5 sm:py-7 ${index ? 'border-t border-line' : ''}`}
                  >
                    <span className="flex size-10 items-center justify-center rounded-full bg-gold/12 text-gold-deep">
                      <IconComponent className="size-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.025em] sm:text-2xl">
                        {title as string}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                        {copy as string}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-paper px-5 pb-24 sm:px-8 sm:pb-32">
        <Reveal className="mx-auto grid max-w-[1480px] overflow-hidden rounded-[1.5rem] bg-sand lg:grid-cols-2 lg:rounded-[2rem]">
          <div className="relative min-h-[28rem] overflow-hidden">
            <img
              src="/images/workshop.webp"
              alt="Technicians assembling a uPVC window frame in a workshop"
              width="2496"
              height="1664"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between p-7 sm:p-12 lg:p-16">
            <Factory className="size-8 text-gold-deep" strokeWidth={1.4} />
            <div className="mt-24">
              <p className="eyebrow">One accountable team</p>
              <h2 className="mt-7 text-balance text-[clamp(2.7rem,4.5vw,5rem)] font-medium leading-[0.94] tracking-[-0.055em]">
                Fitted and guaranteed by us
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted">
                Across Punjab, we manufacture, deliver and install. One company
                is responsible for the frame, glass, hardware and fitting—and
                one company answers afterwards.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
                Across the rest of Pakistan, we manufacture and deliver.
                Installation is arranged at your end.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-line bg-paper px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-[1480px]">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-none tracking-[-0.055em]">
                Recent work
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-sm font-semibold"
            >
              See the project archive <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <article
                key={item}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-sand"
              >
                <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,transparent_49.5%,rgba(208,174,106,0.28)_50%,transparent_50.5%)]">
                  <img
                    src="/brand/crosslines-mark.png"
                    alt=""
                    width="501"
                    height="501"
                    className="w-24 opacity-20 grayscale"
                  />
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/30 bg-paper/80 p-4 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
                    Project {String(item).padStart(2, '0')}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Photography and details awaiting client approval.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-sand px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
              What clients say
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-6 text-muted">
              Verified client stories will appear here after names, cities and
              product details are approved.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <article
                key={item}
                className="flex min-h-[20rem] flex-col justify-between rounded-2xl border border-line bg-paper p-6"
              >
                <div className="space-y-3" aria-hidden="true">
                  <span className="block h-2 w-full rounded-full bg-line" />
                  <span className="block h-2 w-11/12 rounded-full bg-line" />
                  <span className="block h-2 w-4/5 rounded-full bg-line" />
                </div>
                <div className="border-t border-line pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
                    Testimonial {String(item).padStart(2, '0')}
                  </p>
                  <p className="mt-2 text-xs text-muted">
                    Awaiting client approval
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <WarrantyStrip />
      <CtaBand />
    </main>
  );
}
