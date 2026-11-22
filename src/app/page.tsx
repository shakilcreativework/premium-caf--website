export default function Home() {
  return (
          <main id="main-content" className="flex-1 flex flex-col">
            {/* Hero Section Landmark Placeholder */}
            <section
              id="hero"
              className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 text-center max-w-3xl mx-auto"
            >
              <span className="font-body text-xs uppercase tracking-widest text-accent font-semibold mb-3">
                Slow Coffee &amp; Quiet Luxury
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
                Crafted with care. Savored slowly.
              </h1>
              <p className="mt-4 font-body text-base sm:text-lg text-secondary max-w-xl leading-relaxed">
                Welcome to Aurel &amp; Bean. The website shell foundation is active.
                Full section content, 3D coffee visuals, and interactive menu rituals
                will be crafted in upcoming tasks.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                >
                  Explore Menu
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-primary bg-surface transition-colors hover:bg-surface-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                >
                  Our Philosophy
                </a>
              </div>
      </section>

      {/* Semantic Landmark Destination Placeholders (Ensures Valid Navigation Anchors) */}
      <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 pb-20 space-y-8">
        <section
          id="menu"
          tabIndex={-1}
          className="rounded-2xl border border-border/60 bg-surface p-8 text-center"
        >
          <h2 className="font-display text-2xl font-semibold text-primary">
            Artisanal Menu
          </h2>
          <p className="mt-2 text-sm text-secondary">
            Curated espresso, pour-overs, cold-craft, and pastries will be
            introduced in DEV-06 &amp; DEV-07.
          </p>
        </section>

        <section
          id="about"
          tabIndex={-1}
          className="rounded-2xl border border-border/60 bg-surface p-8 text-center"
        >
          <h2 className="font-display text-2xl font-semibold text-primary">
            Our Story &amp; Atmosphere
          </h2>
          <p className="mt-2 text-sm text-secondary">
            The narrative of our producers, terroir, and slow café sanctuary will
            be introduced in DEV-08.
          </p>
        </section>

        <section
          id="contact"
          tabIndex={-1}
          className="rounded-2xl border border-border/60 bg-surface p-8 text-center"
        >
          <h2 className="font-display text-2xl font-semibold text-primary">
            Hours &amp; Location
          </h2>
          <p className="mt-2 text-sm text-secondary">
            Visiting details, map directions, and customer inquiries will be
            finalized in DEV-08.
          </p>
        </section>
      </div>
    </main>
  );
}
