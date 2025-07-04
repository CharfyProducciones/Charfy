document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li a');
    
    // Menú móvil toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace (para el menú principal, si se usa en móvil)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // No es necesario cerrar el nav principal si mobileNav es el que se usa
        });
    });

    // Cerrar menú móvil al hacer clic en un enlace
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Animación de scroll suave para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste para el header fijo
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animación de aparición al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.equipment-item, .service-card, .pricing-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Iniciar animación al cargar la página
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // La validación del formulario de contacto ha sido eliminada ya que ahora usamos un enlace de correo electrónico directo
    
    // Las funciones de manejo de formulario han sido eliminadas ya que ahora usamos un enlace de correo electrónico directo
    
    // Efecto de cambio de color en el header al hacer scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
});