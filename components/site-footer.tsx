import Link from 'next/link';
import { ArrowUpRight, AtSign } from 'lucide-react';

const productLinks = [
  ['Windows', '/windows'],
  ['Doors', '/doors'],
  ['Conservatories', '/conservatories'],
  ['Profiles & Systems', '/systems'],
];

const companyLinks = [
  ['Projects', '/projects'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export function SiteFooter() {
  return (
    <footer className="bg-paper px-5 pb-8 pt-24 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-[1480px] border-t border-line pt-10">
        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr_0.65fr_1fr]">
          <div>
            <img
              src="/brand/crosslines-wordmark.png"
              alt="The Crosslines"
              width="2773"
              height="501"
              className="h-auto w-[230px]"
            />
            <p className="mt-6 max-w-sm text-sm leading-6 text-muted">
              uPVC windows, doors and conservatories—manufactured in Multan and
              installed across Punjab.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              Products
            </p>
            <nav className="mt-5 flex flex-col gap-3 text-sm">
              {productLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              Company
            </p>
            <nav className="mt-5 flex flex-col gap-3 text-sm">
              {companyLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              Start a conversation
            </p>
            <a
              href="tel:+923457291119"
              className="mt-5 block text-xl font-medium tracking-tight"
            >
              +92 345 7291119
            </a>
            <a
              href="mailto:thecrosslinesgroup@gmail.com"
              className="mt-2 block break-all text-sm text-muted hover:text-ink"
            >
              thecrosslinesgroup@gmail.com
            </a>
            <div className="mt-6 flex gap-2">
              <a
                href="https://www.instagram.com/thecrosslinesfactory/"
                target="_blank"
                rel="noreferrer"
                aria-label="The Crosslines on Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-line hover:bg-sand"
              >
                <AtSign className="size-4" />
              </a>
              <a
                href="https://www.tiktok.com/@the.crosslines"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 items-center gap-2 rounded-full border border-line px-4 text-xs font-semibold hover:bg-sand"
              >
                TikTok <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} The Crosslines. All rights reserved.
          </p>
          <p>Head Office, Gujjar Chowk, Qadirpur Ran Bypass, Multan</p>
        </div>
      </div>
    </footer>
  );
}
