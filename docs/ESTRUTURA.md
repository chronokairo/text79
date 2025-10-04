# 📁 Estrutura do Projeto - Text79

## Visão Geral dos Arquivos

```
text79/
│
├── index.html                 # Página inicial (Home)
├── recursos.html             # Página de Recursos
├── precos.html               # Página de Preços
├── para-quem.html            # Página Para Quem
├── contato.html              # Página de Contato
│
├── styles.css                # Estilos globais originais
├── pages-styles.css          # Estilos específicos das novas páginas
│
├── script.js                 # Scripts originais
├── pages-scripts.js          # Scripts das novas páginas
│
├── README.md                 # Documentação principal
├── CUSTOMIZACAO.md           # Guia de customização
├── CHECKLIST-DEPLOY.md       # Checklist de publicação
└── ESTRUTURA.md              # Este arquivo
```

## 📄 Descrição Detalhada dos Arquivos

### Páginas HTML

#### **index.html** (Página Principal)
- **Seções:**
  - Header com navegação
  - Hero section com CTA
  - Stats (Estatísticas)
  - Diferenciais
  - CTA final
  - Footer

- **Características:**
  - Animações de entrada
  - Contadores animados
  - Links para outras páginas
  - WhatsApp floating button

#### **recursos.html** (Recursos)
- **Seções:**
  - Hero específico
  - Tabs sticky (Estudantes/Professores/Escolas)
  - Cards detalhados de recursos
  - Features lists
  - CTA

- **Características:**
  - Sistema de tabs interativo
  - Cards expansivos
  - Icons Font Awesome
  - Scroll reveal animations

#### **precos.html** (Preços)
- **Seções:**
  - Hero de preços
  - Toggle mensal/anual
  - Cards de planos
  - Tabela de comparação
  - FAQ
  - CTA

- **Características:**
  - Preços dinâmicos (toggle)
  - Plano destacado (popular)
  - Comparação detalhada
  - FAQ interativo

#### **para-quem.html** (Para Quem)
- **Seções:**
  - Hero
  - Cards detalhados por público
  - Benefícios específicos
  - Depoimentos
  - Stats por público
  - Histórias de sucesso
  - CTA

- **Características:**
  - Cards verticais expansivos
  - Testimonials integrados
  - Tags de uso
  - Stats highlights

#### **contato.html** (Contato)
- **Seções:**
  - Hero
  - Formulário de contato
  - Informações de contato
  - Redes sociais
  - FAQ rápido
  - Localização

- **Características:**
  - Validação de formulário
  - Múltiplos métodos de contato
  - Success/error messages
  - Quick actions

### Arquivos CSS

#### **styles.css** (5583 linhas)
Estilos globais originais incluindo:
- Variáveis CSS
- Reset e base styles
- Tipografia
- Animações base
- Componentes originais
- Header/Footer
- Hero section
- Stats, cards, etc.

#### **pages-styles.css** (Novo)
Estilos específicos das novas páginas:
- Animações customizadas
- Page heroes
- Recursos detalhados
- Pricing comparisons
- Audience cards
- Contact forms
- Responsive overrides

**Tamanho aproximado:** ~1000 linhas

### Arquivos JavaScript

#### **script.js** (498 linhas)
Scripts originais incluindo:
- Mobile menu
- Smooth scrolling
- Pricing toggle
- Scroll animations
- Header scroll effect
- WhatsApp integration
- Resource tabs
- Parallax effects
- Counter animations

#### **pages-scripts.js** (Novo)
Scripts das novas páginas:
- Page animations
- Counter animations
- Form validation
- Sticky tabs
- Page transitions
- Scroll reveal
- Parallax effects
- Card tilt (opcional)
- Utility functions

**Tamanho aproximado:** ~400 linhas

## 🎨 Componentes Reutilizáveis

### Botões
```html
<!-- Primário -->
<a href="#" class="btn btn-primary">Texto</a>

<!-- Secundário -->
<a href="#" class="btn btn-secondary">Texto</a>

<!-- Outline -->
<a href="#" class="btn btn-outline">Texto</a>

<!-- Large -->
<a href="#" class="btn btn-primary btn-large">Texto</a>
```

### Cards
```html
<!-- Card básico -->
<div class="hover-lift">
  <div class="card-icon"><i class="fas fa-icon"></i></div>
  <h3>Título</h3>
  <p>Descrição</p>
</div>
```

### Sections com Animações
```html
<section class="fade-in">
  <div class="container">
    <h2 class="fade-in-up">Título</h2>
    <p class="fade-in-up delay-1">Texto</p>
  </div>
</section>
```

## 📊 Dependências

### Externas
- **Font Awesome 6.4.0** (CDN)
  - Ícones em todo o site
  - ~200 ícones utilizados

- **Google Fonts - Inter**
  - Pesos: 300, 400, 500, 600, 700
  - Usado em todo o texto

### Internas
- Nenhuma biblioteca JS adicional
- JavaScript vanilla puro
- CSS puro (sem frameworks)

## 🎯 Principais Funcionalidades

### 1. Navegação
- **Arquivo:** `script.js` + `pages-scripts.js`
- **Linhas:** 41-75 (script.js)
- Menu responsivo com hamburger
- Smooth scroll para âncoras
- Active state em links

### 2. Animações
- **Arquivo:** `pages-scripts.js`
- **Linhas:** 8-24
- Fade in ao carregar
- Scroll reveal
- Counter animations
- Page transitions

### 3. Forms
- **Arquivo:** `pages-scripts.js`
- **Linhas:** 65-160
- Validação em tempo real
- Error/success messages
- Field highlighting

### 4. Pricing
- **Arquivo:** `script.js`
- **Linhas:** 95-122
- Toggle mensal/anual
- Atualização dinâmica
- Animation feedback

## 🔄 Fluxo de Navegação

```
index.html (Home)
    ↓
    ├──→ recursos.html (Recursos)
    │       ↓
    │       └──→ precos.html (Preços)
    │
    ├──→ precos.html (Preços)
    │       ↓
    │       └──→ contato.html (Contato)
    │
    ├──→ para-quem.html (Para Quem)
    │       ↓
    │       ├──→ recursos.html
    │       └──→ precos.html
    │
    └──→ contato.html (Contato)
            ↓
            └──→ Formulário → Success
```

## 💾 Tamanho dos Arquivos

| Arquivo | Tamanho Aproximado | Tipo |
|---------|-------------------|------|
| index.html | ~15 KB | HTML |
| recursos.html | ~25 KB | HTML |
| precos.html | ~20 KB | HTML |
| para-quem.html | ~30 KB | HTML |
| contato.html | ~18 KB | HTML |
| styles.css | ~120 KB | CSS |
| pages-styles.css | ~30 KB | CSS |
| script.js | ~15 KB | JS |
| pages-scripts.js | ~12 KB | JS |
| **Total** | **~285 KB** | - |

*Sem contar Font Awesome e Google Fonts (carregados via CDN)*

## 🚀 Performance

### Métricas Esperadas (Lighthouse)
- **Performance:** 90-95
- **Accessibility:** 95-100
- **Best Practices:** 90-95
- **SEO:** 90-100

### Otimizações Implementadas
- CSS minimalista
- JavaScript eficiente
- Lazy loading (preparado)
- Debounce/throttle em scroll
- Intersection Observer API
- Transition GPU-accelerated

## 🔧 Manutenção

### Arquivos que Requerem Atualização Regular
1. **precos.html** - Valores de planos
2. **contato.html** - Informações de contato
3. **para-quem.html** - Depoimentos e stats
4. **index.html** - Estatísticas principais

### Arquivos Raramente Modificados
1. **styles.css** - Estilos base
2. **script.js** - Funcionalidades core
3. **pages-styles.css** - Estilos de páginas
4. **pages-scripts.js** - Animações

## 📱 Breakpoints Responsivos

```css
/* Desktop */
@media (min-width: 969px) { ... }

/* Tablet */
@media (max-width: 968px) { ... }

/* Mobile */
@media (max-width: 768px) { ... }
```

## 🎨 Paleta de Cores

```css
Primária:    #4A8FD4 (Azul)
Secundária:  #5BA8E0 (Azul Claro)
Terciária:   #6B9DC4 (Azul Médio)
Fundo:       #FFFAFA (Off-White)
Texto:       #1A1A1A (Quase Preto)
Cinza:       #4A4A4A (Cinza Escuro)
Branco:      #FFFFFF
```

## 📚 Recursos Úteis

### Documentação
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Font Awesome Icons](https://fontawesome.com/icons)

### Ferramentas
- [Can I Use](https://caniuse.com/) - Compatibilidade
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [HTML Validator](https://validator.w3.org/)

---

**Estrutura criada em:** Outubro 2025
**Última atualização:** Outubro 2025
