import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

function initMotion() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;
  if (lenis) return;
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function cleanupMotion() {
  if (lenis) { lenis.destroy(); lenis = null; }
  ScrollTrigger.getAll().forEach((t) => t.kill());
  gsap.ticker.remove((time) => lenis?.raf(time * 1000));
}

document.addEventListener('astro:page-load', initMotion);
document.addEventListener('astro:before-swap', cleanupMotion);
initMotion();
