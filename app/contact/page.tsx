import type { Metadata } from 'next';
import { ArrowUpRight, AtSign, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { QuoteForm } from '@/components/quote-form';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'Contact & Request a Quote',
  description: 'Request a quote for uPVC windows, doors or conservatories from The Crosslines in Multan.',
};

export default function ContactPage() {
  return (
    <main className="pt-24 sm:pt-28">
      <section className="bg-paper px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-24">
        <Reveal className="mx-auto max-w-[1480px]">
          <p className="eyebrow">Contact / 08</p>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <h1 className="max-w-5xl text-balance text-[clamp(4rem,9vw,10rem)] font-medium leading-[0.82] tracking-[-0.075em]">Tell us what you need.</h1>
            <p className="max-w-lg text-base leading-7 text-muted">The more you can tell us about the openings, the more useful our first reply will be. If you have drawings, send them separately on WhatsApp.</p>
          </div>
        </Reveal>
      </section>

      <section id="quote" className="bg-sand px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="eyebrow">Request a quote</p>
            <h2 className="mt-8 text-[clamp(2.8rem,4.7vw,5.2rem)] font-medium leading-[0.94] tracking-[-0.055em]">A useful first conversation.</h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-muted">For conservatories, we will arrange a site survey before quoting. They cannot be priced accurately without one.</p>
          </div>
          <div className="rounded-[1.5rem] bg-paper p-6 sm:p-10 lg:rounded-[2rem] lg:p-12">
            <QuoteForm />
          </div>
        </Reveal>
      </section>

      <section className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-[1480px]">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><p className="eyebrow">Visit or call</p><h2 className="text-[clamp(2.8rem,5vw,5.6rem)] font-medium leading-[0.94] tracking-[-0.055em]">Based in Multan. Working across Punjab.</h2></div>
          <div className="mt-16 grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <a href="tel:+923457291119" className="group rounded-2xl border border-line p-6 hover:bg-sand"><Phone className="size-6 text-gold-deep" /><p className="mt-12 text-xs uppercase tracking-[0.15em] text-muted">Phone & WhatsApp</p><p className="mt-2 text-xl font-medium">+92 345 7291119</p></a>
              <a href="mailto:thecrosslinesgroup@gmail.com" className="group rounded-2xl border border-line p-6 hover:bg-sand"><Mail className="size-6 text-gold-deep" /><p className="mt-12 text-xs uppercase tracking-[0.15em] text-muted">Email</p><p className="mt-2 break-all text-lg font-medium">thecrosslinesgroup@gmail.com</p></a>
              <a href="https://www.instagram.com/thecrosslinesfactory/" target="_blank" rel="noreferrer" className="group rounded-2xl border border-line p-6 hover:bg-sand"><AtSign className="size-6 text-gold-deep" /><p className="mt-12 text-xs uppercase tracking-[0.15em] text-muted">Instagram</p><p className="mt-2 flex items-center gap-2 text-lg font-medium">@thecrosslinesfactory <ArrowUpRight className="size-4" /></p></a>
              <div className="rounded-2xl border border-line p-6"><Clock3 className="size-6 text-gold-deep" /><p className="mt-12 text-xs uppercase tracking-[0.15em] text-muted">Business hours</p><p className="mt-2 text-lg font-medium">Confirm before visiting</p></div>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-line bg-sand lg:rounded-[2rem]">
              <iframe title="The Crosslines location in Multan" src="https://www.google.com/maps?q=Gujjar%20Chowk%2C%20Qadirpur%20Ran%20Bypass%2C%20Multan&output=embed" className="h-[34rem] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div className="flex flex-col justify-between gap-5 border-t border-line bg-paper p-6 sm:flex-row sm:items-center">
                <div><p className="flex items-center gap-2 font-medium"><MapPin className="size-4 text-gold-deep" /> The Crosslines</p><p className="mt-1 text-sm text-muted">Head Office, Gujjar Chowk, Qadirpur Ran Bypass, Multan</p></div>
                <a href="https://share.google/h7Ayskc5JrnsqtNBu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold">Open in Maps <ArrowUpRight className="size-4" /></a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
