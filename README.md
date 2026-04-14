# Log-ística B2B Site

Site estático SPA para solução de logística B2B, construído com **Vite + React 19** e publicado no **GitHub Pages**.

🌐 **Demo:** [nakalissi.github.io/log-stica-b2b-site](https://nakalissi.github.io/log-stica-b2b-site/)

## ✨ Funcionalidades

- **Landing page completa** com seções: Hero, Sobre, Serviços e Contato
- **SEO otimizado**: meta tags, Open Graph, Twitter Card, JSON-LD (Schema.org), `robots.txt` e `sitemap.xml`
- **Design responsivo** para mobile, tablet e desktop
- **Tema genérico de logística** — pronto para personalização
- **Deploy automático** via GitHub Actions para GitHub Pages

## 🏗️ Stack

| Tecnologia | Versão |
|---|---|
| [Vite](https://vitejs.dev) | 6.x |
| [React](https://react.dev) | 19.x |
| CSS Modules | — |

## 🚀 Desenvolvimento local

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Prévia do build
npm run preview
```

## 📦 Deploy

O deploy é feito automaticamente via GitHub Actions ao fazer push na branch `main`.

Para configurar o GitHub Pages:
1. Vá em **Settings → Pages**
2. Selecione **Source: GitHub Actions**

## 🎨 Personalização

Edite as seguintes áreas para adaptar o tema à sua marca:

| Arquivo | O que alterar |
|---|---|
| `index.html` | Título, descrição, URLs canônicas, JSON-LD |
| `src/index.css` | Cores (variáveis CSS `--color-*`) |
| `src/components/Hero.jsx` | Textos e estatísticas principais |
| `src/components/About.jsx` | Missão, visão, valores |
| `src/components/Services.jsx` | Lista de serviços |
| `src/components/Contact.jsx` | Informações de contato |
| `vite.config.js` | `base` URL para o repositório |
