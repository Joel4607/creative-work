/**
 * ExoApe Website JavaScript
 * Handles all interactive functionalities
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functionality
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initHeaderScroll();
    initPortfolioEffects();
    initContactForm();
    initNewsletterForm();
});

/**
 * Mobile Menu Toggle Functionality
 */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Transform hamburger into X
            const spans = hamburger.querySelectorAll('span');
            spans.forEach(span => {
                span.classList.toggle('active');
            });
            
            // Add animation to the hamburger
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (
                navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !hamburger.contains(e.target)
            ) {
                navLinks.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close menu when a link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
}

/**
 * Smooth Scrolling for Navigation Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate header height for offset
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Intersection Observer for Scroll Animations
 */
function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const fadeElements = document.querySelectorAll('.section-header, .portfolio-item, .service-item, .about-content, .contact-content');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            entry.target.classList.add('animate-fade-in');
            
            // Add slide-up animation to child elements with delay
            if (entry.target.tagName === 'SECTION') {
                const children = entry.target.querySelectorAll('.portfolio-item, .service-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-slide-up');
                    }, 100 * index);
                });
            }
            
            observer.unobserve(entry.target);
        });
    }, appearOptions);
    
    sections.forEach(section => {
        appearOnScroll.observe(section);
    });
    
    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });
}

/**
 * Header Background Change on Scroll
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            header.style.boxShadow = 'none';
        }
        
        // Parallax effect for hero section
        if (heroSection) {
            const scrollPosition = window.scrollY;
            heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });
}

/**
 * Portfolio Hover Effects Enhancement
 */
function initPortfolioEffects() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const overlay = item.querySelector('.portfolio-overlay');
        const img = item.querySelector('img');
        
        // Add subtle zoom on hover
        item.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
            overlay.style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
            overlay.style.opacity = '0';
        });
        
        // Add click interaction
        item.addEventListener('click', () => {
            // This could open a modal with more project details
            console.log('Portfolio item clicked: ' + item.querySelector('h3').textContent);
        });
    });
}

/**
 * Contact Form Validation and Submission
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form inputs
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (name === '' || email === '' || subject === '' || message === '') {
                showFormError('Please fill in all fields');
                return;
            }
            
            // Email validation
            if (!isValidEmail(email)) {
                showFormError('Please enter a valid email address');
                return;
            }
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Simulate API call with timeout
            setTimeout(() => {
                // Success message
                contactForm.innerHTML = `
                    <div class="success-message">
                        <h3>Thank you for your message!</h3>
                        <p>We'll get back to you as soon as possible.</p>
                    </div>
                `;
                
                // Reset form after 5 seconds
                setTimeout(() => {
                    contactForm.reset();
                    contactForm.innerHTML = `
                        <div class="form-group">
                            <input type="text" id="name" name="name" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <input type="text" id="subject" name="subject" placeholder="Subject" required>
                        </div>
                        <div class="form-group">
                            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" class="btn primary-btn">Send Message</button>
                    `;
                    initContactForm(); // Re-initialize the form
                }, 5000);
            }, 2000);
        });
    }
    
    function showFormError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        // Remove any existing error messages
        const existingError = contactForm.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Insert before the submit button
        contactForm.insertBefore(errorDiv, contactForm.querySelector('button[type="submit"]'));
        
        // Remove the error after 3 seconds
        setTimeout(() => {
            if (errorDiv.parentNode === contactForm) {
                errorDiv.remove();
            }
        }, 3000);
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

/**
 * Newsletter Form Handling
 */
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            // Basic validation
            if (email === '' || !isValidEmail(email)) {
                // Show error
                emailInput.style.borderColor = 'red';
                
                // Reset after 3 seconds
                setTimeout(() => {
                    emailInput.style.borderColor = '';
                }, 3000);
                
                return;
            }
            
            // Simulate form submission
            const submitButton = newsletterForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Subscribing...';
            
            // Simulate API call with timeout
            setTimeout(() => {
                emailInput.value = '';
                submitButton.textContent = 'Subscribed!';
                
                // Reset after 3 seconds
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                }, 3000);
            }, 1500);
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Preload images for better performance
function preloadImages() {
    const images = [];
    for (let i = 1; i <= 7; i++) {
        const img = new Image();
        img.src = `img-${i}.jpeg`;
        images.push(img);
    }
}

// Call preload function
preloadImages();

