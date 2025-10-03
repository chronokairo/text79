// ========================================
// SCRIPTS PARA PÁGINAS SEPARADAS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas as funcionalidades
    initPageAnimations();
    initCounterAnimations();
    initFormValidation();
    initStickyTabs();
    initPageTransitions();
    initScrollReveal();
});

// ========== ANIMAÇÕES DE ENTRADA DA PÁGINA ==========
function initPageAnimations() {
    // Animar elementos ao carregar a página
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-right');
    
    fadeElements.forEach((element, index) => {
        element.style.opacity = '0';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            
            if (element.classList.contains('fade-in-up')) {
                element.style.transform = 'translateY(0)';
            } else if (element.classList.contains('fade-in-right')) {
                element.style.transform = 'translateX(0)';
            }
        }, index * 100);
    });
}

// ========== ANIMAÇÃO DE NÚMEROS/COUNTERS ==========
function initCounterAnimations() {
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length === 0) return;
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 segundos
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = formatNumber(Math.floor(current));
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = formatNumber(target);
        }
    };
    
    updateCounter();
}

function formatNumber(num) {
    if (num >= 1000) {
        return '+' + (num / 1000).toFixed(0) + 'Mil';
    }
    return '+' + num;
}

// ========== VALIDAÇÃO DE FORMULÁRIO DE CONTATO ==========
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateContactForm(this)) {
            // Simular envio do formulário
            showSuccessMessage();
            this.reset();
        }
    });
    
    // Validação em tempo real
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

function validateContactForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    let isValid = true;
    let errorMessage = '';
    
    // Limpar erro anterior
    removeFieldError(field);
    
    // Validar campo obrigatório
    if (field.hasAttribute('required') && !value) {
        errorMessage = 'Este campo é obrigatório';
        isValid = false;
    }
    // Validar email
    else if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'E-mail inválido';
            isValid = false;
        }
    }
    // Validar telefone
    else if (field.id === 'telefone' && value) {
        const phoneRegex = /^[\d\s\-\(\)]+$/;
        if (!phoneRegex.test(value) || value.length < 10) {
            errorMessage = 'Telefone inválido';
            isValid = false;
        }
    }
    // Validar checkbox
    else if (fieldType === 'checkbox' && field.hasAttribute('required')) {
        if (!field.checked) {
            errorMessage = 'Você deve aceitar para continuar';
            isValid = false;
        }
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remover mensagem de erro anterior se existir
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Adicionar nova mensagem de erro
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e53e3e';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    field.parentElement.appendChild(errorDiv);
    
    // Adicionar borda vermelha
    field.style.borderColor = '#e53e3e';
}

function removeFieldError(field) {
    field.classList.remove('error');
    const errorMessage = field.parentElement.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
    field.style.borderColor = '';
}

function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 2rem 3rem;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            z-index: 10000;
            text-align: center;
            animation: scaleIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        ">
            <i class="fas fa-check-circle" style="font-size: 3rem; color: #48bb78; margin-bottom: 1rem;"></i>
            <h3 style="margin-bottom: 0.5rem; color: #1a1a1a;">Mensagem Enviada!</h3>
            <p style="color: #4a4a4a; margin-bottom: 0;">Retornaremos em breve.</p>
        </div>
    `;
    
    document.body.appendChild(successDiv);
    
    // Remover após 3 segundos
    setTimeout(() => {
        successDiv.style.opacity = '0';
        successDiv.style.transition = 'opacity 0.3s';
        setTimeout(() => successDiv.remove(), 300);
    }, 3000);
}

// ========== TABS FIXAS (STICKY) ==========
function initStickyTabs() {
    const tabs = document.querySelector('.sticky-tabs');
    if (!tabs) return;
    
    const tabsOffsetTop = tabs.offsetTop;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= tabsOffsetTop - 80) {
            tabs.style.position = 'fixed';
            tabs.style.top = '80px';
            tabs.style.width = '100%';
            tabs.style.maxWidth = '1200px';
            tabs.style.left = '50%';
            tabs.style.transform = 'translateX(-50%)';
        } else {
            tabs.style.position = 'sticky';
            tabs.style.top = '80px';
            tabs.style.width = '';
            tabs.style.left = '';
            tabs.style.transform = '';
        }
    });
}

// ========== TRANSIÇÕES DE PÁGINA ==========
function initPageTransitions() {
    // Adicionar efeito de fade in ao carregar
    document.body.style.opacity = '0';
    
    window.addEventListener('load', () => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    });
    
    // Adicionar efeito de fade out ao navegar
    const links = document.querySelectorAll('a:not([target="_blank"])');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar links âncora e externos
            if (href.startsWith('#') || href.startsWith('http') || href === '#') {
                return;
            }
            
            e.preventDefault();
            document.body.style.opacity = '0';
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
}

// ========== SCROLL REVEAL ANIMATIONS ==========
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Animar itens filhos com delay
                const children = entry.target.querySelectorAll('[data-delay]');
                children.forEach(child => {
                    const delay = child.getAttribute('data-delay');
                    setTimeout(() => {
                        child.classList.add('revealed');
                    }, parseInt(delay));
                });
            }
        });
    }, observerOptions);
    
    // Observar elementos com animação
    const animatedElements = document.querySelectorAll('.hover-lift, .recurso-detailed-card, .audience-detailed-card, .pricing-card, .faq-item, .story-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        scrollObserver.observe(element);
    });
}

// Adicionar classe 'revealed' para mostrar elementos
const style = document.createElement('style');
style.textContent = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ========== SMOOTH SCROLL APRIMORADO ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== PARALLAX EFFECT ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.page-hero::before, .hero::before');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========== CARD TILT EFFECT (OPCIONAL) ==========
function initCardTilt() {
    const cards = document.querySelectorAll('.hover-lift');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Inicializar tilt effect (comentado por padrão - descomente se quiser usar)
// initCardTilt();

// ========== LOADING ANIMATION ==========
window.addEventListener('load', () => {
    // Remover loading se existir
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
});

// ========== UTILITY FUNCTIONS ==========

// Debounce function para otimizar scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function para otimizar eventos frequentes
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Aplicar throttle no scroll para performance
const optimizedScroll = throttle(() => {
    // Código otimizado de scroll aqui
}, 100);

window.addEventListener('scroll', optimizedScroll);

console.log('✨ Animações e interatividade carregadas com sucesso!');
