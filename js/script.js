/**
 * John Marc Comeros — Personal Portfolio Script
 * Pure Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    initNavigation();
    initScrollReveal();
    initProjectFilter();
    initContactForm();
    initBackToTop();
    initCustomCursor();
});

/* ==========================================================================
   1. NAVIGATION & MOBILE MENU
   ========================================================================== */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');

    function showSection(sectionId) {
        sections.forEach(section => {
            const isVisible = section.id === sectionId;
            section.classList.toggle('hidden-section', !isVisible);
        });

        navLinks.forEach(link => {
            const linkTarget = link.getAttribute('href');
            const isActive = linkTarget === `#${sectionId}`;
            link.classList.toggle('active', isActive);
        });

        const availableHash = `#${sectionId}`;
        if (window.location.hash !== availableHash) {
            window.history.pushState(null, '', availableHash);
        }
    }

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return;

            const targetId = href.substring(1);
            showSection(targetId);

            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    const initialSection = window.location.hash ? window.location.hash.substring(1) : 'home';
    if (document.getElementById(initialSection)) {
        showSection(initialSection);
    } else {
        showSection('home');
    }
}

/* ==========================================================================
   2. SCROLL REVEAL (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
    // Respect prefers-reduced-motion settings
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const revealElements = document.querySelectorAll('.reveal-element');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered reveal timing
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
}

/* ==========================================================================
   3. PROJECT FILTER SYSTEM
   ========================================================================== */
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Toggle active class
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ==========================================================================
   4. CONTACT FORM VALIDATION
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const formStatus = document.getElementById('formStatus');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === '') {
            setError(nameInput);
            isValid = false;
        } else {
            removeError(nameInput);
        }

        // Validate Email
        if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
            setError(emailInput);
            isValid = false;
        } else {
            removeError(emailInput);
        }

        // Validate Subject
        if (subjectInput.value.trim() === '') {
            setError(subjectInput);
            isValid = false;
        } else {
            removeError(subjectInput);
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            setError(messageInput);
            isValid = false;
        } else {
            removeError(messageInput);
        }

        if (isValid) {
            // Simulate static submission handling
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Thank you! Your message has been prepared (Client-Side Demo).';

            // Fallback mailto trigger for static hosting
            const mailtoLink = `mailto:johnmarc.comeros@example.com?subject=${encodeURIComponent(subjectInput.value)}&body=${encodeURIComponent(`Name: ${nameInput.value}\nEmail: ${emailInput.value}\n\nMessage:\n${messageInput.value}`)}`;

            setTimeout(() => {
                window.location.href = mailtoLink;
                form.reset();
            }, 1000);
        } else {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Please fix the errors above before sending.';
        }
    });

    function setError(inputElement) {
        inputElement.parentElement.classList.add('error');
    }

    function removeError(inputElement) {
        inputElement.parentElement.classList.remove('error');
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}

/* ==========================================================================
   5. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ==========================================================================
   6. SUBTLE DESKTOP CURSOR GLOW EFFECT
   ========================================================================== */
function initCustomCursor() {
    const cursorGlow = document.getElementById('cursorGlow');
    if (!cursorGlow) return;

    // Only enable on non-touch desktop devices
    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.opacity = '1';
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        });

        document.addEventListener('mouseleave', () => {
            cursorGlow.style.opacity = '0';
        });
    }
}