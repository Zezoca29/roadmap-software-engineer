# Software Engineering Mastery Roadmap

> **Roadmap interativo** de evolução em Engenharia de Software — do código tradicional à engenharia de sistemas de elite. Com sistema de estudo integrado por tópico.

🔗 **Live:** [roadmap-software-engineer.vercel.app](https://roadmap-software-engineer.vercel.app)

---

## O que é

Um roadmap visual e interativo que mapeia a jornada de **Coder → Systems Thinker**, organizado em 6 fases de domínio com **33 tópicos técnicos**. Ao clicar em qualquer tópico, abre um painel de estudo com recursos curados: links, vídeos, livros e blogs.

O design segue uma estética HUD (Heads-Up Display) inspirada em interfaces de sistemas militares/sci-fi — partículas em movimento, animações de boot, tipografia técnica e temas em cyan/azul.

---

## As 6 Fases

### Phase 01 · Engineering Foundations

| Tópico | Hot 2026 | Foco principal |
|--------|----------|----------------|
| SOLID | | Acoplamento, boundaries, design para mudança |
| Coupling & Cohesion | | Acoplamento aferente/eferente, modularidade |
| Connascence | | Propagação de mudança, hotspots |
| Refactoring | | Hotspots, código legado, safe steps |
| Complexity Management | | Cognitive complexity, fitness functions |

### Phase 02 · Evolutionary Architecture

| Tópico | Hot 2026 | Foco principal |
|--------|----------|----------------|
| Clean Architecture | | Boundaries explícitos, inversão de dependência |
| Hexagonal Architecture | | Ports & Adapters, testabilidade sem infra |
| DDD | | Bounded contexts, ubiquitous language, aggregates |
| CQRS | | CQRS pragmático, read models otimizados |
| Event Driven | 🔥 | Kafka, event sourcing, choreography vs orchestration |
| Modular Monolith | | Evolutividade, migração gradual |

### Phase 03 · Distributed Systems

| Tópico | Hot 2026 | Foco principal |
|--------|----------|----------------|
| CAP Theorem | | CAP, PACELC, replication strategies, quorum |
| PACELC | | Latência vs consistência, DynamoDB, Cassandra |
| Eventual Consistency | | CRDTs, conflict resolution, read repair |
| Consensus | | Raft, Paxos, leader election |
| Distributed Transactions | | Saga, idempotência, outbox pattern |
| Saga Pattern | | Choreography vs orchestration, compensações |

### Phase 04 · Performance & Resilience

| Tópico | Hot 2026 | Foco principal |
|--------|----------|----------------|
| p99 Latency | | GC pauses, heap pressure, lock contention |
| Profiling | | Flame graphs, GC profiling, CPU vs I/O bound |
| OpenTelemetry | 🔥 | Traces, metrics, logs, OTLP protocol |
| Distributed Tracing | 🔥 | Context propagation, sampling, Jaeger/Tempo |
| Chaos Engineering | | GameDays, blast radius, steady state hypothesis |
| Circuit Breakers | | Retry storms, graceful degradation, fail-fast |

### Phase 05 · Sociotechnical Engineering

| Tópico | Hot 2026 | Foco principal |
|--------|----------|----------------|
| Conway's Law | | Inverse Conway Maneuver, team boundaries |
| Team Topologies | 🔥 | Stream-aligned, platform, enabling, cognitive load |
| Ownership | | Full-cycle developers, autonomia, team boundaries |
| Cognitive Load | 🔥 | Platform como redutor de carga, autonomia |
| Platform Engineering | 🔥 | IDP, golden paths, developer experience |

### Phase 06 · Engineering Economics

| Tópico | Hot 2026 | Foco principal |
|--------|----------|----------------|
| FinOps | 🔥 | Cloud cost governance, unit economics, showback |
| Cloud Economics | | Compute vs egress, reserved vs on-demand |
| ROI Técnico | | DORA metrics, dívida técnica quantificada |
| Build vs Buy | | Strategic vs commodity, TCO, vendor lock-in |
| Cost per Request | | Lambda vs container vs VM, caching, async |

---

## Sistema de Estudo Interativo

Cada tópico é **clicável**. Ao clicar, um painel abre com 4 categorias de recursos curados:

| Aba | Conteúdo |
|-----|----------|
| 🌐 **Links** | Sites, documentações e cursos oficiais |
| ▶ **Vídeos** | Canais do YouTube e palestras |
| 📖 **Livros** | Os melhores livros de cada área, com destaque para o mais recomendado |
| ✍ **Blogs** | Blogs de empresas de referência (Netflix, Uber, Cloudflare, Stripe, AWS) |

### Destaques visuais

- **🔥 HOT 2026** — badge nos tópicos mais relevantes do mercado atual: Event Driven, OpenTelemetry, Distributed Tracing, Team Topologies, Cognitive Load, Platform Engineering, FinOps
- **⭐ Melhor livro** — indica o livro principal de cada tópico
- **Tags de foco** — conceitos-chave que você deve dominar em cada tema

### Como fechar o painel

- Botão **✕** no canto superior direito
- Tecla **Escape**
- Clicar fora do painel

---

## Recursos Curados por Área

### Canais do YouTube

| Canal | Especialidade |
|-------|--------------|
| [ByteByteGo](https://www.youtube.com/@ByteByteGo) | System design, distributed systems, arquitetura visual |
| [CodeOpinion](https://www.youtube.com/@CodeOpinion) | Arquitetura pragmática, DDD, CQRS sem dogmas |
| [ArjanCodes](https://www.youtube.com/@ArjanCodes) | SOLID, clean design, boas práticas em Python |
| [Jakob Jenkov](https://www.youtube.com/@JakobJenkov) | JVM internals, performance, concorrência |
| [CNCF](https://www.youtube.com/@cncf) | OpenTelemetry, Kubernetes, cloud native |

### Cursos

| Curso | Descrição |
|-------|-----------|
| [MIT 6.824 — Distributed Systems](https://pdos.csail.mit.edu/6.824) | A referência global em sistemas distribuídos — Raft, Paxos, consenso. Gratuito online. |

### Referências Técnicas Online

| Recurso | Área |
|---------|------|
| [Refactoring Guru](https://refactoring.guru) | SOLID, design patterns, refactoring visual |
| [Raft Visualization](https://thesecretlivesofdata.com/raft) | Visualização interativa do algoritmo Raft |
| [Principles of Chaos Engineering](https://principlesofchaos.org) | Manifesto oficial do Chaos Engineering |
| [OpenTelemetry Docs](https://opentelemetry.io) | Documentação oficial do padrão de observabilidade |
| [DORA Research](https://dora.dev) | Métricas DORA — evidências de ROI de engenharia |
| [FinOps Foundation](https://www.finops.org) | Frameworks e melhores práticas de FinOps |
| [Platform Engineering](https://platformengineering.org) | Comunidade e recursos de Platform Engineering |
| [CodeScene](https://codescene.com) | Análise de hotspots e complexidade comportamental |
| [Martin Fowler's Bliki](https://martinfowler.com) | Referência global em design, arquitetura e padrões |

### Blogs de Referência

| Blog | Especialidade |
|------|--------------|
| [Netflix Tech Blog](https://netflixtechblog.com) | Chaos Engineering, performance, event-driven em escala |
| [Uber Engineering](https://www.uber.com/blog/engineering) | Distributed systems, Kafka, DDD em produção |
| [Cloudflare Blog](https://blog.cloudflare.com) | Edge computing, resiliência, custo por request |
| [Stripe Engineering](https://stripe.com/blog/engineering) | Idempotência, transações, confiabilidade crítica |
| [AWS Architecture Blog](https://aws.amazon.com/blogs/architecture) | Cloud economics, FinOps, Well-Architected |

---

## Livros por Fase

### Phase 01 · Engineering Foundations

| Livro | Autor | Por que ler |
|-------|-------|-------------|
| **A Philosophy of Software Design** ⭐ | John Ousterhout | O melhor livro atual sobre complexidade e design de módulos |
| Software Design X-Rays | Adam Tornhill | Hotspots e acoplamento comportamental com dados reais de git |
| Clean Code | Robert C. Martin | Fundação sobre código limpo — leia com senso crítico |
| Refactoring | Martin Fowler | Catálogo definitivo de técnicas de refactoring |
| Working Effectively with Legacy Code | Michael Feathers | O guia para trabalhar com código sem testes |
| Building Evolutionary Architectures | Ford, Parsons & Kua | Fitness functions e arquiteturas que evoluem |

### Phase 02 · Evolutionary Architecture

| Livro | Autor | Por que ler |
|-------|-------|-------------|
| **Domain-Driven Design** ⭐ | Eric Evans | O Blue Book — fundação de bounded contexts e DDD |
| Implementing Domain-Driven Design | Vaughn Vernon | O Red Book — implementação prática do DDD |
| Building Evolutionary Architectures | Ford, Parsons & Kua | Arquiteturas com fitness functions e evolução contínua |
| A Philosophy of Software Design | John Ousterhout | Módulos profundos e boundaries claros como princípio |

### Phase 03 · Distributed Systems

| Livro | Autor | Por que ler |
|-------|-------|-------------|
| **Designing Data-Intensive Applications** ⭐ | Martin Kleppmann | O melhor livro do mundo em sistemas distribuídos |

### Phase 04 · Performance & Resilience

| Livro | Autor | Por que ler |
|-------|-------|-------------|
| **Systems Performance** ⭐ | Brendan Gregg | Flame graphs, profiling, CPU e I/O — referência definitiva |
| **Observability Engineering** ⭐ | Charity Majors, Liz Fong-Jones & George Miranda | OpenTelemetry, tracing e debugging distribuído |
| **Release It!** ⭐ | Michael T. Nygard | Circuit breakers, bulkheads, timeouts — resiliência na prática |
| Chaos Engineering | Casey Rosenthal & Nora Jones | Guia prático pelos fundadores da disciplina |
| Site Reliability Engineering | Google SRE Team | SLOs, SLAs e observabilidade — gratuito online |

### Phase 05 · Sociotechnical Engineering

| Livro | Autor | Por que ler |
|-------|-------|-------------|
| **Team Topologies** ⭐ | Matthew Skelton & Manuel Pais | Stream-aligned, platform e enabling teams — obrigatório |
| **Accelerate** ⭐ | Forsgren, Humble & Kim | Evidence-based: métricas DORA e performance organizacional |

### Phase 06 · Engineering Economics

| Livro | Autor | Por que ler |
|-------|-------|-------------|
| **Accelerate** ⭐ | Forsgren, Humble & Kim | ROI de práticas técnicas — o argumento quantificado |
| Systems Performance | Brendan Gregg | Performance e custo são dois lados da mesma moeda |

---

## Estrutura do Projeto

```
roadmap-software-engineer/
├── index.html            # Estrutura principal + modal de estudo
├── roadmap-v7.html       # Versão standalone v7 do roadmap
├── roadmap-standalone.html  # Versão standalone independente
├── style.css             # Estilos HUD + estilos do modal
├── script.js             # Partículas, animações, boot sequence + lógica do modal
└── study-data.js         # Base de dados de recursos por tópico (33 tópicos)
```

**Sem dependências externas.** Vanilla JS puro, sem frameworks, sem build step. Apenas HTML, CSS e JS.

---

## Rodando Localmente

```bash
# Clone o repositório
git clone https://github.com/Zezoca29/roadmap-software-engineer.git

# Entre na pasta
cd roadmap-software-engineer

# Abra com qualquer servidor local, por exemplo:
npx serve .
# ou com Python:
python -m http.server 8080
```

Acesse `http://localhost:8080` (ou a porta do seu servidor).

> Não é necessário `npm install` nem nenhum processo de build.

---

## Contribuindo

Para adicionar ou atualizar recursos de estudo, edite o arquivo `study-data.js`. Cada tópico segue a estrutura:

```js
"Nome do Tópico": {
  phase: "Phase XX · Nome da Fase",
  description: "Descrição do tópico",
  focus: ["Conceito 1", "Conceito 2"],
  hot2026: true,  // aparece badge 🔥
  links: [
    { title: "Título", url: "https://...", desc: "Descrição curta" }
  ],
  videos: [ /* mesma estrutura */ ],
  books: [
    { title: "Título", author: "Autor", url: "https://...", desc: "...", badge: "⭐ Melhor livro" }
  ],
  blogs: [ /* mesma estrutura de links */ ]
}
```

---

## Níveis de Evolução

O roadmap mapeia 6 níveis de carreira:

```
LV 01 · Coder            → Resolve a tarefa
LV 02 · Software Engineer → Projeta a solução
LV 03 · Senior Engineer   → Domina o sistema
LV 04 · Staff Engineer    → Alinha sistemas
LV 05 · Principal Engineer → Define a estratégia técnica
LV ∞  · Systems Thinker   → Enxerga o todo
```

---

## Deploy

O projeto está hospedado no **Vercel** com deploy automático a cada push na branch `master`.

```bash
# Para atualizar o site após modificações:
git add .
git commit -m "sua mensagem"
git push
# O Vercel detecta automaticamente e publica em ~30s
```

---

*"Engineering is Complexity Management Under Constraints."*
