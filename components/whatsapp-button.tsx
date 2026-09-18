'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923008736655?text=Hello%20The%20Crosslines%2C%20I%20would%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with The Crosslines on WhatsApp"
      onClick={() => {
        const tracking = window as typeof window & { gtag?: (...args: unknown[]) => void; fbq?: (...args: unknown[]) => void };
        tracking.gtag?.('event', 'contact', { method: 'whatsapp', placement: 'sticky' });
        tracking.fbq?.('trackCustom', 'WhatsAppClick');
      }}
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#1f9d58] text-white shadow-[0_16px_45px_rgba(31,157,88,0.34)] transition-transform hover:-translate-y-1 sm:bottom-7 sm:right-7 sm:size-16"
    >
      <MessageCircle className="size-6 sm:size-7" strokeWidth={1.8} />
    </a>
  );
}
