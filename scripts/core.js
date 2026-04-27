// Core Functionality - Include on ALL pages
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu) mobileMenu.classList.remove('active');
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Dark/Light mode toggle
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            themeToggle.querySelector('i').className = newTheme === 'dark' 
                ? 'fas fa-sun' 
                : 'fas fa-moon';
            
            localStorage.setItem('theme', newTheme);
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', savedTheme);
        themeToggle.querySelector('i').className = savedTheme === 'dark' 
            ? 'fas fa-sun' 
            : 'fas fa-moon';
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                navbar.style.padding = '0.5rem 0';
            } else {
                navbar.classList.remove('scrolled');
                navbar.style.padding = '1rem 0';
            }
        }
    });

    // Universal Scroll Animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = index * 150;
                entry.target.style.animationDelay = `${delay}ms`;
                entry.target.classList.add('animated');
            } else {
                entry.target.classList.remove('animated');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll, .education-card, .stat-item, .project-card, .skill-item').forEach(el => {
        observer.observe(el);
    });
});