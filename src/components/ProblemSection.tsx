// src/components/ProblemSection.tsx
import React from "react";
// Remove getTranslations import if present

// 1. Define the interface for the specific translations this component needs
interface ProblemTranslations {
  title: string;
  text: string;
  painPoint1Title: string;
  painPoint2Title: string;
  painPoint3Title: string;
  painPoint4Title: string;
  painPoint1: string;
  painPoint2: string;
  painPoint3: string;
  painPoint4: string;
}

// 2. Define the Props interface for ProblemSection to accept 't'
interface ProblemSectionProps {
  t: ProblemTranslations; // Expect the problem translations object
}

// 3. Use 'props.t' directly
export const ProblemSection: React.FC<ProblemSectionProps> = ({ t }) => {
  // Remove any logic that used currentLang or called getTranslations internally

  return (
    <section id="problem" className="py-16 lg:py-24">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-heading leading-tight uppercase sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mb-12 text-lg text-neutral-700">{t.text}</p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl lg:mx-auto">
          {/* Pain Point 1 */}
          <div className="flex items-start p-6 space-x-4 bg-white rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <span className="text-3xl">💸</span> {/* Example Icon */}
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold text-neutral-800">
                {t.painPoint1Title}
              </h3>{" "}
              {/* Consider making title dynamic too? */}
              <p className="text-neutral-600">{t.painPoint1}</p>
            </div>
          </div>

          {/* Pain Point 2 */}
          <div className="flex items-start p-6 space-x-4 bg-white rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <span className="text-3xl">⏳</span>
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold text-neutral-800">
                {t.painPoint2Title}
              </h3>{" "}
              {/* Consider making title dynamic too? */}
              <p className="text-neutral-600">{t.painPoint2}</p>
            </div>
          </div>

          {/* Pain Point 3 */}
          <div className="flex items-start p-6 space-x-4 bg-white rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <span className="text-3xl">🙈</span> {/* Example Icon */}
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold text-neutral-800">
                {t.painPoint3Title}
              </h3>{" "}
              <p className="text-neutral-600">{t.painPoint3}</p>
            </div>
          </div>

          {/* Pain Point 4 */}
          <div className="flex items-start p-6 space-x-4 bg-white rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <span className="text-3xl">⚠️</span>
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold text-neutral-800">
                {t.painPoint4Title}
              </h3>{" "}
              <p className="text-neutral-600">{t.painPoint4}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Default export might be needed depending on your import style in page.tsx
// export default ProblemSection;
