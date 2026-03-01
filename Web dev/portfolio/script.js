// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .project-card, .contact-btn').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// Navbar hide on scroll down, show on scroll up
let lastScroll = 0;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  navbar.style.transform = current > lastScroll && current > 80 ? 'translateY(-100%)' : 'translateY(0)';
  lastScroll = current;
});
