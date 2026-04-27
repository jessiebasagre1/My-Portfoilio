// Skills Page Animations
document.addEventListener('DOMContentLoaded', function() {
    // Progress bar animations
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const progress = card.querySelector('.skill-progress');
            if (progress) {
                progress.style.width = card.style.getPropertyValue('--progress-width') || '0%';
            }
        });
        
        card.addEventListener('animationend', () => {
            const progress = card.querySelector('.skill-progress');
            if (progress) {
                progress.style.width = card.style.getPropertyValue('--progress-width') || '0%';
            }
        });
    });
});