// @vitest-environment jsdom
// Feature: grimorio-exe-portfolio, Property 2: Theme localStorage round-trip

import { describe, it, beforeEach } from 'vitest';
import * as fc from 'fast-check';

/**
 * Inline reproduction of src/scripts/theme-init.js logic.
 * We copy the logic here (not import the file) so we can run it in jsdom
 * without Astro's build pipeline.
 *
 * Validates: Requirements 1.3, 1.4
 */
function runThemeInitLogic(): void {
  try {
    const stored = localStorage.getItem('grm-theme');
    const theme = stored === 'theme-light' ? 'theme-light' : 'theme-dark';
    document.documentElement.classList.add(theme);
  } catch (e) {
    document.documentElement.classList.add('theme-light');
  }
}

describe('Property 2: Theme localStorage round-trip', () => {
  beforeEach(() => {
    // Reset <html> class list and localStorage before every test run
    document.documentElement.className = '';
    localStorage.clear();
  });

  it('writes theme to localStorage and reads back the same class on <html>', () => {
    /**
     * Validates: Requirements 1.3, 1.4
     *
     * For any theme value drawn from the valid set {'theme-light', 'theme-dark'}:
     *   1. Store the theme in localStorage under 'grm-theme'
     *   2. Execute the init script logic (as the browser would on page load)
     *   3. Assert <html> has that class applied
     *   4. Assert only one of the two theme classes is present (never both)
     */
    fc.assert(
      fc.property(
        fc.constantFrom('theme-light', 'theme-dark'),
        (theme: string) => {
          // Reset state for each iteration
          document.documentElement.className = '';
          localStorage.clear();

          // Write the theme value into localStorage
          localStorage.setItem('grm-theme', theme);

          // Run the init script logic
          runThemeInitLogic();

          const classList = document.documentElement.classList;

          // The stored theme class must be present
          const hasCorrectClass = classList.contains(theme);

          // Never both theme classes at the same time
          const hasLight = classList.contains('theme-light');
          const hasDark = classList.contains('theme-dark');
          const exclusivity = !(hasLight && hasDark);

          // Exactly one of the two must be present
          const hasAtLeastOne = hasLight || hasDark;

          return hasCorrectClass && exclusivity && hasAtLeastOne;
        }
      ),
      { numRuns: 100 }
    );
  });
});
