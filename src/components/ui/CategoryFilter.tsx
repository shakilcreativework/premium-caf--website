"use client";

import type { CategoryFilterOption, CategoryFilterId } from "@/types/menu";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  readonly options: readonly CategoryFilterOption[];
  readonly activeFilter: CategoryFilterId;
  readonly onSelectFilter: (filterId: CategoryFilterId) => void;
  readonly counts: Readonly<Record<CategoryFilterId, number>>;
  readonly className?: string;
}

/**
 * CategoryFilter — Accessible premium filter pill bar (DEV-06.3).
 *
 * Renders semantic toggle buttons (type="button", aria-pressed={isActive})
 * with touch targets >= 44x44px, dynamic item count badges, smooth
 * keyboard focus management, and mobile horizontal scrolling.
 */
export function CategoryFilter({
  options,
  activeFilter,
  onSelectFilter,
  counts,
  className,
}: CategoryFilterProps) {
  return (
    <div
      role="region"
      aria-label="Menu category filters"
      className={cn("relative w-full", className)}
    >
      {/* Horizontally scrollable container on mobile, centered flex-wrap on tablet/desktop */}
      <div
        className={cn(
          "flex items-center gap-2 sm:gap-2.5 overflow-x-auto py-2 px-4 sm:px-0 sm:justify-center",
          "overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        )}
      >
        {options.map((option) => {
          const isActive = activeFilter === option.id;
          const count = counts[option.id] ?? 0;

          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={isActive}
              aria-label={`${option.label} category, ${count} ${
                count === 1 ? "offering" : "offerings"
              } available`}
              onClick={() => onSelectFilter(option.id)}
              onFocus={(e) => {
                // Ensure keyboard-focused off-screen pills scroll smoothly into view
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "nearest",
                });
              }}
              className={cn(
                "group relative inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
                "before:absolute before:-inset-1 before:content-['']", // Enforces >= 44x44px touch hit area
                "motion-reduce:transition-none",
                isActive
                  ? "bg-accent text-on-accent shadow-sm"
                  : "border border-border/80 bg-surface/70 text-secondary hover:border-border hover:bg-surface hover:text-primary active:scale-98"
              )}
            >
              <span>{option.label}</span>
              <span
                className={cn(
                  "inline-flex items-center justify-center rounded-full px-1.5 py-0.5 text-[11px] font-semibold tabular-nums leading-none transition-colors",
                  isActive
                    ? "bg-on-accent/20 text-on-accent"
                    : "bg-surface-soft/60 text-secondary group-hover:text-primary"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
