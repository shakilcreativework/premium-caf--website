import { cn } from "@/lib/utils";

interface AboutProps {
  readonly className?: string;
}

/**
 * About — Server Component presenting brand philosophy and café atmosphere (DEV-08.2).
 *
 * Employs an asymmetrical editorial composition with balanced whitespace,
 * a primary philosophy manifesto, and three structured craft pillars.
 * Fully static Server Component shipping 0 KB client JavaScript.
 */
export function About({ className }: AboutProps) {
  return (
    <section
      id="about"
      tabIndex={-1}
      aria-labelledby="about-heading"
      className={cn(
        "relative w-full py-16 sm:py-20 lg:py-24 bg-background border-t border-border/40 transition-colors duration-200 outline-none",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header Lockup */}
        <div className="max-w-3xl">
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Our Philosophy &amp; Atmosphere
          </span>
          <h2
            id="about-heading"
            className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl leading-[1.18]"
          >
            The Art of the Unhurried Pause
          </h2>
          <p className="mt-4 sm:mt-5 font-body text-base leading-relaxed text-secondary sm:text-lg">
            A quiet sanctuary dedicated to artisanal coffee, patient extraction,
            and the restorative rhythm of slowing down. We curate each cup as an
            invitation to step away from haste and savor the quiet nuance of
            exceptional flavor.
          </p>
        </div>

        {/* Asymmetrical Editorial Content Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left Column: Contemplative Editorial Manifesto Panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-2xl border border-border/60 bg-surface/70 p-6 sm:p-8 lg:p-9 shadow-xs backdrop-blur-xs transition-colors duration-200">
              {/* Subtle Terroir Graphic Accent */}
              <div
                className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent"
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
                  <path d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9s-9-4.03-9-9a9 9 0 0 1 9-9Z" />
                  <path d="M12 6v6l4 2" />
                  <path d="M12 18v4" />
                  <path d="M4.93 4.93l2.83 2.83" />
                </svg>
              </div>

              {/* Contemplative Philosophy Quote */}
              <blockquote className="font-display text-xl sm:text-2xl font-medium leading-snug text-primary">
                &ldquo;True luxury is not defined by excess, but by the presence
                of time—the patience to extract a bean with precision and the
                stillness to enjoy it completely.&rdquo;
              </blockquote>

              <div className="mt-6 border-t border-border/40 pt-4 flex items-center justify-between text-xs font-body text-secondary">
                <span className="font-semibold uppercase tracking-wider text-accent">
                  The Craft Ethos
                </span>
                <span className="text-secondary/70">Artisanal Standard</span>
              </div>
            </div>

            {/* Quiet Atmosphere Note */}
            <div className="rounded-xl border border-border/40 bg-surface-soft/20 p-5 sm:p-6 transition-colors duration-200">
              <h3 className="font-display text-base font-semibold text-primary">
                A Space to Breathe
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-secondary">
                Warm earth tones, tactile textures, and an unhurried rhythm. An
                atmosphere created for quiet pauses, mindful presence, and calm
                conversation.
              </p>
            </div>
          </div>

          {/* Right Column: Three Structured Craft Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-border/50">
            {/* Pillar 01 */}
            <article className="pb-8 first:pt-0 last:pb-0 pt-8 first:pt-0">
              <div className="flex items-baseline gap-3">
                <span className="font-body text-xs font-bold uppercase tracking-widest text-accent">
                  01 / Terroir
                </span>
                <span className="text-xs text-secondary/60">&bull;</span>
                <span className="font-body text-xs text-secondary/80">Origin &amp; Varietal</span>
              </div>
              <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight text-primary">
                Respect for Soil and Elevation
              </h3>
              <p className="mt-3 font-body text-sm sm:text-base leading-relaxed text-secondary">
                We celebrate distinctive microclimates—shaded mountain slopes, rich
                volcanic soils, and heritage botanical varietals. Each lot is
                curated to showcase the inherent sweetness, acidity, and aromatic
                character shaped by its native origin.
              </p>
            </article>

            {/* Pillar 02 */}
            <article className="py-8">
              <div className="flex items-baseline gap-3">
                <span className="font-body text-xs font-bold uppercase tracking-widest text-accent">
                  02 / Extraction
                </span>
                <span className="text-xs text-secondary/60">&bull;</span>
                <span className="font-body text-xs text-secondary/80">Water &amp; Precision</span>
              </div>
              <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight text-primary">
                Deliberate, Unhurried Pouring
              </h3>
              <p className="mt-3 font-body text-sm sm:text-base leading-relaxed text-secondary">
                From exacting grind distribution to mineral-balanced brewing water
                and temperature stability, our preparation is deliberate. We honor
                the extraction timeline of every pour-over and espresso to yield a
                clean, nuanced, and harmonious cup.
              </p>
            </article>

            {/* Pillar 03 */}
            <article className="pt-8">
              <div className="flex items-baseline gap-3">
                <span className="font-body text-xs font-bold uppercase tracking-widest text-accent">
                  03 / Hospitality
                </span>
                <span className="text-xs text-secondary/60">&bull;</span>
                <span className="font-body text-xs text-secondary/80">Calm &amp; Presence</span>
              </div>
              <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight text-primary">
                Mindful Sensory Sanctuary
              </h3>
              <p className="mt-3 font-body text-sm sm:text-base leading-relaxed text-secondary">
                Conceived as a thoughtful counterbalance to hurried modern
                routines. Our philosophy embraces warmth, stillness, and a
                genuine respect for the time it takes to savor fine coffee.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
