// Script principal para o site de portfólio

document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const contactForm = document.getElementById('contactForm');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Toggle do menu mobile
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Efeito de scroll no header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Animação de entrada para elementos quando visíveis
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.section-title, .project-card, .skill-item, .about-content, .contact-container');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };

    // Adicionar classe para animação inicial
    document.querySelectorAll('.section-title, .project-card, .skill-item, .about-content, .contact-container').forEach(element => {
        element.classList.add('fade-in');
    });

    // Chamar animação no scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Chamar uma vez no carregamento

    // Efeito de digitação no título principal
    const nomeDestaque = document.querySelector('.nome-destaque');
    if (nomeDestaque) {
        const text = nomeDestaque.textContent;
        nomeDestaque.textContent = '';

        let i = 0;
        const typeWriter = function() {
            if (i < text.length) {
                nomeDestaque.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        setTimeout(typeWriter, 500);
    }

    // Efeito de digitação com apagar e loop no subtítulo
    function animarTextoComLoop(seletor, frases, velocidade = 100, delayEntreFrases = 2000) {
        const elemento = document.querySelector(seletor);
        if (!elemento) return;

        let fraseIndex = 0;
        let charIndex = 0;
        let apagando = false;

        function digitarOuApagar() {
            const fraseAtual = frases[fraseIndex];

            if (apagando) {
                elemento.textContent = fraseAtual.substring(0, charIndex--);
                if (charIndex < 0) {
                    apagando = false;
                    fraseIndex = (fraseIndex + 1) % frases.length;
                    setTimeout(digitarOuApagar, 500);
                    return;
                }
            } else {
                elemento.textContent = fraseAtual.substring(0, charIndex++);
                if (charIndex > fraseAtual.length) {
                    apagando = true;
                    setTimeout(digitarOuApagar, delayEntreFrases);
                    return;
                }
            }

            setTimeout(digitarOuApagar, velocidade);
        }

        digitarOuApagar();
    }

    const frases = [
        "Programador Front-End",
        "Desenvolvedor Front-End com foco em experiência e qualidade",
        "Engenheiro de Interfaces Dinâmicas e Acessíveis",
        "Arquiteto de Aplicações Web Modernas",
    ];

    animarTextoComLoop('.subtitulo', frases, 80, 1500);

    // Efeito de preenchimento das barras de habilidades
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0';

        setTimeout(() => {
            skill.style.transition = 'width 1s ease-in-out';
            skill.style.width = width;
        }, 500);
    });

    // Smooth scroll para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Estilos adicionais via JavaScript
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .fade-in.animate {
        opacity: 1;
        transform: translateY(0);
    }

    .menu-toggle.active i::before {
        content: "\\f00d";
    }

    /* Estilo para o cursor piscando no subtítulo */
    .subtitulo::after {
        content: '|';
        animation: blink 1s infinite;
        margin-left: 5px;
        font-weight: bold;
        color: #fff;
    }

    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
`;
document.head.appendChild(style);
