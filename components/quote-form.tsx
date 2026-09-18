'use client';

import { useState, type SyntheticEvent } from 'react';
import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || 'The enquiry could not be sent.');

      setStatus('success');
      setMessage('Thank you. We’ll reply on WhatsApp as soon as possible.');
      form.reset();
      const tracking = window as typeof window & { gtag?: (...args: unknown[]) => void; fbq?: (...args: unknown[]) => void };
      tracking.gtag?.('event', 'generate_lead', { method: 'quote_form' });
      tracking.fbq?.('track', 'Lead');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'The enquiry could not be sent. Please use WhatsApp instead.');
    }
  }

  const inputClass = 'min-h-13 w-full border-b border-line bg-transparent py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/55 focus:border-gold-deep';

  return (
    <form onSubmit={submit} className="grid gap-x-8 gap-y-7 md:grid-cols-2">
      <label className="block"><span className="form-label">Name</span><input className={inputClass} name="name" autoComplete="name" required placeholder="Your name" /></label>
      <label className="block"><span className="form-label">Phone / WhatsApp</span><input className={inputClass} name="phone" autoComplete="tel" required placeholder="+92" /></label>
      <label className="block"><span className="form-label">City</span><input className={inputClass} name="city" autoComplete="address-level2" required placeholder="Multan" /></label>
      <label className="block"><span className="form-label">Product type</span><select className={inputClass} name="productType" required defaultValue=""><option value="" disabled>Select a product</option><option>Windows</option><option>Doors</option><option>Conservatory</option><option>Not sure yet</option></select></label>
      <label className="block"><span className="form-label">Project type</span><select className={inputClass} name="projectType" required defaultValue=""><option value="" disabled>Select project type</option><option>My home</option><option>Commercial</option><option>I am a builder</option></select></label>
      <label className="block"><span className="form-label">Approximate openings</span><input className={inputClass} name="openings" inputMode="numeric" placeholder="e.g. 12" /></label>
      <label className="block md:col-span-2"><span className="form-label">Anything else we should know?</span><textarea className={`${inputClass} min-h-28 resize-y`} name="details" placeholder="Tell us about the building, opening sizes or what matters most." /></label>
      <label className="absolute -left-[9999px]" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>

      <div className="flex flex-col gap-4 md:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === 'submitting'} className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-ink px-7 text-sm font-semibold text-white disabled:opacity-60">
          {status === 'submitting' ? <LoaderCircle className="size-4 animate-spin" /> : status === 'success' ? <CheckCircle2 className="size-4" /> : null}
          {status === 'submitting' ? 'Sending enquiry' : 'Send enquiry'}
          {status === 'idle' || status === 'error' ? <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /> : null}
        </button>
        <p className={`max-w-md text-sm leading-6 ${status === 'error' ? 'text-red-700' : 'text-muted'}`} aria-live="polite">
          {message || 'Your details are sent privately to thecrosslinesgroup28@gmail.com.'}
        </p>
      </div>
    </form>
  );
}
