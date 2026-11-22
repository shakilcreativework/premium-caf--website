import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      {/* Semantic Hero Section */}
      <Hero />

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
