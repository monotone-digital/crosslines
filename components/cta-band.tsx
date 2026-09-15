import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function CtaBand({
  title = 'Tell us about the opening. We will tell you what fits.',
  copy = 'Send the details to Umer on WhatsApp and we will come back with a specification and a price.',
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="bg-paper px-3 py-3 sm:px-5 sm:py-5">
      <div className="mx-auto grid max-w-[1560px] gap-12 overflow-hidden rounded-[1.5rem] bg-ink p-7 text-white sm:p-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:rounded-[2rem] lg:p-16">
        <h2 className="max-w-5xl text-balance text-[clamp(2.8rem,5.8vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">{title}</h2>
        <div>
          <p className="max-w-md text-base leading-7 text-white/60">{copy}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/923457291119?text=Hello%20Umer%2C%20I%20would%20like%20to%20discuss%20a%20Crosslines%20project."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-gold px-6 text-sm font-semibold text-ink"
            >
              WhatsApp Umer
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link href="/contact#quote" className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 text-sm font-semibold hover:bg-white hover:text-ink">
              Request a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
