import { ShieldCheck } from 'lucide-react';

export function WarrantyStrip() {
  return (
    <aside className="border-y border-line bg-sand px-5 py-6 sm:px-8" aria-label="Warranty">
      <div className="mx-auto flex max-w-[1480px] flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-gold text-ink">
            <ShieldCheck className="size-5" />
          </span>
          <p className="font-medium text-ink">Ten years on the profile. Lifetime support on every window we fit.</p>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">12 months on hardware</p>
      </div>
    </aside>
  );
}
