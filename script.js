// Soumi Basu Portfolio - JavaScript
// Enhanced with smooth carousel scrolling, service modals, and better UX

// Service data for modals
const serviceData = {
    'digital-marketing': {
        title: 'Digital Marketing',
        subtitle: 'Strategic campaigns that drive growth',
        icon: 'campaign',
        description: 'Our digital marketing services combine creativity with data-driven strategies to amplify your brand presence across digital channels. We craft compelling campaigns that resonate with your target audience and deliver measurable ROI.',
        deliverables: [
            'Strategic campaign planning & execution',
            'PPC advertising (Google Ads, Social Ads)',
            'Email marketing automation',
            'Conversion rate optimization',
            'Analytics & performance reporting',
            'Content marketing strategy'
        ],
        process: 'We begin with a comprehensive audit of your current digital presence, then develop a customized strategy aligned with your business goals. Our iterative approach ensures continuous optimization based on performance data.'
    },
    'seo': {
        title: 'SEO Optimization',
        subtitle: 'Rank higher, attract more organic traffic',
        icon: 'trending_up',
        description: 'Our SEO services are designed to improve your search visibility and drive qualified organic traffic. We employ white-hat techniques and stay ahead of algorithm updates to ensure sustainable rankings.',
        deliverables: [
            'Comprehensive SEO audit',
            'Keyword research & strategy',
            'On-page optimization',
            'Technical SEO improvements',
            'Quality backlink building',
            'Local SEO optimization',
            'Monthly ranking reports'
        ],
        process: 'Starting with a technical audit, we identify opportunities and gaps. Then we implement on-page optimizations, create valuable content, and build authoritative backlinks. Regular monitoring ensures we adapt to search trends.'
    },
    'social-media': {
        title: 'Social Media Management',
        subtitle: 'Build engaged communities, amplify your voice',
        icon: 'share',
        description: 'We manage your social media presence end-to-end, creating engaging content that builds community and strengthens your brand voice. From strategy to execution, we turn followers into brand advocates.',
        deliverables: [
            'Social media strategy development',
            'Content creation & curation',
            'Community management',
            'Paid social advertising',
            'Influencer collaboration',
            'Analytics & insights reporting',
            'Crisis management support'
        ],
        process: 'We immerse ourselves in your brand voice, develop a content calendar, and engage with your audience authentically. Our data-driven approach refines strategy based on what resonates with your community.'
    },
    'poster': {
        title: 'Poster Design',
        subtitle: 'Visual impact that commands attention',
        icon: 'image',
        description: 'Our poster designs combine striking visuals with clear messaging to create impactful communications. Whether for events, campaigns, or brand awareness, our designs stop people in their tracks.',
        deliverables: [
            'Custom concept development',
            'Print-ready high-resolution files',
            'Multiple format variations',
            'Brand-consistent design elements',
            'Typography & layout optimization',
            'Digital & print versions'
        ],
        process: 'We start by understanding your message and audience, then explore creative concepts that capture attention. Through iterative refinement, we deliver a design that communicates powerfully.'
    },
    'logo': {
        title: 'Logo Design',
        subtitle: 'Memorable identities that define your brand',
        icon: 'draw',
        description: 'A great logo is the cornerstone of your brand identity. We create distinctive, memorable logos that encapsulate your essence and create instant recognition in the marketplace.',
        deliverables: [
            'Brand discovery workshop',
            'Multiple concept explorations',
            'Refined logo variations',
            'Full brand guidelines',
            'All file formats (AI, EPS, PNG, SVG)',
            'Color & monochrome versions',
            'Social media kit'
        ],
        process: 'Through discovery sessions, we distill your brand essence. We then explore multiple directions, refine the strongest concept, and deliver a complete identity system with guidelines for consistent application.'
    },
    'card': {
        title: 'Card Design',
        subtitle: 'Professional cards that make an impression',
        icon: 'credit_card',
        description: 'From business cards to greeting cards, we create designs that feel personal and polished. Every card is a touchpoint that reflects your brand and leaves a lasting impression.',
        deliverables: [
            'Custom design concepts',
            'Premium paper recommendations',
            'Print-ready files',
            'Die-cut options',
            'Foiling & embossing options',
            'Bulk printing coordination'
        ],
        process: 'We explore your brand personality and audience, then craft designs that balance aesthetics with functionality. Our print expertise ensures the final product feels as good as it looks.'
    },
    'portfolio': {
        title: 'Portfolio Design',
        subtitle: 'Showcase your work with impact',
        icon: 'folder',
        description: 'Your portfolio tells your creative story. We curate and design portfolios that showcase your best work, communicate your unique value, and open doors to new opportunities.',
        deliverables: [
            'Content strategy & curation',
            'Information architecture',
            'Visual design & branding',
            'Responsive web portfolio',
            'PDF/print versions',
            'Case study templates',
            'SEO optimization'
        ],
        process: 'We audit your existing work, identify your strongest pieces, and structure them into compelling case studies. The result is a cohesive narrative that showcases your capabilities.'
    },
    'video': {
        title: 'Video & Presentation Design',
        subtitle: 'Dynamic content that engages audiences',
        icon: 'videocam',
        description: 'Video and presentations are powerful storytelling tools. We create dynamic content that engages audiences, communicates clearly, and leaves lasting impressions.',
        deliverables: [
            'Script & storyboard development',
            'Motion graphics & animation',
            'Video editing & post-production',
            'Presentation template design',
            'Pitch deck creation',
            'Explainer videos',
            'Social media video clips'
        ],
        process: 'We start with your key message, craft a compelling narrative, and bring it to life through visuals and motion. Our iterative process ensures the final product resonates with your audience.'
    },
    // Program Data
    'recycling-art': {
        title: 'Recycling Art & Installations',
        subtitle: 'Sustainable creativity for a better world',
        icon: 'eco',
        description: 'Transform discarded materials into thought-provoking art installations. This program teaches you how to find value in waste and use it as a medium for powerful environmental messaging.',
        deliverables: [
            'Waste material sourcing guide',
            'Large-scale installation techniques',
            'Eco-friendly adhesive & bonding methods',
            'Conceptual development for sustainable art',
            'Portfolio of recycling art projects'
        ],
        process: 'We begin by analyzing waste streams, then move to conceptual sketches. Students learn technical skills for building durable structures from non-traditional materials.'
    },
    'organic-diy': {
        title: 'Organic DIY Projects',
        subtitle: 'Handmade with nature\'s finest',
        icon: 'nature_people',
        description: 'Learn to create beautiful, functional items using only organic and natural materials. From plant-based dyes to natural fabrics, this workshop is about returning to our roots.',
        deliverables: [
            'Natural dye extraction kit guide',
            'Organic material sourcing',
            'Traditional craft techniques',
            'Sustainable product design',
            'Finished organic craft projects'
        ],
        process: 'Focus on hands-on creation. Each session covers a different natural material, teaching its properties and how to manipulate it without harsh chemicals.'
    },
    'nature-art': {
        title: 'Nature-Friendly Art Models',
        subtitle: 'Zero footprint, maximum impact',
        icon: 'spa',
        description: 'Explore art forms that live in harmony with nature. Learn about land art, ephemeral installations, and using the natural landscape as your canvas without leaving a trace.',
        deliverables: [
            'Land art photography techniques',
            'Ephemeral installation methods',
            'Site-specific art planning',
            'Leave-No-Trace artistic ethics',
            'Documentation of nature art'
        ],
        process: 'Sessions are often held outdoors, focusing on observing natural patterns and integrating artistic vision with the environment.'
    },
    'eco-painting': {
        title: 'Eco-Conscious Painting',
        subtitle: 'Mastering the art of natural pigments',
        icon: 'brush',
        description: 'Discover how to create your own paints from flowers, berries, minerals, and earth. Master the technical aspects of color permanence and binding using natural resins.',
        deliverables: [
            'Pigment extraction recipes',
            'Natural binder compositions',
            'Color theory for organic palettes',
            'Preservation techniques for eco-art',
            'Sample pigment library'
        ],
        process: 'Part laboratory, part studio. We experiment with extractions and then apply them through various painting techniques.'
    },
    'body-safety': {
        title: 'Body Safety Education',
        subtitle: 'Empowering children with knowledge',
        icon: 'child_care',
        description: 'A sensitive and age-appropriate program designed to help children understand personal boundaries, recognize "good touch" and "bad touch," and feel empowered to speak up.',
        deliverables: [
            'Child-friendly safety curriculum',
            'Parent guide for safety discussions',
            'Boundary-setting exercises',
            'Role-playing safety scenarios',
            'Certificate of participation'
        ],
        process: 'Using stories, play, and simple language, we create a safe environment for children to learn vital life skills.'
    },
    'puberty-awareness': {
        title: 'Puberty Awareness',
        subtitle: 'Navigating change with confidence',
        icon: 'people',
        description: 'Comprehensive guidance for adolescents going through physical and emotional changes. We break down the science of puberty and address social-emotional wellness.',
        deliverables: [
            'Adolescent wellness guide',
            'Anatomy and physiology basics',
            'Emotional regulation tools',
            'Skincare and hygiene workshops',
            'Peer support group sessions'
        ],
        process: 'Interactive sessions that combine education with open dialogue, allowing teens to ask questions in a judgment-free space.'
    },
    'gender-awareness': {
        title: 'Gender Awareness',
        subtitle: 'Building a culture of inclusion',
        icon: 'transgender',
        description: 'A deep dive into gender identity, expression, and the importance of equity. This program helps participants understand diverse perspectives and challenge stereotypes.',
        deliverables: [
            'Inclusivity framework',
            'Gender diversity vocabulary',
            'Stereotype identification tools',
            'Safe space creation strategies',
            'Allyship certificate'
        ],
        process: 'Case studies, historical context, and group discussions aimed at fostering empathy and broadening understanding.'
    },
    'safe-sex-ed': {
        title: 'Safe Sex Education',
        subtitle: 'Informed choices for healthy lives',
        icon: 'favorite',
        description: 'Evidence-based sexual health education for adults. Covering everything from contraception and STIs to consent and healthy relationship dynamics.',
        deliverables: [
            'Sexual health resource guide',
            'Contraception efficacy chart',
            'Consent workshop materials',
            'STI prevention and testing info',
            'Healthy relationship checklist'
        ],
        process: 'Factual, medically-accurate presentations followed by facilitated discussions on social and personal health.'
    },
    'digital-literacy': {
        title: 'Digital Literacy & Life Skills',
        subtitle: 'Bridging the digital divide',
        icon: 'computer',
        description: 'Essential tech skills for independent living. Specialized for individuals with developmental disabilities to navigate the modern digital world safely.',
        deliverables: [
            'Basic computer mastery',
            'Safe internet browsing guide',
            'Online shopping & food ordering skills',
            'Emergency SOS tech setup',
            'Social media safety basics'
        ],
        process: 'Step-by-step practical training with high levels of support and repetition to ensure skill retention.'
    },
    'creative-skill': {
        title: 'Creative Skill Development',
        subtitle: 'Fine motor skills through craft',
        icon: 'palette',
        description: 'Using arts and crafts to develop fine motor skills and creative expression. Projects are designed to be therapeutic and potentially marketable.',
        deliverables: [
            'Block painting techniques',
            'Natural dye workshops',
            'Paper bag manufacturing',
            'Basic pottery skills',
            'Product pricing basics'
        ],
        process: 'Structured workshops that break down complex crafts into manageable steps, celebrating every achievement.'
    },
    'natural-craft': {
        title: 'Natural Craft Techniques',
        subtitle: 'Heritage crafts for modern minds',
        icon: 'grass',
        description: 'Instruction in traditional Indian crafts using organic materials. Specialized in incense making, traditional weaving, and sustainable product creation.',
        deliverables: [
            'Organic incense making guide',
            'Natural fiber weaving',
            'Traditional pattern library',
            'Sustainable packaging design',
            'Heritage craft certification'
        ],
        process: 'Learning from traditional methods and adapting them for contemporary sustainable markets.'
    },
    'assessment-plan': {
        title: 'Assessment & Planning',
        subtitle: 'Personalized roadmaps for growth',
        icon: 'assignment_turned_in',
        description: 'Professional evaluation of an individual\'s creative and developmental potential. We create customized plans for long-term skill acquisition.',
        deliverables: [
            'Comprehensive strength assessment',
            'Customized 12-month growth plan',
            'Daily & weekly activity logs',
            'Progress tracking framework',
            'Resource recommendation list'
        ],
        process: 'In-depth interviews, skill testing, and collaborative goal-setting with the individual and their support system.'
    },
    'wine-art': {
        title: 'Wine Art Workshops',
        subtitle: 'Uncork your creativity',
        icon: 'liquor',
        description: 'Discover the elegant art of painting with wine. Learn how different varieties of wine produce unique shades and textures on paper.',
        deliverables: [
            'Wine painting techniques',
            'Color preservation methods',
            'Tonal layering with red wines',
            'Abstract and figurative wine art',
            'Framing and storage advice'
        ],
        process: 'A relaxed, communal workshop where we explore the chemical and artistic properties of wine as a sustainable pigment.'
    },
    'coffee-art': {
        title: 'Coffee Art Workshops',
        subtitle: 'Brewing beautiful masterpieces',
        icon: 'coffee',
        description: 'Master the sepia-toned world of coffee painting. From espresso washes to latte art concepts, learn to use coffee as a versatile artistic medium.',
        deliverables: [
            'Espresso wash techniques',
            'Creating depth with varying roasts',
            'Detailed illustrative coffee art',
            'Combining coffee with ink',
            'Preserving coffee-based artworks'
        ],
        process: 'Focus on tonal control and layering. Students learn to manipulate the drying process to create rich, textured backgrounds.'
    },
    'rural-art': {
        title: 'Rural Traditional Art',
        subtitle: 'Preserving indigenous heritage',
        icon: 'cottage',
        description: 'Learn time-honored artistic traditions from rural India. This workshop focuses on folk styles, traditional motifs, and the stories behind them.',
        deliverables: [
            'Folk art motif library',
            'Traditional color prep',
            'Storytelling through motifs',
            'Indigenous pattern making',
            'Ethical art preservation'
        ],
        process: 'A deep dive into the cultural significance of traditional arts, teaching the precise hand movements and rhythms of heritage styles.'
    },
    'murals': {
        title: 'Mural Creation',
        subtitle: 'Art that transforms spaces',
        icon: 'format_paint',
        description: 'Large-scale collaborative mural design and execution. Learn the technical requirements for wall preparation, scaling designs, and weatherproofing.',
        deliverables: [
            'Grid scaling techniques',
            'Outdoor paint chemistry',
            'Collaborative design workflows',
            'Stencil and freehand mastery',
            'Public space art ethics'
        ],
        process: 'Moving from paper sketches to large-scale walls. Includes hands-on practice with scaffolding, projection, and community engagement.'
    },
    'organic-paint': {
        title: 'Organic Paint Workshops',
        subtitle: 'Colors from the earth',
        icon: 'auto_fix_high',
        description: 'The science of color extraction. Learn which flowers, leaves, and minerals yield the most vibrant and permanent natural paints.',
        deliverables: [
            'Pigment extraction log',
            'Natural mordant recipes',
            'Permanent wash techniques',
            'Safety with natural elements',
            'Seasonal pigment calendar'
        ],
        process: 'Part foraging, part chemistry. We learn to identify sources in nature and extract pigments using traditional and modern methods.'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initSmoothScrolling();
    initCarousels();
    initContactForm();
    initScrollAnimations();
    initServiceModals();
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

    // Close modal with Escape key
    if (e.key === 'Escape') {
        const modalOverlay = document.getElementById('modal-overlay');
        if (modalOverlay && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    }
});

// Service Modal functionality
function initServiceModals() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('service-modal');
    const modalClose = document.getElementById('modal-close');
    const serviceCards = document.querySelectorAll('.service-card');

    // Open modal when clicking service card or button
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const serviceKey = this.getAttribute('data-service');
            if (serviceKey && serviceData[serviceKey]) {
                openModal(serviceKey);
            }
        });

        // Also add keyboard support
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const serviceKey = this.getAttribute('data-service');
                if (serviceKey && serviceData[serviceKey]) {
                    openModal(serviceKey);
                }
            }
        });
    });

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close on overlay click
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
}

function openModal(serviceKey) {
    const data = serviceData[serviceKey];
    if (!data) return;

    const modalOverlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('service-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.querySelector('.modal__subtitle');
    const modalDescription = document.querySelector('.modal__description');
    const modalDeliverables = document.getElementById('modal-deliverables');
    const modalProcess = document.getElementById('modal-process');
    const modalImagePlaceholder = document.querySelector('.modal-image-placeholder');

    // Populate modal content
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
    if (modalDescription) modalDescription.textContent = data.description;

    // Populate deliverables list
    if (modalDeliverables) {
        modalDeliverables.innerHTML = data.deliverables.map(item => `<li>${item}</li>`).join('');
    }

    // Populate process
    if (modalProcess) modalProcess.textContent = data.process;

    // Update icon in modal image
    if (modalImagePlaceholder) {
        modalImagePlaceholder.innerHTML = `<span class="material-icons-round">${data.icon}</span>`;
    }

    // Show modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus trap for accessibility
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableElements.length) {
        focusableElements[0].focus();
    }
}

function closeModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    if (!modalOverlay) return;

    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';

    // Return focus to the card that opened the modal
    const lastOpenedCard = document.querySelector('.service-card:focus');
    if (lastOpenedCard) {
        lastOpenedCard.focus();
    }
}

// Console message for developers
console.log('%cSoumi Basu Portfolio', 'color: #7C3AED; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with care for creativity and conversion', 'color: #6B7280; font-size: 14px;');