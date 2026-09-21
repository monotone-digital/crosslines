import type { Metadata } from 'next';
import Link from 'next/link';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy',
  description: 'How The Crosslines collects, uses and protects information submitted through this website.',
  path: '/privacy',
  noIndex: true,
});

const sections = [
  {
    title: 'Information we collect',
    body: [
      'When you request a quote, we collect the information you submit, which may include your name, phone number, city, project type, number of openings and project details.',
      'If optional analytics or advertising tools are enabled and you consent to them, those providers may collect device, browser, referral and website-usage information.',
    ],
  },
  {
    title: 'How we use information',
    body: [
      'We use enquiry information to respond, prepare quotations, arrange site surveys and provide customer support. Consented analytics information is used to understand website performance and improve our marketing.',
    ],
  },
  {
    title: 'Service providers',
    body: [
      'The website is hosted on Vercel. Quote-form messages are emailed to our business Gmail inbox. If configured, Google Analytics, Google Ads and Meta Pixel may process consented usage information under their own privacy terms.',
      'We do not sell personal information. We share it only with service providers needed to operate the website and respond to enquiries, or when required by law.',
    ],
  },
  {
    title: 'Retention and security',
    body: [
      'We retain enquiry information only for as long as reasonably necessary for quotations, project communication, support and business records. We use reasonable safeguards, but no internet transmission or storage system can be guaranteed completely secure.',
    ],
  },
  {
    title: 'Your choices',
    body: [
      'You can decline optional tracking through the website cookie controls. You may also ask us to access, correct or delete information you submitted, subject to any information we must retain for legitimate business or legal purposes.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-paper px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44">
      <article className="mx-auto max-w-4xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-8 text-balance text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
          Privacy policy
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-muted">
          This policy explains how The Crosslines handles information collected through
          thecrosslinesgroup.com. Last updated 21 September 2026.
        </p>

        <div className="mt-16 space-y-12 border-t border-line pt-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-medium tracking-tight">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted sm:text-base">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-medium tracking-tight">Cookies</h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Our use of cookies and similar browser storage is described in the{' '}
              <Link href="/cookies" className="font-semibold text-ink underline underline-offset-4">
                cookie policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight">Contact us</h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              For privacy questions, email{' '}
              <a
                href="mailto:thecrosslinesgroup28@gmail.com"
                className="font-semibold text-ink underline underline-offset-4"
              >
                thecrosslinesgroup28@gmail.com
              </a>{' '}
              or call <a href="tel:+923008736655" className="font-semibold text-ink">0300 873 6655</a>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
