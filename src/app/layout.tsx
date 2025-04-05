import type { Metadata } from "next";
import { Manrope, Anton } from "next/font/google"; // Import fonts
import "./globals.css";
import { cn } from "@/lib/utils"; // Import cn utility (will be created by shadcn)

// Configure Manrope for body text
const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"], // Add weights you need
});

// Configure Anton for headings
const fontHeading = Anton({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400", // Anton usually only has 400
});

export const metadata: Metadata = {
  title: "Agente3 Landing Page", // Customize
  description: "Automatize jornadas de cliente proativamente.", // Customize
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-[#f5f5f2] font-sans antialiased", // Base classes - bg-background won't work yet
          fontSans.variable, // Apply Manrope variable
          fontHeading.variable // Apply Anton variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
