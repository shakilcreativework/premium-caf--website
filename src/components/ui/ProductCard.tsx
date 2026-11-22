import type { MenuItem } from "@/types/menu";
import { cn, formatPrice } from "@/lib/utils";

interface ProductCardProps {
  readonly item: MenuItem;
  readonly className?: string;
}

/**
 * ProductCard — Premium, typography-first menu offering card (DEV-06.4 / DEV-06.5A).
 *
 * Designed with an editorial aesthetic for specialty café selections.
 * Enforces natural, unclipped text wrapping across all responsive viewports,
 * with dedicated narrow-mobile (320px) optimizations for metadata balancing
 * and title-price alignment.
 */
export function ProductCard({ item, className }: ProductCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-surface/60 p-5 sm:p-7 shadow-xs backdrop-blur-xs transition-all duration-300",
        "hover:border-accent/40 hover:bg-surface hover:shadow-md",
        className
      )}
    >
      <div>
        {/* Optional Image Container (when physical asset is confirmed) */}
        {item.image && (
          <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface-soft/30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.alt ?? item.name}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        )}

        {/* Top Metadata Row: Category & Signature Indicator */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-body text-xs font-semibold uppercase tracking-wider text-accent">
            {item.category}
          </span>
          {item.featured && (
            <span className="inline-flex items-center rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent">
              Signature
            </span>
          )}
        </div>

        {/* Product Heading & Price Lockup (Context-aware wrapping for narrow viewports) */}
        <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-primary leading-snug">
            {item.name}
          </h3>
          <span className="shrink-0 font-display text-lg sm:text-xl font-bold text-accent">
            {formatPrice(item.price, item.currency)}
          </span>
        </div>

        {/* Full, Unclipped Sensory Description */}
        <p className="mt-2.5 font-body text-sm leading-relaxed text-secondary">
          {item.description}
        </p>
      </div>

      {/* Terroir / Origin and Specialty Tag Metadata (Context-aware column-on-mobile layout) */}
      {(item.origin || (item.tags && item.tags.length > 0)) && (
        <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-border/40 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2 text-xs">
          {item.origin ? (
            <div className="inline-flex items-center gap-1.5 font-body text-secondary/90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 text-accent shrink-0"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <span className="leading-tight">{item.origin}</span>
            </div>
          ) : (
            <div className="hidden sm:block" aria-hidden="true" />
          )}

          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-surface-soft/50 px-2 py-0.5 text-[11px] font-medium text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
