import Link from "next/link";

interface FooterLink {
  readonly label: string;
  readonly href: string;
}

const FOOTER_NAV_LINKS: readonly FooterLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#about" },
  { label: "Hours & Location", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-surface/50 text-secondary transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand Philosophy */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              aria-label="Aurel & Bean — Home"
            >
              <span className="font-display text-2xl font-bold tracking-tight text-primary">
                Aurel &amp; Bean
              </span>
            </Link>
            <p className="mt-3 font-body text-sm leading-relaxed text-secondary max-w-xs">
              Crafted with care. Savored slowly. Artisanal coffee rituals,
              curated single-origins, and quiet luxury in every pour.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-wider text-primary">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-secondary transition-colors duration-150 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-wider text-primary">
              Ritual Hours
            </h3>
            <div className="mt-4 space-y-2 text-sm font-body text-secondary">
              <p>
                <span className="font-medium text-primary">Mon – Fri:</span>{" "}
                07:00 – 18:00
              </p>
              <p>
                <span className="font-medium text-primary">Sat – Sun:</span>{" "}
                08:00 – 19:00
              </p>
              <p className="pt-1 text-xs text-secondary/80">
                Slow Brew Tastings daily at 15:00
              </p>
            </div>
          </div>

          {/* Café Location */}
          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-wider text-primary">
              Sanctuary
            </h3>
            <div className="mt-4 space-y-1.5 text-sm font-body text-secondary">
              <p>74 Artisan Way, Coffee Quarter</p>
              <p>Old Town District, EC1A 1BB</p>
              <p className="pt-2 text-xs text-secondary/80">
                Walk-ins welcomed for quiet pauses
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-12 border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-secondary">
          <p>&copy; 2026 Aurel &amp; Bean. All rights reserved.</p>
          <p className="text-secondary/80">
            Crafted for the quiet luxury of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}
