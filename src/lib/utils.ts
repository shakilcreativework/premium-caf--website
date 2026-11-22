import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a numeric price into a localized currency string.
 *
 * Designed for static display of café product pricing.
 * Validates numeric finiteness and non-negativity. If price is invalid,
 * negative, or the currency code is unrecognised, returns a safe '--'
 * placeholder to prevent displaying misleading fallback prices.
 *
 * @param price - Finite numeric price in major currency units.
 * @param currency - ISO 4217 standard alpha-3 currency code (default: 'USD').
 * @param locale - BCP 47 language tag for localization (default: 'en-US').
 * @returns Formatted currency string (e.g. '$4.85'), or '--' on invalid input/currency.
 */
export function formatPrice(
  price: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  if (!Number.isFinite(price) || price < 0) {
    return '--';
  }

  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  } catch {
    // Return safe placeholder if currency code or locale is invalid
    // Prevents displaying misleading fallback prices such as 'INVALID 4.85'
    return '--';
  }
}
