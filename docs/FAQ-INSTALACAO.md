# 🚀 Como Adicionar FAQ Acordeão em Outras Páginas

## Guia Rápido de Instalação

O FAQ acordeão pode ser facilmente adicionado a qualquer página do site. Siga estes passos:

## 📋 Pré-requisitos

Certifique-se de que a página tem:
- ✅ `<link rel="stylesheet" href="styles.css">` no `<head>`
- ✅ `<script src="script.js"></script>` antes do `</body>`
- ✅ Font Awesome carregado (para ícones)

## 🔨 Instalação

### Passo 1: Copie o HTML

Cole este código onde quiser que o FAQ apareça:

```html
<!-- FAQ Section -->
<section class="faq-section">
    <div class="container">
        <h2 class="fade-in">Perguntas Frequentes</h2>
        <p class="section-subtitle fade-in">Tire suas dúvidas</p>
        
        <div class="faq-accordion">
            <div class="faq-accordion-item hover-lift">
                <button class="faq-accordion-header">
                    <div class="faq-accordion-title">
                        <i class="fas fa-question-circle"></i>
                        <h3>Primeira pergunta?</h3>
                    </div>
                    <i class="fas fa-chevron-down faq-accordion-icon"></i>
                </button>
                <div class="faq-accordion-content">
                    <p>Resposta da primeira pergunta.</p>
                </div>
            </div>
            
            <div class="faq-accordion-item hover-lift">
                <button class="faq-accordion-header">
                    <div class="faq-accordion-title">
                        <i class="fas fa-info-circle"></i>
                        <h3>Segunda pergunta?</h3>
                    </div>
                    <i class="fas fa-chevron-down faq-accordion-icon"></i>
                </button>
                <div class="faq-accordion-content">
                    <p>Resposta da segunda pergunta.</p>
                </div>
            </div>
            
            <!-- Adicione mais itens aqui -->
        </div>
    </div>
</section>
```

### Passo 2: Personalize o Conteúdo

Edite:
1. **Título da seção** - Altere `<h2>Perguntas Frequentes</h2>`
2. **Subtítulo** - Altere `<p class="section-subtitle">`
3. **Ícones** - Troque a classe Font Awesome (`fas fa-*`)
4. **Perguntas** - Altere o texto dentro de `<h3>`
5. **Respostas** - Altere o conteúdo de `.faq-accordion-content`

### Passo 3: Adicione Mais Itens (Opcional)

Para cada nova pergunta, copie este bloco:

```html
<div class="faq-accordion-item hover-lift">
    <button class="faq-accordion-header">
        <div class="faq-accordion-title">
            <i class="fas fa-SEU-ICONE"></i>
            <h3>Sua pergunta aqui?</h3>
        </div>
        <i class="fas fa-chevron-down faq-accordion-icon"></i>
    </button>
    <div class="faq-accordion-content">
        <p>Sua resposta aqui.</p>
    </div>
</div>
```

## 🎨 Ícones Recomendados (Font Awesome)

| Categoria | Ícone | Classe |
|-----------|-------|--------|
| Geral | ❓ | `fas fa-question-circle` |
| Informação | ℹ️ | `fas fa-info-circle` |
| Calendário | 📅 | `fas fa-calendar-alt` |
| Dinheiro | 💰 | `fas fa-dollar-sign` |
| Usuário | 👤 | `fas fa-user` |
| Usuários | 👥 | `fas fa-users` |
| Configuração | ⚙️ | `fas fa-cog` |
| Check | ✅ | `fas fa-check-circle` |
| Cancelar | ❌ | `fas fa-times-circle` |
| Escola | 🏫 | `fas fa-school` |
| Livro | 📚 | `fas fa-book` |
| Graduação | 🎓 | `fas fa-graduation-cap` |
| Integração | 🔌 | `fas fa-plug` |
| Teste | 🧪 | `fas fa-vial` |
| Lightbulb | 💡 | `fas fa-lightbulb` |

Veja todos os ícones: https://fontawesome.com/icons

## 📱 Exemplos de Uso por Página

### home.html (Página Inicial)
```html
<section class="faq-section">
    <div class="container">
        <h2>Dúvidas Comuns</h2>
        <p class="section-subtitle">Aprenda mais sobre o Escrita360</p>
        <!-- FAQ items sobre o produto -->
    </div>
</section>
```

### recursos.html (Recursos)
```html
<section class="faq-section">
    <div class="container">
        <h2>Perguntas sobre Recursos</h2>
        <p class="section-subtitle">Entenda nossas funcionalidades</p>
        <!-- FAQ items sobre recursos específicos -->
    </div>
</section>
```

### para-quem.html (Público-Alvo)
```html
<section class="faq-section">
    <div class="container">
        <h2>FAQ para Professores e Escolas</h2>
        <p class="section-subtitle">Dúvidas do público educador</p>
        <!-- FAQ items sobre implementação -->
    </div>
</section>
```

### contato.html (Contato)
```html
<section class="faq-section">
    <div class="container">
        <h2>Antes de Entrar em Contato</h2>
        <p class="section-subtitle">Talvez já tenhamos sua resposta</p>
        <!-- FAQ items sobre suporte -->
    </div>
</section>
```

## 🎯 Conteúdo Sugerido por Página

### Home - FAQ Geral
- O que é o Escrita360?
- Como funciona a metodologia de escrita autorregulada?
- Quem pode usar a plataforma?
- Quanto custa?

### Recursos - FAQ Técnico
- Quais competências são analisadas?
- Como funciona o painel de sentimentos?
- Posso exportar relatórios?
- Há integração com outras plataformas?

### Para Quem - FAQ Segmentado
- Como escolas implementam a plataforma?
- Professores precisam de treinamento?
- Funciona para todos os anos escolares?
- Quantos alunos posso ter?

### Contato - FAQ Suporte
- Qual o prazo de resposta?
- Oferecem demonstração?
- Posso agendar uma reunião?
- Há suporte técnico 24/7?

## ⚙️ Configurações Avançadas

### Desabilitar Primeiro Item Aberto

Remova esta linha do `script.js`:
```javascript
// Comentar ou deletar estas linhas
if (faqItems[0]) {
    faqItems[0].classList.add('active');
    // ...
}
```

### Permitir Múltiplos Itens Abertos

Modifique o JavaScript (em `script.js`):
```javascript
header.addEventListener('click', function(e) {
    e.preventDefault();
    const isActive = item.classList.contains('active');
    
    // REMOVA este bloco que fecha todos:
    // faqItems.forEach(faqItem => { ... });
    
    // Apenas toggle do item clicado
    if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = '0px';
    } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
});
```

### Mudar Tempo de Animação

Edite o CSS em `styles.css`:
```css
.faq-accordion-content {
    /* Mudar de 0.5s para o valor desejado */
    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                padding 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                opacity 0.3s ease;
}
```

## 🐛 Troubleshooting

### FAQ não funciona em página nova?

**Checklist:**
1. ✅ Verificar se `script.js` está carregado
2. ✅ Verificar se `styles.css` está carregado
3. ✅ Classes HTML estão corretas (copiar/colar do exemplo)
4. ✅ Console não mostra erros (F12)

### Altura do conteúdo está cortada?

**Solução:**
O JavaScript calcula automaticamente. Se estiver cortado:
1. Verifique se há CSS conflitante
2. Force recalculo no Console:
```javascript
document.querySelectorAll('.faq-accordion-item.active .faq-accordion-content').forEach(el => {
    el.style.maxHeight = el.scrollHeight + 'px';
});
```

## 📊 Métricas e Analytics (Futuro)

Para rastrear quais perguntas são mais acessadas:

```javascript
header.addEventListener('click', function(e) {
    // Seu código atual...
    
    // Adicionar tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'faq_click', {
            'event_category': 'FAQ',
            'event_label': item.querySelector('h3').textContent
        });
    }
});
```

## ✅ Checklist Final

Antes de publicar a página com FAQ:

- [ ] HTML copiado e personalizado
- [ ] Todas as perguntas têm respostas
- [ ] Ícones estão apropriados ao conteúdo
- [ ] Testado em desktop
- [ ] Testado em mobile
- [ ] Animações funcionando suavemente
- [ ] Sem erros no Console
- [ ] Ortografia revisada

---

**Guia Criado**: 08/10/2025
**Dificuldade**: ⭐ Fácil (Copy & Paste)
**Tempo de Instalação**: ~5 minutos
