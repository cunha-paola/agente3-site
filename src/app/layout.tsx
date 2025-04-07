// src/app/layout.tsx

import type { Metadata } from "next";
import { Manrope, Anton } from "next/font/google"; // Import fonts
import "./globals.css";
import { cn } from "@/lib/utils"; // Import cn utility

// Configure Manrope for body text
const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"], // Added more weights
});

// Configure Anton for headings (assuming you might want it available)
// If not used site-wide, you could remove it here and import where needed.
const fontHeading = Anton({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
});

// --- Metadata Configuration ---
// IMPORTANT: Define your site's base URL. Use environment variables ideally.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.agente3.com"; // REPLACE WITH YOUR ACTUAL DOMAIN

export const metadata: Metadata = {
  // --- Basic & SEO ---
  // Use more specific defaults from your page or keep these general
  title: {
    default: "Agente3 | IA para Vendas e Atendimento no WhatsApp", // Default for all pages
    template: "%s | Agente3", // Template for pages that define their own title
  },
  description:
    "Use a IA do Agente3 para automatizar atendimento 24/7 no WhatsApp, aumentar vendas (+30%) e converter conversas. Agende uma demonstração!", // Default description
  applicationName: "Agente3",
  keywords: [
    "WhatsApp AI",
    "Chatbot WhatsApp",
    "Vendas WhatsApp",
    "Atendimento Automatizado",
    "IA Conversacional",
    "Agente3",
    "Inteligência Artificial",
    "Marketing WhatsApp",
    "Comércio WhatsApp",
  ],
  metadataBase: new URL(siteUrl),

  // --- Open Graph ---
  openGraph: {
    title: "Agente3 | IA para Vendas e Atendimento no WhatsApp", // Consistent title
    description:
      "Automatize seu WhatsApp com IA, aumente vendas e melhore o atendimento ao cliente com Agente3.",
    url: siteUrl,
    siteName: "Agente3",
    images: [
      {
        url: "/og-image.png", // Ensure this exists in /public (1200x630)
        width: 1200,
        height: 630,
        alt: "Agente3 - Plataforma de IA para WhatsApp",
      },
    ],
    locale: "pt_BR", // Match the default lang="pt-BR" below
    alternateLocale: ["en_US"], // Assuming English is also supported
    type: "website",
  },

  // --- Twitter Card ---
  twitter: {
    card: "summary_large_image",
    title: "Agente3 | IA para Vendas e Atendimento no WhatsApp",
    description:
      "Use a IA do Agente3 para automatizar atendimento 24/7 no WhatsApp, aumentar vendas (+30%) e converter conversas.",
    images: ["/twitter-image.png"], // Ensure this exists in /public
    // site: '@YourTwitterHandle', // Optional
    // creator: '@CreatorHandle', // Optional
  },

  // --- Icons ---
  icons: {
    icon: "/favicon.ico", // Standard favicon in /public
    shortcut: "/favicon-16x16.png", // Example shortcut icon
    apple: "/apple-touch-icon.png", // For Apple devices
  },

  // --- Viewport ---
  viewport: {
    width: "device-width",
    initialScale: 1,
  },

  // --- Language Alternates & Canonical ---
  // Defines alternates from the root layout path ('/')
  alternates: {
    canonical: "/", // Canonical path for the root
    languages: {
      "pt-BR": "/", // URL path for Portuguese (root)
      "en-US": "/en", // *** ADJUST this path if your English version URL is different ***
    },
  },

  // --- Other ---
  robots: {
    // Default robot settings
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // manifest: '/site.webmanifest', // Add if you have one
  // verification: { google: 'YOUR_GOOGLE_CODE' }, // Add verification codes
};

// --- Root Layout Component ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Set default language here, matching the primary locale in metadata
    <html lang="pt-BR" suppressHydrationWarning>
      {/* <head /> tag is automatically managed by Next.js - no need to add it manually */}
      <body
        className={cn(
          "min-h-screen bg-[#f5f5f2] font-sans antialiased", // Use Manrope as default sans-serif
          fontSans.variable, // Makes --font-sans available
          fontHeading.variable // Makes --font-heading available (if you use it)
        )}
      >
        {children}
      </body>
    </html>
  );
}
