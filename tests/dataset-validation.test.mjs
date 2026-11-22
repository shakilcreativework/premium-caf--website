import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

import { MENU_ITEMS, FILTER_OPTIONS } from '../src/data/menu.ts';
import { formatPrice, cn } from '../src/lib/utils.ts';

const EXPECTED_CATEGORIES = ['espresso', 'brewed', 'cold-craft', 'pastries'];
const EXPECTED_FILTER_IDS = ['all', 'espresso', 'brewed', 'cold-craft', 'pastries'];
const KEBAB_CASE_REGEX = /^[a-z0-9]+(-[a-z0-9]+)*$/;

describe('DEV-05.4 — Local Dataset Integrity & Invariants', () => {
  it('1. Dataset contains exactly 12 menu items', () => {
    assert.equal(MENU_ITEMS.length, 12, `Expected 12 items, found ${MENU_ITEMS.length}`);
  });

  it('2. Exactly 4 distinct product categories are present', () => {
    const categories = new Set(MENU_ITEMS.map((item) => item.category));
    assert.equal(categories.size, 4, `Expected 4 categories, found ${categories.size}`);
    for (const cat of EXPECTED_CATEGORIES) {
      assert.ok(categories.has(cat), `Missing expected category: ${cat}`);
    }
  });

  it('3. Exactly 3 items per category', () => {
    for (const cat of EXPECTED_CATEGORIES) {
      const itemsInCat = MENU_ITEMS.filter((item) => item.category === cat);
      assert.equal(
        itemsInCat.length,
        3,
        `Category '${cat}' has ${itemsInCat.length} items (expected 3)`
      );
    }
  });

  it('4. Exactly 4 featured products total', () => {
    const featuredItems = MENU_ITEMS.filter((item) => item.featured);
    assert.equal(
      featuredItems.length,
      4,
      `Expected 4 featured items, found ${featuredItems.length}`
    );
  });

  it('5. Exactly 1 featured item per category', () => {
    for (const cat of EXPECTED_CATEGORIES) {
      const featuredInCat = MENU_ITEMS.filter(
        (item) => item.category === cat && item.featured
      );
      assert.equal(
        featuredInCat.length,
        1,
        `Category '${cat}' has ${featuredInCat.length} featured items (expected 1)`
      );
    }
  });

  it('6. All product IDs are globally unique', () => {
    const ids = MENU_ITEMS.map((item) => item.id);
    const uniqueIds = new Set(ids);
    assert.equal(uniqueIds.size, ids.length, 'Duplicate product IDs detected');
  });

  it('7. All product IDs use valid kebab-case format', () => {
    for (const item of MENU_ITEMS) {
      assert.ok(
        KEBAB_CASE_REGEX.test(item.id),
        `Item ID '${item.id}' is not valid kebab-case`
      );
    }
  });

  it('8. No empty product names', () => {
    for (const item of MENU_ITEMS) {
      assert.ok(
        typeof item.name === 'string' && item.name.trim().length > 0,
        `Item ${item.id} has an empty or invalid name`
      );
    }
  });

  it('9. No empty product descriptions', () => {
    for (const item of MENU_ITEMS) {
      assert.ok(
        typeof item.description === 'string' && item.description.trim().length > 0,
        `Item ${item.id} has an empty or invalid description`
      );
    }
  });

  it('10. All prices are finite, positive numbers', () => {
    for (const item of MENU_ITEMS) {
      assert.ok(
        Number.isFinite(item.price),
        `Item ${item.id} price is not finite: ${item.price}`
      );
      assert.ok(
        item.price > 0,
        `Item ${item.id} price must be greater than 0: ${item.price}`
      );
    }
  });

  it('11. All currencies are valid ISO 4217 standard codes', () => {
    for (const item of MENU_ITEMS) {
      assert.equal(typeof item.currency, 'string');
      assert.equal(item.currency.length, 3, `Invalid ISO code length: ${item.currency}`);
      // Test that Intl accepts the code without throwing RangeError
      assert.doesNotThrow(() => {
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: item.currency,
        });
      }, `Item ${item.id} has unsupported currency: ${item.currency}`);
    }
  });

  it('12. All product category IDs are valid members of ProductCategory', () => {
    for (const item of MENU_ITEMS) {
      assert.ok(
        EXPECTED_CATEGORIES.includes(item.category),
        `Invalid category '${item.category}' on item ${item.id}`
      );
    }
  });

  it("13. No product uses 'all' as its category", () => {
    for (const item of MENU_ITEMS) {
      assert.notEqual(
        item.category,
        'all',
        `Product ${item.id} incorrectly uses 'all' as a category`
      );
    }
  });

  it('14. FILTER_OPTIONS IDs are unique', () => {
    const filterIds = FILTER_OPTIONS.map((opt) => opt.id);
    const uniqueFilterIds = new Set(filterIds);
    assert.equal(
      uniqueFilterIds.size,
      filterIds.length,
      'Duplicate filter option IDs detected'
    );
  });

  it('15. FILTER_OPTIONS matches required sequence: all, espresso, brewed, cold-craft, pastries', () => {
    const filterIds = FILTER_OPTIONS.map((opt) => opt.id);
    assert.deepEqual(
      filterIds,
      EXPECTED_FILTER_IDS,
      `Filter sequence mismatch: expected ${EXPECTED_FILTER_IDS.join(', ')}, got ${filterIds.join(', ')}`
    );
  });

  it('16. All optional image paths, when specified, must correspond to existing public files', () => {
    const publicDir = path.join(process.cwd(), 'public');
    for (const item of MENU_ITEMS) {
      if (item.image !== undefined) {
        const fullPath = path.join(publicDir, item.image.replace(/^\//, ''));
        assert.ok(
          fs.existsSync(fullPath),
          `Referenced image does not exist: ${item.image} (full: ${fullPath})`
        );
      }
    }
  });

  it('17. Dataset currently contains zero fabricated image references', () => {
    const itemsWithImages = MENU_ITEMS.filter((item) => item.image !== undefined);
    assert.equal(
      itemsWithImages.length,
      0,
      `Expected 0 image references until assets exist, found ${itemsWithImages.length}`
    );
  });
});

describe('DEV-05.4 — Price Formatting & Edge Cases', () => {
  it('Valid USD price formatting with two decimal places', () => {
    assert.equal(formatPrice(4.85, 'USD'), '$4.85');
    assert.equal(formatPrice(7.5, 'USD'), '$7.50');
    assert.equal(formatPrice(12, 'USD'), '$12.00');
  });

  it('Zero price handling', () => {
    assert.equal(formatPrice(0, 'USD'), '$0.00');
  });

  it('Decimal precision rounding', () => {
    assert.equal(formatPrice(3.854, 'USD'), '$3.85');
    assert.equal(formatPrice(3.856, 'USD'), '$3.86');
  });

  it('Negative prices return safe placeholder', () => {
    assert.equal(formatPrice(-1, 'USD'), '--');
    assert.equal(formatPrice(-0.01, 'USD'), '--');
    assert.equal(formatPrice(-4.85, 'USD'), '--');
  });

  it('NaN, Infinity, and -Infinity return safe placeholder', () => {
    assert.equal(formatPrice(NaN, 'USD'), '--');
    assert.equal(formatPrice(Infinity, 'USD'), '--');
    assert.equal(formatPrice(-Infinity, 'USD'), '--');
  });

  it('Invalid currency code returns safe placeholder without misleading display', () => {
    assert.equal(formatPrice(4.85, 'INVALID'), '--');
    assert.equal(formatPrice(4.85, 'XYZ99'), '--');
  });

  it('Existing cn() utility behavior remains intact', () => {
    assert.equal(cn('p-4', 'bg-surface'), 'p-4 bg-surface');
    assert.equal(cn('p-4', 'p-6'), 'p-6'); // tailwind-merge override
    assert.equal(cn('base', false && 'hidden', undefined, null, 'active'), 'base active');
  });
});
