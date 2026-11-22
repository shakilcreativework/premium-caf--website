"use client";

import { useSyncExternalStore, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export type ThemeMode = "light" | "dark" | "system";

const STORAGE_KEY = "aurel-bean-theme";

/* -------------------------------------------------------------------------- */
/* React 19 Hydration-Safe Mount Hook via useSyncExternalStore                */
/* -------------------------------------------------------------------------- */

const emptySubscribe = () => () => {};

export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

/* -------------------------------------------------------------------------- */
/* Theme Store Subscriptions (Multi-tab, OS Theme, Local Updates)             */
/* -------------------------------------------------------------------------- */

const themeListeners = new Set<() => void>();

function notifyThemeChange() {
  themeListeners.forEach((listener) => listener());
}

function getStoredTheme(): ThemeMode {
  if (typeof window === "undefined") return "system";
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    if (val === "light" || val === "dark" || val === "system") {
      return val;
    }
  } catch {
    // Ignore storage read errors
  }
  return "system";
}

function applyTheme(mode: ThemeMode) {
  if (typeof window === "undefined") return;
  const root = document.documentElement;
  if (mode === "dark") {
    root.classList.add("dark");
  } else if (mode === "light") {
    root.classList.remove("dark");
  } else {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.toggle("dark", isDark);
  }
}

function subscribeTheme(callback: () => void) {
  themeListeners.add(callback);

  if (typeof window === "undefined") {
    return () => {
      themeListeners.delete(callback);
    };
  }

  // Cross-tab storage synchronization
  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      applyTheme(getStoredTheme());
      callback();
    }
  };

  // OS theme changes while in system mode
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const handleMedia = () => {
    if (getStoredTheme() === "system") {
      applyTheme("system");
      callback();
    }
  };

  window.addEventListener("storage", handleStorage);
  media.addEventListener("change", handleMedia);

  return () => {
    themeListeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
    media.removeEventListener("change", handleMedia);
  };
}

function setAppTheme(mode: ThemeMode) {
  try {
    if (mode === "system") {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, mode);
    }
  } catch {
    // Ignore storage write errors
  }
  applyTheme(mode);
  notifyThemeChange();
}

/* -------------------------------------------------------------------------- */
/* Lightweight Lucide-Style Accessible Inline Icons                           */
/* -------------------------------------------------------------------------- */

function SunIcon({ className }: { readonly className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4 shrink-0", className)}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { readonly className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4 shrink-0", className)}
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function MonitorIcon({ className }: { readonly className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4 shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}

function CheckIcon({ className }: { readonly className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-3.5 w-3.5 shrink-0 text-accent", className)}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const THEME_OPTIONS: readonly {
  readonly mode: ThemeMode;
  readonly label: string;
  readonly icon: typeof SunIcon;
}[] = [
  { mode: "light", label: "Light", icon: SunIcon },
  { mode: "dark", label: "Dark", icon: MoonIcon },
  { mode: "system", label: "System", icon: MonitorIcon },
];

/* -------------------------------------------------------------------------- */
/* Main ThemeToggle Component                                                 */
/* -------------------------------------------------------------------------- */

export function ThemeToggle() {
  const mounted = useMounted();
  const theme = useSyncExternalStore(subscribeTheme, getStoredTheme, () => "system");
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (mode: ThemeMode) => {
    setAppTheme(mode);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  // Determine current active icon to display on trigger
  const CurrentIcon = !mounted
    ? MonitorIcon
    : theme === "light"
    ? SunIcon
    : theme === "dark"
    ? MoonIcon
    : MonitorIcon;

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={`Current theme: ${mounted ? theme : "system"}. Toggle theme menu`}
        className={cn(
          "relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-surface/80 text-secondary transition-colors duration-150",
          "hover:bg-surface hover:text-primary active:scale-95",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
          isOpen && "bg-surface text-primary border-border"
        )}
      >
        <CurrentIcon className="h-4 w-4 transition-transform duration-200" />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          aria-label="Theme options"
          className={cn(
            "absolute right-0 top-full mt-2 w-36 rounded-xl border border-border/80 bg-surface p-1.5 shadow-xl z-50 backdrop-blur-md",
            "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:zoom-in-95",
            "focus:outline-none"
          )}
        >
          {THEME_OPTIONS.map((option) => {
            const Icon = option.icon;
            const isSelected = mounted && theme === option.mode;

            return (
              <button
                key={option.mode}
                type="button"
                role="menuitemradio"
                aria-checked={isSelected}
                onClick={() => handleSelect(option.mode)}
                className={cn(
                  "flex w-full items-center justify-between gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",
                  "focus-visible:outline-2 focus-visible:outline-focus-ring",
                  isSelected
                    ? "bg-surface-soft/60 text-primary font-semibold"
                    : "text-secondary hover:bg-surface-soft/40 hover:text-primary"
                )}
              >
                <span className="flex items-center gap-2">
                  <Icon
                    className={cn(
                      "h-3.5 w-3.5",
                      isSelected ? "text-accent" : "text-secondary"
                    )}
                  />
                  {option.label}
                </span>
                {isSelected && <CheckIcon />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
