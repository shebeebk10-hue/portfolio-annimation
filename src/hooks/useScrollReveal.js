import { useEffect } from 'react';

/**
 * Globally reveals sections and cards as they scroll into view.
 * Works purely by selecting existing DOM elements/classes that
 * already exist across the site (section, .skill-card, .cert-card,
 * .service-item, .timeline-container .row) — no component files
 * need to change for this to apply.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      document
        .querySelectorAll('.reveal-target')
        .forEach((el) => el.classList.add('in-view'));
      return;
    }

    // Tag revealable elements (idempotent — safe to re-run).
    const sectionTargets = document.querySelectorAll(
      'section:not(#home)'
    );
    const cardTargets = document.querySelectorAll(
      '.skill-card, .cert-card, .service-item, .timeline-container > .row'
    );

    sectionTargets.forEach((el) => el.classList.add('reveal-target', 'reveal-section'));
    cardTargets.forEach((el, i) => {
      el.classList.add('reveal-target', 'reveal-card');
      el.style.setProperty('--reveal-delay', `${(i % 6) * 90}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    document
      .querySelectorAll('.reveal-target')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
