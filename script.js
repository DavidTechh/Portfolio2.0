document.addEventListener('DOMContentLoaded', () => {
  // Navigation
  const navToggle = document.getElementById('navToggle');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navOverlay) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navOverlay.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navOverlay.classList.remove('active');
      });
    });

    navOverlay.addEventListener('click', (e) => {
      if (e.target === navOverlay) {
        navToggle.classList.remove('active');
        navOverlay.classList.remove('active');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navToggle.classList.remove('active');
        navOverlay.classList.remove('active');
      }
    });
  }

  // Download CV
  const downloadBtn = document.getElementById('downloadBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      window.open('assets/David_Demos_Resume_v3.pdf', '_blank');
    });
  }

  // Contact modal
  const contactBtn = document.getElementById('contactBtn');
  const contactModal = document.getElementById('contactModal');
  const closeModal = document.getElementById('closeModal');

  if (contactBtn && contactModal && closeModal) {
    contactBtn.addEventListener('click', () => {
      contactModal.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
      contactModal.classList.remove('active');
    });

    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove('active');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && contactModal.classList.contains('active')) {
        contactModal.classList.remove('active');
      }
    });
  }

  // Smooth scroll
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

  // Intro animation
  startIntroAnimation();

  // Optional effects
  createMatrixRain();
  createStarField();
  animateTechCloud();
  addScrollAnimations();
  addParallaxEffect();
});

function startIntroAnimation() {
  const introScreen = document.getElementById('introScreen');
  const mainContent = document.getElementById('mainContent');
  const letters = document.querySelectorAll('.letter');

  if (!introScreen || !mainContent) return;

  letters.forEach((letter, index) => {
    letter.style.animationDelay = `${2.5 + index * 0.1}s`;
  });

  setTimeout(() => {
    introScreen.classList.add('hidden');
    mainContent.classList.add('visible');
  }, 8500);
}

function createMatrixRain() {
  const matrixContainer = document.querySelector('.matrix-rain');
  if (!matrixContainer) return;

  const numberOfColumns = Math.floor(window.innerWidth / 20);
  const codeSnippets = ['React.js', 'Node.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'API'];

  for (let i = 0; i < numberOfColumns; i++) {
    createCodeColumn(i, codeSnippets, matrixContainer);
  }
}

function createCodeColumn(columnIndex, codeSnippets, container) {
  const column = document.createElement('div');
  column.className = 'code-column';

  const leftPosition = columnIndex * 20;
  const fallDuration = 3 + Math.random() * 4;
  const delay = Math.random() * 5;

  let codeContent = '';
  const linesInColumn = 15 + Math.floor(Math.random() * 10);

  for (let i = 0; i < linesInColumn; i++) {
    const randomCode = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    codeContent += randomCode + '\n';
  }

  column.textContent = codeContent;
  column.style.left = leftPosition + 'px';
  column.style.animationDuration = fallDuration + 's';
  column.style.animationDelay = delay + 's';

  container.appendChild(column);

  setTimeout(() => {
    if (column.parentNode) {
      column.remove();
      createCodeColumn(columnIndex, codeSnippets, container);
    }
  }, (fallDuration + delay) * 1000);
}

function animateTechCloud() {
  const techItems = document.querySelectorAll('.tech-item');
  techItems.forEach((item, index) => {
    item.style.animationDelay = index * 0.3 + 's';
  });
}

function createStarField() {
  const starField = document.getElementById('starField');
  if (!starField) return;

  const numberOfStars = 150;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() > 0.8 ? 3 : Math.random() > 0.6 ? 2 : 1;
    const delay = Math.random() * 3;

    star.style.left = x + '%';
    star.style.top = y + '%';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDelay = delay + 's';

    starField.appendChild(star);
  }
}

function addScrollAnimations() {
  const techCards = document.querySelectorAll('.tech-card');
  if (!techCards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  techCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

function addParallaxEffect() {
  const techItems = document.querySelectorAll('.tech-item');
  if (!techItems.length) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    techItems.forEach((item, index) => {
      const speed = 0.5 + (index % 3) * 0.2;
      item.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

window.addEventListener('resize', () => {
  const techItems = document.querySelectorAll('.tech-item');
  techItems.forEach(item => {
    item.style.transform = 'translateY(0)';
  });
});