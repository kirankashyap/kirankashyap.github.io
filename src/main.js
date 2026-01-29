import './style.css'

// Scroll Observer for Reveal Animation
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.classList.add('hidden-section');
  observer.observe(section);
});

// Tilt Effect for Cards
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  });
});

// Dynamic Glitch Text Effect (Simple Randomizer)
const glitchText = document.querySelector('.glitch-text');
if (glitchText) {
  setInterval(() => {
    const skew = Math.random() * 2 - 1;
    glitchText.style.transform = `skewX(${skew}deg)`;
  }, 2000);
}

// Inject additional styles for animations
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .hidden-section {
    opacity: 0;
    transform: translateY(50px);
    transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  
  .visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(styleSheet);
