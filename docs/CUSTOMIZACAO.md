# 🎨 Guia de Customização - Text79

## Personalizando Cores

### Alterando a Paleta de Cores

Edite as variáveis CSS em `styles.css` (linhas 2-14):

```css
:root {
    --primary-color: #4A8FD4;      /* Azul principal */
    --secondary-color: #5BA8E0;    /* Azul secundário */
    --tertiary-color: #6B9DC4;     /* Azul terciário */
    --background-light: #FFFAFA;   /* Fundo claro */
    --text-dark: #1a1a1a;          /* Texto escuro */
    --text-gray: #4a4a4a;          /* Texto cinza */
    --text-light: #6a6a6a;         /* Texto claro */
    --white: #ffffff;              /* Branco */
}
```

### Exemplos de Paletas Alternativas:

#### Verde Profissional:
```css
--primary-color: #2D9F5D;
--secondary-color: #3CB371;
--tertiary-color: #52C785;
```

#### Roxo Moderno:
```css
--primary-color: #6B46C1;
--secondary-color: #805AD5;
--tertiary-color: #9F7AEA;
```

#### Laranja Vibrante:
```css
--primary-color: #ED8936;
--secondary-color: #F6AD55;
--tertiary-color: #FBD38D;
```

## Personalizando Animações

### Velocidade das Animações

Em `pages-scripts.js`, linha 9-18, ajuste os delays:

```javascript
setTimeout(() => {
    element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    element.style.opacity = '1';
}, index * 100); // Altere 100 para mais rápido (50) ou mais lento (200)
```

### Desabilitar Animações

Para desabilitar animações específicas:

```javascript
// Comente ou remova estas linhas em pages-scripts.js:
// initPageAnimations();
// initScrollReveal();
```

## Personalizando Textos

### Alterando Conteúdo

Edite diretamente os arquivos HTML:

- **index.html** - Página inicial
- **recursos.html** - Recursos
- **precos.html** - Preços
- **para-quem.html** - Para quem
- **contato.html** - Contato

### Alterando Preços

Em `precos.html`, localize:

```html
<span class="amount" data-monthly="47" data-yearly="33">47</span>
```

Altere os valores `data-monthly` e `data-yearly`.

## Personalizando Imagens

### Adicionando Logo

1. Substitua o texto "Text79" em todas as páginas:

```html
<!-- De: -->
<div class="logo">
    <a href="index.html"><h2>Text79</h2></a>
</div>

<!-- Para: -->
<div class="logo">
    <a href="index.html">
        <img src="logo.png" alt="Text79" height="40">
    </a>
</div>
```

### Adicionando Imagens de Fundo

Em `pages-styles.css`, adicione:

```css
.page-hero {
    background-image: url('sua-imagem.jpg');
    background-size: cover;
    background-position: center;
}
```

## Personalizando Fontes

### Alterando a Fonte Principal

Em todas as páginas HTML, substitua:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Por outra fonte do Google Fonts, exemplo:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Depois, em `styles.css`, altere:

```css
body {
    font-family: 'Poppins', sans-serif; /* Era 'Inter' */
}
```

## Configurando WhatsApp

### Número de Telefone

Em `script.js`, linha 178-179:

```javascript
const phoneNumber = '5511999999999'; // Formato: código país + DDD + número
const message = 'Olá! Gostaria de saber mais sobre o Text79';
```

## Personalizando Formulário de Contato

### Integrando com Backend

Em `pages-scripts.js`, substitua a função `showSuccessMessage()` (linha 139):

```javascript
function validateContactForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    if (isValid) {
        // Adicione aqui sua integração com backend
        fetch('/api/contato', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: form.nome.value,
                email: form.email.value,
                telefone: form.telefone.value,
                mensagem: form.mensagem.value
            })
        })
        .then(response => response.json())
        .then(data => showSuccessMessage())
        .catch(error => showErrorMessage());
    }
    
    return isValid;
}
```

## Adicionando Google Analytics

Adicione antes do `</head>` em todas as páginas:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Otimizações de Performance

### Minificar CSS e JS

Use ferramentas online ou:

```bash
# Instale o minificador
npm install -g minifier

# Minifique os arquivos
minify styles.css > styles.min.css
minify pages-styles.css > pages-styles.min.css
minify script.js > script.min.js
minify pages-scripts.js > pages-scripts.min.js
```

### Lazy Loading de Imagens

Para imagens futuras, use:

```html
<img src="placeholder.jpg" data-src="imagem-real.jpg" class="lazy" alt="Descrição">
```

E adicione o script:

```javascript
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});
```

## Dicas de SEO

### Meta Tags Importantes

Adicione em cada página HTML:

```html
<!-- Open Graph para redes sociais -->
<meta property="og:title" content="Text79 - Plataforma de Escrita Autorregulada">
<meta property="og:description" content="Descrição da página">
<meta property="og:image" content="https://seusite.com/imagem-share.jpg">
<meta property="og:url" content="https://seusite.com">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Text79">
<meta name="twitter:description" content="Descrição da página">
<meta name="twitter:image" content="https://seusite.com/imagem-share.jpg">
```

### Sitemap.xml

Crie um arquivo `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seusite.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://seusite.com/recursos.html</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- Adicione todas as páginas -->
</urlset>
```

## Suporte

Para dúvidas sobre customização:
- Consulte a documentação oficial do CSS/JavaScript
- Veja tutoriais no MDN Web Docs
- Entre em contato via email

---

**Boa sorte com suas customizações!** 🎨✨
