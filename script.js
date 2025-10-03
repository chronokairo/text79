// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initSmoothScrolling();
    initPricingToggle();
    initScrollAnimations();
    initHeaderScroll();
    initWhatsAppButton();
    initResourceTabs();
    initParallaxEffect();
    initCounterAnimation();
});

// Resource Tabs Functionality
function initResourceTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const resourceCategories = document.querySelectorAll('.resource-category');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetCategory = this.getAttribute('data-category');
            
            // Remove active class from all tabs and categories
            tabBtns.forEach(tab => tab.classList.remove('active'));
            resourceCategories.forEach(category => category.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show target category
            const targetElement = document.getElementById(targetCategory);
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });
}

// Mobile Menu Functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Pricing Toggle Functionality
function initPricingToggle() {
    const toggle = document.getElementById('pricing-toggle');
    const amounts = document.querySelectorAll('.amount[data-monthly][data-yearly]');
    
    if (toggle && amounts.length > 0) {
        toggle.addEventListener('change', function() {
            const isYearly = this.checked;
            
            amounts.forEach(amount => {
                const monthlyPrice = parseInt(amount.dataset.monthly);
                const yearlyPrice = parseInt(amount.dataset.yearly);
                
                if (isYearly) {
                    amount.textContent = yearlyPrice;
                    // Add discount badge animation
                    animateDiscountBadge();
                } else {
                    amount.textContent = monthlyPrice;
                }
            });
        });
    }
}

// Animate discount badge
function animateDiscountBadge() {
    const discountText = document.querySelector('.pricing-toggle small');
    if (discountText) {
        discountText.style.transform = 'scale(1.1)';
        discountText.style.color = '#48bb78';
        setTimeout(() => {
            discountText.style.transform = 'scale(1)';
            discountText.style.color = '';
        }, 300);
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Add staggered animation for grid items
                if (entry.target.classList.contains('audience-grid') || 
                    entry.target.classList.contains('diferencial-grid') ||
                    entry.target.classList.contains('recursos-grid') ||
                    entry.target.classList.contains('pricing-grid')) {
                    animateGridItems(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe cards for staggered animation
    const cards = document.querySelectorAll('.audience-card, .diferencial-item, .recurso-card, .pricing-card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Animate grid items with stagger effect
function animateGridItems(grid) {
    const items = grid.children;
    Array.from(items).forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// WhatsApp Button Functionality
function initWhatsAppButton() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-float a, .whatsapp-link');
    const phoneNumber = '5540228922'; // Replace with actual phone number
    const message = 'Olá! Gostaria de saber mais sobre o Escrita360';
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        });
    });
}

// Form Validation (if contact forms are added)
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            showFieldError(input, 'Este campo é obrigatório');
            isValid = false;
        } else {
            clearFieldError(input);
            
            // Email validation
            if (input.type === 'email' && !isValidEmail(input.value)) {
                showFieldError(input, 'Por favor, insira um email válido');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    clearFieldError(field);
    field.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(field) {
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Utility function to debounce scroll events
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

// Add CSS for animations and effects
const dynamicStyles = `
    .header {
        transition: transform 0.3s ease, background-color 0.3s ease;
    }
    
    .header.scrolled {
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .field-error {
        color: #e53e3e;
        font-size: 0.8rem;
        margin-top: 0.25rem;
    }
    
    .error {
        border-color: #e53e3e !important;
    }
    
    body.menu-open {
        overflow: hidden;
    }
    
    .pricing-card {
        transition: all 0.3s ease;
    }
    
    .pricing-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    .pricing-card.popular:hover {
        transform: scale(1.05) translateY(-5px);
    }
    
    /* Loading animation for buttons */
    .btn.loading {
        position: relative;
        color: transparent;
    }
    
    .btn.loading::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        top: 50%;
        left: 50%;
        margin-left: -8px;
        margin-top: -8px;
        border: 2px solid transparent;
        border-top-color: currentColor;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

// Add dynamic styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);

// Counter animation for statistics (if added)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    }
    
    updateCounter();
}

// Initialize tooltips (if needed)
function initTooltips() {
    const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
    
    tooltipTriggers.forEach(trigger => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = trigger.dataset.tooltip;
        document.body.appendChild(tooltip);
        
        trigger.addEventListener('mouseenter', function(e) {
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) + 'px';
            tooltip.style.top = rect.top - 40 + 'px';
            tooltip.classList.add('show');
        });
        
        trigger.addEventListener('mouseleave', function() {
            tooltip.classList.remove('show');
        });
    });
}

// Lazy loading for images (if added)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Initialize all additional features
document.addEventListener('DOMContentLoaded', function() {
    initTooltips();
    initLazyLoading();
});

// Parallax Effect for Hero Section
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroContent = hero.querySelector('.hero-content');
        const heroImage = hero.querySelector('.hero-image');
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / 800);
        }
        
        if (heroImage && scrolled < window.innerHeight) {
            heroImage.style.transform = `translateY(${scrolled * 0.15}px) scale(${1 - scrolled / 3000})`;
        }
    });
}

// Counter Animation for Stats
function initCounterAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                
                // Extract number from text (handles formats like "+50Mil", "+200", "+25%")
                const hasPlus = text.includes('+');
                const hasPercent = text.includes('%');
                const numMatch = text.match(/\d+/);
                
                if (numMatch) {
                    const finalNumber = parseInt(numMatch[0]);
                    animateCounter(target, 0, finalNumber, 2000, hasPlus, hasPercent, text);
                }
                
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element, start, end, duration, hasPlus, hasPercent, originalText) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        
        // Format the number based on original format
        let displayText = Math.floor(current).toString();
        
        if (originalText.includes('Mil')) {
            displayText = Math.floor(current) + 'Mil';
        }
        
        if (hasPlus) {
            displayText = '+' + displayText;
        }
        
        if (hasPercent) {
            displayText = displayText + '%';
        }
        
        element.textContent = displayText;
    }, 16);
}

// Export functions for external use
window.Text79 = {
    validateForm,
    animateCounter,
    showFieldError,
    clearFieldError,
    isValidEmail,
    initParallaxEffect,
    initCounterAnimation
};
