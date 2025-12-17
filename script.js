// Soumi Basu Portfolio - JavaScript
// Enhanced with smooth carousel scrolling and better UX

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initSmoothScrolling();
    initCarousels();
    initContactForm();
    initScrollAnimations();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navigation = document.getElementById('navigation');
    const navLinks = document.querySelectorAll('.nav__link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        this.setAttribute('aria-expanded', !isExpanded);
        navigation.classList.toggle('active');
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navigation.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navigation.contains(e.target) && !navToggle.contains(e.target)) {
            navigation.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Handle escape key for mobile menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navigation.classList.contains('active')) {
            navigation.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
    });
}

// Smooth scrolling with header offset
function initSmoothScrolling() {
    const headerHeight = document.querySelector('.header').offsetHeight;

    // Handle all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - headerHeight - 20;

                // Respect user's motion preferences
                const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

                if (shouldReduceMotion) {
                    window.scrollTo(0, offsetTop);
                } else {
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Enhanced Carousel functionality with smooth scrolling
function initCarousels() {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(container => {
        const carousel = container.querySelector('.carousel');
        const leftBtn = container.querySelector('.carousel__btn--left');
        const rightBtn = container.querySelector('.carousel__btn--right');
        const cards = carousel.querySelectorAll('.carousel-card');

        if (!carousel || !leftBtn || !rightBtn || cards.length === 0) return;

        // Calculate scroll amount based on visible cards
        function getScrollAmount() {
            const containerWidth = carousel.clientWidth;
            const cardWidth = cards[0].offsetWidth;
            const gap = 20; // Match CSS gap

            // Scroll by one card width plus gap
            return cardWidth + gap;
        }

        // Update button states
        function updateButtons() {
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;
            const currentScroll = carousel.scrollLeft;

            // Disable left button at start
            leftBtn.disabled = currentScroll <= 1;

            // Disable right button at end
            rightBtn.disabled = currentScroll >= maxScroll - 1;
        }

        // Smooth scroll carousel
        function scrollCarousel(direction) {
            const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const scrollAmount = getScrollAmount();
            const targetScroll = direction === 'left' 
                ? carousel.scrollLeft - scrollAmount 
                : carousel.scrollLeft + scrollAmount;

            if (shouldReduceMotion) {
                carousel.scrollLeft = targetScroll;
            } else {
                // Use smooth scrolling with easing
                carousel.scrollTo({
                    left: targetScroll,
                    behavior: 'smooth'
                });
            }

            // Update buttons after a short delay
            setTimeout(updateButtons, 300);
        }

        // Button event listeners
        leftBtn.addEventListener('click', (e) => {
            e.preventDefault();
            scrollCarousel('left');
        });

        rightBtn.addEventListener('click', (e) => {
            e.preventDefault();
            scrollCarousel('right');
        });

        // Update buttons on scroll
        let scrollTimeout;
        carousel.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(updateButtons, 50);
        });

        // Keyboard navigation for carousel
        carousel.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                scrollCarousel('left');
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                scrollCarousel('right');
            }
        });

        // Initialize button states
        updateButtons();

        // Update on window resize with debouncing
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                updateButtons();
            }, 150);
        });

        // Enhanced touch/swipe support
        let startX = 0;
        let scrollLeftStart = 0;
        let isDragging = false;
        let hasMoved = false;

        carousel.addEventListener('mousedown', (e) => {
            isDragging = true;
            hasMoved = false;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeftStart = carousel.scrollLeft;
            carousel.style.cursor = 'grabbing';
            carousel.style.scrollSnapType = 'none';
        });

        carousel.addEventListener('mouseleave', () => {
            if (isDragging) {
                isDragging = false;
                carousel.style.cursor = 'grab';
                carousel.style.scrollSnapType = 'x mandatory';
            }
        });

        carousel.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                carousel.style.cursor = 'grab';
                carousel.style.scrollSnapType = 'x mandatory';

                // Snap to nearest card if dragged
                if (hasMoved) {
                    const scrollAmount = getScrollAmount();
                    const nearestCard = Math.round(carousel.scrollLeft / scrollAmount);
                    carousel.scrollTo({
                        left: nearestCard * scrollAmount,
                        behavior: 'smooth'
                    });
                }
            }
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            hasMoved = true;
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 1.5;
            carousel.scrollLeft = scrollLeftStart - walk;
        });

        // Touch events for mobile
        let touchStartX = 0;
        let touchScrollLeft = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].pageX;
            touchScrollLeft = carousel.scrollLeft;
        }, { passive: true });

        carousel.addEventListener('touchmove', (e) => {
            if (!touchStartX) return;
            const touchX = e.touches[0].pageX;
            const diff = touchStartX - touchX;
            carousel.scrollLeft = touchScrollLeft + diff;
        }, { passive: true });

        carousel.addEventListener('touchend', () => {
            touchStartX = 0;
        });

        // Set initial cursor
        carousel.style.cursor = 'grab';
    });
}

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contact-form');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const privacy = formData.get('privacy');

        // Basic validation
        if (!name || !email || !message || !privacy) {
            showNotification('Please fill in all required fields and accept the privacy policy.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });

    // Form validation feedback
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });

    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();

        // Remove existing error styles
        field.classList.remove('error');

        // Check if required field is empty
        if (field.hasAttribute('required') && !value) {
            field.classList.add('error');
            return;
        }

        // Email specific validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('error');
            }
        }
    }

    function clearFieldError(e) {
        e.target.classList.remove('error');
    }
}

// Scroll animations
function initScrollAnimations() {
    // Check if user prefers reduced motion
    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (shouldReduceMotion) {
        return;
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .carousel-card, .workshop-card, .about__bio');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');

    // Notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;

    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#10B981';
            break;
        case 'error':
            notification.style.backgroundColor = '#EF4444';
            break;
        default:
            notification.style.backgroundColor = '#6B7280';
    }

    // Add to DOM
    document.body.appendChild(notification);

    // Trigger animation
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
        });
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);

    // Close on click
    notification.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}

// Add error styles for form validation
const style = document.createElement('style');
style.textContent = `
    .form__input.error,
    .form__textarea.error {
        border-color: #EF4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;
document.head.appendChild(style);

// Handle focus management for accessibility
document.addEventListener('keydown', function(e) {
    // Skip to main content with Enter key from skip link
    if (e.target.classList.contains('skip-to-content') && e.key === 'Enter') {
        e.preventDefault();
        const main = document.getElementById('main');
        if (main) {
            main.focus();
            main.scrollIntoView();
        }
    }
});




// Console message for developers
console.log('%cSoumi Basu Portfolio', 'color: #7C3AED; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with care for sustainability and inclusion', 'color: #6B7280; font-size: 14px;');