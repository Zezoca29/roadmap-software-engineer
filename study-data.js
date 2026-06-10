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
  },

  /* ═══════════════════════════════════════════════════════════════
     LAYER 00 · COMPUTATIONAL CORE
  ═══════════════════════════════════════════════════════════════ */

  "Algorithms & Data Structures": {
    phase: "Layer 00 · Computational Core",
    description: "A base de toda performance real. Escolher a estrutura errada é garantir bottleneck. Arrays, hash maps, árvores e grafos não são abstrações — são decisões de engenharia com implicações de O(n) no mundo real.",
    focus: ["Complexidade assintótica", "Trade-offs de estruturas", "Cache locality", "Heap & Stack", "Graph traversal"],
    hot2026: false,
    links: [
      { title: "CS50 Harvard (Free)", url: "https://cs50.harvard.edu", desc: "O melhor curso introdutório gratuito — arrays, hash tables, trees e algoritmos fundamentais com rigor científico." },
      { title: "CLRS Online", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms", desc: "Introduction to Algorithms — o livro canônico. Referência obrigatória para qualquer engenheiro sério." },
      { title: "Visualgo", url: "https://visualgo.net", desc: "Visualização interativa de algoritmos e estruturas de dados — essencial para intuição antes da implementação." }
    ],
    videos: [
      { title: "MIT 6.006 Introduction to Algorithms", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011", desc: "Aulas completas do MIT sobre algoritmos — sorting, hashing, graph algorithms, DP. Gratuito." },
      { title: "ByteByteGo — Data Structures", url: "https://www.youtube.com/@ByteByteGo", desc: "Estruturas de dados aplicadas a system design — como cada escolha impacta performance real." }
    ],
    books: [
      { title: "Introduction to Algorithms (CLRS)", author: "Cormen, Leiserson, Rivest & Stein", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms", desc: "O livro canônico de algoritmos. Denso mas a referência definitiva — leitura obrigatória.", badge: "⭐ Canônico" },
      { title: "Algorithm Design Manual", author: "Steven Skiena", url: "https://www.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1848000693", desc: "Mais prático que CLRS — focado em aplicação real, com catálogo de problemas e soluções." }
    ],
    blogs: [
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Como algoritmos de roteamento e estruturas de dados impactam performance em escala de internet." },
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Algoritmos de recomendação e estruturas de dados em sistemas de bilhões de usuários." }
    ]
  },

  "Memory Hierarchy & Cache": {
    phase: "Layer 00 · Computational Core",
    description: "A hierarquia de memória é a realidade física que determina performance. Registradores a 1ns, L1 a 4ns, RAM a 100ns, disco a 10ms — ignorar isso é deixar 10-100x de performance na mesa.",
    focus: ["Cache locality", "False sharing", "NUMA", "Cache lines", "Prefetching", "Latência vs throughput"],
    hot2026: false,
    links: [
      { title: "Latency Numbers Every Programmer Should Know", url: "https://gist.github.com/jboner/2841832", desc: "Os números que todo engenheiro deve memorizar — referência fundamental para raciocínio de performance." },
      { title: "What Every Programmer Should Know About Memory", url: "https://people.freebsd.org/~lstewart/articles/cpumemory.pdf", desc: "Paper de Ulrich Drepper — a referência definitiva sobre hierarquia de memória. Essencial." },
      { title: "Brendan Gregg — Systems Performance", url: "https://www.brendangregg.com", desc: "Profiling de memória, cache misses e análise de performance com ferramentas do Linux." }
    ],
    videos: [
      { title: "Scott Meyers — CPU Caches and Why You Care", url: "https://www.youtube.com/watch?v=WDIkqP4JbkE", desc: "A melhor palestra sobre cache hierarchy e suas implicações práticas — obrigatória." },
      { title: "ByteByteGo — Memory & Storage", url: "https://www.youtube.com/@ByteByteGo", desc: "Hierarquia de memória visualizada e latências em contexto de system design." }
    ],
    books: [
      { title: "Computer Systems: A Programmer's Perspective (CS:APP)", author: "Bryant & O'Hallaron", url: "https://www.amazon.com/Computer-Systems-Programmers-Perspective-3rd/dp/013409266X", desc: "O livro canônico sobre hardware e software. Capítulos sobre memória e cache são os melhores disponíveis.", badge: "⭐ Canônico" },
      { title: "Systems Performance", author: "Brendan Gregg", url: "https://www.amazon.com/Systems-Performance-Brendan-Gregg/dp/0136820158", desc: "Performance de memória, CPU, I/O — o guia prático definitivo para sistemas reais." }
    ],
    blogs: [
      { title: "Brendan Gregg's Blog", url: "https://www.brendangregg.com", desc: "Análise profunda de cache misses, NUMA, e performance de memória em sistemas Linux." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Otimizações de cache e memória em sistemas de alta performance e baixa latência." }
    ]
  },

  "OS Internals": {
    phase: "Layer 00 · Computational Core",
    description: "O SO é a camada que media entre hardware e software — processos, threads, scheduler, sistema de arquivos e chamadas de sistema. Entendê-lo transforma debugging de adivinhação em ciência.",
    focus: ["Process vs Thread", "System calls", "Scheduler", "File system internals", "IPC", "Signals"],
    hot2026: false,
    links: [
      { title: "OSTEPbook.com (Free)", url: "https://ostep.org", desc: "Operating Systems: Three Easy Pieces — o melhor livro gratuito sobre SO. Processos, virtualização, concorrência e persistência." },
      { title: "Linux Kernel Documentation", url: "https://www.kernel.org/doc/html/latest", desc: "Documentação oficial do kernel Linux — referência definitiva para internals reais." },
      { title: "Julia Evans — How Linux Works", url: "https://jvns.ca", desc: "Zines e artigos que desmistificam internals do Linux com clareza e humor raro." }
    ],
    videos: [
      { title: "MIT 6.1810 Operating System Engineering", url: "https://pdos.csail.mit.edu/6.828/2023", desc: "O curso de SO do MIT — implementação de um kernel real em C. A referência acadêmica." },
      { title: "Hussein Nasser — OS & Kernel Internals", url: "https://www.youtube.com/@hnasr", desc: "Internals de SO aplicados a sistemas de rede e servidores — muito prático." }
    ],
    books: [
      { title: "Operating Systems: Three Easy Pieces", author: "Arpaci-Dusseau", url: "https://ostep.org", desc: "O melhor livro de SO moderno — gratuito online. Virtualização, concorrência e persistência.", badge: "⭐ Gratuito & Essencial" },
      { title: "Computer Systems: A Programmer's Perspective", author: "Bryant & O'Hallaron", url: "https://www.amazon.com/Computer-Systems-Programmers-Perspective-3rd/dp/013409266X", desc: "CS:APP — o canônico que conecta hardware, SO e código de forma insuperável." }
    ],
    blogs: [
      { title: "Julia Evans (jvns.ca)", url: "https://jvns.ca", desc: "Artigos práticos sobre Linux internals, system calls e debugging — escritos com clareza excepcional." },
      { title: "Brendan Gregg's Blog", url: "https://www.brendangregg.com", desc: "Performance de SO, scheduler, I/O e ferramentas de análise — a referência global em SRE." }
    ]
  },

  "TCP/IP & Latency Physics": {
    phase: "Layer 00 · Computational Core",
    description: "A rede tem física. Velocidade da luz, RTT, janelas TCP, handshakes e head-of-line blocking não são detalhes — são os limites reais de qualquer sistema distribuído. Latency numbers não se argumentam.",
    focus: ["RTT e velocidade da luz", "TCP slow start", "Head-of-line blocking", "HTTP/2 vs HTTP/3", "QUIC", "DNS"],
    hot2026: false,
    links: [
      { title: "High Performance Browser Networking (Free)", url: "https://hpbn.co", desc: "Ilya Grigorik — o livro gratuito definitivo sobre TCP, TLS, HTTP/2, WebSockets e redes de alto desempenho." },
      { title: "Cloudflare Learning Center", url: "https://www.cloudflare.com/learning", desc: "Explicações técnicas aprofundadas sobre TCP/IP, DNS, TLS e protocolos de rede modernos." },
      { title: "Julia Evans — Networking Zines", url: "https://jvns.ca", desc: "Zines que explicam TCP, DNS e networking com clareza impossível de encontrar em livros técnicos tradicionais." }
    ],
    videos: [
      { title: "Hussein Nasser — Networking & Protocols", url: "https://www.youtube.com/@hnasr", desc: "O melhor canal sobre TCP, HTTP/2, HTTP/3, QUIC e protocolos aplicados a backends reais." },
      { title: "ByteByteGo — Network Fundamentals", url: "https://www.youtube.com/@ByteByteGo", desc: "TCP/IP, DNS, CDN e latency physics visualizados para system design." }
    ],
    books: [
      { title: "High Performance Browser Networking", author: "Ilya Grigorik", url: "https://hpbn.co", desc: "O melhor recurso gratuito sobre redes de alto desempenho — TCP, TLS, HTTP/2, QUIC.", badge: "⭐ Gratuito & Essencial" },
      { title: "Computer Systems: A Programmer's Perspective", author: "Bryant & O'Hallaron", url: "https://www.amazon.com/Computer-Systems-Programmers-Perspective-3rd/dp/013409266X", desc: "Capítulos sobre redes e I/O — a base de como o SO abstrai a pilha de rede." }
    ],
    blogs: [
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "TCP, QUIC, HTTP/3 e latency em escala de internet — artigos técnicos de altíssimo nível." },
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Otimizações de rede, ABR streaming e latência em sistemas de vídeo global." }
    ]
  },

  "Compilers & Runtimes": {
    phase: "Layer 00 · Computational Core",
    description: "Entender o que o compilador faz com seu código muda como você escreve. JIT, AOT, garbage collection, inlining, branch prediction — o código que você vê e o que executa são coisas diferentes.",
    focus: ["JIT vs AOT", "Garbage collection", "Inlining & devirtualization", "Branch prediction", "LLVM IR"],
    hot2026: false,
    links: [
      { title: "Crafting Interpreters (Free)", url: "https://craftinginterpreters.com", desc: "O melhor recurso gratuito para entender como linguagens e runtimes funcionam — implementando do zero." },
      { title: "Compiler Explorer (Godbolt)", url: "https://godbolt.org", desc: "Veja o assembly que seu código C++/Rust/Go gera em tempo real — ferramenta indispensável." },
      { title: "JVM Internals by Jakob Jenkov", url: "https://jenkov.com/tutorials/java-concurrency", desc: "Internals do JVM — GC, JIT, class loading e threading explicados com profundidade." }
    ],
    videos: [
      { title: "Jakob Jenkov — JVM & GC", url: "https://www.youtube.com/@JakobJenkov", desc: "JVM internals, garbage collectors (G1, ZGC, Shenandoah), JIT e performance — série completa." },
      { title: "LLVM Dev Meeting Talks", url: "https://www.youtube.com/channel/UCv2_41bSAa5Y_8BacJUZfjQ", desc: "Palestras técnicas do projeto LLVM — compiladores, IR e otimizações modernas." }
    ],
    books: [
      { title: "Crafting Interpreters", author: "Robert Nystrom", url: "https://craftinginterpreters.com", desc: "O livro gratuito que mais claramente explica parsers, bytecode, VMs e garbage collection.", badge: "⭐ Gratuito & Excelente" },
      { title: "Computer Systems: A Programmer's Perspective", author: "Bryant & O'Hallaron", url: "https://www.amazon.com/Computer-Systems-Programmers-Perspective-3rd/dp/013409266X", desc: "Como compiladores, assembler e linking funcionam — essencial para entender a pipeline completa." }
    ],
    blogs: [
      { title: "V8 Blog", url: "https://v8.dev/blog", desc: "Internals do runtime JavaScript do Chrome — JIT, garbage collection e otimizações reais." },
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Otimizações de JVM e runtime em sistemas Java de missão crítica." }
    ]
  },

  "Concurrency Primitives": {
    phase: "Layer 00 · Computational Core",
    description: "Threads, locks, semaphores, channels e futures não são APIs — são modelos de execução com trade-offs fundamentais. Race conditions e deadlocks surgem de raciocínio errado sobre concorrência, não de bugs aleatórios.",
    focus: ["Mutex vs RWLock", "Lock-free structures", "Memory models", "Channels vs shared state", "Deadlock prevention"],
    hot2026: false,
    links: [
      { title: "OSTEPbook — Concurrency", url: "https://ostep.org", desc: "Capítulos de concorrência do OSTEP — threads, locks, condition variables e semaphores com rigor." },
      { title: "The Little Book of Semaphores (Free)", url: "https://greenteapress.com/wp/semaphores", desc: "Livro gratuito com puzzles clássicos de concorrência — a melhor forma de desenvolver intuição." },
      { title: "Jakob Jenkov — Java Concurrency", url: "https://jenkov.com/tutorials/java-concurrency", desc: "O recurso mais completo sobre concorrência em JVM — mutex, semaphore, thread pools, CAS." }
    ],
    videos: [
      { title: "Jakob Jenkov — Concurrency Series", url: "https://www.youtube.com/@JakobJenkov", desc: "Série completa sobre concorrência em Java/JVM — o canal mais aprofundado sobre o tema." },
      { title: "MIT 6.1810 — Concurrency & Locking", url: "https://pdos.csail.mit.edu/6.828", desc: "Aulas do MIT sobre locking, race conditions e implementação de primitivos de concorrência." }
    ],
    books: [
      { title: "Operating Systems: Three Easy Pieces", author: "Arpaci-Dusseau", url: "https://ostep.org", desc: "A melhor introdução a concorrência com foco em implementação e problemas clássicos.", badge: "⭐ Gratuito & Essencial" },
      { title: "Java Concurrency in Practice", author: "Brian Goetz", url: "https://www.amazon.com/Java-Concurrency-Practice-Brian-Goetz/dp/0321349601", desc: "O livro canônico de concorrência em JVM — ainda relevante para qualquer linguagem com threads." }
    ],
    blogs: [
      { title: "Martin Thompson — Mechanical Sympathy", url: "https://mechanical-sympathy.blogspot.com", desc: "Concorrência lock-free, memory models e performance de baixo nível — altíssimo nível técnico." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Concorrência em Rust e Go em sistemas de alta performance — casos reais de produção." }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     LAYER 01 · CODE CRAFT (COMPLEMENTO)
  ═══════════════════════════════════════════════════════════════ */

  "Test-Driven Design": {
    phase: "Layer 01 · Code Craft",
    description: "TDD não é sobre testes — é sobre design. Escrever o teste primeiro força interfaces simples, dependências explícitas e módulos testáveis por natureza. O teste é a primeira documentação viva do sistema.",
    focus: ["Red-Green-Refactor", "Test como design tool", "Outside-in TDD", "Teste de comportamento vs estado", "Testabilidade como proxy de qualidade"],
    hot2026: false,
    links: [
      { title: "Growing Object-Oriented Software (GOOS)", url: "https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627", desc: "O livro definitivo sobre TDD outside-in — guiado por acceptance tests com foco em design." },
      { title: "Martin Fowler — Test Driven Development", url: "https://martinfowler.com/bliki/TestDrivenDevelopment.html", desc: "A perspectiva canônica sobre TDD, quando usar e como evitar os antipadrões mais comuns." }
    ],
    videos: [
      { title: "ArjanCodes — TDD in Python", url: "https://www.youtube.com/@ArjanCodes", desc: "TDD aplicado em projetos reais em Python — ciclos Red-Green-Refactor com boas práticas de design." },
      { title: "Ian Cooper — TDD, Where Did It All Go Wrong?", url: "https://www.youtube.com/watch?v=EZ05e7EMOLM", desc: "A palestra essencial sobre como TDD é mal aplicado e como corrigi-lo — assista antes de começar." }
    ],
    books: [
      { title: "Test Driven Development: By Example", author: "Kent Beck", url: "https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530", desc: "O livro original do criador do TDD — demonstra o processo completo de forma acessível.", badge: "⭐ Original & Essencial" },
      { title: "Growing Object-Oriented Software Guided by Tests", author: "Freeman & Pryce", url: "https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627", desc: "O melhor livro sobre TDD outside-in e como usar testes para guiar design real." }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "TDD, testabilidade e o papel dos testes como ferramenta de design — artigos canônicos." },
      { title: "ArjanCodes Blog", url: "https://arjancodes.com", desc: "TDD e boas práticas de design em Python com exemplos práticos aplicáveis." }
    ]
  },

  "Mutation Testing": {
    phase: "Layer 01 · Code Craft",
    description: "Mutation testing injeta bugs artificiais e mede quantos seus testes detectam. Um teste que não mata mutante não prova nada — é ruído com custo de manutenção. Mutation score mede a qualidade real da suite.",
    focus: ["Mutation score", "Equivalent mutants", "PIT (Java)", "Stryker (JS/TS)", "Custo vs benefício"],
    hot2026: false,
    links: [
      { title: "PIT Mutation Testing", url: "https://pitest.org", desc: "O framework de mutation testing mais usado para Java/JVM — integração com Maven, Gradle e CI." },
      { title: "Stryker Mutator", url: "https://stryker-mutator.io", desc: "Mutation testing para JavaScript, TypeScript, C# e Scala — o padrão para ecosistemas JS." },
      { title: "Martin Fowler — Mutation Testing", url: "https://martinfowler.com", desc: "Contexto e trade-offs de mutation testing na perspectiva de design de software." }
    ],
    videos: [
      { title: "ArjanCodes — Testing Quality", url: "https://www.youtube.com/@ArjanCodes", desc: "Como avaliar e melhorar a qualidade de suites de teste — incluindo mutation testing." }
    ],
    books: [
      { title: "A Philosophy of Software Design", author: "John Ousterhout", url: "https://www.amazon.com/Philosophy-Software-Design-2nd/dp/173210221X", desc: "O contexto de por que mutation testing importa: complexidade e qualidade de interfaces são inseparáveis.", badge: "⭐ Contexto Essencial" },
      { title: "Test Driven Development: By Example", author: "Kent Beck", url: "https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530", desc: "TDD e mutation testing têm o mesmo objetivo — testes que realmente provam comportamento." }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Test quality, mutation testing e o custo real de suites de teste fracas." }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     LAYER 02 · ARCHITECTURE (COMPLEMENTO)
  ═══════════════════════════════════════════════════════════════ */

  "Fitness Functions": {
    phase: "Layer 02 · Evolutionary Architecture",
    description: "Fitness functions são testes automatizados para propriedades arquiteturais — acoplamento, dependências proibidas, limites de complexidade, performance. Elas guardam o design no CI, não em documentos.",
    focus: ["Architecture tests", "ArchUnit", "Dependency guards", "Complexity thresholds", "CI enforcement"],
    hot2026: false,
    links: [
      { title: "Building Evolutionary Architectures", url: "https://www.amazon.com/Building-Evolutionary-Architectures-Support-Constant/dp/1491986360", desc: "O livro que inventou o conceito de fitness functions — a referência para implementar e usar no CI." },
      { title: "ArchUnit", url: "https://www.archunit.org", desc: "Framework para escrever fitness functions de arquitetura em Java/Kotlin — testa dependências e camadas." },
      { title: "Martin Fowler — Evolutionary Architecture", url: "https://martinfowler.com", desc: "Fitness functions como mecanismo de proteção de decisões arquiteturais ao longo do tempo." }
    ],
    videos: [
      { title: "InfoQ — Evolutionary Architecture", url: "https://www.infoq.com/architecture-design", desc: "Palestras de Ford e Parsons sobre fitness functions e arquitetura evolutiva na prática." }
    ],
    books: [
      { title: "Building Evolutionary Architectures", author: "Ford, Parsons & Kua", url: "https://www.amazon.com/Building-Evolutionary-Architectures-Support-Constant/dp/1491986360", desc: "O livro canônico — fitness functions, guided change e o que torna uma arquitetura evolutiva.", badge: "⭐ Canônico" }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Evolutionary architecture, fitness functions e design para mudança contínua." },
      { title: "InfoQ Architecture", url: "https://www.infoq.com/architecture-design", desc: "Casos reais de fitness functions em pipelines de CI de grandes empresas tech." }
    ]
  },

  "ADRs": {
    phase: "Layer 02 · Evolutionary Architecture",
    description: "Architecture Decision Records são documentos leves que capturam o contexto, as alternativas e o raciocínio por trás de cada decisão técnica. Memória institucional que sobrevive a turnover de equipe.",
    focus: ["Estrutura do ADR", "When to write", "ADR como living document", "Context & Consequences", "Lightweight documentation"],
    hot2026: false,
    links: [
      { title: "adr.github.io — ADR Tools", url: "https://adr.github.io", desc: "Ferramentas e templates para criar e manter ADRs no repositório — o ponto de partida prático." },
      { title: "Michael Nygard — Documenting Architecture Decisions", url: "https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions", desc: "O artigo original que definiu o formato ADR — leitura obrigatória antes de qualquer implementação." },
      { title: "Martin Fowler — ADR", url: "https://martinfowler.com/bliki/ArchitecturalDecisionRecord.html", desc: "A perspectiva canônica sobre ADRs, quando usar e como integrá-los ao workflow da equipe." }
    ],
    videos: [
      { title: "InfoQ — Architecture Documentation", url: "https://www.infoq.com/architecture-design", desc: "Palestras sobre documentação arquitetural leve e ADRs em equipes de engenharia." }
    ],
    books: [
      { title: "Building Evolutionary Architectures", author: "Ford, Parsons & Kua", url: "https://www.amazon.com/Building-Evolutionary-Architectures-Support-Constant/dp/1491986360", desc: "O contexto de por que ADRs existem — decisões arquiteturais precisam de memória para evoluir bem.", badge: "⭐ Contexto Essencial" },
      { title: "The Staff Engineer's Path", author: "Tanya Reilly", url: "https://www.amazon.com/Staff-Engineers-Path-Individual-Contributors/dp/1098118731", desc: "ADRs como ferramenta de liderança técnica — como documentar decisões para influenciar sem autoridade." }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Architectural Decision Records — formato, processo e como integrá-los ao ciclo de desenvolvimento." },
      { title: "Spotify Engineering", url: "https://engineering.atspotify.com", desc: "Como o Spotify usa ADRs para manter consistência arquitetural em centenas de equipes." }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     LAYER 03 · DATA-INTENSIVE SYSTEMS
  ═══════════════════════════════════════════════════════════════ */

  "Storage Engines (LSM / B-Tree)": {
    phase: "Layer 03 · Data-Intensive Systems",
    description: "Toda escolha de banco de dados é uma escolha de storage engine. B-Trees otimizam leituras; LSM-trees otimizam escritas. Entender o trade-off de write amplification vs read amplification define qual banco usar.",
    focus: ["B-Tree vs LSM-tree", "Write amplification", "Compaction", "SSTables", "Bloom filters", "WAL"],
    hot2026: false,
    links: [
      { title: "CMU Database Group — Storage Engines", url: "https://www.youtube.com/@CMUDatabaseGroup", desc: "Aulas completas sobre B-Trees, LSM-trees, buffer pool e storage engine internals — gratuitas." },
      { title: "RocksDB Wiki", url: "https://github.com/facebook/rocksdb/wiki", desc: "A documentação da RocksDB (LSM-tree do Facebook) — detalhes reais de compaction, memtables e SSTs." }
    ],
    videos: [
      { title: "CMU Database Group YouTube", url: "https://www.youtube.com/@CMUDatabaseGroup", desc: "O melhor recurso gratuito sobre storage engines — Andy Pavlo explica B-Tree e LSM com profundidade." },
      { title: "ByteByteGo — Database Internals", url: "https://www.youtube.com/@ByteByteGo", desc: "Storage engines, indexing e trade-offs de banco de dados visualizados para engineers." }
    ],
    books: [
      { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", desc: "Capítulo 3 — o melhor tratamento de storage engines disponível fora de papers acadêmicos.", badge: "⭐ Melhor do mundo" },
      { title: "Database Internals", author: "Alex Petrov", url: "https://www.amazon.com/Database-Internals-Deep-Distributed-Systems/dp/1492040347", desc: "O livro que vai fundo em B-Trees, LSM-trees, WAL e compaction com rigor técnico." }
    ],
    blogs: [
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Otimizações de storage e I/O em sistemas de altíssimo throughput." },
      { title: "PlanetScale Engineering", url: "https://planetscale.com/blog", desc: "Storage engine internals do MySQL (InnoDB) em produção — análises profundas e práticas." }
    ]
  },

  "Replication": {
    phase: "Layer 03 · Data-Intensive Systems",
    description: "Replicação distribui dados entre nós para durabilidade, disponibilidade e performance de leitura. Single-leader, multi-leader e leaderless têm trade-offs radicalmente diferentes de consistência e conflito.",
    focus: ["Single-leader replication", "Multi-leader conflicts", "Leaderless (Dynamo-style)", "Replication lag", "Read-your-writes"],
    hot2026: false,
    links: [
      { title: "Designing Data-Intensive Applications", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", desc: "Capítulo 5 — o tratamento mais completo de replicação disponível em livro." },
      { title: "CMU Database Group", url: "https://www.youtube.com/@CMUDatabaseGroup", desc: "Aulas sobre replicação, log shipping e distributed databases — gratuitas e excelentes." }
    ],
    videos: [
      { title: "CMU Database Group YouTube", url: "https://www.youtube.com/@CMUDatabaseGroup", desc: "Replication, consensus e distributed database internals — o curso mais completo disponível." },
      { title: "ByteByteGo — Replication Strategies", url: "https://www.youtube.com/@ByteByteGo", desc: "Single-leader, multi-leader e leaderless replication visualizados com trade-offs claros." }
    ],
    books: [
      { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", desc: "O livro canônico — capítulo 5 cobre replicação com profundidade que nenhum outro material iguala.", badge: "⭐ Melhor do mundo" },
      { title: "Database Internals", author: "Alex Petrov", url: "https://www.amazon.com/Database-Internals-Deep-Distributed-Systems/dp/1492040347", desc: "Replication protocols, leader election e distributed consensus em nível de implementação." }
    ],
    blogs: [
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "Replication em DynamoDB, Aurora e RDS — trade-offs reais de sistemas em produção." },
      { title: "Stripe Engineering Blog", url: "https://stripe.com/blog/engineering", desc: "Replicação de banco de dados em sistemas de pagamento críticos — reliability acima de tudo." }
    ]
  },

  "Partitioning": {
    phase: "Layer 03 · Data-Intensive Systems",
    description: "Partitioning (sharding) divide dados entre múltiplos nós para escalar além de uma única máquina. A escolha da chave de partição é a decisão mais crítica — ela define hotspots, acesso e rebalanceamento.",
    focus: ["Hash partitioning", "Range partitioning", "Hotspot keys", "Consistent hashing", "Rebalancing"],
    hot2026: false,
    links: [
      { title: "Consistent Hashing Explained", url: "https://www.youtube.com/@ByteByteGo", desc: "Consistent hashing visualizado — o algoritmo fundamental para partitioning sem rebalanceamento total." },
      { title: "CMU Database Group", url: "https://www.youtube.com/@CMUDatabaseGroup", desc: "Distributed databases, sharding strategies e rebalancing — aulas gratuitas." }
    ],
    videos: [
      { title: "ByteByteGo — Consistent Hashing & Sharding", url: "https://www.youtube.com/@ByteByteGo", desc: "Hash partitioning, consistent hashing e sharding strategies visualizados com clareza." },
      { title: "CMU 15-445 — Distributed Databases", url: "https://www.youtube.com/@CMUDatabaseGroup", desc: "Partitioning, sharding e distributed query execution — nível universitário, gratuito." }
    ],
    books: [
      { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", desc: "Capítulo 6 — partitioning com hash, range, secondary indexes e rebalancing em profundidade.", badge: "⭐ Melhor do mundo" }
    ],
    blogs: [
      { title: "Uber Engineering", url: "https://www.uber.com/blog/engineering", desc: "Sharding em MySQL e Cassandra para escalar sistemas de geolocalização em tempo real." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Distributed data storage e consistent hashing em sistemas de edge global." }
    ]
  },

  "Transaction Isolation": {
    phase: "Layer 03 · Data-Intensive Systems",
    description: "Isolamento é o I do ACID, e é o mais traído. Read committed, repeatable read, serializable — cada nível esconde anomalias diferentes. Isolamento fraco quebra silenciosamente em produção.",
    focus: ["Read Committed", "Snapshot Isolation", "Serializability", "Dirty reads", "Phantom reads", "Write skew"],
    hot2026: false,
    links: [
      { title: "CMU 15-445 — Concurrency Control", url: "https://www.youtube.com/@CMUDatabaseGroup", desc: "O melhor curso gratuito sobre isolation levels, MVCC, 2PL e timestamp ordering." },
      { title: "Hermitage — Testing Transaction Isolation", url: "https://github.com/ept/hermitage", desc: "Repositório de Martin Kleppmann testando anomalias em bancos reais — imprescindível para comparação." }
    ],
    videos: [
      { title: "CMU Database Group — Concurrency Control", url: "https://www.youtube.com/@CMUDatabaseGroup", desc: "MVCC, 2PL, isolation levels e anomalias — Andy Pavlo explica com precisão ímpar." },
      { title: "ByteByteGo — Database Transactions", url: "https://www.youtube.com/@ByteByteGo", desc: "ACID, isolation levels e como bancos implementam transações visualizados." }
    ],
    books: [
      { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", desc: "Capítulo 7 — o melhor tratamento de isolation, MVCC e anomalias disponível fora de papers.", badge: "⭐ Melhor do mundo" }
    ],
    blogs: [
      { title: "PlanetScale Engineering", url: "https://planetscale.com/blog", desc: "Transaction isolation em MySQL/InnoDB — análises técnicas profundas de comportamento real." },
      { title: "Stripe Engineering Blog", url: "https://stripe.com/blog/engineering", desc: "Como Stripe lida com isolation e idempotência em operações financeiras críticas." }
    ]
  },

  "Stream Processing": {
    phase: "Layer 03 · Data-Intensive Systems",
    description: "Stream processing trata dados como eventos contínuos em vez de batches. Kafka, Flink e Spark Streaming unificam a visão de batch e stream — o log de eventos é a fonte de verdade comum.",
    focus: ["Kafka internals", "Exactly-once semantics", "Windowing", "Stateful processing", "Back-pressure"],
    hot2026: true,
    links: [
      { title: "Confluent — Kafka Documentation", url: "https://docs.confluent.io", desc: "Documentação oficial e aprofundada do Apache Kafka — partitions, consumer groups, Streams API." },
      { title: "Apache Flink Documentation", url: "https://flink.apache.org/docs", desc: "Documentação do Flink — o engine de streaming com semântica exactly-once mais robusto." },
      { title: "Martin Fowler — Event Streaming", url: "https://martinfowler.com", desc: "Artigos sobre o papel do event streaming na arquitetura moderna — perspectiva estratégica." }
    ],
    videos: [
      { title: "ByteByteGo — Kafka Architecture", url: "https://www.youtube.com/@ByteByteGo", desc: "Kafka internals, partitions, consumer groups e stream processing visualizados." },
      { title: "Confluent YouTube", url: "https://www.youtube.com/@confluent", desc: "Talks técnicas sobre Kafka, Kafka Streams e stream processing em produção." }
    ],
    books: [
      { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", desc: "Capítulo 11 — stream processing, Kafka, exactly-once e o log como fonte de verdade universal.", badge: "⭐ Melhor do mundo" }
    ],
    blogs: [
      { title: "Confluent Engineering Blog", url: "https://www.confluent.io/blog", desc: "Kafka internals, stream processing patterns e casos de uso em produção." },
      { title: "Uber Engineering", url: "https://www.uber.com/blog/engineering", desc: "Stream processing com Kafka em sistemas de dispatch e analytics em tempo real." }
    ]
  },

  "Log as Source of Truth": {
    phase: "Layer 03 · Data-Intensive Systems",
    description: "O log de eventos é a espinha dorsal dos sistemas modernos — imutável, ordenado e a fonte de verdade única. Event sourcing, CQRS e Kafka são especializações do mesmo princípio: o log comanda.",
    focus: ["Event sourcing", "Append-only log", "Log compaction", "Derived data", "Dual-write problem"],
    hot2026: false,
    links: [
      { title: "Martin Fowler — Event Sourcing", url: "https://martinfowler.com/eaaDev/EventSourcing.html", desc: "A definição canônica de event sourcing e como o log se torna a fonte de verdade do sistema." },
      { title: "Jay Kreps — The Log", url: "https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying", desc: "O artigo do criador do Kafka que unifica stream processing, replication e ETL sob um único princípio." }
    ],
    videos: [
      { title: "ByteByteGo — Event Sourcing", url: "https://www.youtube.com/@ByteByteGo", desc: "Event sourcing, CQRS e log-based architectures visualizados com trade-offs claros." },
      { title: "CodeOpinion — Event Sourcing", url: "https://www.youtube.com/@CodeOpinion", desc: "Event sourcing sem hype — quando usar, quando evitar e armadilhas reais de produção." }
    ],
    books: [
      { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", desc: "Capítulo 11-12 — o log como princípio unificador de batch, stream e replication.", badge: "⭐ Melhor do mundo" }
    ],
    blogs: [
      { title: "LinkedIn Engineering", url: "https://engineering.linkedin.com", desc: "Jay Kreps — 'The Log': o artigo que define o log como abstração fundamental de dados distribuídos." },
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Event Sourcing, CQRS e o papel do log em arquiteturas orientadas a eventos." }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     LAYER 04 · DISTRIBUTED SYSTEMS (COMPLEMENTO)
  ═══════════════════════════════════════════════════════════════ */

  "Idempotency": {
    phase: "Layer 04 · Distributed Systems",
    description: "Em sistemas distribuídos, exactly-once delivery não existe — projete para at-least-once com idempotência. Uma operação idempotente pode ser executada múltiplas vezes com o mesmo efeito que uma só.",
    focus: ["Idempotency keys", "Outbox pattern", "Deduplication", "Safe retries", "At-least-once delivery"],
    hot2026: false,
    links: [
      { title: "Stripe — Idempotency Keys", url: "https://stripe.com/blog/idempotency", desc: "Como a Stripe implementa idempotência em pagamentos — o padrão da indústria para operações críticas." },
      { title: "ByteByteGo — Idempotent APIs", url: "https://www.youtube.com/@ByteByteGo", desc: "Idempotency keys, deduplication e padrões de retry em sistemas distribuídos visualizados." }
    ],
    videos: [
      { title: "ByteByteGo — Distributed Systems Patterns", url: "https://www.youtube.com/@ByteByteGo", desc: "Idempotência, outbox pattern e safe retries em sistemas distribuídos reais." },
      { title: "CodeOpinion — Idempotency", url: "https://www.youtube.com/@CodeOpinion", desc: "Implementando idempotência no mundo real — sem over-engineering." }
    ],
    books: [
      { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", desc: "O contexto fundamental: exactly-once não existe — idempotência é a resposta correta.", badge: "⭐ Contexto Essencial" }
    ],
    blogs: [
      { title: "Stripe Engineering Blog", url: "https://stripe.com/blog/engineering", desc: "Idempotency keys e retry logic em sistemas de pagamento — o padrão que a indústria segue." },
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "Idempotência em APIs e sistemas de filas distribuídas — guias práticos com AWS." }
    ]
  },

  "Formal Methods (TLA+)": {
    phase: "Layer 04 · Distributed Systems",
    description: "TLA+ é uma linguagem formal para especificar e verificar sistemas — antes de escrever código. A AWS usa TLA+ para verificar DynamoDB, S3 e outros. Specs TLA+ encontram bugs que testes não conseguem.",
    focus: ["TLA+ specs", "Model checking", "Invariants & properties", "AWS TLA+ use cases", "PlusCal"],
    hot2026: false,
    links: [
      { title: "Learn TLA+ (Free)", url: "https://learntla.com", desc: "O melhor recurso gratuito para aprender TLA+ — do básico a specs de sistemas distribuídos reais." },
      { title: "AWS — How Amazon Uses TLA+", url: "https://lamport.azurewebsites.net/tla/amazon.html", desc: "O paper da AWS sobre como TLA+ encontrou bugs críticos em DynamoDB, S3 e outros serviços." },
      { title: "Leslie Lamport — TLA+", url: "https://lamport.azurewebsites.net/tla/tla.html", desc: "O site oficial do criador do TLA+ — papers, tutoriais e a ferramenta TLC model checker." }
    ],
    videos: [
      { title: "InfoQ — TLA+ in Practice", url: "https://www.infoq.com", desc: "Palestras sobre uso de TLA+ em produção em empresas como AWS, Microsoft e Elastic." }
    ],
    books: [
      { title: "Practical TLA+", author: "Hillel Wayne", url: "https://www.amazon.com/Practical-TLA-Planning-Driven-Development/dp/1484238281", desc: "O livro mais acessível sobre TLA+ — com exemplos práticos de sistemas distribuídos reais.", badge: "⭐ Mais Acessível" },
      { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", desc: "O contexto de por que specs formais existem — falhas em sistemas distribuídos que testes não encontram." }
    ],
    blogs: [
      { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture", desc: "Como a AWS usa TLA+ para verificar sistemas críticos — casos reais com DynamoDB e S3." },
      { title: "Hillel Wayne Blog", url: "https://www.hillelwayne.com", desc: "Artigos aprofundados sobre TLA+, formal methods e sua aplicação em engenharia de software." }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     LAYER 05 · RELIABILITY ENGINEERING (COMPLEMENTO)
  ═══════════════════════════════════════════════════════════════ */

  "SLI / SLO / Error Budget": {
    phase: "Layer 05 · Reliability Engineering",
    description: "SLI é o que você mede, SLO é a meta, Error Budget é quanto você pode falhar. Este framework transforma confiabilidade em número — e número permite decisões racionais sobre quando lançar e quando frear.",
    focus: ["Definir SLIs corretos", "SLO como contrato interno", "Error budget policy", "Burn rate alerts", "SLA vs SLO"],
    hot2026: false,
    links: [
      { title: "SRE Book — Service Level Objectives (Free)", url: "https://sre.google/sre-book/service-level-objectives", desc: "O capítulo canônico do Google SRE Book sobre SLIs, SLOs e Error Budgets — gratuito online." },
      { title: "Google SRE Workbook — SLO Engineering", url: "https://sre.google/workbook/implementing-slos", desc: "Guia prático de implementação de SLOs — como escolher SLIs, definir metas e criar políticas." }
    ],
    videos: [
      { title: "ByteByteGo — SLI SLO SLA", url: "https://www.youtube.com/@ByteByteGo", desc: "SLI, SLO e SLA explicados com clareza — diferenças, relações e como calcular error budget." },
      { title: "CNCF — SRE Practices", url: "https://www.youtube.com/@cncf", desc: "Palestras sobre SLOs, error budgets e práticas SRE em produção em grandes empresas." }
    ],
    books: [
      { title: "Site Reliability Engineering", author: "Google SRE Team", url: "https://sre.google/sre-book/table-of-contents", desc: "O livro original — gratuito online. A base de tudo sobre SLIs, SLOs e Error Budgets.", badge: "⭐ Gratuito & Canônico" },
      { title: "The SRE Workbook", author: "Google SRE Team", url: "https://sre.google/workbook/table-of-contents", desc: "A versão prática do SRE Book — como implementar SLOs na sua organização." }
    ],
    blogs: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "SLOs em sistemas de streaming global — como a Netflix define e monitora confiabilidade." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "SLOs e error budgets em sistemas de missão crítica de escala global." }
    ]
  },

  "Incident Response": {
    phase: "Layer 05 · Reliability Engineering",
    description: "Incident response é a engenharia da resposta ao caos. Postmortems sem culpa, on-call eficiente e runbooks claros são o que separa organizações que aprendem com falhas das que apenas sobrevivem a elas.",
    focus: ["Postmortem sem culpa", "Incident commander", "Runbooks", "On-call rotations", "MTTR vs MTBF"],
    hot2026: false,
    links: [
      { title: "Google SRE Book — Being On-Call (Free)", url: "https://sre.google/sre-book/being-on-call", desc: "O capítulo canônico sobre on-call — como estruturar rotação saudável e resposta a incidentes." },
      { title: "PagerDuty — Incident Response Guide", url: "https://response.pagerduty.com", desc: "Guia completo de incident response — roles, processos, postmortems e comunicação." }
    ],
    videos: [
      { title: "CNCF — Incident Management", url: "https://www.youtube.com/@cncf", desc: "Palestras sobre incident response, postmortems e cultura de confiabilidade." },
      { title: "ByteByteGo — SRE Practices", url: "https://www.youtube.com/@ByteByteGo", desc: "On-call, alerting e incident management em sistemas de alta disponibilidade." }
    ],
    books: [
      { title: "Site Reliability Engineering", author: "Google SRE Team", url: "https://sre.google/sre-book/table-of-contents", desc: "Capítulos sobre on-call, postmortems e managing incidents — gratuito e definitivo.", badge: "⭐ Gratuito & Canônico" },
      { title: "Seeking SRE", author: "David N. Blank-Edelman", url: "https://www.amazon.com/Seeking-SRE-Conversations-Running-Production/dp/1491978864", desc: "Como diferentes organizações implementam SRE e incident response na prática." }
    ],
    blogs: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Como a Netflix conduz postmortems e aprende com falhas em escala — cultura de blameless SRE." },
      { title: "Stripe Engineering Blog", url: "https://stripe.com/blog/engineering", desc: "Incident response em sistemas financeiros críticos — onde a confiabilidade é não-negociável." }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     LAYER 06 · SECURITY ENGINEERING
  ═══════════════════════════════════════════════════════════════ */

  "Threat Modeling (STRIDE)": {
    phase: "Layer 06 · Security Engineering",
    description: "Threat modeling é o processo de identificar ameaças antes de escrever código. STRIDE classifica ameaças em 6 categorias. Feito no design review, poupa 10x o esforço de correção em produção.",
    focus: ["STRIDE framework", "Attack surface", "Data flow diagrams", "Mitigações por categoria", "PASTA methodology"],
    hot2026: false,
    links: [
      { title: "OWASP Threat Modeling", url: "https://owasp.org/www-community/Threat_Modeling", desc: "O guia OWASP de threat modeling — metodologias, ferramentas e como integrar ao ciclo de desenvolvimento." },
      { title: "Microsoft Threat Modeling Tool", url: "https://www.microsoft.com/en-us/securityengineering/sdl/threatmodeling", desc: "Ferramenta gratuita da Microsoft para criar diagramas de fluxo de dados e identificar ameaças STRIDE." }
    ],
    videos: [
      { title: "Adam Shostack — Threat Modeling", url: "https://www.youtube.com/results?search_query=adam+shostack+threat+modeling", desc: "O autor do livro canônico explicando o processo de threat modeling com profundidade prática." }
    ],
    books: [
      { title: "Threat Modeling: Designing for Security", author: "Adam Shostack", url: "https://www.amazon.com/Threat-Modeling-Designing-Adam-Shostack/dp/1118809998", desc: "O livro canônico de threat modeling — o único que você precisa ler para dominar a disciplina.", badge: "⭐ Canônico" },
      { title: "Building Secure & Reliable Systems", author: "Google", url: "https://sre.google/books/building-secure-reliable-systems", desc: "Como a Google integra segurança e confiabilidade — disponível gratuitamente online." }
    ],
    blogs: [
      { title: "OWASP Blog", url: "https://owasp.org/blog", desc: "Threat modeling, OWASP Top 10 e práticas de segurança aplicadas ao desenvolvimento." },
      { title: "Stripe Engineering Blog", url: "https://stripe.com/blog/engineering", desc: "Como Stripe integra threat modeling em seu processo de design de sistemas financeiros." }
    ]
  },

  "Zero Trust": {
    phase: "Layer 06 · Security Engineering",
    description: "Zero Trust elimina o conceito de perímetro de rede seguro. Nunca confie, sempre verifique — cada requisição é autenticada, autorizada e criptografada independentemente de origem. Identidade substitui localização.",
    focus: ["Never trust, always verify", "Microsegmentation", "Identity as perimeter", "mTLS", "BeyondCorp"],
    hot2026: true,
    links: [
      { title: "Google BeyondCorp", url: "https://cloud.google.com/beyondcorp", desc: "A implementação original de Zero Trust do Google — o modelo que definiu a arquitetura moderna." },
      { title: "NIST Zero Trust Architecture", url: "https://www.nist.gov/publications/zero-trust-architecture", desc: "O documento oficial do NIST definindo os princípios e componentes de Zero Trust." },
      { title: "Cloudflare Zero Trust", url: "https://www.cloudflare.com/zero-trust", desc: "Implementação prática de Zero Trust com ZTNA, CASB e Secure Web Gateway." }
    ],
    videos: [
      { title: "ByteByteGo — Zero Trust Architecture", url: "https://www.youtube.com/@ByteByteGo", desc: "Zero Trust explicado visualmente — princípios, componentes e implementação prática." }
    ],
    books: [
      { title: "Building Secure & Reliable Systems", author: "Google", url: "https://sre.google/books/building-secure-reliable-systems", desc: "Como Google implementa Zero Trust em escala — disponível gratuitamente.", badge: "⭐ Gratuito & Essencial" },
      { title: "Zero Trust Networks", author: "Gilman & Barth", url: "https://www.amazon.com/Zero-Trust-Networks-Building-Untrusted/dp/1492096598", desc: "O livro prático de Zero Trust — fundamentos, implementação e migração de redes tradicionais." }
    ],
    blogs: [
      { title: "Google BeyondCorp Blog", url: "https://cloud.google.com/beyondcorp", desc: "Papers e artigos do Google sobre como BeyondCorp foi construído e evoluiu." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Zero Trust em escala de internet — implementações reais e lições aprendidas." }
    ]
  },

  "Supply Chain (SLSA / SBOM)": {
    phase: "Layer 06 · Security Engineering",
    description: "A cadeia de dependências é superfície de ataque de primeira classe. SLSA define níveis de maturidade de proveniência de artefatos. SBOM cria inventário de todas as dependências — visibilidade total antes do ataque.",
    focus: ["SLSA levels", "SBOM generation", "Sigstore", "Dependency scanning", "Provenance attestation"],
    hot2026: true,
    links: [
      { title: "SLSA Framework", url: "https://slsa.dev", desc: "Supply-chain Levels for Software Artifacts — framework oficial para proveniência e integridade de builds." },
      { title: "OpenSSF Best Practices", url: "https://openssf.org", desc: "Open Source Security Foundation — guias e ferramentas para supply chain security em projetos open source." },
      { title: "Sigstore", url: "https://www.sigstore.dev", desc: "Assinatura e verificação de artefatos de software — o padrão emergente para supply chain security." }
    ],
    videos: [
      { title: "CNCF — Supply Chain Security", url: "https://www.youtube.com/@cncf", desc: "Palestras sobre SLSA, SBOM e supply chain security em sistemas cloud-native." }
    ],
    books: [
      { title: "Threat Modeling: Designing for Security", author: "Adam Shostack", url: "https://www.amazon.com/Threat-Modeling-Designing-Adam-Shostack/dp/1118809998", desc: "Supply chain como superfície de ataque — threat modeling aplicado a dependências.", badge: "⭐ Contexto Essencial" }
    ],
    blogs: [
      { title: "OpenSSF Blog", url: "https://openssf.org/blog", desc: "Supply chain security, SBOM, SLSA e práticas de segurança para projetos open source." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Como Cloudflare protege sua supply chain de software em sistemas de missão crítica." }
    ]
  },

  "Secrets Management": {
    phase: "Layer 06 · Security Engineering",
    description: "Segredos em código-fonte ou variáveis de ambiente são brechas esperando ser exploradas. Secrets management centraliza, rotaciona e audita o acesso — com HashiCorp Vault, AWS Secrets Manager ou equivalentes.",
    focus: ["HashiCorp Vault", "AWS Secrets Manager", "Secret rotation", "Least privilege", "Audit logging"],
    hot2026: false,
    links: [
      { title: "HashiCorp Vault Documentation", url: "https://www.vaultproject.io/docs", desc: "A documentação oficial do Vault — o padrão da indústria para secrets management." },
      { title: "AWS Secrets Manager", url: "https://docs.aws.amazon.com/secretsmanager", desc: "Secrets management gerenciado na AWS — rotação automática, integração com IAM." },
      { title: "OWASP Secrets Management", url: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html", desc: "Guia OWASP de boas práticas para gerenciamento de segredos em aplicações." }
    ],
    videos: [
      { title: "ByteByteGo — Secrets Management", url: "https://www.youtube.com/@ByteByteGo", desc: "Patterns de secrets management, rotação e integração em pipelines CI/CD." }
    ],
    books: [
      { title: "Building Secure & Reliable Systems", author: "Google", url: "https://sre.google/books/building-secure-reliable-systems", desc: "Como Google gerencia segredos e credenciais em sistemas de missão crítica.", badge: "⭐ Gratuito" }
    ],
    blogs: [
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Secrets management e rotação de credenciais em centenas de microserviços." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Gerenciamento de segredos em sistemas de borda global — práticas reais de segurança." }
    ]
  },

  "Least Privilege": {
    phase: "Layer 06 · Security Engineering",
    description: "Cada processo, serviço e usuário deve ter apenas as permissões necessárias para sua função — nada mais. Blast radius contido é a defesa mais eficiente contra comprometimento.",
    focus: ["IAM roles", "RBAC vs ABAC", "Blast radius", "Service accounts", "Just-in-time access"],
    hot2026: false,
    links: [
      { title: "AWS IAM Best Practices", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html", desc: "Boas práticas de IAM e least privilege na AWS — o guia prático oficial." },
      { title: "OWASP Access Control Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Access_Control_Cheat_Sheet.html", desc: "Guia OWASP de controle de acesso — RBAC, ABAC e implementação de least privilege." }
    ],
    videos: [
      { title: "ByteByteGo — IAM & Security", url: "https://www.youtube.com/@ByteByteGo", desc: "IAM, RBAC e least privilege em cloud environments — patterns e antipadrões." }
    ],
    books: [
      { title: "Building Secure & Reliable Systems", author: "Google", url: "https://sre.google/books/building-secure-reliable-systems", desc: "Least privilege como princípio de design de sistemas seguros e confiáveis.", badge: "⭐ Gratuito" },
      { title: "Threat Modeling: Designing for Security", author: "Adam Shostack", url: "https://www.amazon.com/Threat-Modeling-Designing-Adam-Shostack/dp/1118809998", desc: "Least privilege como controle de mitigação no modelo STRIDE." }
    ],
    blogs: [
      { title: "AWS Security Blog", url: "https://aws.amazon.com/blogs/security", desc: "IAM best practices, least privilege e controle de acesso em sistemas cloud-native." },
      { title: "Cloudflare Blog", url: "https://blog.cloudflare.com", desc: "Zero Trust e least privilege em sistemas de acesso global." }
    ]
  },

  "Secure by Design": {
    phase: "Layer 06 · Security Engineering",
    description: "Segurança como propriedade de design, não como camada adicionada depois. Sistemas seguros por padrão: fail secure, deny by default, minimize attack surface, defense in depth.",
    focus: ["Defense in depth", "Fail secure", "Deny by default", "Attack surface minimization", "Security invariants"],
    hot2026: false,
    links: [
      { title: "OWASP Secure Design Principles", url: "https://owasp.org/www-project-developer-guide/draft/design/web_app_checklist/secure-design-principles", desc: "Princípios de design seguro do OWASP — a referência prática para integrar segurança desde o início." },
      { title: "Google — Building Secure Systems", url: "https://sre.google/books/building-secure-reliable-systems", desc: "Como Google pensa em segurança como propriedade de design de sistemas — livro gratuito." }
    ],
    videos: [
      { title: "InfoQ — Security Architecture", url: "https://www.infoq.com/security", desc: "Palestras sobre secure-by-design, threat modeling e arquitetura defensiva." }
    ],
    books: [
      { title: "Building Secure & Reliable Systems", author: "Google", url: "https://sre.google/books/building-secure-reliable-systems", desc: "O melhor recurso gratuito sobre segurança como propriedade de design de sistemas.", badge: "⭐ Gratuito & Essencial" },
      { title: "Threat Modeling: Designing for Security", author: "Adam Shostack", url: "https://www.amazon.com/Threat-Modeling-Designing-Adam-Shostack/dp/1118809998", desc: "Como projetar com segurança desde o início usando threat modeling." }
    ],
    blogs: [
      { title: "Stripe Engineering Blog", url: "https://stripe.com/blog/engineering", desc: "Secure by design em sistemas financeiros — onde segurança não é opcional." },
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Segurança integrada ao design de sistemas de streaming em escala global." }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     LAYER 07 · SOCIOTECHNICAL (COMPLEMENTO)
  ═══════════════════════════════════════════════════════════════ */

  "Conway's Law": {
    phase: "Layer 07 · Sociotechnical Systems",
    description: "Organizações projetam sistemas que espelham sua estrutura de comunicação. A Lei de Conway não é uma metáfora — é uma força gravitacional. Inverse Conway Maneuver: projete o time desejado e ganhe a arquitetura.",
    focus: ["Inverse Conway Maneuver", "Team coupling", "Communication overhead", "Bounded teams", "Organizational design"],
    hot2026: false,
    links: [
      { title: "Martin Fowler — Conway's Law", url: "https://martinfowler.com/bliki/ConwaysLaw.html", desc: "A análise canônica da Lei de Conway e suas implicações para arquitetura de sistemas modernos." },
      { title: "Team Topologies — Concepts", url: "https://teamtopologies.com/key-concepts", desc: "Como Team Topologies usa a Lei de Conway como ferramenta de design organizacional." }
    ],
    videos: [
      { title: "ByteByteGo — Conway's Law", url: "https://www.youtube.com/@ByteByteGo", desc: "Conway's Law visualizado — como estrutura de equipe e arquitetura se espelham." }
    ],
    books: [
      { title: "Team Topologies", author: "Skelton & Pais", url: "https://www.amazon.com/Team-Topologies-Organizing-Business-Technology/dp/1942788819", desc: "O livro que operacionaliza a Lei de Conway em design de equipes e arquitetura.", badge: "⭐ Essencial" },
      { title: "Accelerate", author: "Forsgren, Humble & Kim", url: "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339", desc: "Dados empíricos sobre como estrutura organizacional impacta performance de entrega." }
    ],
    blogs: [
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Conway's Law, Inverse Conway Maneuver e o impacto da organização na arquitetura." },
      { title: "Spotify Engineering", url: "https://engineering.atspotify.com", desc: "O modelo Spotify de Squads e Tribes — Conway's Law operacionalizado em escala." }
    ]
  },

  "DORA Metrics": {
    phase: "Layer 07 · Sociotechnical Systems",
    description: "As 4 métricas DORA medem performance de entrega de software com dados: Deployment Frequency, Lead Time, Change Failure Rate e MTTR. São as únicas métricas com evidência científica de correlação com sucesso de negócio.",
    focus: ["Deployment Frequency", "Lead Time for Changes", "Change Failure Rate", "MTTR", "Elite performers"],
    hot2026: false,
    links: [
      { title: "DORA — State of DevOps Report", url: "https://dora.dev", desc: "O relatório anual original — dados de milhares de organizações e os 4 key metrics." },
      { title: "Google Cloud — DORA Metrics", url: "https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance", desc: "Como implementar as 4 métricas DORA e o projeto Four Keys para medição automatizada." }
    ],
    videos: [
      { title: "ByteByteGo — DevOps Metrics", url: "https://www.youtube.com/@ByteByteGo", desc: "DORA metrics explicadas com contexto de sistema — o que medir e como interpretar." }
    ],
    books: [
      { title: "Accelerate", author: "Forsgren, Humble & Kim", url: "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339", desc: "O livro que definiu as métricas DORA com base em pesquisa científica rigorosa.", badge: "⭐ Canônico" },
      { title: "The DevOps Handbook", author: "Kim, Humble, Debois & Willis", url: "https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002", desc: "Como implementar práticas que movem as métricas DORA na direção certa." }
    ],
    blogs: [
      { title: "Google DORA Blog", url: "https://dora.dev/publications", desc: "Publicações anuais com dados reais sobre performance de times de engenharia global." },
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com", desc: "Como a Netflix otimiza suas métricas de entrega — deployment frequency e MTTR em escala." }
    ]
  },

  "Technical Writing": {
    phase: "Layer 07 · Sociotechnical Systems",
    description: "Um documento bem escrito escala mais que qualquer reunião. Writing clarifies thinking — escrever força clareza que apresentações escondem. Staff engineers são reconhecidos pela qualidade de seus documentos, não apenas pelo código.",
    focus: ["Design docs", "RFC process", "Asynchronous communication", "Docs as code", "Writing for executives"],
    hot2026: false,
    links: [
      { title: "Google Developer Documentation Style Guide", url: "https://developers.google.com/style", desc: "O guia de escrita técnica do Google — o padrão da indústria para documentação de software." },
      { title: "The Documentation System (Diátaxis)", url: "https://diataxis.fr", desc: "Framework para estruturar documentação técnica em tutoriais, how-tos, referência e explicação." }
    ],
    videos: [
      { title: "Staff Engineer Talks — Writing for Impact", url: "https://www.youtube.com/@LeadingEng", desc: "Como Staff Engineers usam escrita técnica para influenciar decisões e alinhar organizações." }
    ],
    books: [
      { title: "The Staff Engineer's Path", author: "Tanya Reilly", url: "https://www.amazon.com/Staff-Engineers-Path-Individual-Contributors/dp/1098118731", desc: "Writing como ferramenta de liderança técnica — design docs, RFCs e comunicação assíncrona.", badge: "⭐ Essencial" },
      { title: "Staff Engineer", author: "Will Larson", url: "https://staffeng.com/book", desc: "Como Staff Engineers comunicam impacto através de escrita — estratégia e documentação." }
    ],
    blogs: [
      { title: "Lethain.com — Will Larson", url: "https://lethain.com", desc: "Artigos sobre technical writing, design docs e comunicação eficaz para engineers." },
      { title: "Martin Fowler's Bliki", url: "https://martinfowler.com", desc: "Writing sobre software — como criar documentação técnica que sobrevive ao tempo." }
    ]
  },

  /* ═══════════════════════════════════════════════════════════════
     LAYER 08 · TECHNICAL STRATEGY (COMPLEMENTO)
  ═══════════════════════════════════════════════════════════════ */

  "Wardley Mapping": {
    phase: "Layer 08 · Technical Strategy",
    description: "Wardley Maps visualizam o cenário competitivo de componentes de valor — da gênese à commodity. São o único framework visual de estratégia técnica que permite antecipar evolução de tecnologia e posicionar decisões de build/buy.",
    focus: ["Value chain", "Evolution axis", "Componentização", "Inertia", "Pioneer-Settler-Town Planner"],
    hot2026: false,
    links: [
      { title: "Wardley Maps (Free Online)", url: "https://learnwardleymapping.com", desc: "O recurso gratuito mais completo para aprender Wardley Mapping — criado pela comunidade." },
      { title: "Simon Wardley's Blog", url: "https://blog.gardeviance.org", desc: "O blog do criador dos Wardley Maps — estratégia, evolução tecnológica e exemplos práticos." },
      { title: "OnlineWardleyMaps.com", url: "https://onlinewardleymaps.com", desc: "Ferramenta gratuita online para criar e compartilhar Wardley Maps." }
    ],
    videos: [
      { title: "Simon Wardley — Mapping the Future", url: "https://www.youtube.com/results?search_query=simon+wardley+mapping", desc: "Palestras do criador explicando o framework e casos de uso reais em estratégia tecnológica." }
    ],
    books: [
      { title: "Wardley Maps", author: "Simon Wardley", url: "https://learnwardleymapping.com", desc: "O livro original — disponível gratuitamente online. O único recurso necessário para dominar o framework.", badge: "⭐ Gratuito & Original" },
      { title: "The Staff Engineer's Path", author: "Tanya Reilly", url: "https://www.amazon.com/Staff-Engineers-Path-Individual-Contributors/dp/1098118731", desc: "Como Staff Engineers usam Wardley Maps para comunicar estratégia técnica." }
    ],
    blogs: [
      { title: "Simon Wardley Blog", url: "https://blog.gardeviance.org", desc: "O blog original — estratégia tecnológica, evolução de componentes e uso real de Wardley Maps." },
      { title: "Lethain.com", url: "https://lethain.com", desc: "Wardley Maps na prática de engenharia — como usar para comunicar estratégia técnica." }
    ]
  },

  "Strategy Writing": {
    phase: "Layer 08 · Technical Strategy",
    description: "Estratégia técnica sem escrita clara não existe. Um strategy doc que o board entende é mais poderoso que qualquer apresentação. A habilidade rara: traduzir complexidade técnica em linguagem de decisão executiva.",
    focus: ["Strategy memos", "OKRs técnicos", "Executive communication", "Technical narrative", "RFC process"],
    hot2026: false,
    links: [
      { title: "Will Larson — Engineering Strategy", url: "https://lethain.com/engineering-strategy", desc: "O guia mais prático sobre como escrever estratégia de engenharia que funciona na realidade." },
      { title: "Amazon — Working Backwards (6-pager)", url: "https://www.amazon.jobs/en/principles", desc: "O formato de 6 páginas da Amazon para comunicação estratégica — substituiu PowerPoint internamente." }
    ],
    videos: [
      { title: "LeadingEng — Staff Engineer Talks", url: "https://www.youtube.com/@LeadingEng", desc: "Como Staff e Principal Engineers comunicam estratégia técnica para liderança executiva." }
    ],
    books: [
      { title: "The Staff Engineer's Path", author: "Tanya Reilly", url: "https://www.amazon.com/Staff-Engineers-Path-Individual-Contributors/dp/1098118731", desc: "Strategy writing como habilidade central do Staff Engineer — como escrever para influenciar.", badge: "⭐ Essencial" },
      { title: "Staff Engineer", author: "Will Larson", url: "https://staffeng.com/book", desc: "Estratégia técnica, comunicação e liderança sem autoridade formal — essencial para Principal+." }
    ],
    blogs: [
      { title: "Lethain.com — Will Larson", url: "https://lethain.com", desc: "Engineering strategy, strategy writing e comunicação técnica para líderes de engenharia." },
      { title: "Charity Majors Blog", url: "https://charity.wtf", desc: "Como engenheiros comunicam impacto técnico para audiências não-técnicas — prático e direto." }
    ]
  }

};
