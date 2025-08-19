// Minimal Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initFormHandling();
    initSkillCardsAnimation();
    initActiveNavigation();
    initThemeToggle();
});
// Theme toggle logic
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    let isDark = false;

    function setTheme(dark) {
        isDark = dark;
        if (dark) {
            body.classList.add('dark-theme');
            body.classList.remove('bg-gray-50', 'text-gray-900');
            body.classList.add('bg-gray-900', 'text-gray-100');
            document.querySelectorAll('.bg-white, .bg-white\/90, .bg-white\/95').forEach(el => {
                el.classList.remove('bg-white', 'bg-white/90', 'bg-white/95');
                el.classList.add('bg-gray-900');
            });
            document.querySelectorAll('.bg-gray-50').forEach(el => {
                el.classList.remove('bg-gray-50');
                el.classList.add('bg-gray-900');
            });
            document.querySelectorAll('.bg-gray-200').forEach(el => {
                el.classList.remove('bg-gray-200');
                el.classList.add('bg-gray-800');
            });
            document.querySelectorAll('.bg-blue-600, .bg-blue-500, .bg-blue-100, .bg-blue-200').forEach(el => {
                el.classList.remove('bg-blue-600', 'bg-blue-500', 'bg-blue-100', 'bg-blue-200');
                el.classList.add('bg-gray-800');
            });
            document.querySelectorAll('.text-gray-700').forEach(el => {
                el.classList.remove('text-gray-700');
                el.classList.add('text-gray-200');
            });
            document.querySelectorAll('.text-gray-900').forEach(el => {
                el.classList.remove('text-gray-900');
                el.classList.add('text-gray-100');
            });
            document.querySelectorAll('.text-gray-600').forEach(el => {
                el.classList.remove('text-gray-600');
                el.classList.add('text-gray-400');
            });
            document.querySelectorAll('.border-gray-200, .border-gray-300').forEach(el => {
                el.classList.remove('border-gray-200', 'border-gray-300');
                el.classList.add('border-gray-700');
            });
            document.querySelectorAll('.text-blue-600').forEach(el => {
                el.classList.remove('text-blue-600');
                el.classList.add('text-blue-300');
            });
            document.querySelectorAll('.text-green-600').forEach(el => {
                el.classList.remove('text-green-600');
                el.classList.add('text-green-300');
            });
            document.querySelectorAll('.bg-yellow-400').forEach(el => {
                el.classList.remove('bg-yellow-400');
                el.classList.add('bg-yellow-700');
            });
            document.querySelectorAll('.bg-green-400').forEach(el => {
                el.classList.remove('bg-green-400');
                el.classList.add('bg-green-700');
            });
            document.querySelectorAll('.bg-purple-400').forEach(el => {
                el.classList.remove('bg-purple-400');
                el.classList.add('bg-purple-900');
            });
            toggleBtn.textContent = '☀️ Light Mode';
        } else {
            body.classList.remove('dark-theme');
            body.classList.remove('bg-gray-900', 'text-gray-100');
            body.classList.add('bg-gray-50', 'text-gray-900');
            document.querySelectorAll('.bg-gray-900').forEach(el => {
                el.classList.remove('bg-gray-900');
                el.classList.add('bg-white');
            });
            document.querySelectorAll('.bg-gray-800').forEach(el => {
                el.classList.remove('bg-gray-800');
                el.classList.add('bg-gray-200');
            });
            document.querySelectorAll('.text-gray-200').forEach(el => {
                el.classList.remove('text-gray-200');
                el.classList.add('text-gray-700');
            });
            document.querySelectorAll('.text-gray-100').forEach(el => {
                el.classList.remove('text-gray-100');
                el.classList.add('text-gray-900');
            });
            document.querySelectorAll('.text-gray-400').forEach(el => {
                el.classList.remove('text-gray-400');
                el.classList.add('text-gray-600');
            });
            document.querySelectorAll('.border-gray-700').forEach(el => {
                el.classList.remove('border-gray-700');
                el.classList.add('border-gray-200');
            });
            document.querySelectorAll('.text-blue-300').forEach(el => {
                el.classList.remove('text-blue-300');
                el.classList.add('text-blue-600');
            });
            document.querySelectorAll('.text-green-300').forEach(el => {
                el.classList.remove('text-green-300');
                el.classList.add('text-green-600');
            });
            document.querySelectorAll('.bg-yellow-700').forEach(el => {
                el.classList.remove('bg-yellow-700');
                el.classList.add('bg-yellow-400');
            });
            document.querySelectorAll('.bg-green-700').forEach(el => {
                el.classList.remove('bg-green-700');
                el.classList.add('bg-green-400');
            });
            document.querySelectorAll('.bg-purple-900').forEach(el => {
                el.classList.remove('bg-purple-900');
                el.classList.add('bg-purple-400');
            });
            toggleBtn.textContent = '🌙 Dark Mode';
        }
    }

    setTheme(false); // Default to light

    toggleBtn.addEventListener('click', function() {
        setTheme(!isDark);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form handling
function initFormHandling() {
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate form submission
            alert('Message sent successfully!');
            this.reset();
        });
    }
}

// Utility function for email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Skill cards staggered animation
function initSkillCardsAnimation() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    if (skillCards.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add visible class to trigger animation
                entry.target.classList.add('visible');
                
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe each skill card
    skillCards.forEach(card => {
        observer.observe(card);
    });
}

// Active navigation highlighting
function initActiveNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Function to update active nav link
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100; // Offset for header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Update on initial load
    updateActiveNav();
}

// Hamburger menu functionality and mobile nav toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');

if (hamburgerMenu && mobileNav) {
    hamburgerMenu.addEventListener('click', function() {
        if (mobileNav.style.display === 'none' || mobileNav.style.display === '') {
            mobileNav.style.display = 'flex';
            mobileNav.style.transform = 'translateY(0)';
        } else {
            mobileNav.style.display = 'none';
            mobileNav.style.transform = 'translateY(-100%)';
        }
    });
    // Hide mobile nav when clicking a link
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.style.display = 'none';
            mobileNav.style.transform = 'translateY(-100%)';
        });
    });
}

// Make navbar name clickable to go home
const navbarHome = document.getElementById('navbar-home');
if (navbarHome) {
    navbarHome.addEventListener('click', function(e) {
        e.preventDefault();
        const homeSection = document.getElementById('home');
        if (homeSection) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = homeSection.offsetTop - headerHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
}
