# 🚀 INÍCIO RÁPIDO - Text79

## Para Visualizar o Site

### Opção 1: Abrir Localmente (Mais Fácil)
1. Navegue até a pasta do projeto
2. Dê duplo clique em `index.html`
3. O site abrirá no seu navegador padrão
4. Use o menu para navegar entre as páginas

### Opção 2: Servidor Local (Recomendado)
Se você tem Python instalado:

```bash
# Python 3
python -m http.server 8000

# Ou Python 2
python -m SimpleHTTPServer 8000
```

Depois abra: `http://localhost:8000`

### Opção 3: Live Server (VS Code)
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

## 📄 Estrutura de Navegação

```
🏠 index.html (Home)
   ├── 📦 recursos.html (Recursos)
   ├── 💰 precos.html (Preços)
   ├── 👥 para-quem.html (Para Quem)
   └── 📧 contato.html (Contato)
```

## ⚡ Mudanças Rápidas

### Alterar Logo/Nome
**Arquivo:** Todas as páginas HTML
**Linha:** ~21-23

```html
<!-- Encontre isso: -->
<div class="logo">
    <a href="index.html"><h2>Text79</h2></a>
</div>

<!-- Altere para: -->
<div class="logo">
    <a href="index.html"><h2>SeuNome</h2></a>
</div>
```

### Alterar Cores
**Arquivo:** `styles.css`
**Linhas:** 2-10

```css
:root {
    --primary-color: #4A8FD4;    /* Mude aqui */
    --secondary-color: #5BA8E0;   /* E aqui */
    --tertiary-color: #6B9DC4;    /* E aqui */
}
```

### Alterar Preços
**Arquivo:** `precos.html`
**Procure por:** `<span class="amount"`

```html
<!-- Encontre e altere os números: -->
<span class="amount" data-monthly="47" data-yearly="33">47</span>
                              ↑↑            ↑↑         ↑↑
                           mensal        anual      exibido
```

### Alterar Telefone WhatsApp
**Arquivo:** `script.js`
**Linha:** ~178

```javascript
const phoneNumber = '5511999999999'; // Mude aqui
const message = 'Sua mensagem aqui'; // Mude a mensagem
```

### Alterar Email de Contato
**Arquivo:** `contato.html`
**Procure por:** `contato@text79.com.br`
**Substitua:** Por seu email real

## 🎨 Customizações Comuns

### Adicionar Nova Página ao Menu
**Arquivo:** Todas as páginas HTML
**Procure:** `<ul class="nav-menu">`

```html
<ul class="nav-menu">
    <li><a href="recursos.html">Recursos</a></li>
    <li><a href="precos.html">Preços</a></li>
    <li><a href="para-quem.html">Para Quem</a></li>
    <li><a href="contato.html">Contato</a></li>
    <!-- ADICIONE AQUI: -->
    <li><a href="nova-pagina.html">Nova Página</a></li>
    <li><a href="#" class="btn-login">Entrar</a></li>
</ul>
```

### Remover Animações (Se Necessário)
**Arquivo:** `pages-scripts.js`
**Comente as linhas 9-19:**

```javascript
// function initPageAnimations() {
//     ... todo o código da função ...
// }
```

### Desabilitar Parallax
**Arquivo:** `pages-scripts.js`
**Comente as linhas com `parallax`**

## 📝 Editar Conteúdo

### Textos da Home
**Arquivo:** `index.html`
- Hero (título principal): linha ~48
- Subtítulo: linha ~49
- Estatísticas: linhas ~64-92
- Diferenciais: linhas ~97-152

### Recursos
**Arquivo:** `recursos.html`
- Recursos para Estudantes: linhas ~73-178
- Recursos para Professores: linhas ~183-262
- Recursos para Escolas: linhas ~267-336

### Preços
**Arquivo:** `precos.html`
- Plano Gratuito: linhas ~73-96
- Plano Professor: linhas ~98-126
- Plano Escola: linhas ~128-157

### Depoimentos
**Arquivo:** `para-quem.html`
**Procure:** `<div class="testimonial"`

## 🔧 Solução de Problemas

### Menu Mobile Não Abre
**Verificar:**
1. Arquivo `script.js` está carregado?
2. Linha ~41-75 está sem erros?
3. Console do navegador mostra erros? (F12)

### Animações Não Funcionam
**Verificar:**
1. Arquivo `pages-scripts.js` está carregado?
2. Arquivo `pages-styles.css` está carregado?
3. Links nos HTMLs estão corretos?

### Formulário Não Valida
**Verificar:**
1. Arquivo `pages-scripts.js` está carregado?
2. ID do formulário é `contactForm`?
3. Campos têm atributo `required`?

### Links Quebrados
**Verificar:**
1. Todos os arquivos estão na mesma pasta?
2. Nomes dos arquivos estão corretos?
3. Links usam `.html` no final?

## 📱 Testar Responsividade

### No Navegador (Chrome/Firefox)
1. Pressione F12 (DevTools)
2. Clique no ícone de dispositivo móvel (Ctrl+Shift+M)
3. Escolha diferentes tamanhos de tela
4. Teste todas as páginas

### Tamanhos Comuns para Testar
- **Mobile:** 375x667 (iPhone)
- **Tablet:** 768x1024 (iPad)
- **Desktop:** 1920x1080

## 🌐 Publicar Online

### Opções Gratuitas

#### 1. GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repo.git
git push -u origin main
```
Depois, ative GitHub Pages nas configurações do repositório.
Seu site estará em: `https://seu-usuario.github.io/seu-repo`

#### 2. Netlify
1. Acesse netlify.com
2. Arraste a pasta do projeto
3. Site publicado automaticamente!

#### 3. Vercel
1. Acesse vercel.com
2. Importe o repositório do GitHub
3. Deploy automático!

## 📚 Arquivos de Ajuda

```
📖 README.md           - Documentação principal
🎨 CUSTOMIZACAO.md     - Guia de personalização
✅ CHECKLIST-DEPLOY.md - Antes de publicar
📁 ESTRUTURA.md        - Estrutura do projeto
💡 EXEMPLOS.md         - Snippets de código
📋 RESUMO.md           - Resumo das alterações
```

## ⚠️ Avisos Importantes

1. **Sempre faça backup** antes de alterar
2. **Teste em vários navegadores**
3. **Valide o HTML/CSS** antes de publicar
4. **Comprima imagens** antes de adicionar
5. **Atualize informações** de contato

## 🆘 Precisa de Ajuda?

### Recursos Online
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)

### Validadores
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)

### Performance
- [Google PageSpeed](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

## 📧 Contato

Se precisar de ajuda adicional:
- Revise a documentação completa
- Consulte os arquivos de exemplo
- Verifique o console do navegador (F12)

---

## ✅ Checklist Rápido

Antes de começar:
- [ ] Todos os arquivos na mesma pasta
- [ ] Abri no navegador e funcionou
- [ ] Menu de navegação funciona
- [ ] Testei todas as páginas
- [ ] Animações estão funcionando

Próximos passos:
- [ ] Personalizar textos
- [ ] Alterar cores (opcional)
- [ ] Adicionar imagens reais
- [ ] Configurar WhatsApp
- [ ] Testar formulário
- [ ] Publicar online

---

**Aproveite seu novo site! 🎉**

Dica: Comece fazendo pequenas alterações e testando uma de cada vez.
