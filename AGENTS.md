# Agent Instructions — Logística B2B

Plataforma de cotação de frete B2B. SPA estática com **Vite + React 19 + CSS Modules**.

## Comandos

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run lint     # ESLint
```

## Arquitetura

- `src/App.jsx` — Componente raiz, monta todas as seções
- `src/components/` — Um componente por seção (Header, Hero, About, Services, Contact, Footer)
- `src/index.css` — Tokens de design (cores, tipografia, espaçamento) + classes utilitárias globais
- Cada componente tem `.module.css` co-localizado

## Convenções

- **CSS Modules** para estilos de componente, classes globais em `index.css`
- **Zero dependências de UI** — apenas React + CSS puro, emojis e SVG inline para ícones
- **Dados estáticos** como arrays `const` acima do componente (ex: `SERVICES`, `NAV_LINKS`)
- **Tokens obrigatórios** — nunca usar valores hexadecimais diretos, sempre `var(--color-*)`, `var(--space-*)`, etc.

## Design System

Consultar [DESIGN.md](DESIGN.md) para a referência completa de tokens, componentes e padrões visuais.

## Deploy

GitHub Pages via GitHub Actions (push em `main`). Domínio customizado configurado em `CNAME`.
