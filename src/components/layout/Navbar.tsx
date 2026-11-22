import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";

interface NavItem {
  readonly label: string;
  readonly href: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#about" },
  { label: "Visit", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors duration-200">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-on-accent focus:outline-none focus:ring-2 focus:ring-focus-ring shadow-lg"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          aria-label="Aurel & Bean — Home"
        >
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-primary transition-colors group-hover:text-accent">
            Aurel &amp; Bean
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm px-1 py-0.5 font-body text-sm font-medium text-secondary transition-colors duration-150 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Header Action Area */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />
          <a
            href="#menu"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-xs sm:text-sm font-medium text-on-accent transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            Explore Menu
          </a>
          {/* Mobile Hamburger Navigation Trigger & Drawer */}
          <MobileNav navItems={NAV_ITEMS} />
        </div>
      </div>
    </header>
  );
}
