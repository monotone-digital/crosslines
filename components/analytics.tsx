'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

const consentKey = 'crosslines-cookie-consent';
const consentChangedEvent = 'crosslines:cookie-consent-changed';

type Consent = 'granted' | 'denied' | 'unset' | 'server';

function subscribeToConsent(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(consentChangedEvent, callback);

  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(consentChangedEvent, callback);
  };
}

function getConsentSnapshot(): Consent {
  const savedConsent = window.localStorage.getItem(consentKey);
  return savedConsent === 'granted' || savedConsent === 'denied'
    ? savedConsent
    : 'unset';
}

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const metaId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const googleId = gaId || adsId;
  const trackingConfigured = Boolean(googleId || metaId);
  const pathname = usePathname();
  const lastTrackedPath = useRef(pathname);
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    () => 'server',
  );

  useEffect(() => {
    if (consent !== 'granted' || lastTrackedPath.current === pathname) return;

    const tracking = window as typeof window & {
      gtag?: (...args: unknown[]) => void;
      fbq?: (...args: unknown[]) => void;
    };

    tracking.gtag?.('event', 'page_view', { page_path: pathname });
    tracking.fbq?.('track', 'PageView');
    lastTrackedPath.current = pathname;
  }, [consent, pathname]);

  if (!trackingConfigured) return null;

  const saveConsent = (value: 'granted' | 'denied') => {
    window.localStorage.setItem(consentKey, value);
    window.dispatchEvent(new Event(consentChangedEvent));
  };

  return (
    <>
      {consent === 'granted' && googleId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${googleId}'${gaId && adsId ? `);gtag('config','${adsId}'` : ''});`}
          </Script>
        </>
      ) : null}
      {consent === 'granted' && metaId ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaId}');fbq('track','PageView');`}
        </Script>
      ) : null}

      {consent === 'unset' ? (
        <dialog
          open
          aria-label="Cookie preferences"
          aria-live="polite"
          className="fixed inset-x-4 bottom-4 top-auto z-[100] mx-auto my-0 max-w-3xl rounded-2xl border border-white/15 bg-ink p-5 text-white shadow-2xl sm:bottom-6 sm:p-6"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-white/70">
              We use optional analytics and advertising tools to understand site
              use and measure enquiries. You can accept or decline them. Read our{' '}
              <Link href="/cookies" className="font-semibold text-gold underline underline-offset-4">
                cookie policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => saveConsent('denied')}
                className="min-h-11 rounded-full border border-white/20 px-5 text-xs font-semibold hover:bg-white hover:text-ink"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => saveConsent('granted')}
                className="min-h-11 rounded-full bg-gold px-5 text-xs font-semibold text-ink hover:bg-white"
              >
                Accept
              </button>
            </div>
          </div>
        </dialog>
      ) : null}
    </>
  );
}

export function CookieSettingsButton() {
  const openSettings = () => {
    window.localStorage.removeItem(consentKey);
    window.dispatchEvent(new Event(consentChangedEvent));
  };

  return (
    <button type="button" onClick={openSettings} className="hover:text-ink">
      Cookie settings
    </button>
  );
}
