import { cn } from "@/lib/utils";

interface ContactProps {
  readonly className?: string;
}

/**
 * Contact — Server Component presenting café visiting hours, illustrative location,
 * and sanctuary atmosphere (DEV-08.3).
 *
 * Implements a balanced dual-column editorial layout providing visitor clarity
 * while maintaining honest portfolio-demonstration provenance.
 * Fully static Server Component shipping 0 KB client JavaScript.
 */
export function Contact({ className }: ContactProps) {
  return (
    <section
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-heading"
      className={cn(
        "relative w-full py-16 sm:py-20 lg:py-24 bg-background border-t border-border/40 transition-colors duration-200 outline-none",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header Lockup */}
        <div className="max-w-3xl">
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Visiting &amp; Sanctuary
          </span>
          <h2
            id="contact-heading"
            className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl leading-[1.18]"
          >
            Hours &amp; Location
          </h2>
          <p className="mt-4 sm:mt-5 font-body text-base leading-relaxed text-secondary sm:text-lg">
            An illustrative destination conceived for artisanal coffee, quiet
            rituals, and contemplative calm. The schedule and setting below
            represent our vision for unhurried hospitality and craft coffee.
          </p>
        </div>

        {/* Dual-Column Visitor Information Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-stretch">
          {/* Card 1: Ritual Hours & Brewing Schedule */}
          <div className="flex flex-col justify-between rounded-2xl border border-border/60 bg-surface/70 p-6 sm:p-8 lg:p-10 shadow-xs backdrop-blur-xs transition-colors duration-200">
            <div>
              <div className="flex items-center justify-between border-b border-border/40 pb-5">
                <div>
                  <span className="font-body text-xs font-bold uppercase tracking-widest text-accent">
                    Schedule
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-primary">
                    Ritual Hours
                  </h3>
                </div>
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
              </div>

              <p className="mt-5 font-body text-sm leading-relaxed text-secondary">
                The brewing schedule reflects an intentional, measured rhythm.
                The concept envisions extractions prepared with precision water
                chemistry, deliberate timing, and freshly ground micro-lots.
              </p>

              {/* Hours Definition List */}
              <dl className="mt-6 divide-y divide-border/40 font-body text-sm">
                <div className="flex items-center justify-between py-3.5">
                  <dt className="font-medium text-primary">Monday – Friday</dt>
                  <dd className="font-semibold text-primary">07:00 – 18:00</dd>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <dt className="font-medium text-primary">Saturday – Sunday</dt>
                  <dd className="font-semibold text-primary">08:00 – 19:00</dd>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <dt className="text-secondary">Tasting Concept</dt>
                  <dd className="font-medium text-accent">Daily at 15:00</dd>
                </div>
              </dl>
            </div>

            {/* Illustrative Provenance Footer */}
            <div className="mt-8 border-t border-border/40 pt-4 flex items-center justify-between text-xs font-body text-secondary/70">
              <span>Concept Hours</span>
              <span>Portfolio Demonstration</span>
            </div>
          </div>

          {/* Card 2: Sanctuary Location & Visiting Etiquette */}
          <div className="flex flex-col justify-between rounded-2xl border border-border/60 bg-surface/70 p-6 sm:p-8 lg:p-10 shadow-xs backdrop-blur-xs transition-colors duration-200">
            <div>
              <div className="flex items-center justify-between border-b border-border/40 pb-5">
                <div>
                  <span className="font-body text-xs font-bold uppercase tracking-widest text-accent">
                    Destination
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-primary">
                    The Sanctuary
                  </h3>
                </div>
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
              </div>

              {/* Semantic Address */}
              <div className="mt-5">
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-secondary/80">
                  Address
                </span>
                <address className="not-italic mt-1.5 font-body text-base text-primary leading-relaxed">
                  <p className="font-semibold text-primary">74 Artisan Way, Coffee Quarter</p>
                  <p className="text-secondary">Old Town District, EC1A 1BB</p>
                </address>
              </div>

              <div className="mt-5 rounded-xl border border-border/40 bg-surface-soft/20 p-4 transition-colors duration-200">
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-accent">
                  Atmosphere Concept
                </span>
                <p className="mt-1.5 font-body text-xs sm:text-sm leading-relaxed text-secondary">
                  Envisioned as an unhurried retreat for quiet pauses and
                  reflective conversation. The space is conceived around calm
                  presence and the sensory appreciation of fine coffee.
                </p>
              </div>
            </div>

            {/* Illustrative Provenance Footer */}
            <div className="mt-8 border-t border-border/40 pt-4 flex items-center justify-between text-xs font-body text-secondary/70">
              <span>Illustrative Location</span>
              <span>Portfolio Demonstration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
