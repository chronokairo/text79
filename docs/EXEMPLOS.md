# 💡 Exemplos de Código - Text79

## Snippets Úteis para Customização

### 1. Adicionar Nova Seção na Home

```html
<!-- Cole este código em index.html antes da seção CTA -->
<section class="nova-secao">
    <div class="container">
        <h2 class="fade-in">Título da Nova Seção</h2>
        <p class="section-subtitle">Subtítulo explicativo</p>
        
        <div class="content-grid">
            <div class="content-item hover-lift">
                <div class="item-icon">
                    <i class="fas fa-star"></i>
                </div>
                <h3>Item 1</h3>
                <p>Descrição do item 1</p>
            </div>
            
            <div class="content-item hover-lift">
                <div class="item-icon">
                    <i class="fas fa-heart"></i>
                </div>
                <h3>Item 2</h3>
                <p>Descrição do item 2</p>
            </div>
            
            <div class="content-item hover-lift">
                <div class="item-icon">
                    <i class="fas fa-rocket"></i>
                </div>
                <h3>Item 3</h3>
                <p>Descrição do item 3</p>
            </div>
        </div>
    </div>
</section>
```

```css
/* Adicione em pages-styles.css */
.nova-secao {
    padding: 6rem 0;
    background: var(--background-light);
}

.content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.content-item {
    background: var(--white);
    padding: 2rem;
    border-radius: 16px;
    text-align: center;
    border: 1px solid rgba(74, 143, 212, 0.1);
}

.item-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
}

.item-icon i {
    font-size: 1.8rem;
    color: var(--white);
}
```

### 2. Adicionar Novo Card de Recurso

```html
<!-- Adicione dentro de .recursos-detailed-grid em recursos.html -->
<div class="recurso-detailed-card hover-lift">
    <div class="recurso-icon">
        <i class="fas fa-lightbulb"></i>
    </div>
    <h3>Nome do Recurso</h3>
    <p class="card-description">Descrição detalhada do que este recurso faz e como ajuda os usuários.</p>
    <ul class="feature-list">
        <li><i class="fas fa-check-circle"></i> Benefício 1</li>
        <li><i class="fas fa-check-circle"></i> Benefício 2</li>
        <li><i class="fas fa-check-circle"></i> Benefício 3</li>
        <li><i class="fas fa-check-circle"></i> Benefício 4</li>
    </ul>
</div>
```

### 3. Adicionar Nova Pergunta no FAQ

```html
<!-- Adicione em precos.html ou contato.html -->
<div class="faq-item hover-lift">
    <div class="faq-question">
        <i class="fas fa-question-circle"></i>
        <h3>Sua pergunta aqui?</h3>
    </div>
    <p>Resposta detalhada explicando o tópico de forma clara e objetiva para o usuário.</p>
</div>
```

### 4. Criar Botão com Ícone

```html
<!-- Botão com ícone à esquerda -->
<a href="#" class="btn btn-primary">
    <i class="fas fa-download"></i>
    Baixar Material
</a>

<!-- Botão com ícone à direita -->
<a href="#" class="btn btn-secondary">
    Saiba Mais
    <i class="fas fa-arrow-right"></i>
</a>
```

```css
/* Estilo para botões com ícone */
.btn i {
    margin-right: 0.5rem;
    font-size: 1.1rem;
}

.btn i:last-child {
    margin-right: 0;
    margin-left: 0.5rem;
}
```

### 5. Adicionar Depoimento/Testimonial

```html
<!-- Cole em para-quem.html ou crie seção dedicada -->
<div class="testimonial hover-lift">
    <div class="testimonial-content">
        <div class="testimonial-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <p>"Seu depoimento completo aqui. Deve ser autêntico e específico sobre os benefícios que a pessoa obteve usando a plataforma."</p>
        <div class="testimonial-author">
            <img src="foto-autor.jpg" alt="Nome do Autor" class="author-photo">
            <div class="author-info">
                <strong>Nome Completo</strong>
                <span>Cargo/Função, Instituição</span>
            </div>
        </div>
    </div>
</div>
```

```css
/* Adicione em pages-styles.css */
.testimonial-rating {
    color: #F59E0B;
    margin-bottom: 1rem;
}

.testimonial-rating i {
    font-size: 1rem;
}

.author-photo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
}

.author-info {
    display: flex;
    flex-direction: column;
}

.testimonial-author {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
}
```

### 6. Adicionar Modal/Popup

```html
<!-- Adicione antes do fechamento do </body> -->
<div id="myModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Título do Modal</h2>
        <p>Conteúdo do modal aqui</p>
        <button class="btn btn-primary">Ação Principal</button>
    </div>
</div>
```

```css
/* Adicione em pages-styles.css */
.modal {
    display: none;
    position: fixed;
    z-index: 10000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    animation: fadeIn 0.3s;
}

.modal-content {
    background-color: var(--white);
    margin: 10% auto;
    padding: 2rem;
    border-radius: 16px;
    width: 90%;
    max-width: 500px;
    position: relative;
    animation: scaleIn 0.3s;
}

.close {
    position: absolute;
    right: 1.5rem;
    top: 1rem;
    font-size: 2rem;
    font-weight: 300;
    color: var(--text-gray);
    cursor: pointer;
    transition: color 0.3s;
}

.close:hover {
    color: var(--text-dark);
}
```

```javascript
// Adicione em pages-scripts.js
function initModal() {
    const modal = document.getElementById('myModal');
    const closeBtn = modal.querySelector('.close');
    
    // Função para abrir
    window.openModal = function() {
        modal.style.display = 'block';
    };
    
    // Função para fechar
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };
    
    // Fechar ao clicar fora
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

// Inicializar
initModal();

// Usar assim:
// <button onclick="openModal()">Abrir Modal</button>
```

### 7. Adicionar Badge/Tag

```html
<!-- Badges coloridos -->
<span class="badge badge-primary">Novo</span>
<span class="badge badge-success">Ativo</span>
<span class="badge badge-warning">Em Breve</span>
<span class="badge badge-danger">Esgotado</span>
```

```css
/* Adicione em pages-styles.css */
.badge {
    display: inline-block;
    padding: 0.35rem 0.8rem;
    font-size: 0.85rem;
    font-weight: 600;
    border-radius: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.badge-primary {
    background: var(--primary-color);
    color: var(--white);
}

.badge-success {
    background: #48BB78;
    color: var(--white);
}

.badge-warning {
    background: #F59E0B;
    color: var(--white);
}

.badge-danger {
    background: #E53E3E;
    color: var(--white);
}
```

### 8. Timeline/Linha do Tempo

```html
<div class="timeline">
    <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <h3>Título do Evento</h3>
            <span class="timeline-date">Janeiro 2025</span>
            <p>Descrição do que aconteceu neste momento.</p>
        </div>
    </div>
    
    <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <h3>Próximo Evento</h3>
            <span class="timeline-date">Março 2025</span>
            <p>Descrição do próximo marco importante.</p>
        </div>
    </div>
</div>
```

```css
/* Adicione em pages-styles.css */
.timeline {
    position: relative;
    padding: 2rem 0;
    margin: 3rem 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--primary-color);
}

.timeline-item {
    position: relative;
    padding-left: 60px;
    margin-bottom: 3rem;
}

.timeline-marker {
    position: absolute;
    left: 10px;
    top: 0;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: var(--primary-color);
    border: 4px solid var(--white);
    box-shadow: 0 0 0 3px rgba(74, 143, 212, 0.2);
}

.timeline-content {
    background: var(--white);
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.timeline-date {
    display: inline-block;
    background: rgba(74, 143, 212, 0.1);
    color: var(--primary-color);
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}
```

### 9. Accordion/Expansível

```html
<div class="accordion">
    <div class="accordion-item">
        <button class="accordion-header">
            Pergunta ou Título
            <i class="fas fa-chevron-down"></i>
        </button>
        <div class="accordion-content">
            <p>Conteúdo que será mostrado/escondido ao clicar no header.</p>
        </div>
    </div>
    
    <div class="accordion-item">
        <button class="accordion-header">
            Outra Pergunta
            <i class="fas fa-chevron-down"></i>
        </button>
        <div class="accordion-content">
            <p>Mais conteúdo expansível aqui.</p>
        </div>
    </div>
</div>
```

```css
/* Adicione em pages-styles.css */
.accordion-item {
    margin-bottom: 1rem;
    border: 1px solid rgba(74, 143, 212, 0.2);
    border-radius: 12px;
    overflow: hidden;
}

.accordion-header {
    width: 100%;
    padding: 1.2rem 1.5rem;
    background: var(--white);
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-dark);
    transition: all 0.3s;
}

.accordion-header:hover {
    background: rgba(74, 143, 212, 0.05);
}

.accordion-header i {
    transition: transform 0.3s;
    color: var(--primary-color);
}

.accordion-item.active .accordion-header i {
    transform: rotate(180deg);
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    background: rgba(74, 143, 212, 0.02);
}

.accordion-item.active .accordion-content {
    max-height: 500px;
    padding: 1.5rem;
}
```

```javascript
// Adicione em pages-scripts.js
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const wasActive = item.classList.contains('active');
            
            // Fechar todos
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('active');
            });
            
            // Abrir o clicado (se não estava aberto)
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });
}

// Adicione na função DOMContentLoaded
initAccordion();
```

### 10. Progress Bar/Barra de Progresso

```html
<div class="skill-bar">
    <div class="skill-info">
        <span class="skill-name">JavaScript</span>
        <span class="skill-percentage">85%</span>
    </div>
    <div class="skill-progress">
        <div class="skill-fill" data-width="85"></div>
    </div>
</div>
```

```css
/* Adicione em pages-styles.css */
.skill-bar {
    margin-bottom: 1.5rem;
}

.skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.skill-progress {
    height: 10px;
    background: rgba(74, 143, 212, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

.skill-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    border-radius: 10px;
    width: 0;
    transition: width 1.5s ease;
}

.skill-fill.animated {
    width: var(--fill-width);
}
```

```javascript
// Adicione em pages-scripts.js
function initSkillBars() {
    const skillFills = document.querySelectorAll('.skill-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.setProperty('--fill-width', width + '%');
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    });
    
    skillFills.forEach(fill => observer.observe(fill));
}

// Adicione na função DOMContentLoaded
initSkillBars();
```

## Dicas Finais

1. **Sempre teste em múltiplos navegadores** após adicionar código
2. **Mantenha consistência** com o design existente
3. **Use classes reutilizáveis** ao invés de duplicar código
4. **Comente seu código** para facilitar manutenção futura
5. **Valide HTML/CSS** antes de publicar

---

**Boas customizações!** 🎨✨
