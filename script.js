document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');

  // Hero content animates in immediately on load
  document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('visible'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  revealEls.forEach(el => {
    if (!el.classList.contains('visible')) observer.observe(el);
  });
});
