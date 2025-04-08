// src/components/layout/Navigation.tsx
"use client"; // Still needed for state and dropdown interactions

import React, { useState } from "react"; // useState is needed now
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react"; // Import Menu and X icons

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// REMOVED: No longer need the global translations object here
// import { translations, type Locale } from "@/lib/translations";
import { type Locale } from "@/lib/translations"; // Keep Locale type if needed elsewhere

// --- 1. Define the shape of the 't' prop THIS component expects ---
// This should match the structure of the 'navigation' part of your main translation object
interface NavigationTranslations {
  solution: string;
  features: string;
  useCases: string;
  pricing: string;
  langSelect: string; // Or similar key for the dropdown/button aria-label
  langPt: string; // Text for Portuguese option/display
  langEn: string; // Text for English option/display
  cta: string; // Text for primary CTA
  cta2?: string; // Text for secondary CTA (optional if not always present)
}

// --- 2. Update NavigationProps to include 't' ---
interface NavigationProps {
  currentLang: Locale;
  onLanguageChange: (lang: Locale) => void;
  t: NavigationTranslations; // Add the 't' prop with the specific type
}

// --- 3. Accept 't' in the component function signature ---
export function Navigation({
  currentLang,
  onLanguageChange,
  t,
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  // --- REMOVED: No longer calculate 't' internally ---
  // const t = translations[currentLang].navigation;

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu (useful for link clicks)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        {/* Logo / Site Title - Always visible */}
        <Link
          href="/"
          className="mr-6 flex items-center space-x-2"
          onClick={closeMobileMenu}
        >
          {/* Ensure your logo path is correct */}
          <img src="/agente3.png" alt="Agente 3 Logo" className="h-7" />
        </Link>

        {/* Main Navigation Links (Hidden on Mobile) */}
        {/* --- 4. Use the passed 't' prop for all text --- */}
        <nav className="hidden flex-1 items-center justify-start gap-4 lg:gap-6 lg:flex">
          <Link
            href="/#solution"
            className="transition-colors hover:text-foreground/80 text-sm font-medium" // Added text style
          >
            {t.solution}
          </Link>
          <Link
            href="/#features"
            className="transition-colors hover:text-foreground/80 text-sm font-medium" // Added text style
          >
            {t.features}
          </Link>
          <Link
            href="/#use-cases"
            className="transition-colors hover:text-foreground/80 text-sm font-medium" // Added text style
          >
            {t.useCases}
          </Link>
        </nav>

        {/* Right side actions (Desktop - Hidden on Mobile) */}
        <div className="hidden items-center justify-end gap-4 lg:flex">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-[75px] justify-center gap-1 text-sm font-medium"
              >
                {" "}
                {/* Adjusted width */}
                <Globe className="h-4 w-4" />
                {currentLang.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {/* Display Portuguese option */}
              <DropdownMenuItem
                onSelect={() => {
                  onLanguageChange("pt");
                  closeMobileMenu(); // Close mobile menu if open, harmless on desktop
                }}
              >
                {/* Use the langPt from the passed t prop */}
                {t.langPt}
              </DropdownMenuItem>
              {/* Display English option */}
              <DropdownMenuItem
                onSelect={() => {
                  onLanguageChange("en");
                  closeMobileMenu();
                }}
              >
                {/* Use the langEn from the passed t prop */}
                {t.langEn}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* CTA Buttons */}
          {/* Use the passed t prop */}
          {t.cta2 && <Button variant={"primary"}>{t.cta2}</Button>}
          <Button variant={"outline"}>{t.cta}</Button>
        </div>

        {/* Hamburger Menu Button (Visible on Mobile Only) */}
        <div className="flex items-center lg:hidden">
          {/* Mobile Language Switcher - Simplified to just icon */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size={"icon"} className="mr-2">
                <Globe className="h-8 w-8" />
                <span className="sr-only">
                  {t.langSelect || "Change language"}
                </span>{" "}
                {/* Use translation for aria-label */}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onSelect={() => {
                  onLanguageChange("pt");
                  closeMobileMenu();
                }}
              >
                {t.langPt}
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => {
                  onLanguageChange("en");
                  closeMobileMenu();
                }}
              >
                {t.langEn}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Mobile Menu Toggle Button */}
          <Button
            variant="secondary"
            size={"icon"}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Container (Appears below header) */}
      {isMobileMenuOpen && (
        <div
          // Added animation classes if using TailwindCSS Animate or similar
          className="absolute top-full left-0 right-0 z-40 bg-background shadow-md lg:hidden animate-in slide-in-from-top-4 fade-in duration-200"
        >
          <nav className="flex flex-col gap-4 p-4 pt-2">
            <Link
              href="/#solution"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={closeMobileMenu}
            >
              {t.solution}
            </Link>
            <Link
              href="/#features"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={closeMobileMenu} // Close menu on click
            >
              {t.features}
            </Link>
            <Link
              href="/#use-cases"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={closeMobileMenu}
            >
              {t.useCases}
            </Link>
            {/* Add CTAs to mobile menu */}
            <div className="mt-4 flex flex-col gap-3 border-t border-border/40 pt-4">
              {/* Use passed t prop */}
              {t.cta2 && (
                <Button variant={"primary"} onClick={closeMobileMenu}>
                  {t.cta2}
                </Button>
              )}
              <Button variant={"outline"} onClick={closeMobileMenu}>
                {t.cta}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
