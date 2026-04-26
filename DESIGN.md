# Design System — Logística B2B

Referência de design system para a plataforma de cotação de frete B2B.  
Tokens definidos em [`src/index.css`](src/index.css). Componentes usam **CSS Modules** co-localizados.

---

## Paleta de Cores

### Brand

| Token | Valor | Uso |
|---|---|---|
| `--color-primary` | `#1a3a5c` | Títulos, gradientes, cards |
| `--color-primary-light` | `#2557a7` | Focus rings, hover borders, gradientes |
| `--color-primary-dark` | `#0f2340` | Header bg, footer bg, menu mobile |
| `--color-accent` | `#f4801a` | CTAs, badges, valores em destaque |
| `--color-accent-light` | `#f9a94d` | Hover leve, destaques secundários |
| `--color-accent-dark` | `#d96a0a` | Hover em botões primários |

### Neutros

| Token | Valor | Uso |
|---|---|---|
| `--color-white` | `#ffffff` | Fundo de cards, inputs |
| `--color-off-white` | `#f8f9fa` | Fundo alternado de seções |
| `--color-light-gray` | `#e9ecef` | Bordas, divisores |
| `--color-mid-gray` | `#6c757d` | Texto descritivo, labels |
| `--color-dark-gray` | `#343a40` | Texto principal do body |
| `--color-black` | `#0d0d0d` | Contraste máximo (raro) |

### Semânticos

| Contexto | Cor | Observação |
|---|---|---|
| Erro / Validação | `#dc3545` | Bordas e textos de erro em formulários |
| Sucesso | Emoji + layout dedicado | Sem token definido — considerar `--color-success` |

> **Regra:** nunca usar valores hexadecimais diretos no código — sempre referenciar tokens `var(--color-*)`.

---

## Tipografia

**Família:** `Inter, system-ui, -apple-system, sans-serif` (`--font-family`)

### Escala

| Token | Tamanho | Uso típico |
|---|---|---|
| `--font-size-xs` | 0.75rem (12px) | Mensagens de erro, captions |
| `--font-size-sm` | 0.875rem (14px) | Labels, badges, texto auxiliar |
| `--font-size-base` | 1rem (16px) | Corpo de texto, botões |
| `--font-size-lg` | 1.125rem (18px) | Subtítulos de seção, leads |
| `--font-size-xl` | 1.25rem (20px) | Card títulos |
| `--font-size-2xl` | 1.5rem (24px) | Subtítulos |
| `--font-size-3xl` | 1.875rem (30px) | Títulos mobile |
| `--font-size-4xl` | 2.25rem (36px) | Títulos de seção desktop |
| `--font-size-5xl` | 3rem (48px) | Hero title |

### Pesos e Estilos

| Elemento | Weight | Extras |
|---|---|---|
| Headings (h1–h3) | `800` | `letter-spacing: -0.02em`, `line-height: 1.15–1.2` |
| Labels / Badges | `600–700` | `text-transform: uppercase`, `letter-spacing: 0.06–0.08em` |
| Body | `400` | `line-height: 1.6–1.75` |
| Botões | `600` | — |

**Hero title fluido:** `clamp(2.2rem, 5vw, 3.5rem)` — usar este padrão para títulos grandes que precisam escalar.

---

## Espaçamento

Escala baseada em `rem` multiplicado por `0.25rem`:

| Token | Valor | Exemplos de uso |
|---|---|---|
| `--space-1` | 0.25rem | Gaps mínimos |
| `--space-2` | 0.5rem | Gap dentro de botões |
| `--space-3` | 0.75rem | Padding de inputs |
| `--space-4` | 1rem | Margin entre badge e título |
| `--space-6` | 1.5rem | Padding inline do container |
| `--space-8` | 2rem | Padding de cards, gap de grids |
| `--space-12` | 3rem | Gap entre blocos de conteúdo |
| `--space-16` | 4rem | Padding de seção (mobile) |
| `--space-20` | 5rem | Padding de seção (desktop) |
| `--space-24` | 6rem | Espaçamento extra-grande |

---

## Layout

### Container

```css
max-width: var(--max-width);        /* 1200px */
margin-inline: auto;
padding-inline: var(--space-6);     /* → --space-4 em ≤768px */
```

### Seção padrão

Estrutura HTML obrigatória para novas seções:

```jsx
<section className="section" id="nome-secao">
  <div className="container text-center">
    <span className="section-badge">Badge</span>
    <h2 className="section-title">Título da Seção</h2>
    <p className="section-subtitle">Descrição breve.</p>
    {/* conteúdo */}
  </div>
</section>
```

### Alternância de fundo

| Seção | Fundo |
|---|---|
| Hero | Gradiente navy complexo com grid overlay |
| About | `--color-white` |
| Services | `--color-off-white` |
| Contact | `--color-white` |
| Footer | `--color-primary-dark` |

> Manter alternância claro/escuro entre seções consecutivas.

---

## Grid & Breakpoints

### Breakpoints

| Breakpoint | Convenção |
|---|---|
| `≤480px` | Extra small — títulos menores, footer 1-col |
| `≤600px` | Small — grids de 3-col → 1-col, forms empilham |
| `≤768px` | Medium — nav mobile, padding reduzido |
| `≤900px` | Large — grids de 2-col → 1-col |
| `≤1024px` | XL — grids de 3-col → 2-col |

### Padrões de grid

| Contexto | Desktop | Tablet | Mobile |
|---|---|---|---|
| Conteúdo + imagem | `1fr 1fr` | `1fr` (≤900px) | `1fr` |
| Cards de serviço | `repeat(3, 1fr)` | `repeat(2, 1fr)` (≤1024px) | `1fr` (≤600px) |
| Footer links | `2fr 1fr 1fr 1fr` | `1fr 1fr` (≤900px) | `1fr` (≤480px) |
| Form rows | `1fr 1fr` | `1fr` (≤600px) | `1fr` |

**Regra:** usar CSS Grid para layouts de seção, Flexbox para alinhamento inline e pequenos grupos.

---

## Componentes

### Botões

Base: `.btn` — pill shape, `border: 2px solid transparent`, `font-weight: 600`

| Variante | Classe | Background | Texto | Hover |
|---|---|---|---|---|
| Primary | `.btn-primary` | `--color-accent` | branco | `--color-accent-dark`, lift -2px, glow laranja |
| Outline Light | `.btn-outline` | transparente | branco | borda branca, bg sutil |
| Outline Dark | `.btn-outline-dark` | transparente | `--color-primary` | bg navy, texto branco, lift -2px |

**Padrão CTA com ícone:** botão primário + `<svg>` inline de seta → dentro do `.btn`.

### Cards

**Service Card:**
- Fundo branco, `border: 1px solid --color-light-gray`, `border-radius: --radius-lg`
- Padding: `--space-8` vertical, `--space-6` horizontal
- Hover: `translateY(-6px)`, `--shadow-lg`, `border-color: --color-primary-light`
- Features separadas por `border-top`

**Value Card:**
- Fundo `--color-off-white`, mesma borda e radius
- Hover: `translateY(-4px)`, `--shadow-md`, `border-color: --color-accent`

**Glassmorphism Card** (hero):
- `background: rgba(255,255,255,0.08)`, `backdrop-filter: blur(10px)`
- Borda semitransparente, hover lift -4px

> Novos cards devem seguir o padrão: fundo claro + borda light-gray + radius-lg + hover lift com shadow.

### Formulários

- Input: `border: 1.5px solid --color-light-gray`, `border-radius: --radius-md`
- Focus: `border-color: --color-primary-light`, `box-shadow: 0 0 0 3px rgba(37,87,167,0.12)`
- Erro: `border-color: #dc3545`, ring vermelho, texto `--font-size-xs` + `font-weight: 500`
- Label: `--font-size-sm`, `font-weight: 600`, asterisco required em `--color-accent`
- Wrapper: `background: --color-off-white`, `border-radius: --radius-xl`, `padding: --space-8`

### Header

- Fixo no topo (`position: fixed`), `height: --header-height` (70px)
- Scroll: transição de transparente → `rgba(26,58,92,0.96)` com `backdrop-filter: blur(12px)`
- Mobile (≤768px): hamburger menu → menu fullscreen com glassmorphism

---

## Efeitos & Animações

| Efeito | Valor | Uso |
|---|---|---|
| Hover lift (cards) | `translateY(-4px)` a `(-6px)` | Todos os cards interativos |
| Hover lift (botões) | `translateY(-2px)` + shadow | Todos os botões |
| Transição rápida | `--transition-fast` (150ms) | Hover de links, ícones |
| Transição padrão | `--transition-base` (250ms) | Cards, botões, inputs |
| Transição lenta | `--transition-slow` (400ms) | Modais, overlays |
| Glassmorphism | `backdrop-filter: blur(8–12px)` | Header scroll, hero cards, menu mobile |
| Scroll suave | `scroll-behavior: smooth` + JS `scrollTo` | Navegação por âncoras |

---

## Sombras & Bordas

### Sombras

| Token | Valor | Uso |
|---|---|---|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | Repouso sutil |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.12)` | Card hover leve |
| `--shadow-lg` | `0 8px 30px rgba(0,0,0,0.15)` | Card hover forte, overlays |

### Border Radius

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 4px | Badges inline |
| `--radius-md` | 8px | Inputs, pequenos cards |
| `--radius-lg` | 12px | Cards de serviço/valor |
| `--radius-xl` | 20px | Form wrappers, containers |
| `--radius-full` | 9999px | Botões pill, badges de seção |

---

## Ícones

**Não usar bibliotecas externas de ícones.** Padrão atual:

| Tipo | Uso |
|---|---|
| Emoji | Ícones decorativos em cards e features (`⚡`, `📦`, `🚚`, `📊`) |
| SVG inline | Logo, setas em CTAs, ícones sociais (LinkedIn, Instagram) |
| Texto (`✓`) | Listas de benefícios/highlights |
| Dot indicator | Círculo 6×6px `--color-accent` antes de features |

---

## Acessibilidade

Requisitos mínimos para novos componentes:

- **Landmarks:** `role="banner"`, `role="navigation"`, `role="contentinfo"` nos containers corretos
- **ARIA:** `aria-label` em links/botões sem texto visível, `aria-expanded` em toggles, `aria-required` em campos obrigatórios
- **Formulários:** `aria-describedby` vinculando inputs a mensagens de erro (`role="alert"`)
- **Decorativos:** `aria-hidden="true"` em emojis, SVGs decorativos, shapes de fundo
- **Scroll listeners:** sempre `{ passive: true }`
- **Contraste:** manter WCAG AA mínimo — verificar combinações com a paleta acima

---

## Convenções de Código

| Regra | Detalhe |
|---|---|
| CSS Modules | Um `.module.css` por componente, co-localizado em `src/components/` |
| Classes globais | Em `src/index.css` — usar kebab-case (`section-title`, `btn-primary`) |
| Classes locais | camelCase no CSS Module (`.cardTitle`, `.formWrapper`) |
| Dados estáticos | Arrays const acima do componente (`SERVICES`, `NAV_LINKS`, `STATS`) |
| Sem libs de UI | Zero dependências de UI — apenas React + CSS puro |
| Sem libs de ícones | Emoji + SVG inline |

---

## Checklist — Novo Componente

1. Criar `NomeComponente.jsx` + `NomeComponente.module.css` em `src/components/`
2. Usar estrutura de seção padrão (`.section` + `.container`)
3. Referenciar apenas tokens CSS — sem valores hardcoded
4. Adicionar hover states com lift + shadow
5. Implementar grid responsivo com breakpoints documentados
6. Incluir atributos ARIA necessários
7. Testar em 480px, 768px e 1200px+
