function initCursor() {
  const el = document.getElementById('custom-cursor');
  const label = document.getElementById('cursor-label');
  if (!el || !label) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;
  let x = 0, y = 0, raf = 0;
  const move = (e: MouseEvent) => {
    x = e.clientX; y = e.clientY;
    if (!raf) raf = requestAnimationFrame(() => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = 0;
    });
  };
  const over = (e: MouseEvent) => {
    const t = (e.target as HTMLElement).closest('[data-cursor]') as HTMLElement | null;
    if (t) {
      label.textContent = t.dataset.cursor || '';
      el.classList.add('on', 'grow');
      el.classList.toggle('accent', t.dataset.cursorAccent === 'true');
    } else {
      el.classList.remove('on', 'grow', 'accent');
    }
  };
  document.addEventListener('mousemove', move);
  document.addEventListener('mouseover', over);
}
document.addEventListener('astro:page-load', initCursor);
initCursor();
