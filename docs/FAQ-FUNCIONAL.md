# FAQ Acordeão - Documentação

## ✅ Status: FUNCIONAL

O recurso de FAQ Acordeão está completamente funcional na página de preços (`precos.html`).

## 🎯 Funcionalidades Implementadas

### 1. **Expansão/Colapso de Itens**
- Clique em qualquer pergunta para expandir/colapsar a resposta
- Apenas um item pode estar aberto por vez
- Animação suave de abertura e fechamento

### 2. **Animações**
- ✨ Rotação do ícone de seta (180° ao expandir)
- ✨ Transição suave de altura com cubic-bezier
- ✨ Fade in/out do conteúdo
- ✨ Efeito hover no header com gradiente
- ✨ Scroll automático para o item expandido

### 3. **Estado Inicial**
- O primeiro item do FAQ abre automaticamente ao carregar a página
- Melhora a experiência do usuário mostrando exemplo de interação

### 4. **Responsividade**
- Totalmente responsivo em dispositivos móveis
- Padding e tamanhos de fonte ajustados para telas menores
- Touch-friendly em tablets e smartphones

## 📋 Estrutura HTML

```html
<div class="faq-accordion">
    <div class="faq-accordion-item hover-lift">
        <button class="faq-accordion-header">
            <div class="faq-accordion-title">
                <i class="fas fa-vial"></i>
                <h3>Pergunta aqui?</h3>
            </div>
            <i class="fas fa-chevron-down faq-accordion-icon"></i>
        </button>
        <div class="faq-accordion-content">
            <p>Resposta aqui.</p>
        </div>
    </div>
</div>
```

## 🎨 CSS - Classes Principais

### `.faq-accordion-item`
- Container de cada item do FAQ
- Borda e sombra para destaque visual
- Transição suave de cores e sombras

### `.faq-accordion-item.active`
- Estado expandido do item
- Borda azul destacada
- Sombra mais proeminente

### `.faq-accordion-header`
- Botão clicável do FAQ
- Flexbox para alinhamento
- Efeito hover com gradiente

### `.faq-accordion-content`
- Container da resposta
- `max-height: 0` quando fechado
- Animação suave de altura controlada via JavaScript

### `.faq-accordion-icon`
- Ícone de seta (chevron-down)
- Rotação de 180° ao expandir
- Transição com cubic-bezier para suavidade

## ⚙️ JavaScript - Lógica

### Evento Principal
```javascript
header.addEventListener('click', function(e) {
    e.preventDefault();
    const isActive = item.classList.contains('active');
    
    // Fecha todos os itens
    faqItems.forEach(faqItem => {
        faqContent.style.maxHeight = '0px';
        faqItem.classList.remove('active');
    });
    
    // Abre o item clicado (se não estava ativo)
    if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
});
```

### Recursos Adicionais

1. **Cálculo Dinâmico de Altura**
   - `content.scrollHeight` calcula a altura real do conteúdo
   - Ajusta automaticamente para diferentes tamanhos de texto

2. **Recalculo no Resize**
   - Event listener no `window.resize`
   - Recalcula altura do conteúdo expandido ao redimensionar

3. **Scroll Automático**
   - Scroll suave até o item quando expandido
   - Melhora UX em listas longas

## 🧪 Teste

Um arquivo de teste foi criado: `test-faq.html`

Para testar:
1. Abra `test-faq.html` no navegador
2. Clique nas perguntas para expandir/colapsar
3. Verifique se apenas um item fica aberto por vez
4. Observe as animações suaves

## 📱 Compatibilidade

✅ Chrome/Edge (Chromium)
✅ Firefox
✅ Safari
✅ Opera
✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## 🎯 Onde Usar

O FAQ acordeão está implementado em:
- ✅ `precos.html` - Seção de Perguntas Frequentes sobre planos

Pode ser facilmente adicionado a outras páginas copiando:
1. A estrutura HTML da seção `.faq-section`
2. O CSS já está em `styles.css` (global)
3. O JavaScript já está em `script.js` (global)

## 🔧 Customização

### Adicionar Nova Pergunta

Copie e cole este bloco dentro de `.faq-accordion`:

```html
<div class="faq-accordion-item hover-lift">
    <button class="faq-accordion-header">
        <div class="faq-accordion-title">
            <i class="fas fa-question-circle"></i>
            <h3>Sua pergunta aqui?</h3>
        </div>
        <i class="fas fa-chevron-down faq-accordion-icon"></i>
    </button>
    <div class="faq-accordion-content">
        <p>Sua resposta aqui.</p>
    </div>
</div>
```

### Alterar Ícones

Use qualquer ícone do Font Awesome:
- `fas fa-question-circle` - Pergunta genérica
- `fas fa-info-circle` - Informação
- `fas fa-lightbulb` - Dica
- `fas fa-book` - Educação
- `fas fa-cog` - Configuração

### Cores

As cores são definidas por CSS custom properties em `styles.css`:
- `--primary-blue: #4070B7`
- `--accent-blue: #39A1DB`
- `--dark-blue: #1A5B94`

## 🐛 Troubleshooting

### FAQ não abre/fecha?
- Verifique se `script.js` está carregado
- Abra o Console (F12) e veja se há erros JavaScript
- Confirme que as classes HTML estão corretas

### Animação está travando?
- Limpe o cache do navegador (Ctrl+F5)
- Verifique se `styles.css` está carregando completamente

### Responsividade não funciona?
- Verifique o `<meta name="viewport">` no HTML
- Confirme que os media queries em `styles.css` estão ativos

## 📝 Notas Técnicas

- **Performance**: Usa `scrollHeight` ao invés de valores fixos para melhor adaptabilidade
- **Acessibilidade**: Usa `<button>` semântico para navegação por teclado
- **UX**: Transições suaves com cubic-bezier para sensação natural
- **Manutenibilidade**: Código modular e bem comentado

## 🚀 Melhorias Futuras (Opcional)

- [ ] Adicionar suporte para múltiplos itens abertos simultaneamente
- [ ] Implementar busca/filtro de perguntas
- [ ] Adicionar analytics para perguntas mais visualizadas
- [ ] Criar variação com ícones animados (Lottie)
- [ ] Adicionar compartilhamento de link direto para pergunta específica

---

**Última atualização**: 08/10/2025
**Status**: ✅ Totalmente Funcional
**Desenvolvedor**: Copilot AI Assistant
