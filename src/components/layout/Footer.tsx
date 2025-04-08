// src/components/layout/Footer.tsx (ou onde preferir colocar)

import React from "react";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { Button } from "../ui/button";
// Importe seu Logo (ajuste o caminho)
// import Logo from '/path/to/your/logo.svg'; // Ou use um componente Image do Next.js

// --- Interfaces ---
interface FooterTranslations {
  description: string;
  quickLinksTitle: string;
  linkFeatures: string;
  linkUseCases: string;
  linkSolution: string;
  legalLinksTitle: string;
  linkPrivacy: string;
  linkTerms: string;
  socialTitle: string;
  cta: string;
  copyright: string;
}

interface FooterProps {
  t: FooterTranslations;
}

// --- Componente Footer ---
const Footer: React.FC<FooterProps> = ({ t }) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = t.copyright.replace("{year}", currentYear.toString());

  // Links rápidos (ajuste os hrefs conforme sua estrutura de rotas)
  const quickLinks = [
    { label: t.linkSolution, href: "/#solution" },
    { label: t.linkFeatures, href: "/#features" },
    { label: t.linkUseCases, href: "/#use-cases" },
  ];

  // Links legais (ajuste os hrefs)
  const legalLinks = [
    { label: t.linkPrivacy, href: "/privacy-policy" },
    { label: t.linkTerms, href: "/terms-of-service" },
  ];

  // Links sociais (ajuste os hrefs)
  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/agente3ai/",
      icon: <FaLinkedin />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/oiagente3/",
      icon: <FaInstagram />,
    },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Coluna 1: Logo e Descrição */}
          <div className="lg:col-span-1">
            <p className="font-semibold text-neutral-300 uppercase tracking-wider">
              {t.quickLinksTitle}
            </p>
            <nav className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href} className="list-none">
                  <Link
                    href={link.href}
                    className="hover:text-neutral-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </nav>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <p className="font-semibold text-neutral-300 uppercase tracking-wider">
              {t.legalLinksTitle}
            </p>
            <nav className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href} className="list-none">
                  <Link
                    href={link.href}
                    className="hover:text-neutral-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div>
            <p className="font-semibold text-neutral-300 uppercase tracking-wider">
              {t.socialTitle}
            </p>
            <div className="flex mt-4 space-x-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-300 transition-colors text-xl"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex lg:justify-end items-start">
            <Button variant={"outline"} className="text-neutral-900">
              {t.cta}
            </Button>
          </div>
        </div>

        <img
          src="/agente3-white.png"
          alt="Agente 3 Logo"
          className="w-full h-auto mt-8"
        />

        {/* Linha de Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-sm">
          <p>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
