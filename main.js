// ── Hamburger menu ──────────────────────────────
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu on link click (mobile)
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    toggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── Navbar hide/show on scroll ─────────────────
const navbar = document.getElementById('navbar');
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  // Only auto-hide on small screens
  if (window.innerWidth <= 768) return;
  const y = window.scrollY;
  navbar.style.transform = (y > lastY && y > 80) ? 'translateY(-100%)' : 'translateY(0)';
  lastY = y;
}, { passive: true });

// ── Active nav link highlight ──────────────────
const sections = document.querySelectorAll('section[id], #hero');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + e.target.id
          ? 'var(--teal-light)'
          : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));
