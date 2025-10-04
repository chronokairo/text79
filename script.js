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