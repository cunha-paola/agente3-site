// src/components/HeroSection.tsx
import React from "react";
import { Button } from "./ui/button"; // Assuming Button is in ./ui/button
import { FaWhatsapp } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { cn } from "@/lib/utils"; // Assuming you have cn utility

// 1. Define the interface for the specific translations this component needs
interface HeroTranslations {
  tagTitle: string;
  titlePart1?: string; // Optional chaining might be good if these aren't guaranteed
  titlePart2?: string;
  subtitle: string;
  cta: string;
}

// 2. Define the Props interface for HeroSection to accept 't'
interface HeroSectionProps {
  t: HeroTranslations; // Expect the hero translations object
}

// 3. Use 'props.t' directly instead of getting translations internally
export const HeroSection: React.FC<HeroSectionProps> = ({ t }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 md:pt-40 md:pb-24 min-h-[90vh] bg-white md:rounded-b-[6rem] -mt-16 overflow-hidden"
    >
      <div className="container relative px-4 mx-auto text-center">
        {/* --- Top Content --- */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
          {" "}
          {/* Added margin-bottom */}
          <span className="inline-block max-w-[240px] md:max-w-full px-3  py-1 mb-4 text-xs font-semibold tracking-wider text-fuchsia-400 uppercase bg-fuchsia-100 rounded">
            {" "}
            {/* Added rounded */}
            {t.tagTitle}
          </span>
          <h1 className="mb-6 text-4xl max-w-5xl mx-auto font-heading leading-tight tracking-tight uppercase md:text-5xl lg:text-7xl">
            {t.titlePart1}{" "}
            <FaWhatsapp
              // Adjusted classes for better alignment and responsiveness
              className="inline-block align-middle mb-2"
              // Size adjusted within the H1 font size context
              style={{ fontSize: "0.8em" }}
            />{" "}
            {t.titlePart2}
          </h1>
          <p className="mb-8 text-lg text-neutral-600 md:text-xl max-w-4xl mx-auto">
            {t.subtitle}
          </p>
          <Button size={"lg"} variant={"primary"}>
            <BsStars
              className={cn(
                "inline-block align-middle mr-1.5", // Adjusted spacing
                "transition-transform duration-300",
                "group-hover:animate-[icon-pulse-sparkle_1s_ease-in-out_infinite]" // Assuming keyframes are defined
              )}
            />
            {t.cta}
          </Button>
        </div>

        {/* --- Image Grid Section --- */}

        <div className="relative -mb-16 md:-mb-0">
          {/* Background Dotted Layer - Placed HERE */}
          <div className="absolute top-0 left-0 right-0 bottom-0 z-0 pointer-events-none">
            {/* Added opacity & pointer-events */}
            <img
              src="/dotted.svg"
              alt="Dotted SVG"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          {/* End Background Dotted Layer */}

          {/* Basic 2x2 grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 z-10 relative max-w-6xl mx-auto -mb-32">
            {/* Grid Item 1 */}
            <div className="aspect-[9/19] rounded-xl overflow-hidden shadow-lg">
              {/* Requires @tailwindcss/aspect-ratio plugin OR use padding-top hack */}
              <img
                src="/Flows/1.niceShoes.png"
                alt="Feature image 1"
                className="w-full h-full object-cover" // object-cover ensures the image covers the area
              />
            </div>

            {/* Grid Item 2 */}
            <div className="aspect-[9/19] rounded-xl overflow-hidden shadow-lg md:translate-y-4">
              {" "}
              {/* Example offset */}
              <img
                src="/Flows/2.niceShoes.png"
                alt="Feature image 2"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Grid Item 3 */}
            <div className="aspect-[9/19] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/Flows/3.niceShoes.png"
                alt="Feature image 3"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Grid Item 4 */}
            <div className="aspect-[9/19] rounded-xl overflow-hidden shadow-lg md:translate-y-4">
              {" "}
              {/* Example offset */}
              <img
                src="/Flows/4.niceShoes.png"
                alt="Feature image 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
