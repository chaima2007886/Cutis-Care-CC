// Corrected and Consolidated JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Current Date Display
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = new Date().toLocaleDateString('en-US', options);
    }

    // Navigation Highlighting
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Skin Quiz Function
    function startQuiz() {
        const skinType = prompt("How does your skin feel in the morning?\n\n1. Oily\n2. Dry\n3. Combination\n4. Normal");
        
        let recommendation = '';
        switch(skinType) {
            case '1':
                recommendation = "Oily Skin: Look for oil-free, non-comedogenic products with niacinamide and salicylic acid.";
                break;
            case '2':
                recommendation = "Dry Skin: Seek hydrating products with hyaluronic acid and ceramides. Avoid alcohol-based products.";
                break;
            case '3':
                recommendation = "Combination Skin: Use different products for different areas. Lightweight moisturizers with balancing ingredients.";
                break;
            case '4':
                recommendation = "Normal Skin: Maintain with gentle cleansers and balanced hydration. Lucky you!";
                break;
            default:
                recommendation = "Please select a valid option (1-4) to get personalized recommendations.";
        }
        
        alert(`Skin Type Recommendation:\n\n${recommendation}`);
    }

    // Assign quiz button event
    const quizBtn = document.querySelector('.quiz button');
    if (quizBtn) {
        quizBtn.addEventListener('click', startQuiz);
    }

    // Card Hover Effects
    const cards = document.querySelectorAll('.category-card, .brand-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to our skincare shop!");
});
