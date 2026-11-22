import type { MenuItem, CategoryFilterOption } from '@/types/menu';

/**
 * Filter options for interactive menu category switching.
 *
 * Strictly ordered according to UX specifications:
 * 1. All Offerings (UI aggregate pseudo-filter)
 * 2. Espresso (Espresso & Milk-based drinks)
 * 3. Brewed (Manual & Filter brews)
 * 4. Cold Craft (Slow-steeped & Chilled beverages)
 * 5. Pastries (Artisanal bakery & confections)
 *
 * Note: 'all' is an aggregate UI filter token and is never assigned
 * as a product domain category.
 */
export const FILTER_OPTIONS: readonly CategoryFilterOption[] = [
  {
    id: 'all',
    label: 'All',
    description: 'Complete collection of curated café offerings',
  },
  {
    id: 'espresso',
    label: 'Espresso',
    description: 'Concentrated extractions & micro-foamed milk',
  },
  {
    id: 'brewed',
    label: 'Brewed',
    description: 'Single-origin manual pour-overs & slow brews',
  },
  {
    id: 'cold-craft',
    label: 'Cold Craft',
    description: 'Slow-steeped cold brews & chilled refreshments',
  },
  {
    id: 'pastries',
    label: 'Pastries',
    description: 'Freshly baked artisan pastries & confections',
  },
] as const;

/**
 * Demonstration Menu Dataset — Aurel & Bean
 *
 * Exactly 12 demonstration products across 4 categories (3 per category).
 * Exactly 4 featured products (1 per category).
 *
 * All items represent demonstration data for portfolio display.
 * They do not represent live commercial inventory, active stock,
 * or certified nutritional/dietary claims.
 */
export const MENU_ITEMS: readonly MenuItem[] = [
  /* ------------------------------------------------------------------------ */
  /* Category 1: Espresso (3 Items)                                           */
  /* ------------------------------------------------------------------------ */
  {
    id: 'prod-espresso-flat-white',
    name: 'Velvet Flat White',
    category: 'espresso',
    description:
      'Double ristretto with silky micro-foamed whole milk, highlighting notes of sweet cocoa and toasted hazelnut.',
    price: 4.85,
    currency: 'USD',
    featured: true,
    tags: ['Signature', 'House Blend'],
    origin: 'Huila, Colombia',
    available: true,
  },
  {
    id: 'prod-espresso-cortado',
    name: 'Spanish Cortado',
    category: 'espresso',
    description:
      'Equal parts extracted espresso and warm textured milk, balancing deep caramel intensity with mellow sweetness.',
    price: 4.25,
    currency: 'USD',
    featured: false,
    tags: ['Balanced'],
    origin: 'Antioquia, Colombia',
    available: true,
  },
  {
    id: 'prod-espresso-cappuccino',
    name: 'Artisan Cappuccino',
    category: 'espresso',
    description:
      'Rich double espresso layered beneath dense velvety milk foam, dusted with single-estate roasted cocoa.',
    price: 4.65,
    currency: 'USD',
    featured: false,
    tags: ['Classic'],
    origin: 'Minas Gerais, Brazil',
    available: true,
  },

  /* ------------------------------------------------------------------------ */
  /* Category 2: Brewed (3 Items)                                             */
  /* ------------------------------------------------------------------------ */
  {
    id: 'prod-brewed-geisha-pourover',
    name: 'Panama Geisha Reserve',
    category: 'brewed',
    description:
      'Slow pour-over extraction revealing delicate aromas of jasmine blossom, bergamot citrus, and white peach.',
    price: 7.50,
    currency: 'USD',
    featured: true,
    tags: ['Reserve', 'Single Origin'],
    origin: 'Boquete, Panama',
    available: true,
  },
  {
    id: 'prod-brewed-ethiopia-yirgacheffe',
    name: 'Yirgacheffe Heirloom',
    category: 'brewed',
    description:
      'Washed Ethiopian heirloom varietal prepared via Kalita Wave, featuring vibrant lemon verbena and wild honey notes.',
    price: 5.75,
    currency: 'USD',
    featured: false,
    tags: ['Single Origin'],
    origin: 'Yirgacheffe, Ethiopia',
    available: true,
  },
  {
    id: 'prod-brewed-kenya-chemex',
    name: 'Kenya Nyeri AA',
    category: 'brewed',
    description:
      'Chemex brew offering a complex, sparkling acidity with distinct notes of blackcurrant, red plum, and cane sugar.',
    price: 6.25,
    currency: 'USD',
    featured: false,
    tags: ['Single Origin'],
    origin: 'Nyeri Hill, Kenya',
    available: true,
  },

  /* ------------------------------------------------------------------------ */
  /* Category 3: Cold Craft (3 Items)                                         */
  /* ------------------------------------------------------------------------ */
  {
    id: 'prod-cold-nitro-draft',
    name: 'Nitro Reserve Cold Brew',
    category: 'cold-craft',
    description:
      'Twenty-hour slow cold extraction infused with pure nitrogen for a cascading creamy head and dark chocolate finish.',
    price: 5.60,
    currency: 'USD',
    featured: true,
    tags: ['Craft Keg', 'Dairy Free'],
    origin: 'Antigua, Guatemala',
    available: true,
  },
  {
    id: 'prod-cold-tonic-espresso',
    name: 'Cascara Citrus Tonic',
    category: 'cold-craft',
    description:
      'Double shot of chilled espresso floated over botanical Indian tonic water with expressed Meyer lemon peel.',
    price: 5.25,
    currency: 'USD',
    featured: false,
    tags: ['Refreshing'],
    origin: 'Tarrazú, Costa Rica',
    available: true,
  },
  {
    id: 'prod-cold-kyoto-drip',
    name: 'Kyoto Slow Drip',
    category: 'cold-craft',
    description:
      'Twelve-hour ice-drip tower extraction yielding a syrupy body with rich notes of cedar, molasses, and dark cherry.',
    price: 6.50,
    currency: 'USD',
    featured: false,
    tags: ['Reserve', 'Limited Batch'],
    origin: 'Sidama, Ethiopia',
    available: true,
  },

  /* ------------------------------------------------------------------------ */
  /* Category 4: Pastries (3 Items)                                           */
  /* ------------------------------------------------------------------------ */
  {
    id: 'prod-pastry-pistachio-babka',
    name: 'Cardamom Pistachio Babka',
    category: 'pastries',
    description:
      'Twisted buttery brioche swirled with house-ground roasted pistachio butter and aromatic green cardamom.',
    price: 4.50,
    currency: 'USD',
    featured: true,
    tags: ['Fresh Daily', 'Artisan Bakery'],
    available: true,
  },
  {
    id: 'prod-pastry-almond-croissant',
    name: 'Double-Baked Almond Croissant',
    category: 'pastries',
    description:
      'Laminated French butter pastry filled with rich almond frangipane and topped with toasted flaked almonds.',
    price: 4.75,
    currency: 'USD',
    featured: false,
    tags: ['Fresh Daily'],
    available: true,
  },
  {
    id: 'prod-pastry-salted-caramel-cannele',
    name: 'Bordeaux Salted Cannelé',
    category: 'pastries',
    description:
      'Caramelized beeswax crust encasing a custard center infused with Tahitian vanilla and Maldon sea salt.',
    price: 3.85,
    currency: 'USD',
    featured: false,
    tags: ['Traditional'],
    available: true,
  },
] as const satisfies readonly MenuItem[];
