// Feature: grimorio-exe-portfolio, Property 4: i18n key completeness

/**
 * Property 4: i18n key completeness
 * Validates: Requirements 2.5
 *
 * For any key present in pt.json, the same key SHALL exist in en.json,
 * and vice versa — the two translation files SHALL have identical key sets.
 */

import { describe, it, expect } from 'vitest';
import pt from '../../i18n/pt.json';
import en from '../../i18n/en.json';

/**
 * Recursively enumerates all leaf key paths in a nested object.
 * E.g. { site: { name: "x" } } → ["site.name"]
 */
function flattenKeys(obj: object, prefix = ''): string[] {
  const keys: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      keys.push(...flattenKeys(value as object, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

describe('Property 4: i18n key completeness', () => {
  const ptKeys = flattenKeys(pt);
  const enKeys = flattenKeys(en);
  const enKeySet = new Set(enKeys);
  const ptKeySet = new Set(ptKeys);

  it('every key in pt.json exists in en.json', () => {
    const missingFromEn = ptKeys.filter((k) => !enKeySet.has(k));
    expect(
      missingFromEn,
      `Keys present in pt.json but missing from en.json: ${missingFromEn.join(', ')}`
    ).toEqual([]);
  });

  it('every key in en.json exists in pt.json', () => {
    const missingFromPt = enKeys.filter((k) => !ptKeySet.has(k));
    expect(
      missingFromPt,
      `Keys present in en.json but missing from pt.json: ${missingFromPt.join(', ')}`
    ).toEqual([]);
  });

  it('pt.json and en.json have the same total number of keys', () => {
    expect(ptKeys.length).toBe(enKeys.length);
  });
});
