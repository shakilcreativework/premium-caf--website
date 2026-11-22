"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem {
  readonly label: string;
  readonly href: string;
}

interface MobileNavProps {
  readonly navItems: readonly NavItem[];
}

/* -------------------------------------------------------------------------- */
/* Lightweight Lucide-Style Icons                                             */
/* -------------------------------------------------------------------------- */

function MenuIcon({ className }: { readonly className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden="true"
    >
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { readonly className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { readonly className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4 shrink-0 text-secondary/60", className)}
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* MobileNav Component                                                        */
/* -------------------------------------------------------------------------- */

export function MobileNav({ navItems }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close drawer and manage focus
  const closeDrawer = (restoreFocusToTrigger: boolean) => {
    setIsOpen(false);
    if (restoreFocusToTrigger) {
      triggerRef.current?.focus();
    }
  };

  // Lock body scroll while open and restore on unmount/close
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Auto-focus the close button inside the drawer on open
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
    };
  }, [isOpen]);

  // Handle Escape key dismissal and focus trapping
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeDrawer(true);
        return;
      }

      // Trap Tab focus inside the drawer dialog
      if (e.key === "Tab") {
        if (!drawerRef.current) return;
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Handle in-page anchor navigation: close drawer, release scroll, transfer focus to destination
  const handleNavClick = (href: string) => {
    closeDrawer(false);
    const targetId = href.replace(/^#/, "");
    if (targetId) {
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.focus({ preventScroll: false });
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  };

  // Modal portal content: Rendered directly to document.body to break out of
  // <header>'s backdrop-filter containing block and stacking context
  const modalContent = isOpen ? (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="presentation"
    >
      {/* Backdrop Overlay: Covers 100% of the true viewport */}
      <div
        onClick={() => closeDrawer(true)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 motion-safe:animate-in motion-safe:fade-in"
        aria-hidden="true"
      />

      {/* Drawer Dialog Panel: Solid opaque bg-surface, full viewport height, scrollable in landscape */}
      <div
        ref={drawerRef}
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={cn(
          "relative z-50 flex h-full w-[85vw] max-w-xs sm:max-w-sm flex-col justify-between overflow-y-auto overscroll-contain",
          "border-l border-border/80 bg-surface p-6 shadow-2xl",
          "transition-transform duration-300 ease-out",
          "motion-safe:animate-in motion-safe:slide-in-from-right"
        )}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between border-b border-border/40 pb-4">
            <Link
              href="/"
              onClick={() => closeDrawer(false)}
              className="rounded-md focus-visible:outline-2 focus-visible:outline-focus-ring"
              aria-label="Aurel & Bean — Home"
            >
              <span className="font-display text-xl font-bold tracking-tight text-primary">
                Aurel &amp; Bean
              </span>
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => closeDrawer(true)}
              aria-label="Close mobile navigation menu"
              className={cn(
                "relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-secondary transition-colors",
                "hover:bg-surface-soft/60 hover:text-primary active:scale-95",
                "focus-visible:outline-2 focus-visible:outline-focus-ring",
                "before:absolute before:-inset-1.5 before:content-['']"
              )}
            >
              <CloseIcon />
            </button>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Mobile Section Navigation" className="mt-6">
            <ul className="space-y-1.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3.5 py-3 text-base font-medium text-primary transition-colors",
                      "hover:bg-surface-soft/60 hover:text-accent active:bg-surface-soft",
                      "focus-visible:outline-2 focus-visible:outline-focus-ring"
                    )}
                  >
                    <span className="font-body">{item.label}</span>
                    <ChevronRightIcon />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Drawer Footer & Actions */}
        <div className="border-t border-border/40 pt-6 space-y-4">
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#menu");
            }}
            className={cn(
              "flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-colors",
              "hover:bg-accent/90 active:scale-98",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            )}
          >
            Explore Menu
          </a>

          <p className="text-center font-body text-xs text-secondary/80">
            Crafted with care. Savored slowly.
          </p>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="md:hidden flex items-center">
      {/* Mobile Hamburger Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        aria-label="Open mobile navigation menu"
        className={cn(
          "relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-surface/80 text-secondary transition-colors duration-150",
          "hover:bg-surface hover:text-primary active:scale-95",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
          "before:absolute before:-inset-1.5 before:content-['']" // Ensures >= 44x44px touch hit area
        )}
      >
        <MenuIcon />
      </button>

      {/* Render Drawer into document.body to break out of <header>'s backdrop-filter containing block */}
      {typeof document !== "undefined" && modalContent
        ? createPortal(modalContent, document.body)
        : null}
    </div>
  );
}
