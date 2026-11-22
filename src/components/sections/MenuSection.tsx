"use client";

import { useState } from "react";
import type { MenuItem, CategoryFilterOption, CategoryFilterId } from "@/types/menu";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import { cn, formatPrice } from "@/lib/utils";

interface MenuSectionProps {
  readonly items: readonly MenuItem[];
  readonly filterOptions: readonly CategoryFilterOption[];
  readonly className?: string;
  readonly initialFilter?: CategoryFilterId;
}

/**
 * MenuSection — Semantic interactive café menu presentation shell (DEV-06.3).
 *
 * Houses the active category filtering state, CategoryFilter controls,
 * live polite result counter, and responsive offering layout.
 */
export function MenuSection({
  items,
  filterOptions,
  className,
  initialFilter = "all",
}: MenuSectionProps) {
  // Client-side category filtering state
  const [activeFilter, setActiveFilter] = useState<CategoryFilterId>(initialFilter);

  // Derive visible products directly from active filter without premature useMemo
  const visibleItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  // Derive exact item counts per filter option from the actual dataset
  const categoryCounts = filterOptions.reduce<Record<CategoryFilterId, number>>(
    (acc, opt) => {
      acc[opt.id] =
        opt.id === "all"
          ? items.length
          : items.filter((item) => item.category === opt.id).length;
      return acc;
    },
    {} as Record<CategoryFilterId, number>
  );

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

        {/* Intermediate Restrained Non-Interactive Result Preview (DEV-06.3) */}
        {/* Replaced by full interactive <ProductCard /> and <EmptyState /> in DEV-06.4 */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-border/70 bg-surface/50 p-6 backdrop-blur-xs transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-accent">
                    {item.category}
                  </span>
                  {item.featured && (
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-semibold text-accent">
                      Signature
                    </span>
                  )}
                </div>

                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-primary">
                  {item.name}
                </h3>

                <p className="mt-2 font-body text-xs sm:text-sm leading-relaxed text-secondary line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs">
                <span className="font-body text-secondary/80 truncate max-w-[60%]">
                  {item.origin ?? "Artisan Selection"}
                </span>
                <span className="font-display text-base font-bold text-accent">
                  {formatPrice(item.price, item.currency)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
