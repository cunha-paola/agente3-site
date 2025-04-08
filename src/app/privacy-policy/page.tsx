"use client";

import React, { useState, useEffect } from "react";
// Adjust this path if your translation function/type lives elsewhere
import { getTranslations, type Locale } from "@/lib/translations";
import Footer from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";

export default function PrivacyPolicyPage() {
  // State to hold the current language for this page
  const [currentLang, setCurrentLang] = useState<Locale>("pt"); // Default to Portuguese
  const t = getTranslations(currentLang); // Get translations based on state

  // --- Function to handle language change requested by Navigation ---
  const handleLanguageChange = (newLang: Locale) => {
    setCurrentLang(newLang); // Update the page's language state
  };

  // Effect to set language based on browser preference on initial load (client-side only)
  useEffect(() => {
    // This runs only once on the client after the component mounts
    const browserLang = navigator.language.split("-")[0]; // Get 'en', 'pt', etc.
    if (browserLang === "en") {
      setCurrentLang("en");
    } else {
      setCurrentLang("pt"); // Default to Portuguese for others or if 'pt' detected
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Effect to update the document title and html lang attribute when language changes
  useEffect(() => {
    // Check if the necessary translation keys exist before setting the title
    document.title = t.privacyPolicy?.privacyTitle || "Privacy Policy"; // Use optional chaining
    // Update the lang attribute of the HTML tag for accessibility/SEO
    document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en-US";
  }, [t, currentLang]); // Re-run this effect if 't' object or 'currentLang' changes

  // Render a loading state or fallback if translations are not ready or missing
  // This prevents errors if t.privacyPolicy is temporarily undefined
  if (!t.privacyPolicy || !t.navigation || !t.footer) {
    // Also check for nav/footer keys if needed by those components
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div>Loading content...</div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navigation
        currentLang={currentLang} // Pass the ACTUAL current language state
        onLanguageChange={handleLanguageChange} // Pass the handler function
        t={t.navigation} // Pass the navigation-specific translations
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <article className="prose prose-lg max-w-4xl mx-auto">
          {/* Access all translations nested under privacyPolicy */}
          <h1>{t.privacyPolicy.privacyTitle}</h1>
          <p className="text-sm text-gray-500">
            {t.privacyPolicy.privacyLastUpdated}
          </p>

          <h2>{t.privacyPolicy.privacyIntroTitle}</h2>
          <p>{t.privacyPolicy.privacyIntroText}</p>

          <h2>{t.privacyPolicy.privacyDataCollectedTitle}</h2>
          <p>{t.privacyPolicy.privacyDataCollectedText}</p>

          <h2>{t.privacyPolicy.privacyHowWeUseTitle}</h2>
          <p>{t.privacyPolicy.privacyHowWeUseText}</p>

          <h2>{t.privacyPolicy.privacyDataSharingTitle}</h2>
          <p>{t.privacyPolicy.privacyDataSharingText}</p>

          <h2>{t.privacyPolicy.privacyDataSecurityTitle}</h2>
          <p>{t.privacyPolicy.privacyDataSecurityText}</p>

          <h2>{t.privacyPolicy.privacyDataRetentionTitle}</h2>
          <p>{t.privacyPolicy.privacyDataRetentionText}</p>

          <h2>{t.privacyPolicy.privacyYourRightsTitle}</h2>
          <p>{t.privacyPolicy.privacyYourRightsText}</p>

          <h2>{t.privacyPolicy.privacyCookiesTitle}</h2>
          <p>{t.privacyPolicy.privacyCookiesText}</p>

          <h2>{t.privacyPolicy.privacyChangesTitle}</h2>
          <p>{t.privacyPolicy.privacyChangesText}</p>

          <h2>{t.privacyPolicy.privacyContactTitle}</h2>
          <p>{t.privacyPolicy.privacyContactText}</p>
        </article>
      </main>
      <Footer t={t.footer} />
    </div>
  );
}
