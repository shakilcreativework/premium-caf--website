import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurel & Bean — Artisanal Coffee & Slow Rituals",
  description:
    "Experience artisanal coffee, crafted seasonal brews, and tranquil slow rituals in an atmosphere designed for quiet luxury.",
  openGraph: {
    title: "Aurel & Bean — Artisanal Coffee & Slow Rituals",
    description:
      "Experience artisanal coffee, crafted seasonal brews, and tranquil slow rituals in an atmosphere designed for quiet luxury.",
    siteName: "Aurel & Bean",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aurel & Bean — Artisanal Coffee & Slow Rituals",
    description:
      "Experience artisanal coffee, crafted seasonal brews, and tranquil slow rituals in an atmosphere designed for quiet luxury.",
  },
};

const THEME_SCRIPT = `(function(){try{var s=localStorage.getItem('aurel-bean-theme');var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body
        className="min-h-full flex flex-col bg-background text-primary"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
