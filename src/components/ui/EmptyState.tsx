import { cn } from "@/lib/utils";

interface EmptyStateProps {
  readonly activeFilter: string;
  readonly onReset: () => void;
  readonly className?: string;
}

/**
 * EmptyState — Accessible zero-match fallback for menu filtering (DEV-06.4).
 *
 * Rendered when a category filter returns zero matching products.
 * Provides an accessible reset action to restore the full product collection.
 */
export function EmptyState({ activeFilter, onReset, className }: EmptyStateProps) {
  return (
    <div
      role="status"
      className={cn(
        "rounded-2xl border border-dashed border-border/80 bg-surface/40 p-8 sm:p-12 text-center backdrop-blur-xs",
        className
      )}
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface-soft/60 text-accent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" x2="6" y1="2" y2="4" />
          <line x1="10" x2="10" y1="2" y2="4" />
          <line x1="14" x2="14" y1="2" y2="4" />
        </svg>
      </div>

      <h3 className="mt-4 font-display text-lg font-bold text-primary">
        No Offerings in {activeFilter}
      </h3>

      <p className="mt-2 font-body text-xs sm:text-sm text-secondary max-w-sm mx-auto leading-relaxed">
        There are currently no selections matching this filter in our demonstration
        tasting menu.
      </p>

      <button
        type="button"
        onClick={onReset}
        className={cn(
          "mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-xs sm:text-sm font-semibold text-on-accent shadow-xs transition-colors duration-200",
          "hover:bg-accent/90 active:scale-98",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
        )}
      >
        View All Offerings
      </button>
    </div>
  );
}
