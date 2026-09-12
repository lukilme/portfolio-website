// Runs synchronously before <body> renders — no FOUC
// Feature: grimorio-exe-portfolio | Requirements: 1.4, 1.5, 1.6
(function () {
  try {
    const stored = localStorage.getItem('grm-theme');
    const theme = stored === 'theme-light' ? 'theme-light' : 'theme-dark';
    document.documentElement.classList.add(theme);
  } catch (e) {
    // localStorage error → default to light so site remains usable (Req 1.6)
    document.documentElement.classList.add('theme-light');
  }
})();
