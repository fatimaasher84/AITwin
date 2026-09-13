/**
 * Personal Portfolio - Main JavaScript
 * Mobile-First Responsive Functionality
 */

// ===========================================
// Mobile Menu Toggle
// ===========================================

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.navbar')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ===========================================
// Contact Form Validation & Handling
// ===========================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate form
        let isValid = true;
        
        if (!name) {
            showError('name', 'Name is required');
            isValid = false;
        }
        
        if (!email) {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email');
            isValid = false;
        }
        
        if (!subject) {
            showError('subject', 'Subject is required');
            isValid = false;
        }
        
        if (!message) {
            showError('message', 'Message is required');
            isValid = false;
        }
        
        if (isValid) {
            handleFormSuccess();
        }
    });
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
        element.classList.remove('show');
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function handleFormSuccess() {
    const formStatus = document.getElementById('form-status');
    formStatus.textContent = 'Message received! Thank you for reaching out. Since this is a frontend form, we recommend using the email address provided to send your inquiry directly.';
    formStatus.classList.add('success');
    formStatus.classList.remove('error');
    
    // Reset form
    contactForm.reset();
    
    // Clear success message after 5 seconds
    setTimeout(() => {
        formStatus.classList.remove('success');
        formStatus.textContent = '';
    }, 5000);
}

// ===========================================
// Smooth Scroll Behavior Enhancement
// ===========================================

document.addEventListener('DOMContentLoaded', function () {
    // Add smooth scroll for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// ===========================================
// Accessibility & Keyboard Navigation
// ===========================================

// Trap focus within mobile menu when open
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (menuToggle && navMenu && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ===========================================
// Utility Functions
// ===========================================

/**
 * Debounce function for resize and scroll events
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// ===========================================
// Console Message
// ===========================================

console.log('Portfolio website loaded successfully');
console.log('For development workflow, see AGENTS.md');
