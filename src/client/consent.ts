const CONSENT_KEY = 'imposter.consent.v1';
const CLARITY_PROJECT_ID = 'watan966kt';

type ConsentValue = 'accepted' | 'rejected';

function readConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === 'accepted' || v === 'rejected' ? v : null;
  } catch {
    return null;
  }
}

function writeConsent(v: ConsentValue): void {
  try {
    localStorage.setItem(CONSENT_KEY, v);
  } catch {
    /* ignore */
  }
}

function loadClarity(projectId: string): void {
  if ((window as unknown as { clarity?: unknown }).clarity) return;
  (function (
    c: Window & { [k: string]: unknown },
    l: Document,
    a: string,
    r: string,
    i: string
  ) {
    c[a] =
      c[a] ||
      function (...args: unknown[]) {
        ((c[a] as { q?: unknown[] }).q = (c[a] as { q?: unknown[] }).q || []).push(args);
      };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = 'https://www.clarity.ms/tag/' + i;
    const y = l.getElementsByTagName(r)[0];
    y?.parentNode?.insertBefore(t, y);
  })(window as unknown as Window & { [k: string]: unknown }, document, 'clarity', 'script', projectId);
}

function respectsDNT(): boolean {
  const dnt =
    navigator.doNotTrack ||
    (window as unknown as { doNotTrack?: string }).doNotTrack ||
    (navigator as unknown as { msDoNotTrack?: string }).msDoNotTrack;
  return dnt === '1' || dnt === 'yes';
}

function showBanner(): void {
  const banner = document.getElementById('consent-banner');
  if (banner) banner.classList.remove('hidden');
}

function hideBanner(): void {
  const banner = document.getElementById('consent-banner');
  if (banner) banner.classList.add('hidden');
}

export function initConsent(): void {
  const existing = readConsent();

  if (respectsDNT() && existing === null) {
    writeConsent('rejected');
    return;
  }

  if (existing === 'accepted') {
    loadClarity(CLARITY_PROJECT_ID);
    return;
  }
  if (existing === 'rejected') {
    return;
  }

  showBanner();

  document.getElementById('consent-accept')?.addEventListener('click', () => {
    writeConsent('accepted');
    hideBanner();
    loadClarity(CLARITY_PROJECT_ID);
  });
  document.getElementById('consent-reject')?.addEventListener('click', () => {
    writeConsent('rejected');
    hideBanner();
  });

  document.getElementById('footer-cookie-settings')?.addEventListener('click', (e) => {
    e.preventDefault();
    showBanner();
  });
}

document.getElementById('footer-cookie-settings')?.addEventListener('click', (e) => {
  e.preventDefault();
  showBanner();
});
