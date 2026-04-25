/**
 * brand.util.ts
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for the Arc-i-Tech brand name parts.
 * Import BRAND wherever you need to reference the brand name
 * programmatically (page titles, meta tags, alt text, etc.).
 *
 * For the styled HTML version use <app-brand-name> component.
 */

export const BRAND = {
  /** Text before the special letter */
  prefix: 'Arc-',
  /** The italic letter */
  letter: 'i',
  /** The red dot */
  dot: '-',
  /** Text after the dot */
  suffix: 'Tech',
  /** Full plain text — use for alt text, titles, aria-labels */
  full: 'Arc-i-Tech',
  /** Tagline */
  tagline: 'Build. Grow. Succeed.',
} as const;

export type Brand = typeof BRAND;
