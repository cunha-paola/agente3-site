// src/components/layout/Navigation.tsx
"use client"; // Still needed for state and dropdown interactions

import * as React from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react"; // Import Menu and X icons
import { cn } from "@/lib/utils"; // Import cn if you use it

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { translations, type Locale } from "@/lib/translations";

interface NavigationProps {
  currentLang: Locale;
  onLanguageChange: (lang: Locale) => void;
}

export function Navigation({ currentLang, onLanguageChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false); // State for mobile menu

  // Get the translation object for the current language
  const t = translations[currentLang].navigation;

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
          <img src="/agente3.png" alt="Agente 3 Logo" className="h-7" />{" "}
          {/* Corrected alt text */}
        </Link>

        {/* Main Navigation Links (Hidden on Mobile) */}
        <nav className="hidden flex-1 items-center justify-start gap-4 lg:gap-6 lg:flex">
          {" "}
          {/* Centered on desktop */}
          <Link
            href="/#features"
            className="transition-colors hover:text-foreground/80"
          >
            {t.features}
          </Link>
          <Link
            href="/#use-cases"
            className="transition-colors hover:text-foreground/80"
          >
            {t.useCases}
          </Link>
          <Link
            href="/#pricing"
            className="transition-colors hover:text-neutral-900" // Consider text-foreground/80 for consistency
          >
            {t.pricing}
          </Link>
        </nav>

        {/* Right side actions (Desktop - Hidden on Mobile) */}
        <div className="hidden items-center justify-end gap-4 lg:flex">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-[70px] justify-center gap-1">
                <Globe className="h-4 w-4" />
                {currentLang.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onSelect={() => {
                  onLanguageChange("pt");
                  closeMobileMenu();
                }}
              >
                {translations.pt.navigation.langPt}
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => {
                  onLanguageChange("en");
                  closeMobileMenu();
                }}
              >
                {translations.en.navigation.langEn}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* CTA Buttons */}
          <Button variant={"primary"}>{t.cta2}</Button>
          <Button variant={"outline"}>{t.cta}</Button>
        </div>

        {/* Hamburger Menu Button (Visible on Mobile Only) */}
        <div className="flex items-center lg:hidden">
          {" "}
          {/* Wrapper for mobile buttons */}
          {/* Keep Language Switcher on mobile? Optional */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                {" "}
                {/* Added size=icon */}
                <Globe className="h-5 w-5" /> {/* Slightly larger icon */}
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onSelect={() => {
                  onLanguageChange("pt");
                  closeMobileMenu();
                }}
              >
                {translations.pt.navigation.langPt}
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => {
                  onLanguageChange("en");
                  closeMobileMenu();
                }}
              >
                {translations.en.navigation.langEn}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon" // Make it visually a square button
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Container (Appears below header) */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 z-40 bg-background shadow-md lg:hidden animate-in slide-in-from-top-4 fade-in duration-200" // Added animation
        >
          <nav className="flex flex-col gap-4 p-4 pt-2">
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
            <Link
              href="/#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={closeMobileMenu}
            >
              {t.pricing}
            </Link>
            {/* Add CTAs to mobile menu */}
            <div className="mt-4 flex flex-col gap-3 border-t border-border/40 pt-4">
              <Button variant={"primary"} onClick={closeMobileMenu}>
                {t.cta2}
              </Button>
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
