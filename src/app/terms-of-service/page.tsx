"use client";

import React, { useState, useEffect } from "react";
// Adjust this path if your translation function/type lives elsewhere
import { getTranslations, type Locale } from "@/lib/translations";
import Footer from "@/components/layout/Footer";

export default function TermsOfServicePage() {
  const [currentLang, setCurrentLang] = useState<Locale>("pt");
  const t = getTranslations(currentLang); // Get translations based on state

  useEffect(() => {
    // This runs only once on the client after the component mounts
    const browserLang = navigator.language.split("-")[0]; // Get 'en', 'pt', etc.
    if (browserLang === "en") {
      setCurrentLang("en");
    } else {
      setCurrentLang("pt"); // Default to Portuguese for others or if 'pt' detected
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Effect to update the document title and html lang attribute
  useEffect(() => {
    // Access keys DIRECTLY from 't'. The assertion should silence TS errors.
    document.title = t.terms?.termsTitle || "Terms of Service";
    document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en-US";
  }, [t, currentLang]);

  return (
    <div className="bg-white min-h-screen">
      {/* Optional: <Header /> */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <article className="prose prose-lg max-w-4xl mx-auto">
          {/* Access all terms translations DIRECTLY from 't' */}
          <h1>{t.terms.termsTitle}</h1>
          <p className="text-sm text-gray-500">{t.terms.termsLastUpdated}</p>

          <h2>{t.terms.termsAcceptanceTitle}</h2>
          <p>{t.terms.termsAcceptanceText}</p>

          <h2>{t.terms.termsServiceUseTitle}</h2>
          <p>{t.terms.termsServiceUseText}</p>

          <h2>{t.terms.termsIPTitle}</h2>
          <p>{t.terms.termsIPText}</p>

          <h2>{t.terms.termsUserContentTitle}</h2>
          <p>{t.terms.termsUserContentText}</p>

          <h2>{t.terms.termsPaymentsTitle}</h2>
          <p>{t.terms.termsPaymentsText}</p>

          <h2>{t.terms.termsTerminationTitle}</h2>
          <p>{t.terms.termsTerminationText}</p>

          <h2>{t.terms.termsDisclaimersTitle}</h2>
          <p>{t.terms.termsDisclaimersText}</p>

          <h2>{t.terms.termsLiabilityTitle}</h2>
          <p>{t.terms.termsLiabilityText}</p>

          <h2>{t.terms.termsGoverningLawTitle}</h2>
          <p>{t.terms.termsGoverningLawText}</p>

          <h2>{t.terms.termsChangesTitle}</h2>
          <p>{t.terms.termsChangesText}</p>

          <h2>{t.terms.termsContactTitle}</h2>
          <p>{t.terms.termsContactText}</p>
        </article>
      </main>
      <Footer t={t.footer} />
    </div>
  );
}
