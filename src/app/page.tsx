// src/app/page.tsx
"use client";

import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/layout/Navigation";
import { getTranslations, type Locale } from "@/lib/translations";
import { ProblemSection } from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import InteractiveBenefitsSection from "@/components/InteractiveBenefitsSection";
import AlternatingUseCasesSection from "@/components/AlternatingUseCasesSection";
import CreativeAgentFocusSection from "@/components/CreativeAgentFocusSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Locale>("pt");

  const handleLanguageChange = (lang: Locale) => {
    setCurrentLang(lang);
  };

  // Still get 't' here for other components
  const t = getTranslations(currentLang);

  const qrCodeLink =
    "https://wa.me/64211049124?text=Ol%C3%A1%2C%20quero%20ver%20a%20demo%20do%20Agente3";

  return (
    <>
      <Navigation
        currentLang={currentLang} // Keep passing currentLang
        onLanguageChange={handleLanguageChange} // Keep passing handler
        t={t.navigation}
      />
      <main>
        <HeroSection t={t.hero} />
        <ProblemSection t={t.problem} />
        <SolutionSection t={t.solution} />
        <InteractiveBenefitsSection t={t.benefits} />
        <CreativeAgentFocusSection t={t.agentFocus} />
        <AlternatingUseCasesSection t={t.useCases} />
        <FinalCTASection t={t.finalCTA} qrCodeValue={qrCodeLink} />
      </main>
      <WhatsAppButton />

      <Footer t={t.footer} />
    </>
  );
}
