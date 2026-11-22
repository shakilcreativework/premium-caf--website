"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavbarShellProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

const SCROLL_THRESHOLD_PX = 40;

/**
 * NavbarShell — Minimal Client Component managing the scroll-triggered header effect (DEV-08.5B).
 *
 * Implements a passive scroll listener that toggles subtle elevation, backdrop density,
 * and border definition when scrolling past the threshold.
 * Uses a boolean gate to ensure zero unnecessary re-renders during active scrolling.
 */
export function NavbarShell({ children, className }: NavbarShellProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check initial scroll position (handles page refreshes, anchors, and restored scroll)
    const handleScroll = () => {
      const scrolled = window.scrollY > SCROLL_THRESHOLD_PX;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    // Run once on mount to establish correct initial state
    handleScroll();

    // Passive listener ensures the browser compositor is never blocked
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 ease-out motion-reduce:transition-none",
        isScrolled
          ? "border-b border-border/80 bg-background/90 backdrop-blur-md shadow-xs"
          : "border-b border-border/30 bg-background/60 backdrop-blur-xs shadow-none",
        className
      )}
    >
      {children}
    </header>
  );
}
