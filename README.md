# Software Engineering Mastery Roadmap

> **Roadmap interativo** de evolução em Engenharia de Software — do código tradicional à engenharia de sistemas de elite. Com sistema de estudo integrado por tópico.

🔗 **Live:** [roadmap-software-engineer.vercel.app](https://roadmap-software-engineer.vercel.app)

---

## O que é

Um roadmap visual e interativo que mapeia a jornada de **Coder → Systems Thinker**, organizado em 6 fases de domínio. Cada fase contém tópicos técnicos e, ao clicar em qualquer um deles, abre um painel de estudo com recursos curados: links, vídeos, livros e blogs.

O design segue uma estética HUD (Heads-Up Display) inspirada em interfaces de sistemas militares/sci-fi — partículas em movimento, animações de boot, tipografia técnica e temas em cyan/azul.

---

## As 6 Fases

| Fase | Nome | Tópicos |
|------|------|---------|
| 01 | **Engineering Foundations** | SOLID, Coupling & Cohesion, Connascence, Refactoring, Complexity Management |
| 02 | **Evolutionary Architecture** | Clean Architecture, Hexagonal Architecture, DDD, CQRS, Event Driven, Modular Monolith |
| 03 | **Distributed Systems** | CAP Theorem, PACELC, Eventual Consistency, Consensus, Distributed Transactions, Saga Pattern |
| 04 | **Performance & Resilience** | p99 Latency, Profiling, OpenTelemetry, Distributed Tracing, Chaos Engineering, Circuit Breakers |
| 05 | **Sociotechnical Engineering** | Conway's Law, Team Topologies, Ownership, Cognitive Load, Platform Engineering |
| 06 | **Engineering Economics** | FinOps, Cloud Economics, ROI Técnico, Build vs Buy, Cost per Request |

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

- **🔥 HOT 2026** — badge nos tópicos mais relevantes no mercado atual (OpenTelemetry, Platform Engineering, Team Topologies, etc.)
- **⭐ Melhor livro** — indica o livro principal de cada tópico
- **Tags de foco** — os conceitos-chave que você deve dominar em cada tema

### Como fechar o painel

- Botão **✕** no canto superior direito
- Tecla **Escape**
- Clicar fora do painel

---

## Recursos curados por área

### Canais do YouTube
- [ByteByteGo](https://www.youtube.com/@ByteByteGo) — System design, distributed systems, arquitetura
- [CodeOpinion](https://www.youtube.com/@CodeOpinion) — Arquitetura pragmática, DDD, CQRS
- [ArjanCodes](https://www.youtube.com/@ArjanCodes) — SOLID, clean design, boas práticas
- [Jakob Jenkov](https://www.youtube.com/@JakobJenkov) — JVM internals, performance, concorrência

### Cursos
- [MIT 6.824 — Distributed Systems](https://pdos.csail.mit.edu/6.824) — A referência global em sistemas distribuídos, gratuito online

### Blogs de Referência
- [Netflix Tech Blog](https://netflixtechblog.com)
- [Uber Engineering](https://www.uber.com/blog/engineering)
- [Cloudflare Blog](https://blog.cloudflare.com)
- [Stripe Engineering](https://stripe.com/blog/engineering)
- [AWS Architecture Blog](https://aws.amazon.com/blogs/architecture)
- [Martin Fowler's Bliki](https://martinfowler.com)

### Livros Fundamentais (os mais recomendados)
| Livro | Autor | Área |
|-------|-------|------|
| A Philosophy of Software Design | John Ousterhout | Fundamentos |
| Software Design X-Rays | Adam Tornhill | Complexidade |
| Domain-Driven Design | Eric Evans | Arquitetura |
| Designing Data-Intensive Applications | Martin Kleppmann | Sistemas Distribuídos |
| Systems Performance | Brendan Gregg | Performance |
| Observability Engineering | Charity Majors et al. | Observabilidade |
| Release It! | Michael T. Nygard | Resiliência |
| Team Topologies | Skelton & Pais | Engenharia Organizacional |
| Accelerate | Forsgren, Humble & Kim | Engenharia Organizacional |

---

## Estrutura do Projeto

```
roadmap-software-engineer/
├── index.html          # Estrutura principal + modal de estudo
├── style.css           # Estilos HUD + estilos do modal
├── script.js           # Partículas, animações, boot sequence + lógica do modal
└── study-data.js       # Base de dados de recursos por tópico (34 tópicos)
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
