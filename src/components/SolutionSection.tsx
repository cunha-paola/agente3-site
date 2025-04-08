// src/components/SolutionSection.tsx

import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";

/*
====================================================================
 CSS (Adicionar ao seu arquivo CSS global, ex: src/index.css)
====================================================================

.feature-card-animate {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  opacity: 0;
  will-change: transform, opacity;
}

.slide-in-left-initial {
  transform: translateX(-50px);
}

.slide-in-right-initial {
  transform: translateX(50px);
}

.is-visible {
  opacity: 1;
  transform: translateX(0);
}

====================================================================
*/

// --- Interfaces ---

// 1. Interface para as traduções específicas desta seção
interface SolutionTranslations {
  title: string;
  subtitle: string;
  text: string;
  feature1Title: string;
  feature1Text: string;
  feature2Title: string;
  feature2Text: string;
  feature3Title: string;
  feature3Text: string;
  feature4Title: string;
  feature4Text: string;
  feature5Title: string;
  feature5Text: string;
  cta: string;
}

// 2. Interface para as props do componente principal
interface SolutionSectionProps {
  t: SolutionTranslations; // Espera receber o objeto de tradução da solução
}

// 3. Interface para as props do FeatureCard
interface FeatureCardProps {
  title: string;
  text: string;
  reactions?: React.ReactNode[]; // Array para ícones/emojis de reação
  className?: string; // Para estilos específicos do container do card
  reactionAlign?: "start" | "end"; // Para alinhar as reações
}

// --- Sub-componente FeatureCard ---

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  text,
  reactions,
  className = "",
  reactionAlign = "end",
}) => (
  <div
    // Container do card com estilos visuais
    className={`relative flex flex-col p-4 text-left bg-white rounded-xl shadow-lg border border-neutral-200 ${className}`}
  >
    {/* Conteúdo Principal (Título e Texto) */}
    <h3 className="mb-2 text-lg font-semibold text-neutral-800">{title}</h3>
    <p className="text-neutral-600 ">{text}</p>

    {/* Área das Reações */}
    {reactions && reactions.length > 0 && (
      <div
        className={`absolute -bottom-3 flex space-x-1 px-1
                   ${reactionAlign === "start" ? "left-2" : "right-2"}
                  `}
      >
        {reactions.map((reaction, idx) => (
          <span
            key={idx}
            className="text-sm bg-white border border-neutral-100 rounded-full px-2 py-0.5 shadow-sm flex items-center justify-center"
          >
            {reaction}
          </span>
        ))}
      </div>
    )}
  </div>
);

// --- Componente Principal SolutionSection ---

const SolutionSection: React.FC<SolutionSectionProps> = ({ t }) => {
  // Dados das features (usando os títulos e textos das props `t`)
  // TODO: Substituir emojis por ícones reais se desejar (ex: react-icons)
  const features = [
    { title: t.feature1Title, text: t.feature1Text, reactions: ["👍", "💡"] }, // Entende e Descobre
    { title: t.feature2Title, text: t.feature2Text, reactions: ["🛒", "💰"] }, // Recomenda e Apresenta
    { title: t.feature3Title, text: t.feature3Text, reactions: ["🛡️", "💬"] }, // Supera Barreiras
    { title: t.feature4Title, text: t.feature4Text, reactions: ["📈", "➕"] }, // Aumenta o Pedido
    {
      title: t.feature5Title,
      text: t.feature5Text,
      reactions: ["✅", "💳", "🚀"],
    }, // Simplifica a Compra
  ];

  // Ref para os containers dos cards que serão animados
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  cardRefs.current = cardRefs.current.slice(0, features.length); // Garante tamanho correto

  // Efeito para configurar o IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible"); // Adiciona classe para animar
            observer.unobserve(entry.target); // Para de observar após animar
          }
        });
      },
      {
        threshold: 0.1, // Anima quando 10% do elemento está visível
      }
    );

    // Observa cada elemento referenciado
    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Limpeza ao desmontar o componente
    return () => observer.disconnect();
  }, []); // Roda apenas uma vez

  return (
    <section
      id="solution"
      className="py-16 lg:py-24 bg-fuchsia-200 rounded-tl-[6rem] overflow-hidden" // Cor e cantos arredondados
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto mb-16 text-center lg:mb-16">
          {" "}
          {/* Mais margem inferior */}
          <span className="inline-block max-w-[240px] md:max-w-full px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-fuchsia-400 uppercase bg-white rounded">
            {" "}
            {/* Ajuste visual na tag */}
            {t.subtitle}
          </span>
          <h2 className="mb-4 text-3xl font-heading uppercase leading-tight sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="text-lg text-neutral-700">{t.text}</p>
        </div>

        {/* Layout: Fluxo de Conversa (Zig-Zag com Reações e Animação) */}
        <div className="max-w-3xl mx-auto">
          {" "}
          {/* Limita a largura */}
          <div className="flex flex-col space-y-10">
            {" "}
            {/* Aumentado espaço entre cards */}
            {features.map((feature, index) => {
              const isAlignedStart = index % 2 === 0; // Determina se é "recebido" (esquerda) ou "enviado" (direita)
              return (
                // Container para animação e alinhamento
                <div
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }} // Atribui a ref
                  key={index}
                  className={`
                    flex // Necessário para self-start/end funcionar corretamente
                    ${isAlignedStart ? "justify-start" : "justify-end"}
                    feature-card-animate /* Classe base da animação */
                    ${
                      isAlignedStart
                        ? "slide-in-left-initial"
                        : "slide-in-right-initial"
                    } /* Estado inicial */
                  `}
                >
                  {/* Renderiza o FeatureCard real */}
                  <FeatureCard
                    title={feature.title}
                    text={feature.text}
                    reactions={feature.reactions}
                    reactionAlign={isAlignedStart ? "start" : "end"} // Alinha reações no mesmo lado do card
                    // Define largura máxima e cores diferentes para simular chat
                    className={`
                      w-full max-w-xl // Largura máxima do card
                      ${
                        isAlignedStart
                          ? "bg-white text-neutral-800" // Estilo "recebido"
                          : "bg-emerald-100 text-neutral-800" // Estilo "enviado" (verde claro)
                      }
                    `}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-12 w-full flex justify-center">
          <Button size={"lg"}>{t.cta}</Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
