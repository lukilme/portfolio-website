// Runs synchronously before <body> renders — no FOUC
// Feature: grimorio-exe-portfolio | Requirements: 2.1, 2.4
(function () {
  try {
    const stored = localStorage.getItem('grm-lang');
    const lang = (stored === 'pt' || stored === 'en') ? stored : 'pt';
    document.documentElement.setAttribute('lang', lang);
    window.__grm_lang = lang;
  } catch (e) {
    document.documentElement.setAttribute('lang', 'pt');
    window.__grm_lang = 'pt';
    window.__grm_lang_disabled = true;
  }
})();
