import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The requested page could not be found.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-paper px-5 pb-24 pt-36 sm:px-8">
      <div className="max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">404</p>
        <h1 className="mt-7 text-balance text-[clamp(3.8rem,9vw,8rem)] font-medium leading-[0.86] tracking-[-0.07em]">
          Page not found.
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-muted">
          The page may have moved, or the address may be incorrect. You can return home or
          contact us about your project.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-white">
            Return home
          </Link>
          <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full border border-line px-6 text-sm font-semibold hover:bg-sand">
            Contact The Crosslines
          </Link>
        </div>
      </div>
    </main>
  );
}
