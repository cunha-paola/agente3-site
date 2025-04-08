// src/lib/translations.ts

export type Locale = "pt" | "en";

export const translations = {
  pt: {
    // --- Seção Navigation ---
    navigation: {
      solution: "Conheça Agente3",
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
      case1Visual: "/Flows/carrinho-abandonado.png",
      case2Title: "Pós-compra e fidelização",
      case2Text:
        "Mantenha seus clientes engajados após a compra. Envie atualizações sobre o envio, peça avaliações, ofereça suporte proativo e sugira produtos complementares para incentivar a próxima compra.",
      case2Visual: "/Flows/fidelizacao.png",
      case3Title: "Nutrição de leads e boas-vindas",
      case3Text:
        "Receba novos leads ou clientes com uma sequência de boas-vindas calorosa e informativa. Apresente seus diferenciais, eduque sobre seu produto e guie-os naturalmente pelo funil de vendas.",
      case3Visual: "/Flows/leads.png",
      case4Title: "Notificações e reengajamento",
      case4Text:
        "Mantenha contato com sua base. Informe automaticamente sobre itens de volta ao estoque, promoções exclusivas ou novidades, trazendo clientes inativos de volta para sua loja.",
      case4Visual: "/Flows/engajamento.png",
    },
    agentFocus: {
      // Metadados para a imagem/visual
      visualSrc: "/Flows/carousel.png",
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
      linkSolution: "Conheça Agente3",
      legalLinksTitle: "Legal",
      linkPrivacy: "Política de Privacidade",
      linkTerms: "Termos de Serviço",
      socialTitle: "Siga-nos",
      cta: "Criar um Agente Agora",
      copyright: "© {year} Agente3. Todos os direitos reservados.",
    },
    privacyPolicy: {
      privacyTitle: "Política de Privacidade",
      privacyLastUpdated: "Última atualização: [Data]",
      privacyIntroTitle: "Introdução",
      privacyIntroText:
        'Bem-vindo(a) à Política de Privacidade da [Nome da Empresa] ("nós", "nosso"). Nós respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Esta política informa como cuidamos dos seus dados pessoais quando você visita nosso site (independentemente de onde você o visita) e informa sobre seus direitos de privacidade e como a lei o protege. [ADICIONE DETALHES RELEVANTES SOBRE O SERVIÇO AGENTE3]',
      privacyDataCollectedTitle: "Dados que Coletamos Sobre Você",
      privacyDataCollectedText:
        "Podemos coletar, usar, armazenar e transferir diferentes tipos de dados pessoais sobre você, como: Dados de Identidade (nome, sobrenome, nome de usuário), Dados de Contato (endereço de e-mail, números de telefone), Dados Técnicos (endereço IP, dados de login, tipo e versão do navegador), Dados de Uso (informações sobre como você usa nosso site e serviços), Dados de Marketing e Comunicações (suas preferências em receber marketing). [DETALHE EXATAMENTE O QUE VOCÊ COLETA, INCLUINDO DADOS DE CONVERSAS DO WHATSAPP SE APLICÁVEL E COMO SÃO ANONIMIZADOS/PROCESSADOS PELA IA].",
      privacyHowWeUseTitle: "Como Usamos Seus Dados Pessoais",
      privacyHowWeUseText:
        "Usamos seus dados pessoais apenas quando a lei nos permite. Mais comumente, usaremos seus dados pessoais nas seguintes circunstâncias: Para executar o contrato que estamos prestes a celebrar ou celebramos com você, quando for necessário para nossos interesses legítimos (ou de terceiros) e seus interesses e direitos fundamentais não se sobrepuserem a esses interesses, quando precisarmos cumprir uma obrigação legal ou regulatória. [SEJA ESPECÍFICO SOBRE OS PROPÓSITOS: FORNECER O SERVIÇO, MELHORAR A IA, SUPORTE, MARKETING COM CONSENTIMENTO, ETC.].",
      privacyDataSharingTitle: "Compartilhamento de Seus Dados Pessoais",
      privacyDataSharingText:
        "Podemos ter que compartilhar seus dados pessoais com partes externas, como provedores de serviços que atuam como processadores (hospedagem, TI, análise de dados), consultores profissionais (advogados, auditores) e autoridades reguladoras. Exigimos que todos os terceiros respeitem a segurança de seus dados pessoais e os tratem de acordo com a lei. [LISTE CATEGORIAS DE TERCEIROS E O PROPÓSITO DO COMPARTILHAMENTO. SEJA TRANSPARENTE SOBRE O USO DE APIs COMO A DO WHATSAPP/META].",
      privacyDataSecurityTitle: "Segurança dos Dados",
      privacyDataSecurityText:
        "Implementamos medidas de segurança apropriadas para evitar que seus dados pessoais sejam acidentalmente perdidos, usados ou acessados de forma não autorizada, alterados ou divulgados. [DESCREVA AS MEDIDAS DE FORMA GERAL, SEM REVELAR DETALHES QUE COMPROMETAM A SEGURANÇA].",
      privacyDataRetentionTitle: "Retenção de Dados",
      privacyDataRetentionText:
        "Só reteremos seus dados pessoais pelo tempo necessário para cumprir os propósitos para os quais os coletamos, incluindo para satisfazer quaisquer requisitos legais, contábeis ou de relatórios. [DEFINA SEUS PERÍODOS DE RETENÇÃO OU OS CRITÉRIOS USADOS PARA DETERMINÁ-LOS].",
      privacyYourRightsTitle: "Seus Direitos Legais",
      privacyYourRightsText:
        "Sob certas circunstâncias, você tem direitos sob as leis de proteção de dados em relação aos seus dados pessoais, como o direito de solicitar acesso, correção, exclusão, restrição de processamento, portabilidade de dados e de retirar o consentimento. [ADAPTE ESTA SEÇÃO CONFORME AS LEIS APLICÁVEIS, COMO LGPD E GDPR].",
      privacyCookiesTitle: "Cookies e Tecnologias Semelhantes",
      privacyCookiesText:
        "Nosso site pode usar cookies e tecnologias semelhantes para distinguir você de outros usuários. Isso nos ajuda a fornecer uma boa experiência e também nos permite melhorar nosso site. [FORNEÇA UM LINK PARA UMA POLÍTICA DE COOKIES SEPARADA OU DETALHE AQUI].",
      privacyChangesTitle: "Alterações a Esta Política",
      privacyChangesText:
        "Podemos atualizar esta política de privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações publicando a nova política de privacidade nesta página. Aconselhamos que você revise esta política periodicamente.",
      privacyContactTitle: "Informações de Contato",
      privacyContactText:
        "Se você tiver alguma dúvida sobre esta política de privacidade ou nossas práticas de privacidade, entre em contato conosco em: [Seu Email de Contato para Privacidade] ou [Endereço Postal, se aplicável].",
    },
    terms: {
      termsTitle: "Termos de Serviço",
      termsLastUpdated: "Última atualização: [Data]",
      termsAcceptanceTitle: "1. Aceitação dos Termos",
      termsAcceptanceText:
        'Ao acessar ou usar o site e os serviços oferecidos por [Nome da Empresa] ("nós", "nosso", "Serviço"), você concorda em cumprir e estar vinculado a estes Termos de Serviço ("Termos"). Se você não concordar com estes Termos, não use o Serviço. [ADICIONE DETALHES RELEVANTES SOBRE O SERVIÇO AGENTE3].',
      termsServiceUseTitle: "2. Uso do Serviço",
      termsServiceUseText:
        "Você concorda em usar o Serviço apenas para fins legais e de acordo com estes Termos. Você é responsável por garantir que seu uso do Serviço cumpra todas as leis, regras e regulamentos aplicáveis, incluindo as políticas da Plataforma WhatsApp Business. Você não deve usar o Serviço para enviar spam, mensagens não solicitadas ou se envolver em qualquer atividade ilegal ou antiética. [SEJA ESPECÍFICO SOBRE RESTRIÇÕES DE USO, CONTAS DE USUÁRIO, ELEGIBILIDADE].",
      termsIPTitle: "3. Propriedade Intelectual",
      termsIPText:
        "O Serviço e seu conteúdo original, recursos e funcionalidades são e permanecerão propriedade exclusiva da [Nome da Empresa] e seus licenciadores. Nossos logotipos, nomes de marcas e o Serviço são protegidos por direitos autorais, marcas registradas e outras leis. [CLARIFIQUE A PROPRIEDADE DO CONTEÚDO DO SITE E DO PRÓPRIO SERVIÇO].",
      termsUserContentTitle: "4. Conteúdo do Usuário (se aplicável)",
      termsUserContentText:
        "Se você fornecer qualquer conteúdo ao Serviço (por exemplo, configurações de chatbot, dados de catálogo), você concede a nós uma licença não exclusiva, mundial, isenta de royalties para usar, copiar, modificar e exibir tal conteúdo na medida necessária para fornecer e melhorar o Serviço. Você é o único responsável por todo o conteúdo que fornecer. [ADAPTE OU REMOVA SE OS USUÁRIOS NÃO GERAREM CONTEÚDO ARMAZENADO POR VOCÊS].",
      termsPaymentsTitle: "5. Pagamentos e Assinaturas (se aplicável)",
      termsPaymentsText:
        "Se o Serviço ou partes dele exigirem pagamento, você concorda em fornecer informações de pagamento atuais, completas e precisas. Os termos de pagamento, taxas, ciclos de faturamento e políticas de reembolso serão apresentados a você no momento da compra ou assinatura. [DETALHE SEUS TERMOS DE PAGAMENTO OU REFERENCIE UMA PÁGINA SEPARADA].",
      termsTerminationTitle: "6. Rescisão",
      termsTerminationText:
        "Podemos rescindir ou suspender seu acesso ao nosso Serviço imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar os Termos. Todas as disposições dos Termos que, por sua natureza, devam sobreviver à rescisão, sobreviverão à rescisão.",
      termsDisclaimersTitle: "7. Isenção de Garantias",
      termsDisclaimersText:
        'O Serviço é fornecido "COMO ESTÁ" e "CONFORME DISPONÍVEL", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que o Serviço será ininterrupto, seguro ou livre de erros. [USE LINGUAGEM LEGAL PADRÃO, MAS CONSULTE UM ADVOGADO].',
      termsLiabilityTitle: "8. Limitação de Responsabilidade",
      termsLiabilityText:
        "Em nenhuma circunstância a [Nome da Empresa], nem seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados, serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos resultantes do seu acesso ou uso, ou incapacidade de acessar ou usar o Serviço. [CONSULTE UM ADVOGADO PARA GARANTIR QUE ESTA CLÁUSULA SEJA VÁLIDA E EXEQUÍVEL].",
      termsGoverningLawTitle: "9. Lei Aplicável",
      termsGoverningLawText:
        "Estes Termos serão regidos e interpretados de acordo com as leis de [Sua Jurisdição - ex: Brasil, Nova Zelândia], sem consideração aos seus conflitos de disposições legais. [ESPECIFIQUE A JURISDIÇÃO CORRETA].",
      termsChangesTitle: "10. Alterações aos Termos",
      termsChangesText:
        "Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, tentaremos fornecer um aviso com pelo menos 30 dias de antecedência antes que quaisquer novos termos entrem em vigor. O que constitui uma alteração material será determinado a nosso exclusivo critério.",
      termsContactTitle: "11. Contato",
      termsContactText:
        "Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco em: [Seu Email de Contato Geral ou Legal].",
    },
  },
  en: {
    // --- Seção Navigation ---
    navigation: {
      solution: "Meet Agente3",
      features: "Features",
      useCases: "Use Cases",
      pricing: "Pricing",
      langSelect: "Language",
      langPt: "Português (PT)",
      langEn: "English (EN)",
      cta: "Create an Agent",
      cta2: "Talk to Agente3",
    },
    // --- Seção Hero ---
    hero: {
      tagTitle: "From “HELLO” to checkout — all on autopilot",
      titlePart1: "Scale Support and Sales with",
      titlePart2: "WhatsApp Automation",
      subtitle:
        "Turn WhatsApp into your main sales channel with an AI assistant that identifies needs, recommends products, handles objections, and guides customers to checkout.",
      cta: "See the AI Agent in Action",
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
      title: "Meet Agente3’s Sales AI for WhatsApp",
      subtitle: "Smart automation working for you 24/7",
      text: "A complete solution that orchestrates multiple specialized AI agents to turn your WhatsApp into a powerful automated sales engine. This isn’t just a chatbot — it’s a proactive sales assistant.",
      feature1Title: "Understands and Identifies",
      feature1Text:
        "Chats with customers to identify their real needs (Discovery Agent).",
      feature2Title: "Recommends and Presents",
      feature2Text:
        "Searches your catalog and shows relevant products using WhatsApp-native carousels and product messages.",
      feature3Title: "Overcomes Objections",
      feature3Text: "Handles FAQs and objections smartly (Objection Agent).",
      feature4Title: "Increases Order Value",
      feature4Text:
        "Suggests complementary products for effective cross-selling and offers strategic discounts.",
      feature5Title: "Simplifies Purchase",
      feature5Text:
        "Manages the shopping cart and smoothly leads the customer to checkout (Checkout Agent), all within WhatsApp.",
      cta: "See the Full Platform",
    },
    // --- Seção Benefits (Interativa) ---
    benefits: {
      sectionTitle: "Why Automate Your Customer Interactions?",
      benefit1Title: "Boost Conversion & LTV",
      benefit1Text:
        "From recovering abandoned carts to encouraging repeat purchases, upgrades, or renewals, watch your sales and customer lifetime value grow.",
      benefit1Visual: "/Solutions/aumente-conversāo.png",
      benefit2Title: "Personalization That Impresses",
      benefit2Text:
        "Send the right message to the right person at the right time, using data to create relevance at scale and strengthen customer relationships.",
      benefit2Visual: "/Solutions/personalizacao.png",
      benefit3Title: "Operational Efficiency",
      benefit3Text:
        "Automate repetitive tasks like follow-ups and reminders, freeing up your team (Hello, Agente3!) to focus on solving complex problems and delighting customers.",
      benefit3Visual: "/Solutions/operacional.png",
      benefit4Title: "Top-Notch Customer Experience",
      benefit4Text:
        "Ensure smooth onboarding, consistently collect strategic feedback (NPS, CSAT), and keep your customers engaged and satisfied throughout their entire journey.",
      benefit4Visual: "/Solutions/experiencia.png",
      benefit5Title: "Multi-Channel Communication",
      benefit5Text:
        "Increase the chances your message is seen and responded to by interacting with customers on the channels they actually prefer (WhatsApp, SMS, Email, and more).",
      benefit5Visual: "/Solutions/multi.png",
    },
    // --- Seção Use Cases (Layout Alternado) ---
    useCases: {
      case1Title: "ABANDONED CART RECOVERY FLOWS",
      case1Text:
        "Don't let sales slip away. Recover customers who added items to their cart but didn't check out by sending automated reminders and a direct link to complete the purchase via WhatsApp.",
      case1Visual: "/Flows/carrinho-abandonado.png",
      case2Title: "POST-PURCHASE & LOYALTY FLOWS",
      case2Text:
        "Keep your customers engaged after the purchase. Send shipping updates, ask for reviews, offer proactive support, and suggest complementary products to encourage the next purchase.",
      case2Visual: "/Flows/fidelizacao.png",
      case3Title: "LEAD NURTURING & WELCOME FLOWS",
      case3Text:
        "Greet new leads or customers with a warm and informative welcome sequence. Introduce your unique selling points, educate them about your product, and guide them naturally through the sales funnel.",
      case3Visual: "/Flows/leads.png",
      case4Title: "NOTIFICATIONS & RE-ENGAGEMENT FLOWS",
      case4Text:
        "Keep in touch with your base. Automatically notify about back-in-stock items, exclusive promotions, or news, bringing inactive customers back to your store.",
      case4Visual: "/Flows/engajamento.png",
    },
    agentFocus: {
      visualSrc: "/Flows/carousel.png",
      visualAlt: "Demo of Agente3 WhatsApp Carousels feature showing products",
      tag: "New!",
      titlePart1: "WHATSAPP CAROUSELS",
      titlePart2: "WHATSAPP CAROUSELS",
      description:
        "With Interactive Showcases (Carousels), highlight products, services, or promotions ",
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
      linkSolution: "Meet Agente3",
      legalLinksTitle: "Legal",
      linkPrivacy: "Privacy Policy",
      linkTerms: "Terms of Service",
      socialTitle: "Follow Us",
      cta: "Start an Agent Now",
      copyright: "© {year} Agente3. All rights reserved.",
    },
    privacyPolicy: {
      privacyTitle: "Privacy Policy",
      privacyLastUpdated: "Last updated: 09/04/2025",
      privacyIntroTitle: "Introduction",
      privacyIntroText:
        'Welcome to the Privacy Policy of Agente3 ("we", "us", "our"). We respect your privacy and are committed to protecting your personal data. This policy informs you how we look after your personal data when you visit our website (regardless of where you visit it from) and tells you about your privacy rights and how the law protects you. [ADD RELEVANT DETAILS ABOUT THE AGENTE3 SERVICE]',
      privacyDataCollectedTitle: "Data We Collect About You",
      privacyDataCollectedText:
        "We may collect, use, store and transfer different kinds of personal data about you such as: Identity Data (first name, last name, username), Contact Data (email address, phone numbers), Technical Data (IP address, login data, browser type and version), Usage Data (information about how you use our website and services), Marketing and Communications Data (your preferences in receiving marketing). [DETAIL EXACTLY WHAT YOU COLLECT, INCLUDING WHATSAPP CONVERSATION DATA IF APPLICABLE AND HOW IT IS ANONYMIZED/PROCESSED BY AI].",
      privacyHowWeUseTitle: "How We Use Your Personal Data",
      privacyHowWeUseText:
        "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: To perform the contract we are about to enter into or have entered into with you, where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests, where we need to comply with a legal or regulatory obligation. [BE SPECIFIC ABOUT PURPOSES: PROVIDING THE SERVICE, IMPROVING AI, SUPPORT, MARKETING WITH CONSENT, ETC.].",
      privacyDataSharingTitle: "Sharing Your Personal Data",
      privacyDataSharingText:
        "We may have to share your personal data with external parties such as service providers acting as processors (hosting, IT, data analytics), professional advisers (lawyers, auditors), and regulators. We require all third parties to respect the security of your personal data and to treat it in accordance with the law. [LIST CATEGORIES OF THIRD PARTIES AND THE PURPOSE OF SHARING. BE TRANSPARENT ABOUT USE OF APIS LIKE WHATSAPP/META].",
      privacyDataSecurityTitle: "Data Security",
      privacyDataSecurityText:
        "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. [DESCRIBE MEASURES GENERALLY, WITHOUT GIVING AWAY SECURITY-COMPROMISING DETAILS].",
      privacyDataRetentionTitle: "Data Retention",
      privacyDataRetentionText:
        "We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. [DEFINE YOUR RETENTION PERIODS OR THE CRITERIA USED TO DETERMINE THEM].",
      privacyYourRightsTitle: "Your Legal Rights",
      privacyYourRightsText:
        "Under certain circumstances, you have rights under data protection laws in relation to your personal data, such as the right to request access, correction, erasure, restriction of processing, data portability, and to withdraw consent. [TAILOR THIS SECTION BASED ON APPLICABLE LAWS LIKE GDPR AND CCPA].",
      privacyCookiesTitle: "Cookies and Similar Technologies",
      privacyCookiesText:
        "Our website may use cookies and similar technologies to distinguish you from other users. This helps us to provide you with a good experience and also allows us to improve our site. [PROVIDE LINK TO SEPARATE COOKIE POLICY OR DETAIL HERE].",
      privacyChangesTitle: "Changes to This Policy",
      privacyChangesText:
        "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this policy periodically.",
      privacyContactTitle: "Contact Information",
      privacyContactText:
        "If you have any questions about this privacy policy or our privacy practices, please contact us at: [Your Privacy Contact Email] or [Postal Address, if applicable].",
    },
    terms: {
      termsTitle: "Terms of Service",
      termsLastUpdated: "Last updated: [Date]",
      termsAcceptanceTitle: "1. Acceptance of Terms",
      termsAcceptanceText:
        'By accessing or using the website and services offered by [Company Name] ("we", "us", "our", "Service"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service. [ADD RELEVANT DETAILS ABOUT THE AGENTE3 SERVICE].',
      termsServiceUseTitle: "2. Use of the Service",
      termsServiceUseText:
        "You agree to use the Service only for lawful purposes and in accordance with these Terms. You are responsible for ensuring your use of the Service complies with all applicable laws, rules, and regulations, including the WhatsApp Business Platform policies. You must not use the Service to send spam, unsolicited messages, or engage in any illegal or unethical activity. [BE SPECIFIC ABOUT USAGE RESTRICTIONS, USER ACCOUNTS, ELIGIBILITY].",
      termsIPTitle: "3. Intellectual Property",
      termsIPText:
        "The Service and its original content, features, and functionality are and will remain the exclusive property of [Company Name] and its licensors. Our logos, brand names, and the Service are protected by copyright, trademark, and other laws. [CLARIFY OWNERSHIP OF SITE CONTENT AND THE SERVICE ITSELF].",
      termsUserContentTitle: "4. User Content (if applicable)",
      termsUserContentText:
        "If you provide any content to the Service (e.g., chatbot configurations, catalog data), you grant us a non-exclusive, worldwide, royalty-free license to use, copy, modify, and display such content to the extent necessary to provide and improve the Service. You are solely responsible for all content you provide. [ADAPT OR REMOVE IF USERS DO NOT GENERATE CONTENT STORED BY YOU].",
      termsPaymentsTitle: "5. Payments and Subscriptions (if applicable)",
      termsPaymentsText:
        "If the Service or parts thereof require payment, you agree to provide current, complete, and accurate payment information. Payment terms, fees, billing cycles, and refund policies will be presented to you at the time of purchase or subscription. [DETAIL YOUR PAYMENT TERMS OR REFERENCE A SEPARATE PAGE].",
      termsTerminationTitle: "6. Termination",
      termsTerminationText:
        "We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination.",
      termsDisclaimersTitle: "7. Disclaimer of Warranties",
      termsDisclaimersText:
        'The Service is provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, secure, or error-free. [USE STANDARD LEGAL LANGUAGE, BUT CONSULT A LAWYER].',
      termsLiabilityTitle: "8. Limitation of Liability",
      termsLiabilityText:
        "In no event shall [Company Name], nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of, or inability to access or use the Service. [CONSULT A LAWYER TO ENSURE THIS CLAUSE IS VALID AND ENFORCEABLE].",
      termsGoverningLawTitle: "9. Governing Law",
      termsGoverningLawText:
        "These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction - e.g., Brazil, New Zealand], without regard to its conflict of law provisions. [SPECIFY THE CORRECT JURISDICTION].",
      termsChangesTitle: "10. Changes to Terms",
      termsChangesText:
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
      termsContactTitle: "11. Contact Us",
      termsContactText:
        "If you have any questions about these Terms, please contact us at: [Your General or Legal Contact Email].",
    },
  },
};

// Helper function to get translations for a specific locale
export const getTranslations = (locale: Locale) =>
  translations[locale] || translations.pt; // Default to PT if locale not found
