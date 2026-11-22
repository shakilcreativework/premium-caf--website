import { Hero } from "@/components/sections/Hero";
import { MenuSection } from "@/components/sections/MenuSection";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { MENU_ITEMS, FILTER_OPTIONS } from "@/data/menu";

export default function Home() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      {/* Semantic Hero Section */}
      <Hero />

      {/* Semantic Menu Section (DEV-06) */}
      <MenuSection items={MENU_ITEMS} filterOptions={FILTER_OPTIONS} />

      {/* Semantic About & Atmosphere Section (DEV-08.2) */}
      <About />

      {/* Semantic Visit, Hours & Location Section (DEV-08.3) */}
      <Contact />
    </main>
  );
}
