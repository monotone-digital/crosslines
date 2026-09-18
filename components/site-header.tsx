'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['Windows', '/windows'],
  ['Doors', '/doors'],
  ['Conservatories', '/conservatories'],
  ['Profiles', '/systems'],
  ['Projects', '/projects'],
  ['About', '/about'],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto flex h-[4.25rem] max-w-[1560px] items-center justify-between rounded-full border border-black/8 bg-paper/92 px-4 shadow-[0_8px_35px_rgba(32,29,25,0.06)] backdrop-blur-xl sm:px-6">
        <Link
          href="/"
          aria-label="The Crosslines home"
          className="relative z-20 flex items-center"
        >
          <img
            src="/brand/crosslines-wordmark.png"
            alt="The Crosslines"
            width="2773"
            height="501"
            className="h-auto w-[174px] sm:w-[206px]"
          />
        </Link>

        <nav
          className="hidden items-center gap-6 xl:flex"
          aria-label="Primary navigation"
        >
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-[0.78rem] font-medium text-ink/68 transition-colors hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Link
            href="/contact"
            className="rounded-full px-4 py-3 text-xs font-semibold text-ink transition-colors hover:bg-sand"
          >
            Contact
          </Link>
          <a
            href="https://wa.me/923008736655?text=Hello%20The%20Crosslines%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-5 py-3 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            WhatsApp us
          </a>
        </div>

        <button
          type="button"
          className="relative z-20 flex size-11 items-center justify-center rounded-full bg-ink text-white xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {open ? (
          <div className="absolute inset-x-3 top-3 overflow-hidden rounded-[2rem] bg-paper px-6 pb-8 pt-24 shadow-2xl sm:inset-x-5">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {links.map(([label, href], index) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-t border-line py-4 text-xl font-medium"
                >
                  {label}
                  <span className="text-xs text-gold-deep">0{index + 1}</span>
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="border-y border-line py-4 text-xl font-medium"
              >
                Contact
              </Link>
              <a
                href="https://wa.me/923008736655?text=Hello%20The%20Crosslines%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="mt-5 rounded-full bg-gold px-6 py-4 text-center text-sm font-semibold text-ink"
              >
                Start on WhatsApp
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
