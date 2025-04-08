// src/components/AlternatingUseCasesSection.tsx

import React, { useEffect, useRef } from "react";
import Image from "next/image";

// --- Interfaces (sem alterações) ---
interface AlternatingUseCasesTranslations {
  case1Title: string;
  case1Text: string;
  case1Visual: string;
  case2Title: string;
  case2Text: string;
  case2Visual: string;
  case3Title: string;
  case3Text: string;
  case3Visual: string;
  case4Title: string;
  case4Text: string;
  case4Visual: string;
}
interface AlternatingUseCasesSectionProps {
  t: AlternatingUseCasesTranslations;
}
interface UseCaseItemData {
  title: string;
  text: string;
  visual: string;
}

// --- Componente Principal AlternatingUseCasesSection ---
const AlternatingUseCasesSection: React.FC<AlternatingUseCasesSectionProps> = ({
  t,
}) => {
  const useCasesData: UseCaseItemData[] = [
    { title: t.case1Title, text: t.case1Text, visual: t.case1Visual },
    { title: t.case2Title, text: t.case2Text, visual: t.case2Visual },
    { title: t.case3Title, text: t.case3Text, visual: t.case3Visual },
    { title: t.case4Title, text: t.case4Text, visual: t.case4Visual },
  ];

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  sectionRefs.current = sectionRefs.current.slice(0, useCasesData.length);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div id="use-cases" className="overflow-hidden">
      {useCasesData.map((useCase, index) => {
        const isImageLeft = index % 2 === 0;
        return (
          <section
            key={index}
            // ***** CORREÇÃO: Forma explícita da função de callback *****
            ref={(element: HTMLElement | null) => {
              // Esta função de callback não retorna nada (void),
              // apenas realiza a atribuição como efeito colateral.
              sectionRefs.current[index] = element;
            }}
            className={`py-16 lg:py-24 overflow-hidden use-case-section-animate ${
              index % 2 === 0
                ? "slide-in-right-initial"
                : "bg-white slide-in-left-initial"
            }`}
          >
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
              <div
                className={`flex flex-col lg:items-center gap-12 ${
                  isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Coluna da Imagem */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[16/10] border border-neutral-300 bg-sky-50 rounded-xl shadow overflow-hidden">
                    <Image
                      src={useCase.visual}
                      alt={`Fluxo de ${useCase.title}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                {/* Coluna do Texto */}
                <div className="w-full lg:w-1/2 lg:px-8">
                  <h2 className="text-3xl lg:text-4xl font-heading leading-tight uppercase mb-4">
                    {useCase.title}
                  </h2>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {useCase.text}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default AlternatingUseCasesSection;

// CSS de animação (no CSS global):
/*
.use-case-section-animate { transition: opacity 0.6s ease-out, transform 0.6s ease-out; opacity: 0; will-change: transform, opacity; }
.slide-in-left-initial { transform: translateX(-50px); }
.slide-in-right-initial { transform: translateX(50px); }
.is-visible { opacity: 1; transform: translateX(0); }
*/
