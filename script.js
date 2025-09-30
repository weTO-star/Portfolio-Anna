// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-progress');
const languageBars = document.querySelectorAll('.language-progress');

const animateBars = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
            observer.unobserve(bar);
        }
    });
};

const barObserver = new IntersectionObserver(animateBars, {
    threshold: 0.5
});

skillBars.forEach(bar => {
    barObserver.observe(bar);
});

languageBars.forEach(bar => {
    barObserver.observe(bar);
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other open items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // In a real application, you would send this data to a server
        // For this example, we'll just show an alert
        alert(`Merci ${name} ! Votre message a été envoyé. Je vous répondrai dès que possible.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Add scroll animation to elements
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
};

const scrollObserver = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1
});

// Observe elements for scroll animation
const animateElements = document.querySelectorAll(
    '.stat, .expertise-item, .quality-item, .education-card, .skill-item, .language-item, .contact-item, .social-link, .contact-form-container, .form-group, .faq-item, .timeline-item, .highlight'
);
animateElements.forEach(el => {
    scrollObserver.observe(el);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Initialize typing animation after page load
    initTypingAnimation();
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add glow effect to buttons on hover
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        const x = e.pageX - button.offsetLeft;
        const y = e.pageY - button.offsetTop;
        
        button.style.setProperty('--x', x + 'px');
        button.style.setProperty('--y', y + 'px');
    });
});

// Add current year to footer
const currentYear = new Date().getFullYear();
const yearElement = document.querySelector('.footer-bottom p');
if (yearElement) {
    yearElement.innerHTML = yearElement.innerHTML.replace('2023', currentYear);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Typing Animation for Data Entry Simulation
function initTypingAnimation() {
    const typingElements = document.querySelectorAll('.typing-content');
    
    if (typingElements.length > 0) {
        typingElements.forEach((element, index) => {
            // Different text for each typing element based on page
            const texts = [
                "> Initialisation du système...\n> Chargement des données administratives...\n> Saisie en cours...\n> Nom: RAHARINIRINA Éric Florent\n> Poste: Opératrice de Saisie\n> Spécialité: Données administratives\n> Statut: Disponible pour nouveaux projets\n> Précision: 100%\n> Confidentialité: Garantie\n> ...Saisie terminée",
                
                "> EXPÉRIENCE PROFESSIONNELLE\n> ManampyAnao (2024 - Présent)\n> - Saisie d'actes d'état civil\n> - Vérification de documents\n> - Transcription de données\n> Multi-services V&C (2023-2024)\n> - Saisie de données personnelles\n> - Gestion de dossiers\n> ...Expérience validée",
                
                "> COMPÉTENCES TECHNIQUES\n> Saisie de données: 100%\n> Bases de données: 95%\n> Plateformes en ligne: 90%\n> Traitement documents: 95%\n> LANGUES:\n> Français: Courant\n> Anglais: Intermédiaire\n> Malgache: Langue maternelle\n> ...Compétences certifiées",
                
                "> COORDONNÉES DE CONTACT\n> Nom: RAHARINIRINA Éric Florent\n> Téléphone: +261 321437231\n> Email: todisond@gmail.com\n> Adresse: Lot 01 APR/DF 180\n> Amparatanana\n> ...En attente de votre message"
            ];
            
            const text = texts[Math.min(index, texts.length - 1)];
            typeText(element, text, 50, index * 1000);
        });
    }
}

function typeText(element, text, speed, delay) {
    setTimeout(() => {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                // Handle new lines
                if (text.charAt(i) === '\n') {
                    element.innerHTML += '<br>';
                } else {
                    element.innerHTML += text.charAt(i);
                }
                i++;
                setTimeout(type, speed);
            } else {
                // Add blinking cursor at the end
                element.innerHTML += '<span class="typing-cursor"></span>';
            }
        }
        
        type();
    }, delay);
}

// Add floating animation to profile photo
const profilePhoto = document.querySelector('.profile-photo-container');
if (profilePhoto) {
    // Already handled by CSS animation, but we can add additional interactivity
    profilePhoto.addEventListener('mouseenter', () => {
        profilePhoto.style.animation = 'float 2s ease-in-out infinite';
    });
    
    profilePhoto.addEventListener('mouseleave', () => {
        profilePhoto.style.animation = 'float 6s ease-in-out infinite';
    });
}

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        hero.appendChild(particle);
    }
}

// Call particle creation on load
window.addEventListener('load', createParticles);

// Add CSS for particles
const style = document.createElement('style');
style.textContent = `
    .particle {
        position: absolute;
        background: rgba(106, 17, 203, 0.3);
        border-radius: 50%;
        pointer-events: none;
        animation: float-particle linear infinite;
    }
    
    @keyframes float-particle {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
