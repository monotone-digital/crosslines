import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  number: string;
  primaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  summary,
  image,
  imageAlt,
  number,
  primaryLabel = 'Discuss your project',
}: PageHeroProps) {
  return (
    <section className="h-svh overflow-hidden px-3 pb-3 pt-24 sm:px-5 sm:pb-5 sm:pt-28">
      <div className="mx-auto h-full max-w-[1560px] overflow-hidden rounded-[1.5rem] bg-paper lg:rounded-[2rem]">
        <div className="relative grid h-full min-h-0 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="page-hero-copy relative z-10 min-h-0 overflow-hidden bg-gradient-to-b from-paper/88 via-paper/95 to-paper p-6 sm:p-8 lg:bg-paper lg:p-10 xl:p-12 2xl:p-14">
            <div className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
              <span>{eyebrow}</span>
              <span>{number}</span>
            </div>
            <div className="page-hero-content">
              <h1 className="page-hero-title reveal-up max-w-4xl text-balance font-medium leading-[0.86] tracking-[-0.07em] text-ink">
                {title}
              </h1>
              <p className="reveal-up reveal-delay-1 mt-4 max-w-lg text-sm leading-6 text-muted sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">{summary}</p>
              <div className="reveal-up reveal-delay-2 mt-5 flex flex-nowrap gap-2 sm:mt-7 sm:gap-3">
                <a
                  href="https://wa.me/923008736655?text=Hello%20The%20Crosslines%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-ink px-4 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5 sm:min-h-12 sm:gap-3 sm:px-6 sm:text-sm"
                >
                  {primaryLabel}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link href="/contact#quote" className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-line px-4 text-xs font-semibold text-ink hover:bg-sand sm:min-h-12 sm:px-6 sm:text-sm">
                  Request a quote
                </Link>
              </div>
            </div>
            <div className="hidden items-center justify-between border-t border-line pt-4 text-[0.68rem] text-muted sm:flex">
              <span>MADE TO MEASURE</span>
              <ArrowDownRight className="size-5 text-gold-deep" />
            </div>
          </div>

          <div className="hero-image absolute inset-0 min-h-0 overflow-hidden lg:relative lg:inset-auto">
            <img src={image} alt={imageAlt} width="2560" height="1440" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
