// src/lib/translations.ts

export type Locale = "pt" | "en";

export const translations = {
  pt: {
    // --- Seção Navigation ---
    navigation: {
      features: "Funcionalidades",
      useCases: "Casos de Uso",
      pricing: "Preços",
      langSelect: "Idioma",
      langPt: "Português (PT)",
      langEn: "English (EN)",
      cta: "Criar um Agente",
      cta2: "Fale com o Agente3",
    },
    // --- Seção Hero ---
    hero: {
      tagTitle: "Do “Olá” ao checkout — tudo no piloto automático",
      titlePart1: "Escale o Atendimento e as Vendas com Automação no",
      titlePart2: "WhatsApp",
      subtitle:
        "Transforme o WhatsApp em seu principal canal de vendas com um assistente IA que descobre necessidades, recomenda produtos, supera objeções e guia clientes até o checkout.",
      cta: "Veja o Agente IA em Ação",
    },
    // --- Seção Problem ---
    problem: {
      title: "Perdendo vendas no WhatsApp por falta de resposta imediata?",
      text: "Clientes de e-commerce esperam atendimento rápido no WhatsApp. Respostas lentas significam vendas perdidas, especialmente fora do horário comercial. Apresentar produtos e gerenciar o processo de compra manualmente no chat é ineficiente e difícil de escalar.",
      painPoint1Title: "Vendas Perdidas",
      painPoint2Title: "Tempo Desperdiçado",
      painPoint3Title: "Baixo Engajamento",
      painPoint4Title: "Experiência Inconsistente",
      painPoint1:
        "Carrinhos abandonados e leads não nutridos representam receita direta deixada na mesa.",
      painPoint2:
        "Agentes focados em follow-ups repetitivos em vez de interações estratégicas.",
      painPoint3:
        "Clientes que não se sentem acompanhados tendem a se desconectar ou procurar alternativas.",
      painPoint4:
        "A falta de automação leva a falhas na comunicação e a uma jornada do cliente desigual.",
    },
    // --- Seção Solution ---
    solution: {
      title:
        "Apresentamos a Inteligência Artificial de vendas da Agente3 para WhatsApp",
      subtitle: "Automação Inteligente que trabalha por você 24/7",
      text: "Uma solução completa que orquestra múltiplos agentes IA especializados para transformar seu WhatsApp num poderoso motor de vendas automatizado. Ele não é um simples chatbot, é um assistente de vendas proativo.",
      feature1Title: "Entende e Descobre",
      feature1Text:
        "Conversa com clientes para identificar suas necessidades reais (Agente de Descoberta).",
      feature2Title: "Recomenda e Apresenta",
      feature2Text:
        "Busca em seu catálogo e exibe produtos relevantes usando carrosséis e mensagens de produto nativas do WhatsApp.",
      feature3Title: "Supera Barreiras",
      feature3Text:
        "Lida com perguntas frequentes e objeções de forma inteligente (Agente de Objeções).",
      feature4Title: "Aumenta o Pedido",
      feature4Text:
        "Sugere produtos complementares para cross-selling eficaz (Agente de Cross-Sell) e oferece descontos estratégicos.",
      feature5Title: "Simplifica a Compra",
      feature5Text:
        "Gerencia o carrinho de compras e guia o cliente suavemente até o checkout (Agente de Checkout), tudo dentro do WhatsApp.",
      cta: "Veja a Plataforma Completa",
    },
    // --- Seção Benefits (Interativa) ---
    benefits: {
      sectionTitle: "Porquê Automatizar Suas Interações com Clientes?",
      benefit1Title: "Aumente Conversão e LTV",
      benefit1Text:
        "Desde recuperar carrinhos abandonados até incentivar novas compras, upgrades ou renovações, veja suas vendas e o valor do ciclo de vida do cliente crescerem.",
      benefit1Visual: "/Solutions/aumente-conversāo.png",
      benefit2Title: "Personalização que Impressiona",
      benefit2Text:
        "Envie a mensagem certa, para a pessoa certa, na hora certa, usando dados para criar relevância em escala e fortalecer o relacionamento com seus clientes.",
      benefit2Visual: "/Solutions/personalizacao.png",
      benefit3Title: "Eficiência Operacional",
      benefit3Text:
        "Automatize tarefas repetitivas como follow-ups e lembretes, liberando sua equipe (Olá, Agente3!) para focar em resolver problemas complexos e encantar clientes.",
      benefit3Visual: "/Solutions/operacional.png",
      benefit4Title: "Experiência do Cliente Top",
      benefit4Text:
        "Garanta um onboarding suave, colete feedback estratégico (NPS/CSAT) de forma consistente e mantenha seus clientes engajados e satisfeitos ao longo de toda a jornada.",
      benefit4Visual: "/Solutions/experiencia.png",
      benefit5Title: "Comunicação Multi-Canal",
      benefit5Text:
        "Aumente as chances de sua mensagem ser vista e respondida, interagindo com os clientes nos canais que eles realmente preferem (WhatsApp, SMS, Email e mais).",
      benefit5Visual: "/Solutions/multi.png",
    },
    // --- Seção Use Cases (Layout Alternado) ---
    useCases: {
      case1Title: "Recuperação de carrinho abandonado",
      case1Text:
        "Não deixe vendas escaparem. Recupere clientes que adicionaram itens ao carrinho mas não finalizaram, enviando lembretes automáticos e um link direto para completar a compra via WhatsApp.",
      case1Visual: "/images/use-cases/cart-recovery-flow.png",
      case2Title: "Pós-compra e fidelização",
      case2Text:
        "Mantenha seus clientes engajados após a compra. Envie atualizações sobre o envio, peça avaliações, ofereça suporte proativo e sugira produtos complementares para incentivar a próxima compra.",
      case2Visual: "/images/use-cases/post-purchase-flow.png",
      case3Title: "Nutrição de leads e boas-vindas",
      case3Text:
        "Receba novos leads ou clientes com uma sequência de boas-vindas calorosa e informativa. Apresente seus diferenciais, eduque sobre seu produto e guie-os naturalmente pelo funil de vendas.",
      case3Visual: "/images/use-cases/lead-nurturing-flow.png",
      case4Title: "Notificações e reengajamento",
      case4Text:
        "Mantenha contato com sua base. Informe automaticamente sobre itens de volta ao estoque, promoções exclusivas ou novidades, trazendo clientes inativos de volta para sua loja.",
      case4Visual: "/images/use-cases/reengagement-flow.png",
    },
    agentFocus: {
      // Metadados para a imagem/visual
      visualSrc: "/Flows/test.png", // <<< SUBSTITUIR pelo caminho real da sua imagem em Português
      visualAlt:
        "Demonstração da funcionalidade Carrosséis no WhatsApp da Agente3 exibindo produtos",

      // Conteúdo de Texto
      tag: "Novo!",
      titlePart1: "VITRINES INTERATIVAS NO", // O título principal
      titlePart2: "WHATSAPP", // O título principal
      description:
        "Com Vitrines Interativas (Carrosséis), destaque produtos, serviços ou promoções de forma dinâmica e visual. Mais descoberta, mais cliques, mais engajamento no WhatsApp.",
      descriptionHighlightLink: "/features/carousels",
    },
    finalCTA: {
      bannerHeadline: "VEJA A PLATAFORMA COMPLETA",
      bannerDescription:
        "Veja como as Jornadas podem ser personalizadas para os desafios e oportunidades do seu negócio, seja ele um e-commerce ou de outro setor.",
      bannerButton: "Criar um Agente Agora",
      qrHeadline: "EXPERIMENTE NO WHATSAPP",
      qrText: "Escaneie ou clique no código para iniciar uma conversa.",
      secondaryLink: "Ou explore mais funcionalidades",
    },
    footer: {
      description:
        "Automatizando conversas no WhatsApp para escalar vendas e atendimento.", // Tagline curta
      quickLinksTitle: "Navegação",
      linkFeatures: "Funcionalidades",
      linkUseCases: "Casos de Uso",
      linkPricing: "Preços",
      legalLinksTitle: "Legal",
      linkPrivacy: "Política de Privacidade",
      linkTerms: "Termos de Serviço",
      socialTitle: "Siga-nos",
      cta: "Criar um Agente Agora",
      copyright: "© {year} Agente3. Todos os direitos reservados.",
    },
  },
  en: {
    // --- Seção Navigation ---
    navigation: {
      features: "Features",
      useCases: "Use Cases",
      pricing: "Pricing",
      langSelect: "Language",
      langPt: "Português (PT)",
      langEn: "English (EN)",
      cta: "Start now",
      cta2: "Talk to Agente3",
    },
    // --- Seção Hero ---
    hero: {
      tagTitle: "Go Beyond Chat:",
      titlePart1: "Scale Your Support and Sales with",
      titlePart2: "WhatsApp Automation",
      subtitle:
        "Agente3’s platform helps you engage, convert, and retain customers at the right moment with intelligent, multichannel sequences.",
      cta: "Discover the Power of Journeys",
    },
    // --- Seção Problem ---
    problem: {
      title:
        "Losing opportunities and customers due to lack of proactive follow-up?",
      text: "Many companies lose opportunities as customers postpone decisions. Leads go cold, onboarding falls short, and teams spend time on manual follow-ups that miss the right moment — leading to lost sales, low engagement, and support that doesn’t scale.",
      painPoint1Title: "Lost Sales",
      painPoint2Title: "Wasted Time",
      painPoint3Title: "Low Engagement",
      painPoint4Title: "Inconsistent Experience",
      painPoint1:
        "Abandoned carts and unnurtured leads represent direct revenue left on the table.",
      painPoint2:
        "Agents focused on repetitive follow-ups instead of strategic interactions.",
      painPoint3:
        "Customers who don't feel attended to tend to disengage or look for alternatives.",
      painPoint4:
        "Lack of automation leads to communication gaps and an uneven customer journey.",
    },
    // --- Seção Solution ---
    solution: {
      title: "Introducing Agente3's Automated Journeys",
      subtitle: "Smart Automation That Works For You 24/7",
      text: "With Agente3's intuitive platform, you visually design proactive communication flows that guide your customers through personalized experiences, perfectly adapted to your business model.",
      feature1Title: "Build Without Code",
      feature1Text:
        'Use our intuitive visual "drag-and-drop" interface to quickly set up powerful journeys.',
      feature2Title: "Trigger at the Right Moment",
      feature2Text:
        "Automatically start conversations based on customer actions (website visit, purchase, inactivity), time, or CRM data.",
      feature3Title: "Be Where Your Customer Is",
      feature3Text:
        "Communicate via WhatsApp, SMS, Email, and more, maintaining your brand's consistency across all channels.",
      feature4Title: "Intelligence & Connection",
      feature4Text:
        "Use conditional logic to customize paths and easily integrate with your essential tools (E-commerce Platform, CRM, Helpdesk).",
      feature5Title: "Measure & Optimize",
      feature5Text:
        "Track performance at every step and refine your journeys for maximum impact.",
      cta: "See the Full Platform",
    },
    // --- Seção Benefits (Interativa) ---
    benefits: {
      sectionTitle: "Why Automate Your Customer Interactions?",
      benefit1Title: "Boost Conversion & LTV",
      benefit1Text:
        "From recovering abandoned carts to encouraging repeat purchases, upgrades, or renewals, watch your sales and customer lifetime value grow.",
      benefit1Visual: "/images/benefits/benefit-1-visual.png", // REPLACE PATH
      benefit2Title: "Personalization That Impresses",
      benefit2Text:
        "Send the right message to the right person at the right time, using data to create relevance at scale and strengthen customer relationships.",
      benefit2Visual: "/images/benefits/benefit-2-visual.png", // REPLACE PATH
      benefit3Title: "Operational Efficiency",
      benefit3Text:
        "Automate repetitive tasks like follow-ups and reminders, freeing up your team (Hello, Agente3!) to focus on solving complex problems and delighting customers.",
      benefit3Visual: "/images/benefits/benefit-3-visual.png", // REPLACE PATH
      benefit4Title: "Top-Notch Customer Experience",
      benefit4Text:
        "Ensure smooth onboarding, consistently collect strategic feedback (NPS, CSAT), and keep your customers engaged and satisfied throughout their entire journey.",
      benefit4Visual: "/images/benefits/benefit-4-visual.png", // REPLACE PATH
      benefit5Title: "Multi-Channel Communication",
      benefit5Text:
        "Increase the chances your message is seen and responded to by interacting with customers on the channels they actually prefer (WhatsApp, SMS, Email, and more).",
      benefit5Visual: "/images/benefits/benefit-5-visual.png", // REPLACE PATH
    },
    // --- Seção Use Cases (Layout Alternado) ---
    useCases: {
      case1Title: "ABANDONED CART RECOVERY FLOWS",
      case1Text:
        "Don't let sales slip away. Recover customers who added items to their cart but didn't check out by sending automated reminders and a direct link to complete the purchase via WhatsApp.",
      case1Visual: "/images/use-cases/cart-recovery-flow.png", // REPLACE PATH
      case2Title: "POST-PURCHASE & LOYALTY FLOWS",
      case2Text:
        "Keep your customers engaged after the purchase. Send shipping updates, ask for reviews, offer proactive support, and suggest complementary products to encourage the next purchase.",
      case2Visual: "/images/use-cases/post-purchase-flow.png", // REPLACE PATH
      case3Title: "LEAD NURTURING & WELCOME FLOWS",
      case3Text:
        "Greet new leads or customers with a warm and informative welcome sequence. Introduce your unique selling points, educate them about your product, and guide them naturally through the sales funnel.",
      case3Visual: "/images/use-cases/lead-nurturing-flow.png", // REPLACE PATH
      case4Title: "NOTIFICATIONS & RE-ENGAGEMENT FLOWS",
      case4Text:
        "Keep in touch with your base. Automatically notify about back-in-stock items, exclusive promotions, or news, bringing inactive customers back to your store.",
      case4Visual: "/images/use-cases/reengagement-flow.png", // REPLACE PATH
    },
    agentFocus: {
      visualSrc: "/images/features/whatsapp-carousels-en.png", // English image path
      visualAlt: "Demo of Agente3 WhatsApp Carousels feature showing products",
      tag: "New feature",
      title: "WHATSAPP CAROUSELS",
      description:
        "Create engaging, interactive marketing campaigns that showcase multiple products, services, or messages in a single, side-scrollable view with our <a href='/features/carousels' class='text-blue-600 font-medium hover:underline'>carousels feature</a>.",
    },
    // --- UPDATED Final CTA Section (Dual Layout) ---
    finalCTA: {
      bannerHeadline: "SEE THE FULL PLATFORM",
      bannerDescription:
        "See how Journeys can be tailored to your business's unique challenges and opportunities — whether you're in e-commerce or another industry.",
      bannerButton: "Create an Agent Now",
      qrHeadline: "TRY IT ON WHATSAPP",
      qrText: "Scan or click on the code to start a conversation.", // Optional text
      secondaryLink: "Or explore more features", // Optional link
    },
    footer: {
      description:
        "Automating WhatsApp conversations to scale sales and support.", // Short tagline
      quickLinksTitle: "Navigation",
      linkFeatures: "Features",
      linkUseCases: "Use Cases",
      linkPricing: "Pricing",
      legalLinksTitle: "Legal",
      linkPrivacy: "Privacy Policy",
      linkTerms: "Terms of Service",
      socialTitle: "Follow Us",
      cta: "Start an Agent Now",
      copyright: "© {year} Agente3. All rights reserved.",
    },
  },
};

// Helper function to get translations for a specific locale
export const getTranslations = (locale: Locale) =>
  translations[locale] || translations.pt; // Default to PT if locale not found
