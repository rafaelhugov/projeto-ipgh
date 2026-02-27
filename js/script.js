document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Sticky Header ---
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. Mobile Menu Toggle ---
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtns = document.querySelectorAll('.close-menu');

    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });

    // --- 3. Scroll Reveal Animation ---
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    };

    // Trigger once on load
    revealOnScroll();
    // Trigger on scroll
    window.addEventListener('scroll', revealOnScroll);

    // --- 4. Active Link State on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

});
