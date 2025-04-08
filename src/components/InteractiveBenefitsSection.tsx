// src/components/InteractiveBenefitsSection.tsx

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// --- Interfaces --- (Sem alterações)
interface InteractiveBenefitsTranslations {
  sectionTitle: string;
  benefit1Title: string;
  benefit1Text: string;
  benefit1Visual: string;
  benefit2Title: string;
  benefit2Text: string;
  benefit2Visual: string;
  benefit3Title: string;
  benefit3Text: string;
  benefit3Visual: string;
  benefit4Title: string;
  benefit4Text: string;
  benefit4Visual: string;
  benefit5Title: string;
  benefit5Text: string;
  benefit5Visual: string;
}

interface InteractiveBenefitsSectionProps {
  t: InteractiveBenefitsTranslations;
}

interface BenefitData {
  id: number;
  icon: React.ReactNode;
  title: string;
  text: string;
  visual: string;
}

// --- Componente Principal InteractiveBenefitsSection ---

const InteractiveBenefitsSection: React.FC<InteractiveBenefitsSectionProps> = ({
  t,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const benefitsData: BenefitData[] = [
    {
      id: 0,
      icon: "🚀",
      title: t.benefit1Title,
      text: t.benefit1Text,
      visual: t.benefit1Visual,
    },
    {
      id: 1,
      icon: "✨",
      title: t.benefit2Title,
      text: t.benefit2Text,
      visual: t.benefit2Visual,
    },
    {
      id: 2,
      icon: "⏱️",
      title: t.benefit3Title,
      text: t.benefit3Text,
      visual: t.benefit3Visual,
    },
    {
      id: 3,
      icon: "😊",
      title: t.benefit4Title,
      text: t.benefit4Text,
      visual: t.benefit4Visual,
    },
    {
      id: 4,
      icon: "🌐",
      title: t.benefit5Title,
      text: t.benefit5Text,
      visual: t.benefit5Visual,
    },
  ];

  const handleToggle = (index: number) => {
    const nextIndex = expandedIndex === index ? null : index;
    setExpandedIndex(nextIndex);
    if (nextIndex !== null) {
      setImageIndex(index);
    }
  };

  const imageBenefit = benefitsData[imageIndex];

  return (
    <section id="features" className="bg-fuchsia-200">
      {" "}
      {/* Considerar se esse fundo ainda faz sentido */}
      <div className="py-16 lg:py-24 bg-white rounded-tl-[6rem]">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          {/* Título da Seção */}
          <div className="max-w-3xl mx-auto mb-12 text-center lg:mb-16">
            <h2 className="text-3xl font-heading leading-tight uppercase sm:text-4xl lg:text-5xl">
              {t.sectionTitle}
            </h2>
          </div>
          {/* Layout Principal */}
          <div className="flex flex-col lg:flex-row lg:space-x-12 items-start">
            {/* Coluna da Esquerda: Acordeão de Benefícios */}
            <div className="w-full lg:w-2/5 mb-10 lg:mb-0">
              {/* Removido space-y-3 do wrapper, controle fino no item */}
              <div className="border-t border-neutral-200">
                {" "}
                {/* Linha inicial acima do primeiro item */}
                {benefitsData.map((benefit, index) => (
                  // Removido bg-white, rounded-lg, shadow-sm, border daqui
                  // Adicionado border-b para a linha divisória
                  <div
                    key={benefit.id}
                    className="border-b border-neutral-200 transition-all duration-300"
                  >
                    {/* Botão/Cabeçalho do Acordeão */}
                    <button
                      onClick={() => handleToggle(index)}
                      // Removido bg-white daqui, controla no estado
                      className={`w-full hover:cursor-pointer flex items-center justify-between p-4 text-left transition-colors duration-200 ease-in-out hover:bg-neutral-50
                        ${
                          expandedIndex === index ? "bg-neutral-50" : ""
                        } // Apenas muda o fundo quando ativo
                      `}
                      aria-expanded={expandedIndex === index}
                      aria-controls={`benefit-content-${benefit.id}`}
                    >
                      <div className="flex items-center">
                        <span
                          className={`mr-4 text-3xl ${
                            expandedIndex === index ? "" : "opacity-80"
                          }`}
                        >
                          {benefit.icon}
                        </span>
                        <span
                          className={`text-lg font-semibold ${
                            expandedIndex === index
                              ? "text-neutral-900"
                              : "text-neutral-800"
                          }`}
                        >
                          {benefit.title}
                        </span>
                      </div>
                      {/* Ícone de Chevron */}
                      <span
                        className={`transform transition-transform duration-300 ${
                          expandedIndex === index ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-neutral-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* Conteúdo Expansível (Texto) com Animação */}
                    <AnimatePresence initial={false}>
                      {expandedIndex === index && (
                        <motion.section
                          id={`benefit-content-${benefit.id}`}
                          key="content"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                          }}
                          transition={{
                            duration: 0.3,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          }}
                          className="overflow-hidden"
                        >
                          {/* Adicionado bg-neutral-50 leve ao conteúdo expandido para diferenciar */}
                          <div className="p-4 pt-2 pb-5 text-neutral-600 leading-relaxed bg-neutral-50">
                            {" "}
                            {/* Ajustado padding e adicionado fundo leve */}
                            {benefit.text}
                          </div>
                        </motion.section>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>{" "}
              {/* Fim do wrapper com border-t */}
            </div>{" "}
            {/* Fim da Coluna da Esquerda (Acordeão) */}
            {/* Coluna da Direita: APENAS Visualização (Sem alterações aqui) */}
            <div className="w-full lg:w-3/5 sticky top-24">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="aspect-video bg-neutral-100 relative">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={imageBenefit.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={imageBenefit.visual}
                        alt={`Visualização para ${imageBenefit.title}`}
                        layout="fill"
                        objectFit="contain"
                        priority={imageIndex === 0}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>{" "}
            {/* Fim da Coluna da Direita (Imagem) */}
          </div>{" "}
          {/* Fim do Layout Principal */}
        </div>{" "}
        {/* Fim do container */}
      </div>{" "}
      {/* Fim do div com fundo branco e borda */}
    </section> /* Fim da seção */
  );
};

export default InteractiveBenefitsSection;
