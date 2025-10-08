// Animações de tela para interface moderna

// Função para animar entrada de elementos
function animateIn(element, delay = 0) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease-out';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, delay);
}

// Função para animar saída de elementos
function animateOut(element, callback) {
    element.style.transition = 'all 0.4s ease-in';
    element.style.opacity = '0';
    element.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        if (callback) callback();
    }, 400);
}

// Animação de fade in/out
function fadeToggle(element) {
    if (element.style.opacity === '0' || !element.style.opacity) {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
    } else {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.visibility = 'hidden';
        }, 300);
    }
}

// Animação de slide lateral
function slideIn(element, direction = 'left') {
    const translateValue = direction === 'left' ? '-100%' : '100%';
    element.style.transform = `translateX(${translateValue})`;
    element.style.transition = 'transform 0.5s ease-out';
    
    setTimeout(() => {
        element.style.transform = 'translateX(0)';
    }, 10);
}

// Animação de pulsação
function pulse(element) {
    element.style.animation = 'pulse 0.6s ease-in-out';
    
    setTimeout(() => {
        element.style.animation = '';
    }, 600);
}

// Animação de rotação
function rotate(element, degrees = 360) {
    element.style.transition = 'transform 0.8s ease-in-out';
    element.style.transform = `rotate(${degrees}deg)`;
    
    setTimeout(() => {
        element.style.transform = 'rotate(0deg)';
    }, 800);
}

// Animação de escala
function scaleAnimation(element, scale = 1.1) {
    element.style.transition = 'transform 0.3s ease-out';
    element.style.transform = `scale(${scale})`;
    
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 300);
}

// Animação de loading
function showLoading(container) {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = '<div class="spinner"></div>';
    container.appendChild(loader);
    
    return loader;
}

function hideLoading(loader) {
    if (loader) {
        animateOut(loader, () => {
            loader.remove();
        });
    }
}

// Inicializar animações quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Animar elementos com classe 'animate-in'
    const elementsToAnimate = document.querySelectorAll('.animate-in');
    elementsToAnimate.forEach((element, index) => {
        animateIn(element, index * 100);
    });
    
    // Adicionar eventos de hover para animações
    const hoverElements = document.querySelectorAll('.hover-animate');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => scaleAnimation(element));
        element.addEventListener('mouseleave', () => scaleAnimation(element, 1));
    });
});

// CSS necessário para as animações
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .loader {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
    }
    
    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .animate-in {
        opacity: 0;
        transform: translateY(30px);
    }
    
    .hover-animate {
        cursor: pointer;
        transition: transform 0.3s ease;
    }
`;

document.head.appendChild(style);

// =================================
// CHATBOT FUNCTIONALITY
// =================================

document.addEventListener('DOMContentLoaded', function() {
    const mascotButton = document.getElementById('mascotButton');
    const chatbotModal = document.getElementById('chatbotModal');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const quickReplies = document.querySelectorAll('.quick-reply');

    // Verificar se os elementos existem
    if (!mascotButton || !chatbotModal) {
        console.warn('Elementos do chatbot não encontrados');
        return;
    }

    // Abrir chatbot ao clicar no mascote
    mascotButton.addEventListener('click', function() {
        chatbotModal.classList.add('active');
        chatbotInput.focus();
        // Adicionar animação
        chatbotModal.style.animation = 'slideInUp 0.3s ease-out';
    });

    // Fechar chatbot
    if (closeChatbot) {
        closeChatbot.addEventListener('click', function() {
            chatbotModal.style.animation = 'slideOutDown 0.3s ease-out';
            setTimeout(() => {
                chatbotModal.classList.remove('active');
            }, 300);
        });
    }

    // Fechar ao clicar fora do chatbot
    chatbotModal.addEventListener('click', function(e) {
        if (e.target === chatbotModal) {
            chatbotModal.style.animation = 'slideOutDown 0.3s ease-out';
            setTimeout(() => {
                chatbotModal.classList.remove('active');
            }, 300);
        }
    });

    // Enviar mensagem ao clicar no botão
    if (sendMessage && chatbotInput) {
        sendMessage.addEventListener('click', function() {
            sendUserMessage();
        });

        // Enviar mensagem ao pressionar Enter
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendUserMessage();
            }
        });
    }

    // Respostas rápidas
    quickReplies.forEach(button => {
        button.addEventListener('click', function() {
            const message = this.getAttribute('data-message');
            addUserMessage(message);
            respondToMessage(message);
        });
    });

    // Função para enviar mensagem do usuário
    function sendUserMessage() {
        const message = chatbotInput.value.trim();
        if (message) {
            addUserMessage(message);
            chatbotInput.value = '';
            respondToMessage(message);
        }
    }

    // Adicionar mensagem do usuário
    function addUserMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `
            <div class="message-content">
                ${text}
            </div>
        `;
        chatbotMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    // Adicionar mensagem do bot
    function addBotMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        messageDiv.innerHTML = `
            <div class="message-content">
                ${text}
            </div>
        `;
        chatbotMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    // Responder à mensagem
    function respondToMessage(message) {
        // Simular digitação
        setTimeout(() => {
            const lowerMessage = message.toLowerCase();
            let response = '';

            if (lowerMessage.includes('plano') || lowerMessage.includes('preço')) {
                response = 'Ótimo! Temos planos para Estudantes (R$ 29,90/mês), Professores (R$ 49,90/mês) e Escolas (sob consulta). Qual deles te interessa? <a href="precos.html" style="color: var(--accent-blue); text-decoration: underline;">Ver todos os planos</a>';
            } else if (lowerMessage.includes('funciona') || lowerMessage.includes('como')) {
                response = 'A Text79 é uma plataforma completa de desenvolvimento da escrita autorregulada. Oferecemos ferramentas de IA, feedback personalizado, e recursos específicos para estudantes, professores e escolas. <a href="recursos.html" style="color: var(--accent-blue); text-decoration: underline;">Conheça nossos recursos</a>';
            } else if (lowerMessage.includes('demo') || lowerMessage.includes('demonstra')) {
                response = 'Que ótimo! Vamos agendar uma demonstração personalizada. Por favor, preencha nosso formulário de contato e entraremos em contato em até 24h. <a href="contato.html" style="color: var(--accent-blue); text-decoration: underline;">Ir para contato</a>';
            } else if (lowerMessage.includes('estudante')) {
                response = 'Para estudantes, oferecemos o plano Individual por R$ 29,90/mês com acesso completo às ferramentas de IA, feedback personalizado e recursos de autorregulação. <a href="para-quem.html#estudantes" style="color: var(--accent-blue); text-decoration: underline;">Saiba mais</a>';
            } else if (lowerMessage.includes('professor') || lowerMessage.includes('docente')) {
                response = 'Professores têm acesso ao plano Profissional (R$ 49,90/mês) com ferramentas de gestão de turmas, banco de atividades e relatórios detalhados. <a href="para-quem.html#professores" style="color: var(--accent-blue); text-decoration: underline;">Saiba mais</a>';
            } else if (lowerMessage.includes('escola') || lowerMessage.includes('instituição')) {
                response = 'Para escolas, oferecemos planos corporativos personalizados com treinamento da equipe, suporte dedicado e relatórios institucionais. Entre em contato para uma proposta! <a href="contato.html" style="color: var(--accent-blue); text-decoration: underline;">Falar com consultor</a>';
            } else if (lowerMessage.includes('contato') || lowerMessage.includes('falar') || lowerMessage.includes('ajuda')) {
                response = 'Claro! Você pode nos contatar através do formulário, WhatsApp ou e-mail. Nossa equipe está pronta para ajudar! <a href="contato.html" style="color: var(--accent-blue); text-decoration: underline;">Falar conosco</a>';
            } else {
                response = 'Entendo! Como posso ajudar você melhor? Posso explicar sobre nossos planos, recursos ou agendar uma demonstração. O que você gostaria de saber?';
            }

            addBotMessage(response);
        }, 800);
    }

    // Rolar para o final das mensagens
    function scrollToBottom() {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
});

// Adicionar CSS para animações do chatbot
const chatbotStyle = document.createElement('style');
chatbotStyle.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideOutDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }
`;
document.head.appendChild(chatbotStyle);

// Floating Chatbot Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotButton = document.querySelector('.floating-chatbot');
    
    if (chatbotButton) {
        // Add pulse animation on page load
        setTimeout(() => {
            chatbotButton.classList.add('pulse');
        }, 1000);
        
        // Remove pulse after first interaction
        chatbotButton.addEventListener('click', function() {
            chatbotButton.classList.remove('pulse');
            
            // Add your chatbot opening logic here
            console.log('Chatbot button clicked!');
            
            // Example: You can open a chat widget, modal, or redirect to a chat page
            // For now, we'll show an alert as placeholder
            alert('Em breve! O chat será implementado aqui.');
            
            // Optional: Add a bounce animation on click
            this.style.animation = 'bounce 0.5s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
        
        // Optional: Make button appear with animation after page load
        setTimeout(() => {
            chatbotButton.style.opacity = '1';
            chatbotButton.style.transform = 'scale(1)';
        }, 500);
        
        // Initialize button as hidden for animation
        chatbotButton.style.opacity = '0';
        chatbotButton.style.transform = 'scale(0.5)';
        chatbotButton.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    }
});

// Bounce animation for chatbot button
const bounceStyle = document.createElement('style');
bounceStyle.textContent = `
    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        25% { transform: scale(0.9); }
        50% { transform: scale(1.1); }
        75% { transform: scale(0.95); }
    }
`;
document.head.appendChild(bounceStyle);

// Chat Bot Functionality
document.addEventListener('DOMContentLoaded', function() {
    const robotButton = document.getElementById('robotButton');
    const chatModal = document.getElementById('chatModal');
    const closeChat = document.getElementById('closeChat');
    const chatInput = document.getElementById('chatInput');
    const sendChat = document.getElementById('sendChat');
    const chatMessages = document.getElementById('chatMessages');
    const quickOptions = document.querySelectorAll('.quick-option');

    // Respostas automáticas do bot
    const botResponses = {
        'planos': 'Temos planos para estudantes, professores e escolas! Visite nossa página de Preços para ver todas as opções. 💰',
        'recursos': 'Nossa plataforma oferece correção por IA, feedback personalizado, banco de redações e muito mais! Confira a página de Recursos. 📚',
        'contato': 'Entre em contato conosco através do formulário na página de Contato ou pelo WhatsApp. Estamos prontos para ajudar! 📞',
        'default': 'Desculpe, não entendi sua pergunta. Você pode usar os botões rápidos ou visitar nossas páginas para mais informações! 😊'
    };

    // Abrir chat
    if (robotButton) {
        robotButton.addEventListener('click', function(e) {
            e.preventDefault();
            chatModal.classList.add('active');
        });
    }

    // Fechar chat
    if (closeChat) {
        closeChat.addEventListener('click', function() {
            chatModal.classList.remove('active');
        });
    }

    // Fechar chat ao clicar fora
    document.addEventListener('click', function(e) {
        if (chatModal && chatModal.classList.contains('active')) {
            if (!chatModal.contains(e.target) && !robotButton.contains(e.target)) {
                chatModal.classList.remove('active');
            }
        }
    });

    // Função para adicionar mensagem
    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isUser ? 'user' : 'bot'}`;
        messageDiv.innerHTML = `<div class="message-content">${content}</div>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Enviar mensagem
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, true);
            chatInput.value = '';

            // Simular resposta do bot
            setTimeout(() => {
                addMessage(botResponses['default']);
            }, 500);
        }
    }

    // Eventos de envio
    if (sendChat) {
        sendChat.addEventListener('click', sendMessage);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Botões de opções rápidas
    quickOptions.forEach(option => {
        option.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const buttonText = this.textContent.trim();
            
            addMessage(buttonText, true);
            
            setTimeout(() => {
                addMessage(botResponses[action] || botResponses['default']);
            }, 500);
        });
    });
});

// ==========================================
// FUNCIONALIDADE DOS BOTÕES DE TAB (RECURSOS)
// ==========================================

// Tabs de recursos (Para Estudantes, Para Professores, Para Escolas)
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
                    
                    // Anima entrada do conteúdo
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
                }
            });
        });
    }
});

// ==========================================
// FUNCIONALIDADE FAQ ACORDEÃO
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-accordion-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const header = item.querySelector('.faq-accordion-header');
            const content = item.querySelector('.faq-accordion-content');
            
            if (header && content) {
                // Define altura inicial do conteúdo
                if (item.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
                
                header.addEventListener('click', function(e) {
                    e.preventDefault();
                    const isActive = item.classList.contains('active');
                    
                    // Fecha todos os itens
                    faqItems.forEach(faqItem => {
                        const faqContent = faqItem.querySelector('.faq-accordion-content');
                        faqItem.classList.remove('active');
                        if (faqContent) {
                            faqContent.style.maxHeight = '0px';
                        }
                    });
                    
                    // Se não estava ativo, abre o item clicado
                    if (!isActive) {
                        item.classList.add('active');
                        content.style.maxHeight = content.scrollHeight + 'px';
                        
                        // Scroll suave até o item (opcional)
                        setTimeout(() => {
                            item.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'nearest' 
                            });
                        }, 300);
                    }
                });
            }
        });
        
        // Abre o primeiro item por padrão
        if (faqItems[0]) {
            const firstContent = faqItems[0].querySelector('.faq-accordion-content');
            faqItems[0].classList.add('active');
            if (firstContent) {
                firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
            }
        }
        
        // Recalcula altura ao redimensionar a janela
        window.addEventListener('resize', function() {
            faqItems.forEach(item => {
                if (item.classList.contains('active')) {
                    const content = item.querySelector('.faq-accordion-content');
                    if (content) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                }
            });
        });
    }
});

// ========================================
// Text79 - Pages Specific Scripts
// Professional Animations & Interactions
// ========================================

// ========================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS (ENHANCED)
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
        if (el.style.opacity !== '0') {
            el.style.opacity = '0';
        }
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
    if (!document.querySelector('style[data-animation-styles]')) {
        style.setAttribute('data-animation-styles', 'true');
        document.head.appendChild(style);
    }
});

// ========================================
// HEADER SCROLL BEHAVIOR (ENHANCED)
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    if (!header) return;
    
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
// MOBILE MENU TOGGLE (ENHANCED)
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
// SMOOTH SCROLL FOR ANCHOR LINKS (ENHANCED)
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
// COUNTER ANIMATION (ENHANCED)
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
// PRICING TOGGLE (MONTHLY/YEARLY) (ENHANCED)
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const pricingToggle = document.getElementById('pricing-toggle');
    
    if (pricingToggle) {
        console.log('Pricing toggle encontrado e inicializado');
        
        pricingToggle.addEventListener('change', function() {
            const isYearly = this.checked;
            console.log('Toggle alterado para:', isYearly ? 'Anual' : 'Mensal');
            
            // Seleciona todos os elementos de preço com data-monthly e data-yearly
            const priceElements = document.querySelectorAll('[data-monthly]');
            console.log('Elementos de preço encontrados:', priceElements.length);
            
            priceElements.forEach(element => {
                const monthlyPrice = element.getAttribute('data-monthly');
                const yearlyPrice = element.getAttribute('data-yearly');
                
                console.log('Mudando preço de', monthlyPrice, 'para', isYearly ? yearlyPrice : monthlyPrice);
                
                // Adiciona animação de fade
                element.style.opacity = '0';
                element.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    // Atualiza o valor do preço
                    element.textContent = isYearly ? yearlyPrice : monthlyPrice;
                    
                    // Retorna animação
                    element.style.opacity = '1';
                    element.style.transform = 'scale(1)';
                }, 200);
            });
            
            // Adiciona estilo de transição suave
            priceElements.forEach(element => {
                element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            });
        });
    } else {
        console.log('Pricing toggle não encontrado na página');
    }
});

// ========================================
// RESOURCE TABS (RECURSOS PAGE) (ENHANCED)
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
// CONTACT FORM VALIDATION (ENHANCED)
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
// HOVER LIFT EFFECT (ENHANCED)
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
// ACTIVE NAV LINK HIGHLIGHT (ENHANCED)
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
// BACK TO TOP BUTTON (ENHANCED)
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
        if (!document.querySelector('style[data-back-to-top]')) {
            style.setAttribute('data-back-to-top', 'true');
            document.head.appendChild(style);
        }
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

// ========================================
// CAROUSEL PARA QUEM - TARGET AUDIENCE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const carouselSlides = document.querySelector('.carousel-slides');
    const carouselBox = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const tabs = document.querySelectorAll('.carousel-tab');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const paginationDots = document.querySelectorAll('.pagination-dot');
    
    // Verifica se o carrossel existe na página
    if (!carouselSlides || slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoplayInterval;
    let isTransitioning = false;
    
    // Função para ajustar a altura do container
    function adjustCarouselHeight(index) {
        if (!carouselBox || !slides[index]) return;
        
        const activeSlide = slides[index];
        const slideHeight = activeSlide.scrollHeight;
        carouselBox.style.height = slideHeight + 'px';
    }
    
    // Função para ir para um slide específico
    function goToSlide(index, skipAnimation = false) {
        if (isTransitioning && !skipAnimation) return;
        
        // Normalizar o índice
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        
        isTransitioning = true;
        
        // Remover classe active de todos
        slides.forEach(slide => slide.classList.remove('active'));
        tabs.forEach(tab => tab.classList.remove('active'));
        paginationDots.forEach(dot => dot.classList.remove('active'));
        
        // Adicionar classe active ao slide atual
        slides[index].classList.add('active');
        tabs[index].classList.add('active');
        paginationDots[index].classList.add('active');
        
        // Mover o carrossel
        const translateX = -index * 100;
        carouselSlides.style.transform = `translateX(${translateX}%)`;
        
        // Ajustar altura do container
        adjustCarouselHeight(index);
        
        currentSlide = index;
        
        // Resetar flag após animação
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
        
        // Resetar autoplay
        resetAutoplay();
    }
    
    // Ajustar altura inicial
    setTimeout(() => {
        adjustCarouselHeight(0);
    }, 100);
    
    // Ajustar altura quando a janela é redimensionada
    window.addEventListener('resize', () => {
        adjustCarouselHeight(currentSlide);
    });
    
    // Próximo slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Slide anterior
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Event listeners para as tabs
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Event listeners para os botões de navegação
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    // Event listeners para os dots de paginação
    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        // Só funciona se o carrossel estiver visível
        const carousel = document.querySelector('.target-audience-carousel');
        if (!carousel) return;
        
        const rect = carousel.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isVisible) return;
        
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Touch/Swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (carouselSlides) {
        carouselSlides.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        carouselSlides.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left
                nextSlide();
            } else {
                // Swipe right
                prevSlide();
            }
        }
    }
    
    // Autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            nextSlide();
        }, 8000); // 8 segundos entre slides
    }
    
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }
    
    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }
    
    // Iniciar autoplay se o carrossel estiver visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAutoplay();
            } else {
                stopAutoplay();
            }
        });
    }, { threshold: 0.3 });
    
    const carouselContainer = document.querySelector('.target-audience-carousel');
    if (carouselContainer) {
        observer.observe(carouselContainer);
    }
    
    // Pausar autoplay quando o mouse está sobre o carrossel
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoplay);
        carouselContainer.addEventListener('mouseleave', () => {
            const rect = carouselContainer.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible) {
                startAutoplay();
            }
        });
    }
    
    // Pausar autoplay quando a aba não está ativa
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoplay();
        } else {
            const rect = carouselContainer.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible) {
                startAutoplay();
            }
        }
    });
    
    // Inicializar primeiro slide
    goToSlide(0, true);
    
    // Animações de entrada para elementos do slide
    function animateSlideContent(slideIndex) {
        const slide = slides[slideIndex];
        const elements = slide.querySelectorAll('.slide-header, .slide-description, .slide-stats, .slide-features, .slide-features-grid, .slide-tags, .slide-testimonial, .slide-cta');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.5s ease-out';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100 + (index * 80));
        });
    }
    
    // Observar quando o carrossel entra na viewport para animar
    const contentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSlideContent(currentSlide);
                contentObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    if (carouselContainer) {
        contentObserver.observe(carouselContainer);
    }
});
