// src/components/FinalCTASection.tsx

import React from "react";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react"; // Usando a versão SVG explicitamente
import { FaChevronDown } from "react-icons/fa";
import { Button } from "./ui/button";

// --- Interfaces (sem alterações) ---
interface FinalCTATranslations {
  bannerHeadline: string;
  bannerDescription: string;
  bannerButton: string;
  qrHeadline: string;
  qrText?: string;
  secondaryLink?: string;
}
interface FinalCTASectionProps {
  t: FinalCTATranslations;
  demoButtonLink?: string;
  qrCodeValue: string;
  secondaryLinkHref?: string;
}

// --- Componente Principal FinalCTASection ---

const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  t,
  demoButtonLink = "/contato",
  qrCodeValue,
  secondaryLinkHref = "/funcionalidades",
}) => {
  return (
    <section id="final-cta-dual" className="pt-16 bg-white lg:pt-24">
      {/* Parte 1: Banner CTA */}
      <div className="flex justify-center max-w-6xl mx-auto">
        <div className="bg-violet-100 rounded-3xl mx-4 sm:mx-6 lg:mx-8 w-full mb-16 lg:mb-24">
          {/* ... (código do banner inalterado) ... */}
          <div className="container px-6 py-8 mx-auto sm:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading uppercase flex-1">
                  {t.bannerHeadline}
                </h2>
                <p className="mt-2 text-left max-w-xl">{t.bannerDescription}</p>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <Button size={"lg"}>{t.bannerButton}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parte 2: QR Code CTA */}
      <div className="py-16 lg:py-20 text-center bg-white">
        <h3 className="text-3xl lg:text-4xl font-heading mb-4 uppercase">
          {t.qrHeadline}
        </h3>
        <FaChevronDown className="mx-auto text-neutral-400 text-2xl mb-6 animate-bounce" />

        {/* ***** MUDANÇA: Envolver o container com <a> ***** */}
        <a
          href={qrCodeValue} // Link do WhatsApp
          target="_blank" // Abrir em nova aba
          rel="noopener noreferrer" // Boas práticas de segurança/performance
          className="inline-block" // Faz o link se comportar como o div interno
          aria-label={`Abrir conversa no WhatsApp (link: ${qrCodeValue})`} // Acessibilidade
        >
          {/* Container Estilizado do QR Code */}
          <div className="p-3 sm:p-4 bg-cyan-100 rounded-2xl shadow-lg transition-transform duration-200 hover:scale-105 cursor-pointer">
            {" "}
            {/* Efeito hover e cursor */}
            <div className="bg-white p-2 rounded-lg">
              <QRCodeSVG // Usando o componente SVG
                value={qrCodeValue}
                size={180}
                level={"H"}
                // Props 'includeMargin' e 'renderAs' não são necessárias para QRCodeSVG
                className="block" // Garante que o SVG não tenha espaço extra abaixo
              />
            </div>
          </div>
        </a>
        {/* ***** FIM DA MUDANÇA ***** */}

        {/* Texto Opcional abaixo do QR Code */}
        {t.qrText && <p className="mt-5 text-neutral-600">{t.qrText}</p>}

        {/* Link Secundário Geral (Opcional) */}
        {/* {t.secondaryLink && secondaryLinkHref && (
          <div className="mt-8">
            <Link
              href={secondaryLinkHref}
              className="text-violet-600 hover:text-violet-800 hover:underline transition-colors"
            >
              {t.secondaryLink}
            </Link>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default FinalCTASection;
