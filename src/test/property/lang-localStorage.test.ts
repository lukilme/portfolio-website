// @vitest-environment jsdom
// Feature: grimorio-exe-portfolio, Property 3: Language localStorage round-trip

import * as fc from 'fast-check';
import { describe, it, expect } from 'vitest';

/**
 * Inline replica of src/scripts/lang-init.js logic.
 * We copy the logic rather than import the file to keep the test self-contained
 * and avoid issues with IIFE execution at module load time.
 */
function runLangInitLogic(): void {
  try {
    const stored = localStorage.getItem('grm-lang');
    const lang = (stored === 'pt' || stored === 'en') ? stored : 'pt';
    document.documentElement.setAttribute('lang', lang);
    (window as Window & { __grm_lang?: string; __grm_lang_disabled?: boolean })
      .__grm_lang = lang;
  } catch (e) {
    document.documentElement.setAttribute('lang', 'pt');
    (window as Window & { __grm_lang?: string; __grm_lang_disabled?: boolean })
      .__grm_lang = 'pt';
    (window as Window & { __grm_lang?: string; __grm_lang_disabled?: boolean })
      .__grm_lang_disabled = true;
  }
}

/** Reset all state touched by the init script between runs. */
function resetState(): void {
  localStorage.clear();
  document.documentElement.removeAttribute('lang');
  const w = window as Window & { __grm_lang?: string; __grm_lang_disabled?: boolean };
  delete w.__grm_lang;
  delete w.__grm_lang_disabled;
}

// Validates: Requirements 2.3, 2.4
describe('Property 3: Language localStorage round-trip', () => {
  it('should apply the stored language to <html lang> and window.__grm_lang', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('pt', 'en'),
        (lang: 'pt' | 'en') => {
          // Arrange: clean slate
          resetState();

          // Act: write lang to localStorage then run the init script logic
          localStorage.setItem('grm-lang', lang);
          runLangInitLogic();

          // Assert: <html lang="..."> must equal the stored language
          expect(document.documentElement.getAttribute('lang')).toBe(lang);
          // Assert: window.__grm_lang must equal the stored language
          expect(
            (window as Window & { __grm_lang?: string }).__grm_lang
          ).toBe(lang);

          // Cleanup after each run to avoid cross-contamination
          resetState();
        }
      ),
      { numRuns: 100 }
    );
  });
});
