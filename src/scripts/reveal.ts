function initReveal() {
  const els = document.querySelectorAll('.reveal-line, .reveal-fade, .reveal-cover');
  if (!els.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = (entry.target as HTMLElement).dataset.revealFor
          ? document.getElementById((entry.target as HTMLElement).dataset.revealFor)!
          : entry.target;
        target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  els.forEach((el) => {
    // A .reveal-cover hides itself with clip-path inset(0 0 100% 0), which
    // makes its own intersection ratio 0, so IntersectionObserver never
    // fires on it. Observe its parent instead and reveal the cover.
    if (el.classList.contains('reveal-cover') && el.parentElement) {
      const parent = el.parentElement as HTMLElement;
      const id = `reveal-${Math.random().toString(36).slice(2, 9)}`;
      el.id = el.id || id;
      parent.dataset.revealFor = el.id;
      io.observe(parent);
    } else {
      io.observe(el);
    }
  });
}
document.addEventListener('astro:page-load', initReveal);
initReveal();
