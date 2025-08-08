document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks) navLinks.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });
    
    // Back to top button (for About page)
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');
        const successMessage = document.getElementById('success-message');
        
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Validate form on submit
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Reset error states
            nameError.style.display = 'none';
            emailError.style.display = 'none';
            messageError.style.display = 'none';
            nameInput.classList.remove('error');
            emailInput.classList.remove('error');
            messageInput.classList.remove('error');
            successMessage.classList.remove('show');
            
            // Validate name
            if (nameInput.value.trim() === '') {
                nameError.style.display = 'block';
                nameInput.classList.add('error');
                isValid = false;
            }
            
            // Validate email
            if (emailInput.value.trim() === '') {
                emailError.style.display = 'block';
                emailError.textContent = 'Please enter your email';
                emailInput.classList.add('error');
                isValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                emailError.style.display = 'block';
                emailError.textContent = 'Please enter a valid email address';
                emailInput.classList.add('error');
                isValid = false;
            }
            
            // Validate message
            if (messageInput.value.trim() === '') {
                messageError.style.display = 'block';
                messageInput.classList.add('error');
                isValid = false;
            }
            
            // If form is valid
            if (isValid) {
                // Clear form
                contactForm.reset();
                
                // Show success message
                successMessage.classList.add('show');
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 5000);
            }
        });
        
        // Real-time validation for name
        nameInput.addEventListener('input', function() {
            if (nameInput.value.trim() !== '') {
                nameError.style.display = 'none';
                nameInput.classList.remove('error');
            }
        });
        
        // Real-time validation for email
        emailInput.addEventListener('input', function() {
            if (emailInput.value.trim() !== '' && emailRegex.test(emailInput.value.trim())) {
                emailError.style.display = 'none';
                emailInput.classList.remove('error');
            }
        });
        
        // Real-time validation for message
        messageInput.addEventListener('input', function() {
            if (messageInput.value.trim() !== '') {
                messageError.style.display = 'none';
                messageInput.classList.remove('error');
            }
        });
    }
});