document.addEventListener('DOMContentLoaded', function() {
    console.log('Projects JS initializing...');

    // Projects Data - Matches your HTML exactly
    const projectsData = [
        {
            title: "Simple CRUD App",
            description: "A simple product management app for adding, updating, and deleting products. This app contains buttons for managing products which makes easy for the user to manage the inventory. It is Made with HTML,CSS, Javascript, Node.js and MongoDB. The data is connected on MongoDB which provides real-time data for managing products. Axios was used to communicate with APIs and it simplifies fetching data from servers and sending data to backend services.",
            images: [
                "images/simpleCrudApp1.png",
                "images/simpleCrudApp2.png", 
                "images/simpleCrudApp3.png"
            ],
            tech: ["HTML5", "CSS3", "Javascript", "Node.js","MongoDB"],
            category: 'backend'
        },
        {
            title: "Cala-Cesta",
            description: "CALA-CESTA is a web-based food ordering and delivery system for souvenir shops in Calabanga, Camarines Sur. It helps customers easily browse and order pasalubong products online. It also helps shop owners manage their products, track sales, and monitor inventory. The system updates everything automatically, making business operations faster, easier, and more organized while promoting local products.",
            images: [
                "images/cala-cesta1.png",
                "images/cala-cesta1.png",
                "images/cala-cesta1.png"
            ],
            tech: ["HTML5", "CSS3", "Javascript","Node.js", "MongoDB"],
            category: 'fullstack'
        },
        {
            title: "Data Dashboard",
            description: "This is a frontend admin dashboard for an online souvenir shop. It is designed to help store managers easily view sales, manage orders, and track business activity. The project is built using HTML, CSS, and JavaScript, focusing on a clean and user-friendly interface. It includes an overview of key data like total sales, active orders, and recent transactions, along with a table for managing orders. This project highlights my skills in creating responsive layouts and designing simple, modern user interfaces for web applications.",
            images: [
                "images/dashboard1.png",
                "images/dashboard2.png",
                "images/dashboard3.png"
            ],
            tech: ["HTML5", "CSS3", "Javascript"],
            category: 'frontend'
        },
        {
            title: "TypePhoon",
            description: "Typephoon is an interactive typing game designed to improve users’ typing speed and accuracy while promoting awareness about typhoons and disaster preparedness. The game challenges players to quickly type words related to weather conditions, emergency responses, and safety measures before time runs out. With its engaging gameplay and educational content, Typephoon combines skill development with real-world relevance, helping users stay informed while enhancing their typing abilities. The project demonstrates the integration of user-friendly design, dynamic game logic, and purposeful learning through technology.",
            images: [
                "images/typephoon-1.png",
                "images/typephoon-2.png",
                "images/typephoon-3.png"
            ],
            tech: ["C#", "Unity Game Engine", "Gemini"],
            category: 'game'
        },
        {
            title: "Simple Calculator App",
            description: "Simple Calculator App made with HTML, CSS, and Javascript.",
            images: [
                "images/calc1.png",
                "images/calc2.png",
                "images/calc3.png"
            ],
            tech: ["HTML5", "CSS3", "Javascript"],
            category: 'frontend'
        }
    ];

    // Global State
    let currentSlide = 0;
    let slideshowActive = true;
    let slideshowInterval = null;
    let currentModalProjectIndex = -1;

    // DOM Elements with null checks
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectTitles = document.querySelectorAll('.project-title'); // ✅ NEW: Only titles

    // Filter function
    function filterProjects(category) {
        if (!projectCards.length) {
            console.warn('No project cards found');
            return;
        }
        projectCards.forEach(card => {
            const projectIndex = parseInt(card.dataset.project);
            const project = projectsData[projectIndex];
            const projectCategory = project ? project.category : 'fullstack';
            
            if (category === 'all' || projectCategory === category) {
                card.style.display = 'block';
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 600);
            }
        });
    }

    // Filter buttons event handling
    function initFilters() {
        filterButtons.forEach((button) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Remove active from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active to clicked button
                this.classList.add('active');
                
                const filterCategory = this.dataset.filter;
                filterProjects(filterCategory);
            });
        });
    }

    // Modal Creation - SIMPLIFIED (No links)
    function createProjectModal() {
        const existingModal = document.getElementById('projectModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        const modal = document.createElement('div');
        modal.id = 'projectModal';
        modal.className = 'project-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close" id="modalClose">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-gallery">
                    <img class="modal-slide active" id="modalSlide1" src="" alt="">
                    <img class="modal-slide" id="modalSlide2" src="" alt="">
                    <img class="modal-slide" id="modalSlide3" src="" alt="">
                    <button class="gallery-nav prev" id="prevSlide">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="gallery-nav next" id="nextSlide">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <div class="gallery-dots" id="galleryDots">
                        <div class="gallery-dot active" data-slide="0"></div>
                        <div class="gallery-dot" data-slide="1"></div>
                        <div class="gallery-dot" data-slide="2"></div>
                    </div>
                </div>
                <div class="modal-body">
                    <h2 id="modalTitle"></h2>
                    <p id="modalDescription"></p>
                    <div class="modal-tech" id="modalTech"></div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        attachModalEvents();
        return modal;
    }

    // Modal Event Handlers
    function attachModalEvents() {
        const modalClose = document.getElementById('modalClose');
        const modalOverlay = document.querySelector('#projectModal .modal-overlay');
        const nextSlideBtn = document.getElementById('nextSlide');
        const prevSlideBtn = document.getElementById('prevSlide');
        const galleryDots = document.getElementById('galleryDots');

        if (modalClose) modalClose.onclick = closeModal;
        if (modalOverlay) modalOverlay.onclick = closeModal;
        if (nextSlideBtn) nextSlideBtn.onclick = (e) => { e.stopPropagation(); nextSlide(); };
        if (prevSlideBtn) prevSlideBtn.onclick = (e) => { e.stopPropagation(); prevSlide(); };
        
        if (galleryDots) {
            galleryDots.onclick = (e) => {
                const dot = e.target.closest('.gallery-dot');
                if (dot) {
                    e.stopPropagation();
                    const slideIndex = parseInt(dot.dataset.slide);
                    goToSlide(slideIndex);
                }
            };
        }
    }

    // Open Project Modal - SIMPLIFIED
    function openProjectModal(projectIndex) {
        console.log('Opening modal for project:', projectIndex);
        
        const project = projectsData[projectIndex];
        if (!project) {
            console.error('Project not found:', projectIndex);
            return;
        }

        const modal = createProjectModal();
        currentModalProjectIndex = projectIndex;

        // Populate content (NO LINKS)
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        
        // Tech stack
        const techContainer = document.getElementById('modalTech');
        techContainer.innerHTML = project.tech.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        // Images
        const slideIds = ['modalSlide1', 'modalSlide2', 'modalSlide3'];
        project.images.forEach((imageSrc, index) => {
            if (index < slideIds.length) {
                const img = document.getElementById(slideIds[index]);
                if (img) {
                    img.src = imageSrc;
                    img.alt = `${project.title} - Slide ${index + 1}`;
                }
            }
        });

        // Reset slideshow & show
        currentSlide = 0;
        slideshowActive = true;
        startSlideshow();
        updateGallery();
        
        setTimeout(() => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 10);
    }

    // Modal Controls
    function closeModal() {
        const modal = document.getElementById('projectModal');
        if (modal) {
            modal.classList.remove('active');
            stopSlideshow();
        }
        document.body.style.overflow = '';
        currentModalProjectIndex = -1;
    }

    function nextSlide() {
        const slides = document.querySelectorAll('#projectModal .modal-slide');
        if (slides.length > 0) {
            currentSlide = (currentSlide + 1) % slides.length;
            updateGallery();
        }
    }

    function prevSlide() {
        const slides = document.querySelectorAll('#projectModal .modal-slide');
        if (slides.length > 0) {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateGallery();
        }
    }

    function goToSlide(index) {
        currentSlide = index;
        updateGallery();
    }

    function updateGallery() {
        const slides = document.querySelectorAll('#projectModal .modal-slide');
        const dots = document.querySelectorAll('#projectModal .gallery-dot');
        
        slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
    }

    function startSlideshow() {
        stopSlideshow();
        slideshowInterval = setInterval(nextSlide, 4000);
    }

    function stopSlideshow() {
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
        }
    }

    // ✅ FIXED: Click handler ONLY on project TITLES
    projectTitles.forEach(title => {
        title.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const projectIndex = parseInt(this.closest('.project-card').dataset.project);
            if (!isNaN(projectIndex)) {
                openProjectModal(projectIndex);
            }
        });
    });

    // ✅ REMOVED: Document-level click handler that intercepted buttons

    // Keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });

    // Initialize everything
    initFilters();
    filterProjects('all');

    // Expose global functions
    window.openProjectModal = openProjectModal;
    window.closeModal = closeModal;
    
    console.log('✅ Projects JS loaded - Live Demo/GitHub buttons work perfectly!');
});