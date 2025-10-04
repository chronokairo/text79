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