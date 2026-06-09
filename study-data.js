/* =====================================================================
   STUDY RESOURCES DATA — study-data.js
   Conteúdo curado e mapeado para cada tópico do roadmap
   ===================================================================== */
window.STUDY_DATA = {

  /* ═══════════════════════════════════════════════════════════════
     PHASE 1 · ENGINEERING FOUNDATIONS
  ═══════════════════════════════════════════════════════════════ */

  "SOLID": {
    phase: "Phase 01 · Engineering Foundations",
    description: "Cinco princípios de design OO que tornam o software manutenível e resistente à mudança. Foque em acoplamento, boundaries claros e design para evolução — não apenas para hoje.",
    focus: ["Acoplamento", "Boundaries claros", "Design para mudança", "Custo de modificação", "Modularidade"],
    hot2026: false,
    links: [
      { title: "Martin Fowler — Design & Architecture", url: "https://martinfowler.com", desc: "Artigos definitivos sobre SOLID, OO design e arquitetura evolutiva. A referência mais confiável da indústria." },
      { title: "Refactoring Guru — SOLID Principles", url: "https://refactoring.guru", desc: "Guia visual e interativo com exemplos práticos de cada princípio em múltiplas linguagens." },
      { title: "ArjanCodes — YouTube Channel", url: "https://www.youtube.com/@ArjanCodes", desc: "Canal especializado em boas práticas de design, SOLID e padrões em Python. Exemplos práticos excelentes." },
      { title: "CodeOpinion — YouTube Channel", url: "https://www.youtube.com/@CodeOpinion", desc: "Canal focado em arquitetura pragmática, SOLID sem dogmas e design voltado a mudança." }
    ],
    videos: [
      { title: "ArjanCodes — SOLID & Clean Design", url: "https://www.youtube.com/@ArjanCodes", desc: "Série completa sobre SOLID aplicado em projetos reais — o melhor canal prático sobre o tema." },
      { title: "CodeOpinion — Software Design Fundamentals", url: "https://www.youtube.com/@CodeOpinion", desc: "Vídeos sobre SOLID, boundaries e design para mudança sem over-engineering." }
    ],
    books: [
      { title: "A Philosophy of Software Design", author: "John Ousterhout", url: "https://www.amazon.com/Philosophy-Software-Design-2nd/dp/173210221X", desc: "O melhor livro atual sobre design de software. Foca em complexidade, profundidade de módulos e boundaries reais — vai além do SOLID.", badge: "⭐ Melhor livro" },
      { title: "Clean Code", author: "Robert C. Martin", url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882", desc: "O livro fundacional sobre código limpo. Ler com senso crítico — algumas práticas envelheceram." },
      { title: "Agile Software Development: Principles, Patterns", author: "Robert C. Martin", url: "https://www.amazon.com/Software-Development-Principles-Patterns-Practices/dp/0135974445", desc: "O livro onde Uncle Bob formalizou os princípios SOLID com exemplos extensos." }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "A referência global em design OO, padrões e arquitetura. Artigos densos e confiáveis." },
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Como princípios de design são aplicados em sistemas de bilhões de usuários." },
      { title: "Stripe Engineering Blog", url: "https://stripe.com/blog/engineering", desc: "Design de sistemas críticos com rigor de engenharia extremo." }
    ]
  },

  "Coupling & Cohesion": {
    phase: "Phase 01 · Engineering Foundations",
    description: "As duas forças que definem a qualidade estrutural do software. Acoplamento mede quanto os módulos dependem uns dos outros; coesão mede quão focada é cada unidade. Juntas, determinam o custo real de modificação.",
    focus: ["Acoplamento aferente/eferente", "Boundaries explícitos", "Design para mudança", "Custo de modificação", "Modularidade"],
    hot2026: false,
    links: [
      { title: "Martin Fowler — Coupling & Design", url: "https://martinfowler.com", desc: "Artigos aprofundados sobre os fundamentos estruturais do design: coupling, cohesion e seus trade-offs." },
      { title: "CodeOpinion — Boundaries & Coupling", url: "https://www.youtube.com/@CodeOpinion", desc: "Vídeos práticos sobre como definir fronteiras de módulos e reduzir acoplamento sem perder coesão." },
      { title: "ArjanCodes — Modular Design", url: "https://www.youtube.com/@ArjanCodes", desc: "Exemplos concretos de coesão e modularidade aplicados a projetos reais." }
    ],
    videos: [
      { title: "CodeOpinion YouTube", url: "https://www.youtube.com/@CodeOpinion", desc: "Canal mais focado em coupling, bounded contexts e design pragmático." },
      { title: "ArjanCodes — Clean Architecture", url: "https://www.youtube.com/@ArjanCodes", desc: "Coesão e acoplamento em projetos Python — exemplos do mundo real." }
    ],
    books: [
      { title: "A Philosophy of Software Design", author: "John Ousterhout", url: "https://www.amazon.com/Philosophy-Software-Design-2nd/dp/173210221X", desc: "O livro que melhor trata de profundidade de módulos, acoplamento e o custo real de interfaces excessivamente expostas.", badge: "⭐ Melhor livro" },
      { title: "Software Design X-Rays", author: "Adam Tornhill", url: "https://www.amazon.com/Software-Design-X-Rays-Technical-Behavioral/dp/1680502727", desc: "Analisa acoplamento comportamental usando dados reais de histórico git — revolucionário." }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Definições canônicas de coupling, cohesion e como elas guiam o design de módulos." },
      { title: "CodeScene Blog", url: "https://codescene.com/blog", desc: "Análise de acoplamento e complexidade em bases de código reais usando behavioral analytics." }
    ]
  },

  "Connascence": {
    phase: "Phase 01 · Engineering Foundations",
    description: "Um modelo formal para medir e raciocinar sobre acoplamento entre componentes. Mais preciso que simples dependências — classifica o tipo e força do acoplamento para priorizar refactoring estrategicamente.",
    focus: ["Hotspots de mudança", "Propagação de mudança", "Cognitive complexity", "Architecture fitness"],
    hot2026: false,
    links: [
      { title: "CodeScene — Complexity Analysis", url: "https://codescene.com", desc: "Plataforma que detecta connascência e hotspots de complexidade em código real usando dados comportamentais." },
      { title: "Adam Tornhill Blog", url: "https://codescene.com/blog", desc: "Artigos do autor de Software Design X-Rays sobre hotspots, connascência e propagação de mudança." },
      { title: "CodeOpinion — Complexity & Design", url: "https://www.youtube.com/@CodeOpinion", desc: "Como identificar e reduzir connascência na prática." }
    ],
    videos: [
      { title: "CodeOpinion YouTube", url: "https://www.youtube.com/@CodeOpinion", desc: "Vídeos sobre como identificar connascência e seu impacto no custo de mudança." }
    ],
    books: [
      { title: "Software Design X-Rays", author: "Adam Tornhill", url: "https://www.amazon.com/Software-Design-X-Rays-Technical-Behavioral/dp/1680502727", desc: "O melhor livro para entender propagação de mudança, hotspots e acoplamento comportamental usando dados reais do git.", badge: "⭐ Melhor livro" },
      { title: "Building Evolutionary Architectures", author: "Ford, Parsons & Kua", url: "https://www.amazon.com/Building-Evolutionary-Architectures-Support-Constant/dp/1491986360", desc: "Como criar fitness functions e arquiteturas que detectam e resistem à degradação." }
    ],
    blogs: [
      { title: "Adam Tornhill — CodeScene Blog", url: "https://codescene.com/blog", desc: "Pesquisa aplicada sobre connascência, hotspots e o ROI real de refactoring." },
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Artigos sobre design evolutivo, métricas de qualidade e acoplamento." }
    ]
  },

  "Refactoring": {
    phase: "Phase 01 · Engineering Foundations",
    description: "A disciplina de melhorar a estrutura interna do código sem alterar seu comportamento externo. O antídoto para a degradação sistêmica — essencial para sustentabilidade de longo prazo.",
    focus: ["Hotspots de mudança", "Código legado", "Small safe steps", "Test coverage como rede de segurança"],
    hot2026: false,
    links: [
      { title: "Refactoring Guru", url: "https://refactoring.guru/refactoring", desc: "Catálogo visual de técnicas de refactoring com exemplos em múltiplas linguagens — o recurso mais completo online." },
      { title: "CodeScene — Hotspot Analysis", url: "https://codescene.com", desc: "Detecte onde refactoring trará o maior ROI usando behavioral analytics do histórico git." },
      { title: "ArjanCodes — Refactoring Series", url: "https://www.youtube.com/@ArjanCodes", desc: "Refactoring prático em projetos Python do mundo real." }
    ],
    videos: [
      { title: "ArjanCodes — Refactoring in Practice", url: "https://www.youtube.com/@ArjanCodes", desc: "Série de refactoring aplicado a projetos reais — o mais prático disponível." },
      { title: "CodeOpinion — Refactoring Toward Architecture", url: "https://www.youtube.com/@CodeOpinion", desc: "Como refatorar na direção de uma arquitetura melhor, passo a passo." }
    ],
    books: [
      { title: "Software Design X-Rays", author: "Adam Tornhill", url: "https://www.amazon.com/Software-Design-X-Rays-Technical-Behavioral/dp/1680502727", desc: "Como priorizar refactoring usando dados reais de mudança no repositório — onde investir primeiro.", badge: "⭐ Melhor livro" },
      { title: "Refactoring: Improving the Design of Existing Code", author: "Martin Fowler", url: "https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599", desc: "O catálogo definitivo de técnicas de refactoring. Segunda edição com JavaScript." },
      { title: "Working Effectively with Legacy Code", author: "Michael Feathers", url: "https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052", desc: "O guia definitivo para trabalhar com código legado sem testes. Indispensável para qualquer engenheiro." }
    ],
    blogs: [
      { title: "Adam Tornhill — CodeScene Blog", url: "https://codescene.com/blog", desc: "Onde refatorar primeiro baseado em evidências comportamentais do código." },
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Artigos sobre filosofia, técnicas e estratégias de refactoring." },
      { title: "Understanding Legacy Code", url: "https://understandlegacycode.com", desc: "Blog especializado em estratégias para trabalhar com código legado com segurança." }
    ]
  },

  "Complexity Management": {
    phase: "Phase 01 · Engineering Foundations",
    description: "A principal função do engenheiro de software é gerenciar complexidade — não escrever código, mas decidir o que não escrever. Complexidade acidental mata sistemas.",
    focus: ["Hotspots de complexidade", "Cognitive complexity", "Architecture fitness functions", "Propagação de mudança"],
    hot2026: false,
    links: [
      { title: "Adam Tornhill — CodeScene Blog", url: "https://codescene.com/blog", desc: "Como medir e reduzir complexidade de forma estratégica usando dados comportamentais." },
      { title: "CodeScene Platform", url: "https://codescene.com", desc: "Plataforma que quantifica complexity hotspots e prioriza onde intervir primeiro." },
      { title: "Martin Fowler — Is Quality Worth Cost?", url: "https://martinfowler.com/articles/is-quality-worth-cost.html", desc: "O argumento definitivo sobre o custo real da complexidade acidental — leitura obrigatória." }
    ],
    videos: [
      { title: "CodeOpinion — Managing Complexity", url: "https://www.youtube.com/@CodeOpinion", desc: "Estratégias práticas para identificar e gerenciar complexidade em sistemas reais." }
    ],
    books: [
      { title: "A Philosophy of Software Design", author: "John Ousterhout", url: "https://www.amazon.com/Philosophy-Software-Design-2nd/dp/173210221X", desc: "O livro mais focado em complexidade como o principal inimigo do software. Essencial.", badge: "⭐ Melhor livro" },
      { title: "Software Design X-Rays", author: "Adam Tornhill", url: "https://www.amazon.com/Software-Design-X-Rays-Technical-Behavioral/dp/1680502727", desc: "Como identificar complexity hotspots usando behavioral analytics de repositórios reais." }
    ],
    blogs: [
      { title: "Adam Tornhill — CodeScene Blog", url: "https://codescene.com/blog", desc: "Pesquisa aplicada: complexity hotspots, ROI de refactoring e architecture fitness." },
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Artigos sobre complexidade acidental, complexidade essencial e design evolutivo." }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     PHASE 2 · EVOLUTIONARY ARCHITECTURE
  ═══════════════════════════════════════════════════════════════ */

  "Clean Architecture": {
    phase: "Phase 02 · Evolutionary Architecture",
    description: "Uma arquitetura que separa o domínio de negócio de todos os detalhes de implementação — frameworks, banco de dados, UI ficam na borda. O domínio comanda a tecnologia.",
    focus: ["Boundaries explícitos", "Inversão de dependência", "Testabilidade", "Design para mudança"],
    hot2026: false,
    links: [
      { title: "Martin Fowler Articles", url: "https://martinfowler.com", desc: "Artigos canônicos sobre Clean Architecture, Ports & Adapters e design evolutivo — a referência global." },
      { title: "InfoQ — Architecture & Design", url: "https://www.infoq.com/architecture-design", desc: "Palestras e artigos de arquitetos sênior das maiores empresas tech do mundo." },
      { title: "CodeOpinion — Clean Architecture", url: "https://www.youtube.com/@CodeOpinion", desc: "Implementações práticas e críticas honestas de Clean Architecture sem dogmas." }
    ],
    videos: [
      { title: "ByteByteGo — Architecture Patterns", url: "https://www.youtube.com/@ByteByteGo", desc: "Visualizações de padrões de arquitetura usados em sistemas reais de larga escala." },
      { title: "CodeOpinion YouTube", url: "https://www.youtube.com/@CodeOpinion", desc: "O canal mais pragmático sobre arquitetura — evita dogmas e foca em valor real." }
    ],
    books: [
      { title: "Domain-Driven Design", author: "Eric Evans", url: "https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215", desc: "O livro fundacional — boundaries, ubiquitous language e separação de domínio formam a base de qualquer Clean Architecture.", badge: "⭐ Melhor livro" },
      { title: "Building Evolutionary Architectures", author: "Ford, Parsons & Kua", url: "https://www.amazon.com/Building-Evolutionary-Architectures-Support-Constant/dp/1491986360", desc: "Como criar fitness functions e arquiteturas que evoluem sem big-bang rewrites." },
      { title: "A Philosophy of Software Design", author: "John Ousterhout", url: "https://www.amazon.com/Philosophy-Software-Design-2nd/dp/173210221X", desc: "Complemento essencial: módulos profundos e boundaries claros como princípio de design." }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "A referência definitiva em padrões de arquitetura e design evolutivo." },
      { title: "InfoQ Architecture", url: "https://www.infoq.com/architecture-design", desc: "Conteúdo de nível Staff/Principal — arquitetos das maiores empresas compartilhando decisões reais." },
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Como Clean Architecture é aplicada em sistemas de bilhões de usuários." }
    ]
  },

  "Hexagonal Architecture": {
    phase: "Phase 02 · Evolutionary Architecture",
    description: "Ports & Adapters — o padrão que isola o núcleo da aplicação de todos os detalhes externos através de interfaces bem definidas. O domínio não sabe que banco ou framework existe.",
    focus: ["Ports & Adapters", "Inversão de dependência", "Testabilidade sem infra", "Bounded contexts"],
    hot2026: false,
    links: [
      { title: "Martin Fowler — Ports & Adapters", url: "https://martinfowler.com", desc: "Artigos sobre Hexagonal Architecture e seus trade-offs no mundo real." },
      { title: "InfoQ — Architecture Patterns", url: "https://www.infoq.com/architecture-design", desc: "Palestras de arquitetos sênior sobre implementações de Hexagonal Architecture em produção." }
    ],
    videos: [
      { title: "ByteByteGo — System Architecture", url: "https://www.youtube.com/@ByteByteGo", desc: "Como Hexagonal Architecture se aplica em sistemas distribuídos reais." },
      { title: "ArjanCodes — Architecture Patterns", url: "https://www.youtube.com/@ArjanCodes", desc: "Implementação prática de Ports & Adapters com exemplos claros." }
    ],
    books: [
      { title: "Domain-Driven Design", author: "Eric Evans", url: "https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215", desc: "O contexto original onde Hexagonal Architecture faz mais sentido — o domínio no centro.", badge: "⭐ Melhor livro" },
      { title: "Implementing Domain-Driven Design", author: "Vaughn Vernon", url: "https://www.amazon.com/Implementing-Domain-Driven-Design-Vaughn-Vernon/dp/0321834577", desc: "Implementação prática de Hexagonal Architecture com DDD — o Red Book." },
      { title: "Building Evolutionary Architectures", author: "Ford, Parsons & Kua", url: "https://www.amazon.com/Building-Evolutionary-Architectures-Support-Constant/dp/1491986360", desc: "Como Hexagonal Architecture suporta evolução contínua sem acoplamento excessivo." }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Ports & Adapters, separação de concerns e design evolutivo." },
      { title: "InfoQ Architecture", url: "https://www.infoq.com/architecture-design", desc: "Estudos de caso reais de Hexagonal Architecture em produção em larga escala." }
    ]
  },

  "DDD": {
    phase: "Phase 02 · Evolutionary Architecture",
    description: "Domain-Driven Design — a abordagem que coloca o modelo de domínio no centro de todas as decisões técnicas e organizacionais. O bounded context é a unidade fundamental de design.",
    focus: ["Bounded contexts", "Ubiquitous language", "Aggregate design", "Context mapping", "Modular monolith"],
    hot2026: false,
    links: [
      { title: "Martin Fowler — DDD Articles", url: "https://martinfowler.com", desc: "Artigos fundacionais sobre bounded contexts, context mapping e strategic DDD." },
      { title: "InfoQ — DDD & Architecture", url: "https://www.infoq.com/architecture-design", desc: "Palestras de Eric Evans, Vaughn Vernon e outros experts em DDD." },
      { title: "ByteByteGo — DDD Patterns", url: "https://www.youtube.com/@ByteByteGo", desc: "Visualizações de como DDD se aplica em sistemas de larga escala." }
    ],
    videos: [
      { title: "ByteByteGo YouTube", url: "https://www.youtube.com/@ByteByteGo", desc: "O melhor canal visual para DDD, microservices, bounded contexts e system design." },
      { title: "CodeOpinion — DDD Pragmático", url: "https://www.youtube.com/@CodeOpinion", desc: "DDD sem dogmas — foco em bounded contexts e modular monolith como ponto de partida." }
    ],
    books: [
      { title: "Domain-Driven Design", author: "Eric Evans", url: "https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215", desc: "O Blue Book — o livro original. Leitura obrigatória para qualquer arquiteto sério. Densa mas essencial.", badge: "⭐ Melhor livro" },
      { title: "Implementing Domain-Driven Design", author: "Vaughn Vernon", url: "https://www.amazon.com/Implementing-Domain-Driven-Design-Vaughn-Vernon/dp/0321834577", desc: "O Red Book — implementação prática do que o Blue Book teorizou. Muito mais acessível." },
      { title: "Building Evolutionary Architectures", author: "Ford, Parsons & Kua", url: "https://www.amazon.com/Building-Evolutionary-Architectures-Support-Constant/dp/1491986360", desc: "Como DDD e arquitetura evolutiva se complementam com fitness functions." }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Bounded Context, Context Map, CQRS — as definições canônicas que todo arquiteto precisa saber." },
      { title: "InfoQ Architecture", url: "https://www.infoq.com/architecture-design", desc: "Palestras e artigos dos maiores experts mundiais em DDD aplicado." },
      { title: "Uber Engineering", url: "https://www.uber.com/blog/engineering", desc: "Como DDD foi aplicado para escalar o domínio de trips na Uber." }
    ]
  },

  "CQRS": {
    phase: "Phase 02 · Evolutionary Architecture",
    description: "Command Query Responsibility Segregation — separar escritas (commands) de leituras (queries). O ponto crítico: CQRS pragmático não exige Event Sourcing. Comece simples.",
    focus: ["CQRS pragmático", "Read models otimizados", "Bounded contexts", "Separação de concerns"],
    hot2026: false,
    links: [
      { title: "Martin Fowler — CQRS", url: "https://martinfowler.com", desc: "A definição canônica de CQRS e — mais importante — quando NÃO usá-lo." },
      { title: "InfoQ — CQRS em Produção", url: "https://www.infoq.com/architecture-design", desc: "Palestras e estudos de caso de CQRS em sistemas reais." },
      { title: "CodeOpinion — CQRS Pragmático", url: "https://www.youtube.com/@CodeOpinion", desc: "CQRS sem over-engineering — o approach que realmente funciona no mundo real." }
    ],
    videos: [
      { title: "CodeOpinion YouTube", url: "https://www.youtube.com/@CodeOpinion", desc: "O canal mais pragmático sobre CQRS — sem Event Sourcing obrigatório, sem dogmas." },
      { title: "ByteByteGo — CQRS Pattern", url: "https://www.youtube.com/@ByteByteGo", desc: "Visualização clara de CQRS em sistemas distribuídos e quando aplicar." }
    ],
    books: [
      { title: "Domain-Driven Design", author: "Eric Evans", url: "https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215", desc: "O contexto onde CQRS emerge naturalmente — bounded contexts com read/write distintos.", badge: "⭐ Melhor livro" },
      { title: "Implementing Domain-Driven Design", author: "Vaughn Vernon", url: "https://www.amazon.com/Implementing-Domain-Driven-Design-Vaughn-Vernon/dp/0321834577", desc: "Implementação prática de CQRS dentro de um sistema DDD real." }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "CQRS, Event Sourcing e quando cada um faz sentido — a análise mais honesta da indústria." },
      { title: "InfoQ Architecture", url: "https://www.infoq.com/architecture-design", desc: "Estudos de caso reais de CQRS em sistemas de larga escala." }
    ]
  },

  "Event Driven": {
    phase: "Phase 02 · Evolutionary Architecture",
    description: "Sistemas onde componentes se comunicam através de eventos — desacoplados no tempo, espaço e lógica de controle. Entenda os 4 padrões: notification, state transfer, sourcing e choreography.",
    focus: ["Kafka internals", "Event sourcing", "Eventual consistency", "Choreography vs Orchestration"],
    hot2026: true,
    links: [
      { title: "Martin Fowler — Event-Driven", url: "https://martinfowler.com", desc: "Os 4 tipos de event-driven: notification, state transfer, sourcing e choreography. Leitura obrigatória." },
      { title: "InfoQ — Event-Driven Architecture", url: "https://www.infoq.com/architecture-design", desc: "Palestras de especialistas sobre EDA em sistemas de produção." },
      { title: "ByteByteGo — Kafka & Events", url: "https://www.youtube.com/@ByteByteGo", desc: "Kafka internals, partitions, consumer groups e event streaming visualizados." }
    ],
    videos: [
      { title: "ByteByteGo YouTube", url: "https://www.youtube.com/@ByteByteGo", desc: "Kafka internals, event streaming e event-driven architecture com visualizações excelentes." },
      { title: "CodeOpinion — Event-Driven Design", url: "https://www.youtube.com/@CodeOpinion", desc: "Event-driven sem hype: quando usar, quando evitar e armadilhas comuns." }
    ],
    books: [
      { title: "Domain-Driven Design", author: "Eric Evans", url: "https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215", desc: "Domain Events são a origem — entenda o domínio antes de projetar os eventos.", badge: "⭐ Melhor livro" },
      { title: "Building Evolutionary Architectures", author: "Ford, Parsons & Kua", url: "https://www.amazon.com/Building-Evolutionary-Architectures-Support-Constant/dp/1491986360", desc: "Como event-driven suporta arquiteturas que evoluem sem reescritas." }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Event Notification vs Event-Carried State vs Event Sourcing — distinções críticas." },
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Como a Netflix usa eventos para orquestrar sistemas de streaming em escala global." },
      { title: "Uber Engineering", url: "https://www.uber.com/blog/engineering", desc: "Kafka em produção para eventos de alta escala na Uber." }
    ]
  },

  "Modular Monolith": {
    phase: "Phase 02 · Evolutionary Architecture",
    description: "A arquitetura que combina simplicidade operacional do monolito com separação lógica dos microserviços. Frequentemente a melhor escolha — e o ponto de partida ideal antes de distribuir.",
    focus: ["Bounded contexts no monolito", "Evolutividade", "Quando distribuir", "Migração gradual"],
    hot2026: false,
    links: [
      { title: "Martin Fowler — MonolithFirst", url: "https://martinfowler.com", desc: "O argumento de Fowler para começar com monolito modular antes de microservices." },
      { title: "InfoQ — Monolith vs Microservices", url: "https://www.infoq.com/architecture-design", desc: "Debates honestos sobre trade-offs de cada abordagem com dados reais." },
      { title: "ByteByteGo — Modular Architecture", url: "https://www.youtube.com/@ByteByteGo", desc: "Como modular monolith evolui para microservices sem big-bang rewrite." }
    ],
    videos: [
      { title: "CodeOpinion — Modular Monolith", url: "https://www.youtube.com/@CodeOpinion", desc: "Por que modular monolith é frequentemente a escolha correta — argumento sólido e prático." },
      { title: "ByteByteGo YouTube", url: "https://www.youtube.com/@ByteByteGo", desc: "System design de monolitos modulares e estratégias de evolução." }
    ],
    books: [
      { title: "Domain-Driven Design", author: "Eric Evans", url: "https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215", desc: "Bounded contexts são a base conceitual do modular monolith — o livro que explica o porquê.", badge: "⭐ Melhor livro" },
      { title: "Building Evolutionary Architectures", author: "Ford, Parsons & Kua", url: "https://www.amazon.com/Building-Evolutionary-Architectures-Support-Constant/dp/1491986360", desc: "Como evoluir um monolito modular sem big-bang rewrites usando fitness functions." }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "MonolithFirst — o argumento canônico para começar com monolito e evoluir gradualmente." },
      { title: "Uber Engineering", url: "https://www.uber.com/blog/engineering", desc: "A jornada da Uber de monolito para microservices — lições aprendidas." }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     PHASE 3 · DISTRIBUTED SYSTEMS
  ═══════════════════════════════════════════════════════════════ */

  "CAP Theorem": {
    phase: "Phase 03 · Distributed Systems",
    description: "Em sistemas distribuídos, só é possível garantir 2 de 3 propriedades: Consistency, Availability e Partition Tolerance. CAP não é uma escolha binária — é um espectro de trade-offs.",
    focus: ["CAP", "PACELC", "Trade-offs explícitos", "Replication strategies", "Quorum"],
    hot2026: false,
    links: [
      { title: "MIT 6.824 — Distributed Systems", url: "https://pdos.csail.mit.edu/6.824", desc: "O curso mais respeitado do mundo em sistemas distribuídos. Lectures completas, gratuitas, disponíveis online." },
      { title: "ByteByteGo — Distributed Fundamentals", url: "https://www.youtube.com/@ByteByteGo", desc: "CAP, PACELC e trade-offs de consistência explicados com visualizações excelentes." },
      { title: "ByteByteGo Blog — Distributed Systems", url: "https://blog.bytebytego.com/p/the-must-know-fundamentals-of-distributed", desc: "Os fundamentos de sistemas distribuídos que todo engenheiro deve dominar." }
    ],
    videos: [
      { title: "ByteByteGo YouTube", url: "https://www.youtube.com/@ByteByteGo", desc: "A melhor explicação visual de CAP e seus trade-offs práticos em sistemas reais." },
      { title: "MIT 6.824 Lectures (Free)", url: "https://pdos.csail.mit.edu/6.824", desc: "Aulas completas do MIT sobre CAP, consistência, Raft e Paxos — literalmente a referência global." }
    ],
    books: [
      { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", desc: "O melhor livro do mundo em sistemas distribuídos. Capítulos sobre replicação e consistência são essenciais para entender CAP na prática.", badge: "⭐ Melhor livro do mundo" }
    ],
    blogs: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Como a Netflix lida com CAP em sistemas de streaming globais com bilhões de requisições." },
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "Trade-offs de CAP em DynamoDB, S3 e serviços AWS em produção." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Consistência e disponibilidade em sistemas de edge distribuídos globalmente." }
    ]
  },

  "PACELC": {
    phase: "Phase 03 · Distributed Systems",
    description: "A versão completa do CAP: mesmo sem partição, há trade-off entre Latency e Consistency. PACELC (Partition → AP/CP; Else → LC) é mais preciso para decisões reais de banco de dados.",
    focus: ["CAP vs PACELC", "Latência vs consistência", "Quorum reads/writes", "DynamoDB, Cassandra"],
    hot2026: false,
    links: [
      { title: "MIT 6.824 — Distributed Systems", url: "https://pdos.csail.mit.edu/6.824", desc: "O curso global de referência que cobre CAP, PACELC e seus fundamentos matemáticos." },
      { title: "ByteByteGo — Consistency Models", url: "https://www.youtube.com/@ByteByteGo", desc: "PACELC e modelos de consistência explicados com visualizações de sistemas reais." }
    ],
    videos: [
      { title: "ByteByteGo YouTube", url: "https://www.youtube.com/@ByteByteGo", desc: "Fundamentos de sistemas distribuídos incluindo PACELC com exemplos práticos." },
      { title: "MIT 6.824 Lectures", url: "https://pdos.csail.mit.edu/6.824", desc: "Aulas completas sobre consistência, replicação e os trade-offs por trás de PACELC." }
    ],
    books: [
      { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", desc: "O livro que melhor explica PACELC na prática — com exemplos concretos de DynamoDB, Cassandra e outros.", badge: "⭐ Melhor livro do mundo" }
    ],
    blogs: [
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "Trade-offs de consistência vs latência em DynamoDB e outros serviços AWS." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Latência vs consistência em sistemas distribuídos globais — decisões reais." }
    ]
  },

  "Eventual Consistency": {
    phase: "Phase 03 · Distributed Systems",
    description: "O modelo onde o sistema garante que, sem novos updates, todos os nós eventualmente convergem para o mesmo valor. Não é fraqueza — é um trade-off consciente por disponibilidade e performance.",
    focus: ["Replication strategies", "Conflict resolution", "CRDTs", "Read repair", "Quorum"],
    hot2026: false,
    links: [
      { title: "MIT 6.824 — Consistency Models", url: "https://pdos.csail.mit.edu/6.824", desc: "Modelos de consistência e seus trade-offs — aulas do MIT gratuitas e disponíveis online." },
      { title: "ByteByteGo — Consistency Patterns", url: "https://www.youtube.com/@ByteByteGo", desc: "Strong, eventual e causal consistency explicados visualmente com exemplos reais." }
    ],
    videos: [
      { title: "ByteByteGo — Distributed Systems", url: "https://www.youtube.com/@ByteByteGo", desc: "Eventual consistency, replication e quorum explicados com clareza visual." },
      { title: "MIT 6.824 Lectures", url: "https://pdos.csail.mit.edu/6.824", desc: "Lectures completas sobre modelos de consistência e suas implicações práticas." }
    ],
    books: [
      { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", desc: "A bíblia de eventual consistency. Capítulos 5, 9 e 12 são essenciais — leitura profunda obrigatória.", badge: "⭐ Melhor livro do mundo" }
    ],
    blogs: [
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "Eventual consistency em DynamoDB e S3 — casos reais de produção." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Como a Cloudflare replica dados em 300+ datacenters com eventual consistency." },
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Consistency patterns em sistemas de recomendação e streaming da Netflix." }
    ]
  },

  "Consensus": {
    phase: "Phase 03 · Distributed Systems",
    description: "O problema de fazer múltiplos nós concordarem sobre um único valor — o coração de sistemas distribuídos confiáveis. Raft torna Paxos compreensível. CRDTs evitam consensus quando possível.",
    focus: ["Raft", "Paxos", "CRDTs", "Leader election", "Quorum writes"],
    hot2026: false,
    links: [
      { title: "MIT 6.824 — Raft & Paxos", url: "https://pdos.csail.mit.edu/6.824", desc: "O curso de referência mundial — lectures completas sobre Raft, Paxos e algoritmos de consenso." },
      { title: "Raft Visualization Interativa", url: "https://thesecretlivesofdata.com/raft", desc: "A visualização interativa mais famosa de como o Raft funciona — essencial para entender consensus." },
      { title: "Raft Paper Oficial", url: "https://raft.github.io", desc: "O paper original do Raft — intencionalmente mais acessível que Paxos." }
    ],
    videos: [
      { title: "ByteByteGo — Consensus Algorithms", url: "https://www.youtube.com/@ByteByteGo", desc: "Raft e Paxos explicados com animações claras e exemplos de sistemas reais." },
      { title: "MIT 6.824 Lectures", url: "https://pdos.csail.mit.edu/6.824", desc: "Lectures do MIT sobre Raft, Paxos e algoritmos de consenso — a referência definitiva." }
    ],
    books: [
      { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", desc: "O melhor tratamento de consensus no contexto de sistemas reais — Raft, Paxos e ZooKeeper.", badge: "⭐ Melhor livro do mundo" }
    ],
    blogs: [
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Consensus em sistemas de DNS global e roteamento distribuído." },
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "Como AWS implementa consensus em seus serviços distribuídos críticos." }
    ]
  },

  "Distributed Transactions": {
    phase: "Phase 03 · Distributed Systems",
    description: "Como garantir atomicidade em operações que cruzam múltiplos serviços. Two-Phase Commit falha em disponibilidade — Saga emerge como alternativa baseada em compensações.",
    focus: ["Saga Pattern", "Idempotência como princípio", "Outbox pattern", "Compensação vs rollback"],
    hot2026: false,
    links: [
      { title: "MIT 6.824 — Distributed Transactions", url: "https://pdos.csail.mit.edu/6.824", desc: "O curso mais respeitado cobrindo 2PC, Saga e suas limitações teóricas e práticas." },
      { title: "ByteByteGo — Distributed Transactions", url: "https://www.youtube.com/@ByteByteGo", desc: "2PC vs Saga — quando usar cada abordagem com exemplos visuais excelentes." }
    ],
    videos: [
      { title: "ByteByteGo YouTube", url: "https://www.youtube.com/@ByteByteGo", desc: "Transações distribuídas, Saga Pattern, Outbox e idempotência — todos visualizados." },
      { title: "MIT 6.824 Lectures", url: "https://pdos.csail.mit.edu/6.824", desc: "Aulas sobre transações distribuídas, 2PC e seus trade-offs fundamentais." }
    ],
    books: [
      { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", desc: "O melhor tratamento de transações distribuídas — 2PC, Saga e idempotência explicados com rigor.", badge: "⭐ Melhor livro do mundo" }
    ],
    blogs: [
      { title: "Uber Engineering", url: "https://www.uber.com/blog/engineering", desc: "Como a Uber lida com transações distribuídas em operações de viagem em tempo real." },
      { title: "Stripe Engineering Blog", url: "https://stripe.com/blog/engineering", desc: "Idempotência e transações em sistemas de pagamento — o padrão da indústria." },
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Saga Pattern em sistemas de billing e streaming da Netflix." }
    ]
  },

  "Saga Pattern": {
    phase: "Phase 03 · Distributed Systems",
    description: "Uma sequência de transações locais com compensações — o substituto do 2PC em microserviços. Choreography é simples; Orchestration é explícita. Escolha conscientemente.",
    focus: ["Choreography vs Orchestration", "Compensações", "Idempotência", "Outbox pattern"],
    hot2026: false,
    links: [
      { title: "ByteByteGo — Saga Pattern", url: "https://www.youtube.com/@ByteByteGo", desc: "Choreography vs Orchestration Saga — a explicação visual mais clara disponível." },
      { title: "MIT 6.824", url: "https://pdos.csail.mit.edu/6.824", desc: "Fundamentos de distributed transactions que embasam o porquê do Saga Pattern existir." }
    ],
    videos: [
      { title: "ByteByteGo YouTube", url: "https://www.youtube.com/@ByteByteGo", desc: "Saga Pattern, Outbox Pattern e idempotência — visualizações excelentes." },
      { title: "CodeOpinion — Saga & Messaging", url: "https://www.youtube.com/@CodeOpinion", desc: "Implementação prática de Saga com foco em design pragmático e sem over-engineering." }
    ],
    books: [
      { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", desc: "O contexto teórico que torna o Saga Pattern compreensível de verdade — não só o como, mas o porquê.", badge: "⭐ Melhor livro do mundo" }
    ],
    blogs: [
      { title: "Stripe Engineering Blog", url: "https://stripe.com/blog/engineering", desc: "Idempotência e Saga em sistemas de pagamento — exemplos reais de produção." },
      { title: "Uber Engineering", url: "https://www.uber.com/blog/engineering", desc: "Workflow orchestration em operações de alta criticidade na Uber." }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     PHASE 4 · PERFORMANCE & RESILIENCE
  ═══════════════════════════════════════════════════════════════ */

  "p99 Latency": {
    phase: "Phase 04 · Performance & Resilience",
    description: "O percentil 99 de latência define a experiência real do usuário — não a média. GC pauses, lock contention e heap pressure são os principais culpados em sistemas JVM.",
    focus: ["GC pauses", "Heap pressure", "Lock contention", "Async execution", "Throughput vs tail latency"],
    hot2026: false,
    links: [
      { title: "Jakob Jenkov — JVM & Performance", url: "https://jenkov.com", desc: "O site mais completo sobre JVM internals, GC, heap, locks e performance para desenvolvedores Java/Kotlin." },
      { title: "ByteByteGo — Latency Numbers", url: "https://www.youtube.com/@ByteByteGo", desc: "Latency numbers every programmer should know — visualizados e contextualizados." }
    ],
    videos: [
      { title: "Jakob Jenkov YouTube", url: "https://www.youtube.com/@JakobJenkov", desc: "Tutoriais profundos sobre JVM, GC, heap, locks e performance — série completa e excelente." },
      { title: "ByteByteGo — Performance Patterns", url: "https://www.youtube.com/@ByteByteGo", desc: "Latency numbers, performance patterns e onde o tempo realmente é gasto." }
    ],
    books: [
      { title: "Systems Performance", author: "Brendan Gregg", url: "https://www.amazon.com/Systems-Performance-Brendan-Gregg/dp/0136820158", desc: "O livro definitivo em performance de sistemas — p99, profiling, flame graphs, CPU e I/O. Brendan Gregg é a referência global.", badge: "⭐ Melhor livro" }
    ],
    blogs: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Como a Netflix monitora e reduz p99 em sistemas de streaming global." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Latência em edge computing e otimizações de tail latency em escala." },
      { title: "Uber Engineering", url: "https://www.uber.com/blog/engineering", desc: "Performance de sistemas de dispatch e matching em tempo real — p99 crítico." }
    ]
  },

  "Profiling": {
    phase: "Phase 04 · Performance & Resilience",
    description: "A arte de encontrar onde o tempo e memória realmente vão — sem profiling, otimização é apenas adivinhação. Flame graphs são o padrão moderno de visualização.",
    focus: ["Flame graphs", "GC profiling", "Heap analysis", "Lock contention", "CPU vs I/O bound"],
    hot2026: false,
    links: [
      { title: "Jakob Jenkov — JVM Profiling", url: "https://jenkov.com", desc: "Tutoriais sobre JVM profiling, heap dumps, thread analysis e análise de performance." },
      { title: "Brendan Gregg — Flame Graphs", url: "https://www.brendangregg.com/flamegraphs.html", desc: "O criador dos Flame Graphs explica como criá-los e interpretá-los — referência definitiva." }
    ],
    videos: [
      { title: "Jakob Jenkov YouTube", url: "https://www.youtube.com/@JakobJenkov", desc: "Profiling de JVM, GC, heap e concorrência com ferramentas práticas — série excelente." },
      { title: "ByteByteGo — Performance Analysis", url: "https://www.youtube.com/@ByteByteGo", desc: "Como encontrar bottlenecks em sistemas distribuídos com profiling." }
    ],
    books: [
      { title: "Systems Performance", author: "Brendan Gregg", url: "https://www.amazon.com/Systems-Performance-Brendan-Gregg/dp/0136820158", desc: "Flame graphs, CPU profiling, memory analysis, I/O e network — o guia definitivo do Brendan Gregg.", badge: "⭐ Melhor livro" }
    ],
    blogs: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Como a Netflix usa profiling e flame graphs para otimizar serviços Java em produção." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Profiling de Rust e Go em sistemas de alta performance — otimizações reais." },
      { title: "Uber Engineering", url: "https://www.uber.com/blog/engineering", desc: "Profiling em sistemas Go e Java para reduzir latência em operações críticas." }
    ]
  },

  "OpenTelemetry": {
    phase: "Phase 04 · Performance & Resilience",
    description: "O padrão aberto de observabilidade — traces, metrics e logs com um único SDK e protocolo (OTLP). Praticamente o padrão da indústria em 2026. Stack: OpenTelemetry + Prometheus + Grafana + Jaeger.",
    focus: ["Traces distribuídos", "Métricas", "Logs correlacionados", "OTLP protocol", "Instrumentação automática"],
    hot2026: true,
    links: [
      { title: "OpenTelemetry Official Docs", url: "https://opentelemetry.io", desc: "A documentação oficial — completa, bem organizada e em constante evolução. O ponto de entrada obrigatório." },
      { title: "OpenTelemetry Integrations", url: "https://opentelemetry.io/ecosystem/integrations", desc: "Lista completa de integrações com frameworks, databases e infraestrutura — enorme ecosistema." },
      { title: "r/SRE — Observability em 2025/2026", url: "https://www.reddit.com/r/sre/comments/1lf9n5v/how_are_you_actually_handling_observability_in", desc: "Discussão real de SREs sobre como estão usando OpenTelemetry em produção agora — sem marketing." }
    ],
    videos: [
      { title: "ByteByteGo — Observability Stack", url: "https://www.youtube.com/@ByteByteGo", desc: "OpenTelemetry, Prometheus, Grafana e Jaeger integrados — visão sistêmica." },
      { title: "CNCF — OpenTelemetry Talks", url: "https://www.youtube.com/@cncf", desc: "Palestras oficiais da CNCF sobre OpenTelemetry em produção em empresas reais." }
    ],
    books: [
      { title: "Observability Engineering", author: "Charity Majors, Liz Fong-Jones & George Miranda", url: "https://www.amazon.com/Observability-Engineering-Achieving-Production-Excellence/dp/1492076445", desc: "O livro definitivo de observabilidade moderna — OpenTelemetry, tracing e debugging distribuído em produção.", badge: "⭐ Livro obrigatório" },
      { title: "Site Reliability Engineering", author: "Google SRE Team", url: "https://sre.google/sre-book/table-of-contents", desc: "O livro do Google SRE — disponível gratuitamente online. SLOs, SLAs e observabilidade." }
    ],
    blogs: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Como a Netflix implementou OpenTelemetry em centenas de microserviços." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Observabilidade em edge computing com OpenTelemetry a escala global." },
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "OpenTelemetry integrado com AWS X-Ray e CloudWatch — guias práticos." }
    ]
  },

  "Distributed Tracing": {
    phase: "Phase 04 · Performance & Resilience",
    description: "Acompanhar uma requisição através de múltiplos serviços — indispensável para debuggar sistemas distribuídos. Context propagation é a chave; sampling é o desafio. Jaeger e Tempo são as ferramentas.",
    focus: ["Context propagation", "Sampling strategies", "Jaeger / Tempo", "Correlação de logs e traces"],
    hot2026: true,
    links: [
      { title: "OpenTelemetry — Distributed Tracing", url: "https://opentelemetry.io", desc: "A especificação e SDKs oficiais para distributed tracing com OpenTelemetry — o padrão atual." },
      { title: "r/SRE — Observability Discussion", url: "https://www.reddit.com/r/sre/comments/1lf9n5v/how_are_you_actually_handling_observability_in", desc: "SREs reais compartilhando como estão implementando tracing em produção em 2025/2026." },
      { title: "r/Kubernetes — OpenTelemetry TLDR", url: "https://www.reddit.com/r/kubernetes/comments/tydz8v", desc: "Adoção de OpenTelemetry na comunidade Kubernetes — perspectiva da comunidade." }
    ],
    videos: [
      { title: "ByteByteGo — Distributed Tracing", url: "https://www.youtube.com/@ByteByteGo", desc: "Como distributed tracing funciona em sistemas de microserviços — visualização excelente." }
    ],
    books: [
      { title: "Observability Engineering", author: "Charity Majors, Liz Fong-Jones & George Miranda", url: "https://www.amazon.com/Observability-Engineering-Achieving-Production-Excellence/dp/1492076445", desc: "O livro obrigatório — tracing, debugging distribuído e observabilidade moderna de ponta a ponta.", badge: "⭐ Livro obrigatório" },
      { title: "Site Reliability Engineering", author: "Google SRE Team", url: "https://sre.google/sre-book/table-of-contents", desc: "SLOs, SLAs e como usar tracing para definir e medir confiabilidade." }
    ],
    blogs: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Tracing em sistemas de streaming com Zipkin e OpenTelemetry na Netflix." },
      { title: "Uber Engineering", url: "https://www.uber.com/blog/engineering", desc: "Jaeger — o sistema de distributed tracing open-source criado pela Uber." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Tracing em edge computing global — desafios únicos de escala." }
    ]
  },

  "Chaos Engineering": {
    phase: "Phase 04 · Performance & Resilience",
    description: "A disciplina de injetar falhas deliberadamente para descobrir fraquezas antes que os usuários as descubram. Falha controlada antes da falha real é o princípio central.",
    focus: ["Injeção de falhas", "GameDays", "Steady state hypothesis", "Blast radius controlado"],
    hot2026: false,
    links: [
      { title: "Principles of Chaos Engineering", url: "https://principlesofchaos.org", desc: "Os princípios fundamentais definidos pela Netflix — o manifesto do Chaos Engineering." },
      { title: "Netflix — Chaos Monkey", url: "https://netflix.github.io/chaosmonkey", desc: "O Chaos Monkey original que iniciou o movimento — documentação completa." }
    ],
    videos: [
      { title: "ByteByteGo — Resilience Patterns", url: "https://www.youtube.com/@ByteByteGo", desc: "Circuit breaker, retry storms, graceful degradation e chaos engineering visualizados." }
    ],
    books: [
      { title: "Release It!", author: "Michael T. Nygard", url: "https://www.amazon.com/Release-Production-Ready-Software-Pragmatic-Programmers/dp/0978739213", desc: "O livro definitivo em resiliência — circuit breakers, bulkheads, timeouts e cascading failures. Leitura obrigatória.", badge: "⭐ Livro definitivo" },
      { title: "Chaos Engineering", author: "Casey Rosenthal & Nora Jones", url: "https://www.amazon.com/Chaos-Engineering-System-Resiliency-Practice/dp/1492043869", desc: "O guia prático de Chaos Engineering pelos fundadores da disciplina na Netflix." }
    ],
    blogs: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "O berço do Chaos Engineering — Chaos Monkey, Simian Army e GameDays em produção." },
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "Chaos Engineering com AWS Fault Injection Simulator — guias práticos." }
    ]
  },

  "Circuit Breakers": {
    phase: "Phase 04 · Performance & Resilience",
    description: "O padrão que previne falhas em cascata interrompendo chamadas a serviços degradados. Fail-fast como mecanismo de resiliência — não é pessimismo, é engenharia. Estude também: retries, retry storms e graceful degradation.",
    focus: ["Circuit Breaker states", "Retry storms", "Graceful degradation", "Fail-fast", "Cascading failures"],
    hot2026: false,
    links: [
      { title: "Netflix Tech Blog — Hystrix", url: "https://netflixtechblog.com", desc: "Hystrix — o circuit breaker open-source que a Netflix criou e que estabeleceu o padrão da indústria." },
      { title: "ByteByteGo — Resilience Patterns", url: "https://www.youtube.com/@ByteByteGo", desc: "Circuit Breaker, Bulkhead e Rate Limiter visualizados com exemplos reais." }
    ],
    videos: [
      { title: "ByteByteGo — Circuit Breaker", url: "https://www.youtube.com/@ByteByteGo", desc: "Como circuit breakers previnem cascading failures — animações claras." }
    ],
    books: [
      { title: "Release It!", author: "Michael T. Nygard", url: "https://www.amazon.com/Release-Production-Ready-Software-Pragmatic-Programmers/dp/0978739213", desc: "O livro que popularizou Circuit Breakers, Bulkheads, Timeouts e padrões de resiliência. Essencial.", badge: "⭐ Livro definitivo" },
      { title: "Chaos Engineering", author: "Casey Rosenthal & Nora Jones", url: "https://www.amazon.com/Chaos-Engineering-System-Resiliency-Practice/dp/1492043869", desc: "Como testar circuit breakers e outros mecanismos de resiliência com Chaos Engineering." }
    ],
    blogs: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Hystrix, Resilience4j e circuit breakers em sistemas de bilhões de usuários." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Resiliência em edge computing — como a Cloudflare evita cascading failures globais." }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     PHASE 5 · SOCIOTECHNICAL ENGINEERING
  ═══════════════════════════════════════════════════════════════ */

  "Conway's Law": {
    phase: "Phase 05 · Sociotechnical Engineering",
    description: "Organizações projetam sistemas que espelham suas estruturas de comunicação. A Inverse Conway Maneuver inverte isso: redesenhe os times para obter a arquitetura desejada.",
    focus: ["Conway's Law", "Inverse Conway Maneuver", "Cognitive load como restrição", "Team boundaries = system boundaries"],
    hot2026: false,
    links: [
      { title: "Martin Fowler — Conway's Law", url: "https://martinfowler.com", desc: "A definição canônica e o argumento para usar a Lei de Conway proativamente — Inverse Conway Maneuver." },
      { title: "Team Topologies", url: "https://teamtopologies.com", desc: "O framework que sistematizou como usar Conway's Law como ferramenta de design organizacional." }
    ],
    videos: [
      { title: "ByteByteGo — Org Design & Architecture", url: "https://www.youtube.com/@ByteByteGo", desc: "Como estrutura de times influencia arquitetura de sistemas — a visão sistêmica." }
    ],
    books: [
      { title: "Team Topologies", author: "Matthew Skelton & Manuel Pais", url: "https://www.amazon.com/Team-Topologies-Organizing-Business-Technology/dp/1942788819", desc: "O livro que transformou Conway's Law em framework prático de design de times — leitura obrigatória.", badge: "⭐ Livro obrigatório" },
      { title: "Accelerate", author: "Nicole Forsgren, Jez Humble & Gene Kim", url: "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339", desc: "Evidence-based: como estrutura de times e ownership impactam performance de entrega." }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Inverse Conway Maneuver — como redesenhar times para mudar arquitetura de sistemas." },
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Como a Netflix organizou times para suportar sua arquitetura de microserviços." }
    ]
  },

  "Team Topologies": {
    phase: "Phase 05 · Sociotechnical Engineering",
    description: "O framework que define 4 tipos de times (stream-aligned, platform, enabling, complicated subsystem) e 3 modos de interação para criar organizações de engenharia de alto desempenho.",
    focus: ["Stream-aligned teams", "Platform teams", "Cognitive load", "Interaction modes", "Team-first design"],
    hot2026: true,
    links: [
      { title: "Team Topologies Official", url: "https://teamtopologies.com", desc: "Recursos oficiais, key concepts, casos de uso e comunidade de Team Topologies." }
    ],
    videos: [
      { title: "ByteByteGo — Team Design", url: "https://www.youtube.com/@ByteByteGo", desc: "Como Team Topologies se conecta com System Design e arquitetura de microserviços." }
    ],
    books: [
      { title: "Team Topologies", author: "Matthew Skelton & Manuel Pais", url: "https://www.amazon.com/Team-Topologies-Organizing-Business-Technology/dp/1942788819", desc: "O livro — stream-aligned, platform, enabling e complicated subsystem teams. Obrigatório.", badge: "⭐ Livro obrigatório" },
      { title: "Accelerate", author: "Nicole Forsgren, Jez Humble & Gene Kim", url: "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339", desc: "Evidence-based: as métricas DORA que Team Topologies busca otimizar — o argumento quantificado." }
    ],
    blogs: [
      { title: "Team Topologies Blog", url: "https://teamtopologies.com", desc: "Casos de uso, patterns e anti-patterns de Team Topologies aplicados em empresas reais." },
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Perspectiva arquitetural sobre organização de times e sua relação com o design de sistemas." }
    ]
  },

  "Ownership": {
    phase: "Phase 05 · Sociotechnical Engineering",
    description: "Quem é responsável por um sistema é quem garante sua qualidade. Ownership claro é pré-requisito para qualidade sustentável — ambiguidade de ownership gera sistemas órfãos.",
    focus: ["Conway's Law", "Cognitive load", "Full-cycle developers", "Team autonomy"],
    hot2026: false,
    links: [
      { title: "Team Topologies", url: "https://teamtopologies.com", desc: "O framework que define como ownership deve ser estruturado — quem possui, quem consulta, quem opera." },
      { title: "Martin Fowler — Team Design", url: "https://martinfowler.com", desc: "Artigos sobre ownership, team boundaries e autonomia de times de engenharia." }
    ],
    videos: [
      { title: "ByteByteGo — Engineering Culture", url: "https://www.youtube.com/@ByteByteGo", desc: "Como ownership e cultura de times afetam qualidade e velocidade de sistemas." }
    ],
    books: [
      { title: "Team Topologies", author: "Matthew Skelton & Manuel Pais", url: "https://www.amazon.com/Team-Topologies-Organizing-Business-Technology/dp/1942788819", desc: "O guia definitivo para estruturar ownership em organizações de engenharia de alta performance.", badge: "⭐ Livro obrigatório" },
      { title: "Accelerate", author: "Nicole Forsgren, Jez Humble & Gene Kim", url: "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339", desc: "Como ownership claro impacta métricas DORA e performance organizacional — dados reais." }
    ],
    blogs: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Cultura de ownership na Netflix — full-cycle developers e você constrói, você opera." },
      { title: "Uber Engineering", url: "https://www.uber.com/blog/engineering", desc: "Como a Uber estrutura ownership em centenas de microserviços e times." }
    ]
  },

  "Cognitive Load": {
    phase: "Phase 05 · Sociotechnical Engineering",
    description: "A quantidade de esforço mental que um time precisa manter para entender e trabalhar em seu sistema. É a restrição de design mais ignorada — e uma das mais importantes de 2026.",
    focus: ["Cognitive load como restrição", "Team boundaries", "Platform como redutor de carga", "Autonomia vs dependência"],
    hot2026: true,
    links: [
      { title: "Team Topologies — Cognitive Load", url: "https://teamtopologies.com", desc: "A fonte principal sobre cognitive load como restrição fundamental de design de times." }
    ],
    videos: [
      { title: "ByteByteGo — Engineering Productivity", url: "https://www.youtube.com/@ByteByteGo", desc: "Como cognitive load afeta performance, autonomia e qualidade de times de engenharia." }
    ],
    books: [
      { title: "Team Topologies", author: "Matthew Skelton & Manuel Pais", url: "https://www.amazon.com/Team-Topologies-Organizing-Business-Technology/dp/1942788819", desc: "O livro que colocou cognitive load no centro do design de organizações de engenharia — definitivo.", badge: "⭐ Livro obrigatório" },
      { title: "Accelerate", author: "Nicole Forsgren, Jez Humble & Gene Kim", url: "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339", desc: "Como reduzir cognitive load impacta métricas DORA — o argumento quantificado." }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Cognitive load e como arquitetura pode reduzi-lo ou aumentá-lo em times." },
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "Platform engineering como forma de reduzir cognitive load de times de produto." }
    ]
  },

  "Platform Engineering": {
    phase: "Phase 05 · Sociotechnical Engineering",
    description: "Construir plataformas internas que aumentam a autonomia e reduzem cognitive load de times de produto. Golden paths, Internal Developer Platforms e Developer Experience são as palavras-chave de 2026.",
    focus: ["Internal Developer Platform", "Golden paths", "Engineering productivity", "Platform as a product"],
    hot2026: true,
    links: [
      { title: "Platform Engineering Community", url: "https://platformengineering.org", desc: "A comunidade oficial de Platform Engineering com recursos, casos de uso e debates." },
      { title: "Internal Developer Platform Guide", url: "https://internaldeveloperplatform.org", desc: "Guia completo sobre como construir e operar um Internal Developer Platform." },
      { title: "Team Topologies", url: "https://teamtopologies.com", desc: "A base conceitual de Platform Engineering como produto interno para times de produto." }
    ],
    videos: [
      { title: "ByteByteGo — Platform Engineering", url: "https://www.youtube.com/@ByteByteGo", desc: "Platform Engineering, Internal Developer Platforms e Developer Experience — visão sistêmica." }
    ],
    books: [
      { title: "Team Topologies", author: "Matthew Skelton & Manuel Pais", url: "https://www.amazon.com/Team-Topologies-Organizing-Business-Technology/dp/1942788819", desc: "O livro que define Platform Teams como um dos 4 tipos fundamentais — a base teórica.", badge: "⭐ Livro obrigatório" },
      { title: "Accelerate", author: "Nicole Forsgren, Jez Humble & Gene Kim", url: "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339", desc: "Como Platform Engineering impacta métricas DORA e velocidade organizacional." }
    ],
    blogs: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "A plataforma interna da Netflix — Spinnaker, Conductor e como elas habilitam autonomia de times." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Platform Engineering em infraestrutura de edge global." },
      { title: "Uber Engineering", url: "https://www.uber.com/blog/engineering", desc: "Como a Uber construiu plataformas internas para centenas de times independentes." }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     PHASE 6 · ENGINEERING ECONOMICS
  ═══════════════════════════════════════════════════════════════ */

  "FinOps": {
    phase: "Phase 06 · Engineering Economics",
    description: "A prática de trazer responsabilidade financeira para o modelo variável de cloud — onde engenharia, finanças e negócio precisam colaborar. Em 2026, FinOps é habilidade diferenciadora para Engineers.",
    focus: ["Cloud cost governance", "Cost allocation", "Unit economics", "Showback vs chargeback"],
    hot2026: true,
    links: [
      { title: "FinOps Foundation", url: "https://www.finops.org", desc: "A organização que define frameworks, certificações e melhores práticas de FinOps." },
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "Cost optimization patterns e FinOps em AWS — guias práticos e casos reais." },
      { title: "Best System Design Courses", url: "https://www.algoroq.io/guides/system-design-courses", desc: "Comparação dos melhores cursos que incluem cost-awareness em System Design." }
    ],
    videos: [
      { title: "ByteByteGo — Cloud Economics", url: "https://www.youtube.com/@ByteByteGo", desc: "Custo de sistemas em cloud — compute, storage e egress explicados com clareza." }
    ],
    books: [
      { title: "Systems Performance", author: "Brendan Gregg", url: "https://www.amazon.com/Systems-Performance-Brendan-Gregg/dp/0136820158", desc: "Performance e custo são dois lados da mesma moeda — entender performance é reduzir custo.", badge: "⭐ Referência técnica" },
      { title: "Accelerate", author: "Nicole Forsgren, Jez Humble & Gene Kim", url: "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339", desc: "Como eficiência técnica se traduz em vantagem econômica real — o argumento quantificado." }
    ],
    blogs: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Como a Netflix otimiza centenas de milhões em custo de cloud — casos reais." },
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "Well-Architected Framework — pilar de Cost Optimization com guias práticos." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Eficiência de custo em infraestrutura de edge global — comparativos reais." }
    ]
  },

  "Cloud Economics": {
    phase: "Phase 06 · Engineering Economics",
    description: "Entender o modelo de precificação de cloud — compute, storage, egress e reserved capacity — para tomar decisões técnicas cost-aware. Egress é frequentemente a surpresa maior.",
    focus: ["Compute vs storage vs egress", "Reserved vs on-demand", "Spot instances", "Multi-region costs"],
    hot2026: false,
    links: [
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "Cost optimization patterns, reserved instances, savings plans e well-architected review." },
      { title: "FinOps Foundation", url: "https://www.finops.org", desc: "Frameworks de Cloud Economics e cost governance para times de engenharia." },
      { title: "ByteByteGo — System Design", url: "https://www.youtube.com/@ByteByteGo", desc: "System Design cost-aware: como custo influencia decisões de arquitetura real." }
    ],
    videos: [
      { title: "ByteByteGo YouTube", url: "https://www.youtube.com/@ByteByteGo", desc: "Cloud costs, compute vs storage vs egress — visualizações práticas e impactantes." }
    ],
    books: [
      { title: "Accelerate", author: "Nicole Forsgren, Jez Humble & Gene Kim", url: "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339", desc: "Performance técnica como vantagem econômica — o argumento evidence-based.", badge: "⭐ Referência" }
    ],
    blogs: [
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "Cost optimization em escala — Intelligent Tiering, Savings Plans e strategies reais." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Cloudflare vs AWS: modelo econômico de edge computing e porque egress importa tanto." },
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Cloud economics na Netflix — otimizações que economizam centenas de milhões anualmente." }
    ]
  },

  "ROI Técnico": {
    phase: "Phase 06 · Engineering Economics",
    description: "Quantificar o retorno de investimentos técnicos na linguagem do negócio. Refactoring, migração e dívida técnica têm ROI real — o engenheiro sênior sabe calculá-lo e comunicá-lo.",
    focus: ["DORA metrics", "Dívida técnica quantificada", "Engineering productivity", "Custo de lentidão"],
    hot2026: false,
    links: [
      { title: "Martin Fowler — Is Quality Worth Cost?", url: "https://martinfowler.com/articles/is-quality-worth-cost.html", desc: "O argumento definitivo: qualidade técnica gera velocidade, não custa. Leitura obrigatória." },
      { title: "DORA Research", url: "https://dora.dev", desc: "Métricas DORA — evidências quantitativas de ROI de práticas de engenharia. Base de dados de anos." },
      { title: "Martin Fowler Articles", url: "https://martinfowler.com", desc: "Artigos sobre como comunicar valor técnico para o negócio — a habilidade do Staff Engineer." }
    ],
    videos: [
      { title: "ByteByteGo — Engineering Productivity", url: "https://www.youtube.com/@ByteByteGo", desc: "Como medir produtividade de engenharia e seu impacto em resultados de negócio." }
    ],
    books: [
      { title: "Accelerate", author: "Nicole Forsgren, Jez Humble & Gene Kim", url: "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339", desc: "Evidence-based: como práticas técnicas se traduzem em performance organizacional e ROI real.", badge: "⭐ Livro obrigatório" }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Technical debt, quality e como argumentar ROI para liderança e negócio." },
      { title: "Stripe Engineering Blog", url: "https://stripe.com/blog/engineering", desc: "Como a Stripe quantifica o valor de investimentos em confiabilidade e qualidade." },
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "ROI de automação, confiabilidade e chaos engineering em escala." }
    ]
  },

  "Build vs Buy": {
    phase: "Phase 06 · Engineering Economics",
    description: "Uma das decisões mais estratégicas em engenharia. Construir diferencia; comprar é commodity. O erro mais comum: construir o que é commodity e comprar o que diferencia.",
    focus: ["Strategic vs commodity", "Total cost of ownership", "Vendor lock-in", "Core competency"],
    hot2026: false,
    links: [
      { title: "Martin Fowler — Build vs Buy", url: "https://martinfowler.com", desc: "A perspectiva arquitetural e estratégica da decisão Build vs Buy — quando cada opção faz sentido." },
      { title: "InfoQ — Architecture Decisions", url: "https://www.infoq.com/architecture-design", desc: "Estudos de caso reais de decisões Build vs Buy em empresas tech de referência." },
      { title: "Best System Design Courses", url: "https://www.algoroq.io/guides/system-design-courses", desc: "Cursos de System Design que cobrem decisões estratégicas e trade-offs reais." }
    ],
    videos: [
      { title: "ByteByteGo — Architecture Decisions", url: "https://www.youtube.com/@ByteByteGo", desc: "Trade-offs de Build vs Buy em system design — visualizações de casos reais." }
    ],
    books: [
      { title: "Accelerate", author: "Nicole Forsgren, Jez Humble & Gene Kim", url: "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339", desc: "Quando construir internamente acelera vs quando comprar libera capacidade para diferenciação.", badge: "⭐ Referência" }
    ],
    blogs: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Decisões de Build vs Buy da Netflix — Cassandra, Kafka e open-source estratégico." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Por que a Cloudflare constrói ao invés de comprar — chips próprios, protocolos e mais." },
      { title: "Uber Engineering", url: "https://www.uber.com/blog/engineering", desc: "Open-source contributions da Uber — quando construir é estrategicamente correto." }
    ]
  },

  "Cost per Request": {
    phase: "Phase 06 · Engineering Economics",
    description: "A métrica que conecta decisões de arquitetura com custo real. Lambda vs Container vs VM têm custos por request radicalmente diferentes. Caching e async são as maiores alavancas.",
    focus: ["Lambda vs Container vs VM", "Caching como redutor de custo", "Async como eficiência", "Egress optimization"],
    hot2026: false,
    links: [
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "Cost per request em Lambda, containers e EC2 — trade-offs reais e guias práticos." },
      { title: "FinOps Foundation", url: "https://www.finops.org", desc: "Frameworks para calcular e otimizar cost per request em sistemas cloud-native." },
      { title: "ByteByteGo — System Design", url: "https://www.youtube.com/@ByteByteGo", desc: "Como decisões de arquitetura impactam custo por operação — visualizações práticas." }
    ],
    videos: [
      { title: "ByteByteGo YouTube", url: "https://www.youtube.com/@ByteByteGo", desc: "Cost-aware system design — como calcular e otimizar custo por request em cloud." }
    ],
    books: [
      { title: "Systems Performance", author: "Brendan Gregg", url: "https://www.amazon.com/Systems-Performance-Brendan-Gregg/dp/0136820158", desc: "Performance e custo são inseparáveis — este livro te dá as ferramentas para dominar ambos.", badge: "⭐ Referência técnica" }
    ],
    blogs: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Cost per stream — como a Netflix otimiza custo por requisição em bilhões de pedidos diários." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Custo por request em edge computing — como a Cloudflare processa trilhões de requests eficientemente." },
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "Lambda vs ECS vs EC2 — análise de custo por request em diferentes arquiteturas." }
    ]
  }

};
