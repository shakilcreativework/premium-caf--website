"use client";

import { useState } from "react";
import type { MenuItem, CategoryFilterOption, CategoryFilterId } from "@/types/menu";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import { ProductCard } from "@/components/ui/ProductCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { cn, filterMenuItems, deriveCategoryCounts } from "@/lib/utils";

interface MenuSectionProps {
  readonly items: readonly MenuItem[];
  readonly filterOptions: readonly CategoryFilterOption[];
  readonly className?: string;
  readonly initialFilter?: CategoryFilterId;
}

/**
 * MenuSection — Semantic interactive café menu presentation (DEV-06.4).
 *
 * Houses the active category filtering state, CategoryFilter controls,
 * live polite result counter, responsive ProductCard grid, and EmptyState fallback.
 */
export function MenuSection({
  items,
  filterOptions,
  className,
  initialFilter = "all",
}: MenuSectionProps) {
  // Client-side category filtering state
  const [activeFilter, setActiveFilter] = useState<CategoryFilterId>(initialFilter);

  // Derive visible products directly from active filter via pure production utility (DEV-09.3)
  const visibleItems = filterMenuItems(items, activeFilter);

  // Derive exact item counts per filter option from the actual dataset via pure production utility (DEV-09.3)
  const categoryCounts = deriveCategoryCounts(items, filterOptions);

  const activeOption = filterOptions.find((opt) => opt.id === activeFilter);

  return (
    <section
      id="menu"
      tabIndex={-1}
      aria-labelledby="menu-heading"
      className={cn(
        "relative w-full py-16 sm:py-20 lg:py-24 bg-background transition-colors duration-200 outline-none",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header Lockup */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Slow Pours &amp; Artisanal Roasts
          </span>
          <h2
            id="menu-heading"
            className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl"
          >
            Curated Offerings
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-secondary sm:text-lg">
            Explore seasonal single-origins, precision espresso extractions, and
            artisan bakery pairings, curated for slow pauses and quiet luxury.
          </p>
        </div>

        {/* Premium Category Filter Pill Bar */}
        <CategoryFilter
          options={filterOptions}
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
          counts={categoryCounts}
          className="mt-8 sm:mt-10"
        />

        {/* Live Result Count & Accessible Status Announcement */}
        <div className="mt-6 flex items-center justify-center">
          <p
            id="menu-result-count"
            aria-live="polite"
            aria-atomic="true"
            className="font-body text-xs sm:text-sm font-medium text-secondary"
          >
            Showing{" "}
            <span className="font-semibold text-primary">{visibleItems.length}</span>{" "}
            {visibleItems.length === 1 ? "offering" : "offerings"}
            {activeFilter !== "all" && (
              <>
                {" "}
                in{" "}
                <span className="font-semibold text-primary">
                  {activeOption?.label ?? activeFilter}
                </span>
              </>
            )}
          </p>
        </div>

        {/* Responsive Product Card Grid (DEV-06.4) */}
        {visibleItems.length > 0 ? (
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <EmptyState
            activeFilter={activeOption?.label ?? activeFilter}
            onReset={() => setActiveFilter("all")}
            className="mt-8 sm:mt-10 max-w-md mx-auto"
          />
        )}
      </div>
    </section>
  );
}
