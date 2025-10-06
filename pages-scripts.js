// ========================================
// Text79 - Pages Specific Scripts
// Professional Animations & Interactions
// ========================================

// ========================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Configuração do Intersection Observer para animações ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                // Opcional: desconectar após animar para performance
                // animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todos os elementos com classes de animação
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-right, .fade-in-left');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        animationObserver.observe(el);
    });

    // Adicionar estilo para elementos animados
    const style = document.createElement('style');
    style.textContent = `
        .fade-in.animate-visible,
        .fade-in-up.animate-visible,
        .fade-in-right.animate-visible,
        .fade-in-left.animate-visible {
            opacity: 1 !important;
            animation-play-state: running;
        }
    `;
    document.head.appendChild(style);
});

// ========================================
// HEADER SCROLL BEHAVIOR
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    let scrollTimeout;

    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScrollTop = scrollTop;
        }, 10);
    }, { passive: true });
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Fechar menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// ========================================
// COUNTER ANIMATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length === 0) return;

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = function() {
                    current += increment;
                    if (current < target) {
                        entry.target.textContent = Math.floor(current).toLocaleString('pt-BR');
                        requestAnimationFrame(updateCounter);
                    } else {
                        entry.target.textContent = target.toLocaleString('pt-BR');
                        entry.target.classList.add('counted');
                    }
                };

                updateCounter();
            }
        });
    }, observerOptions);

    counters.forEach(counter => counterObserver.observe(counter));
});

// ========================================
// PRICING TOGGLE (MONTHLY/YEARLY)
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const pricingToggle = document.getElementById('pricingToggle');
    const monthlyPrices = document.querySelectorAll('[data-monthly]');
    const yearlyPrices = document.querySelectorAll('[data-yearly]');

    if (pricingToggle) {
        pricingToggle.addEventListener('change', function() {
            const isYearly = this.checked;

            monthlyPrices.forEach((element, index) => {
                const yearlyElement = yearlyPrices[index];
                
                if (isYearly) {
                    element.style.display = 'none';
                    if (yearlyElement) yearlyElement.style.display = 'block';
                } else {
                    element.style.display = 'block';
                    if (yearlyElement) yearlyElement.style.display = 'none';
                }
            });

            // Animar transição
            document.querySelectorAll('.pricing-card').forEach(card => {
                card.style.animation = 'fadeInUp 0.5s ease-out';
            });
        });
    }
});

// ========================================
// RESOURCE TABS (RECURSOS PAGE)
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const resourceCategories = document.querySelectorAll('.resource-category');

    if (tabButtons.length > 0 && resourceCategories.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetCategory = this.getAttribute('data-category');

                // Remove active class de todos os botões
                tabButtons.forEach(btn => btn.classList.remove('active'));

                // Adiciona active class ao botão clicado
                this.classList.add('active');

                // Remove active class de todas as categorias
                resourceCategories.forEach(category => {
                    category.classList.remove('active');
                });

                // Adiciona active class à categoria correspondente
                const targetElement = document.getElementById(targetCategory);
                if (targetElement) {
                    targetElement.classList.add('active');

                    // Anima entrada do conteúdo com stagger
                    const cards = targetElement.querySelectorAll('.recurso-detailed-card');
                    cards.forEach((card, index) => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.transition = 'all 0.5s ease-out';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    });

                    // Scroll suave para a seção
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        });
    }
});

// ========================================
// FAQ ACCORDION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-accordion-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const header = item.querySelector('.faq-accordion-header');

            if (header) {
                header.addEventListener('click', function() {
                    const isActive = item.classList.contains('active');

                    // Fecha todos os itens
                    faqItems.forEach(faqItem => {
                        faqItem.classList.remove('active');
                    });

                    // Se não estava ativo, abre o item clicado
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
            }
        });

        // Abre o primeiro item por padrão
        if (faqItems[0]) {
            faqItems[0].classList.add('active');
        }
    }
});

// ========================================
// CONTACT FORM VALIDATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validação básica
            const nome = contactForm.querySelector('#nome');
            const email = contactForm.querySelector('#email');
            const mensagem = contactForm.querySelector('#mensagem');

            let isValid = true;

            // Limpar erros anteriores
            contactForm.querySelectorAll('.error-message').forEach(error => error.remove());

            // Validar nome
            if (nome && nome.value.trim().length < 3) {
                showError(nome, 'Por favor, insira um nome válido');
                isValid = false;
            }

            // Validar email
            if (email && !isValidEmail(email.value)) {
                showError(email, 'Por favor, insira um e-mail válido');
                isValid = false;
            }

            // Validar mensagem
            if (mensagem && mensagem.value.trim().length < 10) {
                showError(mensagem, 'A mensagem deve ter pelo menos 10 caracteres');
                isValid = false;
            }

            if (isValid) {
                // Aqui você pode adicionar a lógica de envio do formulário
                showSuccessMessage();
                contactForm.reset();
            }
        });
    }

    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#dc3545';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        input.parentElement.appendChild(errorDiv);
        input.style.borderColor = '#dc3545';
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            animation: slideInRight 0.5s ease-out;
        `;
        successDiv.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        document.body.appendChild(successDiv);

        setTimeout(() => {
            successDiv.style.animation = 'slideOutRight 0.5s ease-out';
            setTimeout(() => successDiv.remove(), 500);
        }, 3000);
    }
});

// ========================================
// PARALLAX EFFECT FOR HERO SECTIONS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const heroSections = document.querySelectorAll('.hero, .page-hero, .para-quem-hero');

    if (heroSections.length > 0) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;

            heroSections.forEach(hero => {
                if (hero.getBoundingClientRect().top < window.innerHeight) {
                    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
                }
            });
        }, { passive: true });
    }
});

// ========================================
// HOVER LIFT EFFECT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const hoverElements = document.querySelectorAll('.hover-lift');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// ========================================
// STAGGERED ANIMATIONS FOR GRIDS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const grids = document.querySelectorAll('.diferencial-grid, .features-grid, .steps-grid, .testimonials-grid, .pricing-grid');

    grids.forEach(grid => {
        const items = grid.children;
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    Array.from(items).forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('fade-in-up');
                            item.style.animationDelay = '0s';
                        }, index * 100);
                    });
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.2 });

        observer.observe(grid);
    });
});

// ========================================
// LAZY LOADING FOR IMAGES
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback para navegadores sem suporte
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    }
});

// ========================================
// ACTIVE NAV LINK HIGHLIGHT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'home.html') ||
            (currentPage === 'home.html' && linkPage === 'home.html')) {
            link.classList.add('active');
        }
    });
});

// ========================================
// DELAY CLASSES FOR ANIMATIONS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const delayElements = document.querySelectorAll('[class*="delay-"]');

    delayElements.forEach(element => {
        const classes = element.className.split(' ');
        const delayClass = classes.find(cls => cls.startsWith('delay-'));
        
        if (delayClass) {
            const delayNumber = delayClass.split('-')[1];
            const delayTime = parseInt(delayNumber) * 150; // 150ms per delay unit
            
            element.style.animationDelay = `${delayTime}ms`;
        }
    });
});

// ========================================
// BACK TO TOP BUTTON
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Criar botão se não existir
    let backToTopBtn = document.querySelector('.back-to-top');
    
    if (!backToTopBtn) {
        backToTopBtn = document.createElement('button');
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
        document.body.appendChild(backToTopBtn);

        // Adicionar estilos
        const style = document.createElement('style');
        style.textContent = `
            .back-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: var(--primary-blue, #4070B7);
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 999;
                box-shadow: 0 4px 12px rgba(64, 112, 183, 0.3);
            }
            
            .back-to-top.visible {
                opacity: 1;
                visibility: visible;
            }
            
            .back-to-top:hover {
                background: var(--dark-blue, #1A5B94);
                transform: translateY(-4px);
                box-shadow: 0 6px 16px rgba(64, 112, 183, 0.4);
            }
            
            @media (max-width: 768px) {
                .back-to-top {
                    bottom: 20px;
                    right: 20px;
                    width: 45px;
                    height: 45px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Mostrar/ocultar botão baseado no scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Scroll suave ao topo
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Debounce function for scroll events
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

// Throttle function for performance
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

// ========================================
// CONSOLE MESSAGE (DEVELOPER EASTER EGG)
// ========================================

console.log('%c✨ Text79 - Plataforma de Escrita Autorregulada', 
    'color: #4070B7; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Desenvolvido com tecnologia de ponta para transformar a educação', 
    'color: #61C2D3; font-size: 14px;');
console.log('%c💡 Interessado em fazer parte do time? Entre em contato!', 
    'color: #39A1DB; font-size: 12px;');
