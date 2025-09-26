// Navigation functionality
const navToggle = document.getElementById('navToggle');
const navOverlay = document.getElementById('navOverlay');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navOverlay.classList.toggle('active');
});

// Close navigation when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navOverlay.classList.remove('active');
    });
});

// Close navigation when clicking outside
navOverlay.addEventListener('click', (e) => {
    if (e.target === navOverlay) {
        navToggle.classList.remove('active');
        navOverlay.classList.remove('active');
    }
});

// Generate Matrix-style code rain
function createMatrixRain() {
    const matrixContainer = document.querySelector('.matrix-rain');
    const numberOfColumns = Math.floor(window.innerWidth / 20);
    
    // Code snippets for the matrix effect
    const codeSnippets = [
        'function()',
        'const x =',
        'if (true)',
        'return;',
        'console.log',
        'import {',
        'export',
        'async/await',
        'Promise',
        'useState',
        'useEffect',
        'React.js',
        'Node.js',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Git',
        'API',
        'JSON',
        'MongoDB',
        'Express',
        'Vite',
        'npm install',
        'git commit',
        'docker run',
        'localhost:3000',
        '404 Error',
        'HTTP/2',
        'WebSocket',
        'REST API',
        'GraphQL',
        'Redux',
        'Webpack',
        'Babel',
        'ESLint',
        'Prettier',
        'VS Code',
        'GitHub',
        'Stack Overflow',
        'MDN Docs',
        'npm run dev',
        'yarn build',
        'git push',
        'merge conflict',
        'pull request',
        'code review',
        'unit test',
        'debugging',
        'console.error',
        'try/catch',
        'async function',
        'arrow function',
        'destructuring',
        'spread operator',
        'template literal',
        'event listener',
        'DOM manipulation',
        'fetch API',
        'localStorage',
        'sessionStorage',
        'cookies',
        'JWT token',
        'authentication',
        'authorization',
        'middleware',
        'routing',
        'components',
        'props',
        'state',
        'lifecycle',
        'hooks',
        'context',
        'provider',
        'reducer',
        'action',
        'dispatch',
        'selector',
        'store',
        'immutable',
        'pure function',
        'side effect',
        'closure',
        'prototype',
        'inheritance',
        'polymorphism',
        'encapsulation',
        'abstraction',
        'algorithm',
        'data structure',
        'binary tree',
        'linked list',
        'hash table',
        'recursion',
        'iteration',
        'Big O notation',
        'time complexity',
        'space complexity',
        'optimization',
        'performance',
        'memory leak',
        'garbage collection',
        'event loop',
        'call stack',
        'heap',
        'stack overflow',
        'buffer overflow',
        'SQL injection',
        'XSS attack',
        'CSRF token',
        'HTTPS',
        'SSL/TLS',
        'encryption',
        'hashing',
        'salting',
        'bcrypt',
        'OAuth',
        'API key',
        'rate limiting',
        'load balancing',
        'caching',
        'CDN',
        'microservices',
        'monolith',
        'serverless',
        'cloud computing',
        'AWS',
        'Azure',
        'Google Cloud',
        'Docker',
        'Kubernetes',
        'CI/CD',
        'DevOps',
        'agile',
        'scrum',
        'sprint',
        'backlog',
        'user story',
        'acceptance criteria',
        'test driven',
        'behavior driven',
        'integration test',
        'end-to-end test',
        'mock',
        'stub',
        'spy',
        'coverage',
        'refactoring',
        'code smell',
        'technical debt',
        'clean code',
        'SOLID principles',
        'design patterns',
        'singleton',
        'factory',
        'observer',
        'strategy',
        'decorator',
        'facade',
        'adapter',
        'proxy',
        'command',
        'state',
        'visitor',
        'template method',
        'builder',
        'prototype pattern',
        'dependency injection',
        'inversion of control',
        'separation of concerns',
        'single responsibility',
        'open/closed',
        'liskov substitution',
        'interface segregation',
        'dependency inversion'
    ];
    
    for (let i = 0; i < numberOfColumns; i++) {
        createCodeColumn(i, codeSnippets, matrixContainer);
    }
}

function createCodeColumn(columnIndex, codeSnippets, container) {
    const column = document.createElement('div');
    column.className = 'code-column';
    
    // Random column properties
    const columnWidth = 20;
    const leftPosition = columnIndex * columnWidth;
    const fallDuration = 3 + Math.random() * 4; // 3-7 seconds
    const delay = Math.random() * 5; // 0-5 seconds delay
    
    // Random brightness variation
    const brightness = Math.random();
    if (brightness > 0.8) {
        column.classList.add('bright');
    } else if (brightness < 0.3) {
        column.classList.add('dim');
    }
    
    // Generate random code content for this column
    let codeContent = '';
    const linesInColumn = 15 + Math.floor(Math.random() * 10); // 15-25 lines
    
    for (let i = 0; i < linesInColumn; i++) {
        const randomCode = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        codeContent += randomCode + '\n';
    }
    
    column.textContent = codeContent;
    column.style.left = leftPosition + 'px';
    column.style.animationDuration = fallDuration + 's';
    column.style.animationDelay = delay + 's';
    
    container.appendChild(column);
    
    // Remove and recreate column after animation completes
    setTimeout(() => {
        if (column.parentNode) {
            column.remove();
            createCodeColumn(columnIndex, codeSnippets, container);
        }
    }, (fallDuration + delay) * 1000);
}

// Animate tech cloud items
function animateTechCloud() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach((item, index) => {
        item.style.animationDelay = (index * 0.3) + 's';
    });
}

// Download CV functionality
const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('click', () => {
    // In a real application, this would download the actual CV file
    alert('CV download would start here!');
});

// Contact modal functionality
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');

contactBtn.addEventListener('click', () => {
    contactModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    contactModal.classList.remove('active');
});

// Close modal when clicking outside
contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.classList.remove('active');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal.classList.contains('active')) {
        contactModal.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to tech cards
function addScrollAnimations() {
    const techCards = document.querySelectorAll('.tech-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    techCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Add parallax effect to tech cloud
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const techItems = document.querySelectorAll('.tech-item');
        
        techItems.forEach((item, index) => {
            const speed = 0.5 + (index % 3) * 0.2;
            item.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    startIntroAnimation();
    createMatrixRain();
    createStarField();
    animateTechCloud();
    addScrollAnimations();
    addParallaxEffect();
});

// Create animated star field for hero section
function createStarField() {
    const starField = document.getElementById('starField');
    const numberOfStars = 150;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size (small, medium, large)
        const size = Math.random() > 0.8 ? 3 : Math.random() > 0.6 ? 2 : 1;
        
        // Random animation delay for twinkling
        const delay = Math.random() * 3;
        
        star.style.left = x + '%';
        star.style.top = y + '%';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = delay + 's';
        
        starField.appendChild(star);
    }
}

// Intro Animation Sequence
function startIntroAnimation() {
    const introScreen = document.getElementById('introScreen');
    const mainContent = document.getElementById('mainContent');
    const letters = document.querySelectorAll('.letter');
    
    // Animate letters falling one by one
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${2.5 + index * 0.1}s`;
    });
    
    // Hide intro and show main content after animation
    setTimeout(() => {
        introScreen.classList.add('hidden');
        mainContent.classList.add('visible');
    }, 8500); // 8.5 seconds total animation time
}

// Add resize handler for responsive behavior
window.addEventListener('resize', () => {
    // Recalculate positions if needed
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        // Reset transform to recalculate positions
        item.style.transform = 'translateY(0)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navToggle.classList.remove('active');
        navOverlay.classList.remove('active');
    }
});

// Add hover effects to buttons
const buttons = document.querySelectorAll('.btn, .download-btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
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

// Apply throttling to scroll-based animations
const throttledParallax = throttle(addParallaxEffect, 16);
window.addEventListener('scroll', throttledParallax);