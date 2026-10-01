'use client';

import { useEffect } from 'react';

/** Um único IntersectionObserver para todos os elementos com [data-reveal]. */
export function RevealRoot() {
  useEffect(() => {
    document.documentElement.classList.remove('no-js');
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal], [data-inview]'));
    if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('is-in')); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
