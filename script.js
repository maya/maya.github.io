const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const hero = document.querySelector('.hero-system');
if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('pointermove', (e) => {
    const x = (e.clientX / innerWidth - .5) * 7;
    const y = (e.clientY / innerHeight - .5) * 5;
    hero.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}
