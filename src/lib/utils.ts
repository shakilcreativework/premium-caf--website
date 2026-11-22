import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { MenuItem, CategoryFilterOption, CategoryFilterId } from '@/types/menu';

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

/**
 * Filter café menu items by category (DEV-09.3).
 *
 * Implements the core production menu filtering contract:
 * - When category is 'all', returns the full items collection.
 * - When category is a specific ProductCategory, returns strictly items matching that category.
 * - When category is unrecognised, returns an empty array safely without throwing.
 * - Preserves dataset ordering and avoids array mutation.
 *
 * @param items - Readonly collection of menu items.
 * @param category - Active category filter identifier.
 * @returns Filtered array of menu items.
 */
export function filterMenuItems(
  items: readonly MenuItem[],
  category: CategoryFilterId
): readonly MenuItem[] {
  if (category === 'all') {
    return items;
  }
  return items.filter((item) => item.category === category);
}

/**
 * Derive exact item counts for each category filter option from the dataset (DEV-09.3).
 *
 * Implements the core production count derivation contract:
 * - 'all' option receives the total item count.
 * - Individual category options receive the count of items belonging to that category.
 * - Operates safely on empty datasets.
 *
 * @param items - Readonly collection of menu items.
 * @param filterOptions - Configured filter options list.
 * @returns Record mapping each CategoryFilterId to its integer count.
 */
export function deriveCategoryCounts(
  items: readonly MenuItem[],
  filterOptions: readonly CategoryFilterOption[]
): Record<CategoryFilterId, number> {
  return filterOptions.reduce<Record<CategoryFilterId, number>>(
    (acc, opt) => {
      acc[opt.id] =
        opt.id === 'all'
          ? items.length
          : items.filter((item) => item.category === opt.id).length;
      return acc;
    },
    {} as Record<CategoryFilterId, number>
  );
}
