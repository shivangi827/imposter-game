const TERMS_KEY = 'imposter.terms.v1';
const CLARITY_PROJECT_ID = 'watan966kt';

function hasAccepted(): boolean {
  try {
    return localStorage.getItem(TERMS_KEY) === 'accepted';
  } catch {
    return false;
  }
}

function markAccepted(): void {
  try {
    localStorage.setItem(TERMS_KEY, 'accepted');
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

function showModal(readOnly: boolean): void {
  const modal = document.getElementById('modal-terms');
  const agree = document.getElementById('btn-terms-accept');
  const close = document.getElementById('btn-terms-close');
  if (!modal || !agree || !close) return;
  modal.classList.remove('hidden');
  agree.classList.toggle('hidden', readOnly);
  close.classList.toggle('hidden', !readOnly);
}

function hideModal(): void {
  const modal = document.getElementById('modal-terms');
  if (modal) modal.classList.add('hidden');
}

export function initConsent(): void {
  if (hasAccepted()) {
    loadClarity(CLARITY_PROJECT_ID);
  } else {
    showModal(false);
  }

  document.getElementById('btn-terms-accept')?.addEventListener('click', () => {
    markAccepted();
    hideModal();
    loadClarity(CLARITY_PROJECT_ID);
  });

  document.getElementById('btn-terms-close')?.addEventListener('click', () => {
    hideModal();
  });

  document.getElementById('footer-terms')?.addEventListener('click', (e) => {
    e.preventDefault();
    showModal(hasAccepted());
  });
}
