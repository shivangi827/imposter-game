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

/**
 * FIXED: This now properly defines AND starts the Clarity engine.
 */
function loadClarity(projectId: string): void {
  const win = window as any;
  
  // 1. If clarity is already running, don't re-initialize
  if (win.clarity && win.clarity.q && win.clarity.q.length > 0) return;

  // 2. Define the stub function and queue
  win.clarity = win.clarity || function() {
    (win.clarity.q = win.clarity.q || []).push(arguments);
  };

  // 3. Inject the script tag
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${projectId}`;
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript?.parentNode?.insertBefore(script, firstScript);

  // 4. THE FIX: You must call these two lines to trigger the network calls!
  win.clarity("js", new Date());
  win.clarity("config", projectId);
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
  // Runs immediately on load
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