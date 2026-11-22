/**
 * Aurel & Bean — Premium Café Website
 * Domain Contracts for Café Menu Data
 *
 * All types and interfaces defined here represent domain models
 * for local typed demonstration data. They do not represent
 * live commercial services, transactional inventory, or external APIs.
 */

/**
 * Proposed demo product categories for the café website.
 * These represent demonstration classifications for portfolio presentation,
 * not verified real-world commercial offerings.
 */
export type ProductCategory =
  | 'espresso'
  | 'brewed'
  | 'cold-craft'
  | 'pastries';

/**
 * Filter identifier for UI menu navigation.
 * Extends domain categories with the 'all' pseudo-filter for aggregate viewing.
 * The 'all' value is strictly a UI navigation token and must never be
 * assigned as an individual product's domain category.
 */
export type CategoryFilterId = 'all' | ProductCategory;

/**
 * Contract for UI category filter tab options.
 */
export interface CategoryFilterOption {
  readonly id: CategoryFilterId;
  readonly label: string;
  readonly description?: string;
}

/**
 * Core domain contract for café menu items.
 *
 * Represents an individual menu offering with strict immutability.
 * Product names, descriptions, tasting notes, and prices represent
 * demonstration data and do not imply real-world commercial facts,
 * verified inventory, or formal certifications.
 */
export interface MenuItem {
  /** Unique stable product identifier (e.g. 'prod-espresso-flat-white') */
  readonly id: string;
  /** Display name of the product (e.g. 'Velvet Flat White') */
  readonly name: string;
  /** Domain category. Strictly excludes 'all'. */
  readonly category: ProductCategory;
  /** Editorial description highlighting sensory characteristics or craft notes */
  readonly description: string;
  /**
   * Numeric price in major currency units (e.g. 4.80).
   * Intended strictly for static display presentation.
   * Note: Compile-time numeric typing does not enforce positive numbers or finite checks.
   */
  readonly price: number;
  /**
   * Currency identifier specified as an ISO 4217 standard alpha-3 code (e.g. 'USD', 'GBP', 'EUR').
   * Display symbols (e.g. '$', '£', '€') are derived at presentation time.
   */
  readonly currency: string;
  /**
   * Optional relative public asset path (e.g. '/images/products/flat-white.webp').
   * Optional to allow rendering without runtime errors when image assets are pending.
   */
  readonly image?: string;
  /** Optional accessible image description or screen-reader alternative text */
  readonly alt?: string;
  /** Whether the product is highlighted for featured displays and badges */
  readonly featured: boolean;
  /** Optional editorial tags (e.g. ['Signature', 'Single Origin']). Not certified claims. */
  readonly tags?: readonly string[];
  /** Optional geographic terroir or origin notes (e.g. 'Huila, Colombia'). Demo copy only. */
  readonly origin?: string;
  /**
   * Optional availability state (defaults to true if omitted).
   * Supports rendering out-of-stock UI states without dynamic backend infrastructure.
   */
  readonly available?: boolean;

}
