document.addEventListener('DOMContentLoaded', function() {
    console.log('Enhanced Projects JS initializing...');

    // ENHANCED Projects Data with detailed info
    const projectsData = [
        {
            title: "Simple CRUD App",
            description: "A fully functional product management system with real-time CRUD operations, image upload, and MongoDB integration. Perfect for inventory management with a modern, responsive interface.",
            shortDesc: "A Simple Product management with real-time CRUD.",
            features: [
                "Real-time product CRUD operations",
                "Image upload & storage with MongoDB GridFS",
                "Responsive design for all devices",
                "Search & filter functionality",
                "Data validation & error handling",
                "Axios-powered API communication"
            ],
            challenges: [
                "File upload handling with MongoDB GridFS",
                "Real-time data synchronization",
                "Responsive image optimization",
                "Form validation across multiple fields"
            ],
            learnings: [
                "MongoDB aggregation pipelines for search",
                "GridFS for large file storage",
                "Advanced state management patterns",
                "Real-time UI updates with WebSockets"
            ],
            tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB", "Axios"],
            category: 'backend',
            stats: {
                products: 150,
                operations: 5000,
                uptime: "99.9%"
            },
            progress: 95,
            images: [
                "../pages/images/simpleCrudApp1.png",
                "../pages/images/simpleCrudApp2.png", 
                "../pages/images/simpleCrudApp3.png"
            ],
            links: {
                live: "https://your-live-url.com",
                github: "https://github.com/jessiebasagre1/simple-crud-app"
            }
        },
        {
            title: "Cala-Cesta",
            description: "Complete e-commerce platform for local pasalubong shops in Calabanga. Features product catalog, order management, inventory tracking, and automated business reporting.",
            shortDesc: "Convenient platform for ordering local pasalubong products.",
            features: [
                "Full e-commerce product catalog",
                "Real-time inventory management",
                "Order tracking & status updates",
                "Automated sales reporting",
                "Local payment integration ready",
                "Admin dashboard with analytics"
            ],
            challenges: [
                "Complex inventory synchronization",
                "Multi-role authentication system",
                "Real-time order notifications",
                "Localized payment processing"
            ],
            learnings: [
                "Advanced MongoDB schema design",
                "Role-based access control (RBAC)",
                "Real-time notifications architecture",
                "Business logic optimization"
            ],
            tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB"],
            category: 'fullstack',
            stats: {
                products: 250,
                orders: 1200,
                shops: 15
            },
            progress: 85,
            images: [
                "../pages/images/cala-cesta1.png",
                "../pages/images/cala-cesta2.png",
                "../pages/images/cala-cesta3.png"
            ]
        },
        {
            title: "Data Dashboard",
            description: "Modern admin dashboard for e-commerce analytics with interactive charts, real-time data updates, and responsive design optimized for business decision-making.",
            shortDesc: "Admin Dashboard for product & inventory management.",
            features: [
                "Interactive data visualizations",
                "Real-time metrics updates",
                "Responsive table with sorting/filtering",
                "Sales analytics & trends",
                "Order management interface",
                "Mobile-first responsive design"
            ],
            challenges: [
                "Complex responsive grid layouts",
                "Interactive chart animations",
                "Real-time data table updates",
                "Mobile-first dashboard optimization"
            ],
            learnings: [
                "Advanced CSS Grid & Flexbox",
                "Custom data visualization techniques",
                "Performance optimization for large datasets",
                "Mobile-first responsive patterns"
            ],
            tech: ["HTML5", "CSS3", "JavaScript"],
            category: 'frontend',
            stats: {
                metrics: 25,
                charts: 8,
                tables: 3
            },
            progress: 100,
            images: [
                "../pages/images/dashboard1.png",
                "../pages/images/dashboard2.png",
                "../pages/images/dashboard3.png"
            ],
            links: {
                live: "https://jessiebasagre1.github.io/data-dashboard/",
                github: "https://github.com/jessiebasagre1/data-dashboard"
            }
        },
        {
            title: "TypePhoon",
            description: "Educational typing game that teaches typhoon preparedness while improving typing skills. Features dynamic difficulty, educational content, and engaging gameplay.",
            shortDesc: "Typing game for typhoon awareness & safety.",
            features: [
                "Dynamic typing challenges",
                "Progressive difficulty system",
                "Educational typhoon content",
                "Score tracking & leaderboards",
                "Visual/audio feedback system",
                "Mobile touch controls"
            ],
            challenges: [
                "Precise input timing mechanics",
                "Progressive difficulty balancing",
                "Educational content integration",
                "Cross-platform input handling"
            ],
            learnings: [
                "Game loop optimization in Unity",
                "Input handling across devices",
                "Difficulty curve design",
                "Educational gamification techniques"
            ],
            tech: ["C#", "Unity Game Engine", "Gemini AI"],
            category: 'game',
            stats: {
                words: 500,
                levels: 10,
                wpm: "85+"
            },
            progress: 75,
            images: [
                "../pages/images/typephoon-1.png",
                "../pages/images/typephoon-2.png",
                "../pages/images/typephoon-3.png"
            ]
        },
        {
            title: "Simple Calculator App",
            description: "Minimalist calculator with smooth animations, keyboard support, and responsive design. Perfect example of clean UI/UX with robust JavaScript functionality.",
            shortDesc: "Simple calculator with minimalist design.",
            features: [
                "Smooth button animations",
                "Keyboard number support",
                "Responsive across all devices",
                "Error handling & validation",
                "Modern glassmorphism design",
                "Touch-friendly interface"
            ],
            challenges: [
                "Precise touch target sizing",
                "Smooth number input parsing",
                "Responsive typography scaling",
                "Animation performance optimization"
            ],
            learnings: [
                "Advanced CSS animations",
                "Keyboard event handling",
                "Touch gesture optimization",
                "Glassmorphism design patterns"
            ],
            tech: ["HTML5", "CSS3", "JavaScript"],
            category: 'frontend',
            stats: {
                operations: "All basic",
                precision: "16 digits"
            },
            progress: 100,
            images: [
                "../pages/images/calc1.png",
                "../pages/images/calc2.png",
                "../pages/images/calc3.png"
            ],
            links: {
                live: "https://jessiebasagre1.github.io/simple-calculator/",
                github: "https://github.com/jessiebasagre1/simple-calculator"
            }
        },
        {
            title: "Dodge Game Prototype",
            description: "Endless runner prototype with progressive difficulty, collision detection, score tracking, and smooth gameplay mechanics built in Unity.",
            shortDesc: "Prototype game where player dodges obstacles.",
            features: [
                "Progressive difficulty scaling",
                "Collision detection system",
                "Score & high score tracking",
                "Smooth player movement",
                "Particle effects & feedback",
                "Responsive control scheme"
            ],
            challenges: [
                "Precise collision detection",
                "Progressive speed scaling",
                "Smooth difficulty curve",
                "Performance optimization"
            ],
            learnings: [
                "Unity physics optimization",
                "Object pooling techniques",
                "Progressive difficulty design",
                "Game feel refinement"
            ],
            tech: ["C#", "Unity Game Engine"],
            category: 'game',
            stats: {
                obstacles: 1000,
                highscore: "2500+",
                speed: "15 units/sec"
            },
            progress: 90,
            images: [
                "../pages/images/dodgegame.gif",
                "../pages/images/dodge-1.png",
                "../pages/images/dodge-thumbnail.png"
            ]
        }
    ];

    // Global State
    let currentSlide = 0;
    let slideshowInterval = null;
    let currentModalProjectIndex = -1;

    // DOM Elements
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectTitles = document.querySelectorAll('.project-title');

    // Filter functionality (unchanged)
    function filterProjects(category) {
        projectCards.forEach(card => {
            const projectIndex = parseInt(card.dataset.project);
            const project = projectsData[projectIndex];
            if (!project) return;

            if (category === 'all' || project.category === category) {
                card.style.display = 'block';
                card.classList.add('animated');
            } else {
                card.style.display = 'none';
                card.classList.remove('animated');
            }
        });
    }

    function initFilters() {
        filterButtons.forEach((button) => {
            const filterHandler = function(e) {
                e.preventDefault();
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                filterProjects(button.dataset.filter);
            };
            button.removeEventListener('click', filterHandler);
            button.addEventListener('click', filterHandler);
        });
    }

    // ENHANCED Modal Creation
    function createEnhancedModal() {
        const existingModal = document.getElementById('projectModal');
        if (existingModal) existingModal.remove();
        
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
                    
                    <div class="modal-stats" id="modalStats"></div>
                    
                    <div class="modal-progress">
                        <span>Project Progress: <span id="progressText">0%</span></span>
                        <div class="progress-bar">
                            <div class="progress-fill" id="progressFill"></div>
                        </div>
                    </div>

                    <div class="demo-links" id="demoLinks"></div>

                    <div class="modal-features" id="modalFeatures"></div>
                    <div class="modal-challenges" id="modalChallenges"></div>
                    <div class="modal-learnings" id="modalLearnings"></div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        attachModalEvents();
        return modal;
    }

    // Populate enhanced modal content
    function populateModal(project) {
        // Basic info
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        
        // Tech stack
        document.getElementById('modalTech').innerHTML = project.tech.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        // Stats
        const statsHtml = `
            <div class="stat-box">
                <div class="stat-number">${project.stats ? Object.values(project.stats)[0] || 'N/A' : 'N/A'}</div>
                <div class="stat-label">${Object.keys(project.stats || {})[0] || 'Metric'}</div>
            </div>
        `;
        document.getElementById('modalStats').innerHTML = statsHtml;

        // Progress bar
        const progress = project.progress || 0;
        document.getElementById('progressText').textContent = `${progress}%`;
        setTimeout(() => {
            document.getElementById('progressFill').style.width = `${progress}%`;
        }, 500);

        // Demo links
        const linksHtml = project.links ? `
            ${project.links.live ? `<a href="${project.links.live}" class="demo-btn demo-live" target="_blank">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>` : ''}
            ${project.links.github ? `<a href="${project.links.github}" class="demo-btn demo-code" target="_blank">
                <i class="fab fa-github"></i> View Code
            </a>` : ''}
        ` : '';
        document.getElementById('demoLinks').innerHTML = linksHtml;

        // Features
        document.getElementById('modalFeatures').innerHTML = `
            <div class="modal-section-title">
                <i class="fas fa-star"></i> Key Features
            </div>
            <div class="feature-list">
                ${project.features.map(feature => `<div class="feature-item">${feature}</div>`).join('')}
            </div>
        `;

        // Challenges
        document.getElementById('modalChallenges').innerHTML = `
            <div class="modal-section-title">
                <i class="fas fa-mountain"></i> Technical Challenges
            </div>
            <div class="challenge-list">
                ${project.challenges.map(challenge => `<div class="challenge-item">${challenge}</div>`).join('')}
            </div>
        `;

        // Learnings
        document.getElementById('modalLearnings').innerHTML = `
            <div class="modal-section-title">
                <i class="fas fa-lightbulb"></i> Key Learnings
            </div>
            <div class="learning-list">
                ${project.learnings.map(learning => `<div class="learning-item">${learning}</div>`).join('')}
            </div>
        `;
    }

    // Modal event handlers (same as before but simplified)
    function attachModalEvents() {
        document.getElementById('modalClose').onclick = closeModal;
        document.querySelector('#projectModal .modal-overlay').onclick = closeModal;
        document.getElementById('nextSlide').onclick = (e) => { e.stopPropagation(); nextSlide(); };
        document.getElementById('prevSlide').onclick = (e) => { e.stopPropagation(); prevSlide(); };
        
        document.getElementById('galleryDots').onclick = (e) => {
            const dot = e.target.closest('.gallery-dot');
            if (dot) {
                e.stopPropagation();
                goToSlide(parseInt(dot.dataset.slide));
            }
        };
    }

    // Modal control functions (unchanged)
    function openProjectModal(projectIndex) {
        const project = projectsData[projectIndex];
        if (!project) return;

        const modal = createEnhancedModal();
        currentModalProjectIndex = projectIndex;

        // Load images
        const slideIds = ['modalSlide1', 'modalSlide2', 'modalSlide3'];
        project.images.forEach((imageSrc, index) => {
            if (index < slideIds.length) {
                document.getElementById(slideIds[index]).src = imageSrc;
            }
        });

        populateModal(project);
        currentSlide = 0;
        updateGallery();

        setTimeout(() => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (project.title !== "Dodge Game Prototype") startSlideshow();
        }, 10);
    }

    function closeModal() {
        const modal = document.getElementById('projectModal');
        if (modal) {
            modal.classList.remove('active');
            stopSlideshow();
        }
        document.body.style.overflow = '';
    }

    // Slideshow functions (unchanged)
    function nextSlide() { currentSlide = (currentSlide + 1) % 3; updateGallery(); }
    function prevSlide() { currentSlide = (currentSlide - 1 + 3) % 3; updateGallery(); }
    function goToSlide(index) { currentSlide = index; updateGallery(); }
    function updateGallery() {
        document.querySelectorAll('#projectModal .modal-slide').forEach((slide, i) => 
            slide.classList.toggle('active', i === currentSlide));
        document.querySelectorAll('#projectModal .gallery-dot').forEach((dot, i) => 
            dot.classList.toggle('active', i === currentSlide));
    }
    function startSlideshow() { stopSlideshow(); slideshowInterval = setInterval(nextSlide, 4000); }
    function stopSlideshow() { if (slideshowInterval) clearInterval(slideshowInterval); }

    // Event listeners
    projectTitles.forEach(title => {
        title.addEventListener('click', function(e) {
            e.preventDefault();
            const projectIndex = parseInt(this.closest('.project-card').dataset.project);
            openProjectModal(projectIndex);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Initialize
    initFilters();
    filterProjects('all');

    // Expose functions
    window.openProjectModal = openProjectModal;
    window.closeModal = closeModal;

    console.log('✅ Enhanced Projects JS loaded perfectly!');
});

