import { HeroVisual } from "@/components/ui/HeroVisual";

interface HeroProps {
  readonly className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={`relative w-full overflow-hidden bg-background py-16 sm:py-20 lg:py-28 transition-colors duration-200 ${
        className ?? ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Content Column */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            {/* Supporting Eyebrow */}
            <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Slow Coffee &amp; Quiet Luxury
            </span>

            {/* Primary Page Headline (Sole H1) */}
            <h1
              id="hero-heading"
              className="font-display text-4xl font-bold tracking-tight text-primary leading-[1.15] sm:text-5xl lg:text-6xl"
            >
              Crafted with care.
              <span className="block text-accent">Savored slowly.</span>
            </h1>

            {/* Concise Editorial Brand Description */}
            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-secondary sm:text-lg">
              A thoughtful café sanctuary dedicated to artisanal coffee, refined
              preparation, and the art of unhurried pauses. Experience seasonal
              selections crafted with calm precision in an atmosphere designed
              for quiet luxury.
            </p>

            {/* Interactive Call to Action Area */}
            <div className="mt-8 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
              <a
                href="#menu"
                className="inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-on-accent shadow-sm transition-colors duration-200 hover:bg-accent/90 active:scale-98 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring sm:w-auto sm:text-base"
              >
                Explore Menu
              </a>

              <a
                href="#about"
                className="inline-flex w-full items-center justify-center rounded-full border border-border/80 bg-surface/60 px-8 py-3.5 text-sm font-medium text-primary transition-colors duration-200 hover:bg-surface hover:text-accent active:scale-98 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring sm:w-auto sm:text-base"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* Premium Layered Coffee Visual Presentation (DEV-04.3) */}
          <div className="flex w-full justify-center lg:col-span-5 lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
