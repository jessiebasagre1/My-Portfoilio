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
        document.getElementById('mobileMenu').classList.remove('active');
    });
});

// // Navbar background on scroll
// window.addEventListener('scroll', () => {
//     const navbar = document.getElementById('navbar');
//     if (window.scrollY > 100) {
//         navbar.style.background = 'rgba(255, 255, 255, 0.98)';
//     } else {
//         navbar.style.background = 'rgba(255, 255, 255, 0.95)';
//     }
// });

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Dark/Light mode toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    themeToggle.querySelector('i').className = newTheme === 'dark' 
        ? 'fas fa-sun' 
        : 'fas fa-moon';
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
themeToggle.querySelector('i').className = savedTheme === 'dark' 
    ? 'fas fa-sun' 
    : 'fas fa-moon';

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }else{
            entry.target.classList.remove('animated');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Navbar shrink on scroll for mobile
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.padding = '1rem 0';
    }
});
//Add animation on Role
const words = ["Aspiring Web Developer 💻 ", "UI Designer 🎨 ", "Backend Developer ⚙️ ","Game Developer 🎮 "];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentWord = words[wordIndex];
  const display = document.querySelector(".role");

  if (isDeleting) {
    display.innerHTML = currentWord.substring(0, charIndex--);
  } else {
    display.innerHTML = currentWord.substring(0, charIndex++);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    speed = 1000; 
  } else if (isDeleting && charIndex === 1) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeLoop, speed);
}

typeLoop();
// Add loading animation to skill bars


// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

//================================================
//================================================

const projectsData = [
    {
        title: "Simple CRUD App",
        description: "A fully functional CRUD application for product management. Features include adding new products with images, editing existing products, deleting products, and real-time data persistence. Built with a modern MERN stack architecture.",
        images: [
            "./images/simpleCrudApp1.png",
            "./images/simpleCrudApp2.png",
            "./images/simpleCrudApp3.png"
        ],
        liveDemo: "https://jessiebasagre1.github.io/simple-crud-app/",
        github: "https://github.com/jessiebasagre1/simple-crud-app",
        tech: ["HTML5", "Node.js", "MongoDB", "CSS3"]
    },
    {
        title: "Task Management App",
        description: "Modern task management with drag & drop, real-time updates, team collaboration, task categorization, priority levels, and progress tracking.",
        images: [
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1000&h=500&fit=crop",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=500&fit=crop",
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&h=500&fit=crop"
        ],
        liveDemo: "#",
        github: "#",
        tech: ["Vue.js", "Firebase", "Tailwind CSS"]
    },
    {
        title: "Data Dashboard",
        description: "Interactive dashboard with responsive charts, real-time analytics, data filtering, export functionality, and customizable widgets.",
        images: [
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1000&h=500&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&h=500&fit=crop",
            "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=1000&h=500&fit=crop"
        ],
        liveDemo: "#",
        github: "#",
        tech: ["React", "Chart.js", "D3.js", "Express"]
    }
];

let currentSlide = 0;
let galleryExpanded = false;
let slideshowInterval = null;
let slideshowActive = true; // 👈 AUTO-START ENABLED

function initProjectModal() {
    if (!document.getElementById('projectModal')) {
        createModal();
    }
    setupEventListeners();
}

function createModal() {
    const modal = document.createElement('div');
    modal.id = 'projectModal';
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-gallery" onclick="toggleGalleryExpand(event)">
                    <img id="slide1" src="" alt="">
                    <img id="slide2" src="" alt="">
                    <img id="slide3" src="" alt="">
                    <button class="gallery-nav prev" onclick="prevSlide(event)"><i class="fas fa-chevron-left"></i></button>
                    <button class="gallery-nav next" onclick="nextSlide(event)"><i class="fas fa-chevron-right"></i></button>
                    <div class="gallery-dots">
                        <div class="gallery-dot active" onclick="goToSlide(0, event)"></div>
                        <div class="gallery-dot" onclick="goToSlide(1, event)"></div>
                        <div class="gallery-dot" onclick="goToSlide(2, event)"></div>
                    </div>
                    <button class="slideshow-toggle active" onclick="toggleSlideshow(event)" title="Pause Auto-play">
                        <i class="fas fa-pause"></i>
                    </button>
                    <button class="expand-btn" onclick="toggleGalleryExpand(event)">
                        <i class="fas fa-expand-alt"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <h2 id="modalTitle"></h2>
                    <p id="modalDescription"></p>
                    <div class="modal-controls">
                        <div class="modal-tech" id="modalTech"></div>
                        <div class="modal-links">
                            <a id="modalLiveDemo" class="btn btn-primary" href="#" target="_blank">Live Demo</a>
                            <a id="modalGithub" class="btn btn-secondary" href="#" target="_blank">View Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function openModal(index = 0) {
    initProjectModal();
    const project = projectsData[index];
    
    // Set content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = project.tech.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    document.getElementById('modalLiveDemo').href = project.liveDemo;
    document.getElementById('modalGithub').href = project.github;
    
    // Load images
    loadGalleryImages(project.images);
    
    // Reset gallery state & START AUTO-SLIDESHOW 👈
    currentSlide = 0;
    galleryExpanded = false;
    startSlideshow(); // 👈 AUTO-START
    
    // Show modal
    const modalEl = document.getElementById('projectModal');
    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Update gallery display
    updateGallery();
}

function loadGalleryImages(images) {
    const slides = ['slide1', 'slide2', 'slide3'];
    slides.forEach((slideId, index) => {
        const img = document.getElementById(slideId);
        if (img && images[index]) {
            img.src = images[index];
            img.onload = () => updateGallery();
        }
    });
}

function updateGallery() {
    const gallery = document.querySelector('.modal-gallery');
    if (!gallery) return;
    
    const slides = gallery.querySelectorAll('img');
    const dots = gallery.querySelectorAll('.gallery-dot');
    
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide(e) {
    if (e) e.stopPropagation();
    currentSlide = (currentSlide + 1) % 3;
    updateGallery();
}

function prevSlide(e) {
    if (e) e.stopPropagation();
    currentSlide = (currentSlide + 2) % 3;
    updateGallery();
}

function goToSlide(index, e) {
    if (e) e.stopPropagation();
    currentSlide = index;
    updateGallery();
    // Auto-resume slideshow after brief pause 👈
    setTimeout(() => {
        if (slideshowActive) startSlideshow();
    }, 2000);
}

function toggleGalleryExpand(e) {
    if (e) e.stopPropagation();
    const gallery = document.querySelector('.modal-gallery');
    if (!gallery) return;
    
    galleryExpanded = !galleryExpanded;
    gallery.classList.toggle('expanded', galleryExpanded);
    
    const expandBtn = document.querySelector('.expand-btn');
    if (expandBtn) {
        expandBtn.innerHTML = galleryExpanded ? 
            '<i class="fas fa-compress-alt"></i>' : 
            '<i class="fas fa-expand-alt"></i>';
    }
}

function startSlideshow() {
    stopSlideshow(); // Clear existing interval first
    slideshowInterval = setInterval(() => {
        nextSlide(null);
    }, 5000); // 3 seconds per slide
    slideshowActive = true;
    updateSlideshowButton();
}

function stopSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
    slideshowActive = false;
    updateSlideshowButton();
}

function toggleSlideshow(e) {
    if (e) e.stopPropagation();
    if (slideshowActive) {
        stopSlideshow();
    } else {
        startSlideshow();
    }
}

function updateSlideshowButton() {
    const btn = document.querySelector('.slideshow-toggle');
    if (btn) {
        btn.classList.toggle('active', slideshowActive);
        const icon = btn.querySelector('i');
        if (slideshowActive) {
            icon.className = 'fas fa-pause';
            btn.title = 'Pause Auto-play';
        } else {
            icon.className = 'fas fa-play';
            btn.title = 'Resume Auto-play';
        }
    }
}

function closeModal() {
    stopSlideshow();
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.add('exiting');
        setTimeout(() => {
            modal.classList.remove('active', 'exiting');
            document.body.style.overflow = '';
            const gallery = document.querySelector('.modal-gallery');
            if (gallery) {
                gallery.classList.remove('expanded');
            }
        }, 400);
    }
}

function setupEventListeners() {
    const projectTitles = document.querySelectorAll('.project-title');
    projectTitles.forEach((title, index) => {
        title.style.cursor = 'pointer';
        title.style.transition = 'color 0.3s ease';
        title.removeAttribute('onclick');
        title.addEventListener('click', () => openModal(index));
        
        title.addEventListener('mouseenter', () => {
            title.style.color = 'var(--primary-color)';
        });
        title.addEventListener('mouseleave', () => {
            title.style.color = '';
        });
    });
    
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('projectModal');
        if (!modal || !modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowRight') {
            nextSlide(null);
        } else if (e.key === 'ArrowLeft') {
            prevSlide(null);
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectModal);
} else {
    initProjectModal();
}

// Expose functions globally
window.openModal = openModal;
window.closeModal = closeModal;
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.goToSlide = goToSlide;
window.toggleGalleryExpand = toggleGalleryExpand;
window.toggleSlideshow = toggleSlideshow;