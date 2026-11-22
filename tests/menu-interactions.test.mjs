import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { MENU_ITEMS, FILTER_OPTIONS } from '../src/data/menu.ts';
import { filterMenuItems, deriveCategoryCounts } from '../src/lib/utils.ts';

const EXPECTED_CATEGORIES = ['espresso', 'brewed', 'cold-craft', 'pastries'];

describe('DEV-09.3 — Menu Filtering Production Logic Contracts', () => {
  it('A. "all" category returns all 12 products', () => {
    const results = filterMenuItems(MENU_ITEMS, 'all');
    assert.equal(results.length, 12, `Expected 12 items for 'all', got ${results.length}`);
    assert.deepEqual(results, MENU_ITEMS);
  });

  it('B. Each valid category returns exactly its matching products', () => {
    for (const cat of EXPECTED_CATEGORIES) {
      const results = filterMenuItems(MENU_ITEMS, cat);
      assert.equal(results.length, 3, `Expected 3 items for '${cat}', got ${results.length}`);
      for (const item of results) {
        assert.equal(
          item.category,
          cat,
          `Item ${item.id} category mismatch: expected '${cat}', got '${item.category}'`
        );
      }
    }
  });

  it('C. Output preserves dataset order', () => {
    for (const cat of ['all', ...EXPECTED_CATEGORIES]) {
      const results = filterMenuItems(MENU_ITEMS, cat);
      const expectedOrdered = MENU_ITEMS.filter(
        (item) => cat === 'all' || item.category === cat
      );
      for (let i = 0; i < results.length; i++) {
        assert.equal(
          results[i].id,
          expectedOrdered[i].id,
          `Order mismatch at index ${i} for category '${cat}'`
        );
      }
    }
  });

  it('D. No unexpected category contamination', () => {
    for (const cat of EXPECTED_CATEGORIES) {
      const results = filterMenuItems(MENU_ITEMS, cat);
      const otherCategories = EXPECTED_CATEGORIES.filter((c) => c !== cat);
      for (const item of results) {
        assert.ok(
          !otherCategories.includes(item.category),
          `Contamination: found '${item.category}' item ${item.id} in '${cat}' results`
        );
      }
    }
  });

  it('E. No mutation of MENU_ITEMS array or objects', () => {
    const originalLength = MENU_ITEMS.length;
    const originalFirstId = MENU_ITEMS[0].id;
    const originalSnapshot = JSON.stringify(MENU_ITEMS);

    filterMenuItems(MENU_ITEMS, 'espresso');
    filterMenuItems(MENU_ITEMS, 'brewed');
    filterMenuItems(MENU_ITEMS, 'cold-craft');
    filterMenuItems(MENU_ITEMS, 'pastries');
    filterMenuItems(MENU_ITEMS, 'all');
    filterMenuItems(MENU_ITEMS, 'non-existent-cat');

    assert.equal(MENU_ITEMS.length, originalLength, 'MENU_ITEMS length was mutated');
    assert.equal(MENU_ITEMS[0].id, originalFirstId, 'MENU_ITEMS order was mutated');
    assert.equal(
      JSON.stringify(MENU_ITEMS),
      originalSnapshot,
      'MENU_ITEMS deep contents were mutated'
    );
  });

  it('F. Count derivation matches filtered data for all filter options', () => {
    const counts = deriveCategoryCounts(MENU_ITEMS, FILTER_OPTIONS);

    for (const option of FILTER_OPTIONS) {
      const expectedCount = filterMenuItems(MENU_ITEMS, option.id).length;
      assert.equal(
        counts[option.id],
        expectedCount,
        `Count mismatch for '${option.id}': expected ${expectedCount}, got ${counts[option.id]}`
      );
    }

    assert.equal(counts.all, 12, `Expected counts.all = 12, got ${counts.all}`);
    assert.equal(counts.espresso, 3, `Expected counts.espresso = 3, got ${counts.espresso}`);
    assert.equal(counts.brewed, 3, `Expected counts.brewed = 3, got ${counts.brewed}`);
    assert.equal(
      counts['cold-craft'],
      3,
      `Expected counts['cold-craft'] = 3, got ${counts['cold-craft']}`
    );
    assert.equal(counts.pastries, 3, `Expected counts.pastries = 3, got ${counts.pastries}`);
  });

  it('G. Empty results are handled safely', () => {
    const emptyResults = filterMenuItems([], 'espresso');
    assert.deepEqual(emptyResults, []);

    const emptyAllResults = filterMenuItems([], 'all');
    assert.deepEqual(emptyAllResults, []);

    const emptyCounts = deriveCategoryCounts([], FILTER_OPTIONS);
    for (const option of FILTER_OPTIONS) {
      assert.equal(
        emptyCounts[option.id],
        0,
        `Expected 0 for empty counts['${option.id}'], got ${emptyCounts[option.id]}`
      );
    }
  });

  it('H. Unknown category handling returns empty array without throwing', () => {
    assert.doesNotThrow(() => {
      const results = filterMenuItems(MENU_ITEMS, 'non-existent-category');
      assert.equal(results.length, 0, 'Expected 0 items for unknown category');
      assert.deepEqual(results, []);
    });
  });

  it('I. Category count sum matches total item count', () => {
    const counts = deriveCategoryCounts(MENU_ITEMS, FILTER_OPTIONS);
    const categorySum = EXPECTED_CATEGORIES.reduce((sum, cat) => sum + counts[cat], 0);
    assert.equal(
      categorySum,
      counts.all,
      `Sum of categories (${categorySum}) must equal counts.all (${counts.all})`
    );
  });
});
