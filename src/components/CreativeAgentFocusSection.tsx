// src/components/CreativeAgentFocusSection.tsx
// NOTE: This component is now repurposed to act as a Feature Spotlight section,
// inspired by the WhatsApp Carousels visual.

import React from "react";
// You might not need specific icons here anymore, but keep imports if used elsewhere.
// import { FaBrain, FaHandshake, FaStar, FaChartLine } from "react-icons/fa";
import Image from "next/image"; // Assuming Next.js for optimized images, otherwise use <img>
import { FaWhatsapp } from "react-icons/fa";

// --- Interfaces ---

// Updated Interface for the translations object expected by this component
interface FeatureSpotlightTranslations {
  visualSrc: string;
  visualAlt: string;
  tag?: string; // Tag is optional
  titlePart1?: string;
  titlePart2?: string;
  description: string;
}

// Props for the component
interface CreativeAgentFocusSectionProps {
  t: FeatureSpotlightTranslations; // Expects the (repurposed) agentFocus object
}

// --- Component Principal CreativeAgentFocusSection ---

const CreativeAgentFocusSection: React.FC<CreativeAgentFocusSectionProps> = ({
  t,
}) => {
  return (
    <section
      id="feature-spotlight"
      className="pt-16 lg:pt-20 pb-32 lg:pb-40 bg-white"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Main container mimicking the visual */}
        <div className="max-w-6xl mx-auto bg-yellow-100 rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 border border-yellow-200">
          {/* Left Column: Visual (Phone Mockup) */}
          <div className="w-full bg-sky-200 md:bg-transparent rounded-2xl p-4 md:w-1/3 lg:w-1/5 flex-shrink-0 relative">
            {/* Using Next.js Image component for optimization */}
            <Image
              src={t.visualSrc}
              alt={t.visualAlt}
              width={300} // Provide appropriate base width
              height={200} // Provide appropriate base height (aspect ratio)
              className="w-full md:h-96 h-64 object-contain md:absolute md:left-0 md:-bottom-36" // Adjust styling as needed
            />
          </div>

          <div className="hidden md:block border-l-2 border-dashed border-yellow-400 self-stretch mx-4"></div>

          {/* Right Column: Text Content */}
          <div className="w-full md:w-2/3 lg:w-4/5">
            {/* Feature Tag */}
            {t.tag && (
              <span className="inline-block bg-pink-200 text-pink-400 text-xs tracking-wider rounded uppercase font-semibold px-3 py-1 mb-3 md:mb-4">
                {t.tag}
              </span>
            )}

            {/* Title */}
            <h2 className="text-3xl leading-tight md:leading-none lg:text-4xl xl:text-5xl font-heading mb-3 md:mb-4 uppercase">
              {t.titlePart1}
              <FaWhatsapp
                // Adjusted classes for better alignment and responsiveness
                className="inline-block mx-1 align-middle mb-2"
                // Size adjusted within the H1 font size context
                style={{ fontSize: "0.8em" }}
              />
              {t.titlePart2}
            </h2>

            {/* Description */}
            {/* Using dangerouslySetInnerHTML for embedded links. Ensure your source is trusted or sanitize! */}
            <p
              className="text-base lg:text-lg text-neutral-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.description }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeAgentFocusSection;
