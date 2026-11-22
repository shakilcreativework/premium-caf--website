import { Hero } from "@/components/sections/Hero";
import { MenuSection } from "@/components/sections/MenuSection";
import { MENU_ITEMS, FILTER_OPTIONS } from "@/data/menu";

export default function Home() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      {/* Semantic Hero Section */}
      <Hero />

      {/* Semantic Menu Section (DEV-06) */}
      <MenuSection items={MENU_ITEMS} filterOptions={FILTER_OPTIONS} />

      {/* Semantic Landmark Destination Placeholders (Ensures Valid Navigation Anchors) */}
      <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 pb-20 space-y-8">
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
