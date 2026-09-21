import type { Metadata } from 'next';
import { CookieSettingsButton } from '@/components/analytics';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Cookie Policy',
  description: 'How The Crosslines uses cookies and similar browser technologies on this website.',
  path: '/cookies',
  noIndex: true,
});

export default function CookiePolicyPage() {
  return (
    <main className="bg-paper px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44">
      <article className="mx-auto max-w-4xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-8 text-balance text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
          Cookie policy
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-muted">
          This policy explains the browser storage and optional tracking technologies used
          on thecrosslinesgroup.com. Last updated 21 September 2026.
        </p>

        <div className="mt-16 space-y-12 border-t border-line pt-12 text-sm leading-7 text-muted sm:text-base">
          <section>
            <h2 className="text-2xl font-medium tracking-tight text-ink">Essential storage</h2>
            <p className="mt-4">
              The website stores your cookie preference in your browser so that we can remember
              whether you accepted or declined optional tracking. This is necessary to respect
              your choice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-ink">Optional analytics</h2>
            <p className="mt-4">
              When configured and accepted, Google Analytics may measure visits, page use,
              devices and referral sources. These measurements help us understand website
              performance and improve the experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-ink">Optional advertising</h2>
            <p className="mt-4">
              When configured and accepted, Google Ads and Meta Pixel may measure enquiries and
              advertising performance. These tools are not loaded when optional tracking is
              declined.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-ink">Change your choice</h2>
            <p className="mt-4">
              You can reopen the consent notice and change your preference at any time.
            </p>
            <div className="mt-6 inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-white hover:bg-gold hover:text-ink">
              <CookieSettingsButton />
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
