// Homepage Specific - Include only on homepage
document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for role
    const words = ["Aspiring Web Developer ", "UI/UX Designer ", "Backend Developer ", "Game Developer "];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
        const currentWord = words[wordIndex];
        const display = document.querySelector(".role");

        if (!display) return;

        if (isDeleting) {
            display.innerHTML = currentWord.substring(0, charIndex--);
        } else {
            display.innerHTML = currentWord.substring(0, charIndex++);
        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            speed = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 500;
        }

        setTimeout(typeLoop, speed);
    }

    typeLoop();

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon. 😊');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Hero stagger animation
    setTimeout(() => {
        document.querySelector('.hero-content h1')?.classList.add('animate-hero');
        setTimeout(() => document.querySelector('.role')?.classList.add('animate-hero'), 300);
        setTimeout(() => document.querySelector('.hero-content p')?.classList.add('animate-hero'), 600);
        setTimeout(() => document.querySelector('.cta-buttons')?.classList.add('animate-hero'), 900);
    }, 500);
});

//=====================SENDING MESSAGE TO EMAIL=================================
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const btn = this.querySelector("button");
    btn.innerText = "Sending...";
    btn.disabled = true;

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_gfiz1qe", "template_xh0qr78", formData)
        .then(() => {
            alert("✅ Message sent successfully!");
            document.getElementById("contactForm").reset();
        })
        .catch((error) => {
            alert("❌ Failed to send message");
            console.error(error);
        })
        .finally(() => {
            btn.innerText = "Send Message";
            btn.disabled = false;
        });
});