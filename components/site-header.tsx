'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { nav, site } from '@/content/site';
import { whatsappLink } from '@/lib/whatsapp';
import { Arrow, InstagramGlyph, WhatsappGlyph } from './icons';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#inicio');
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Destaca no menu a seção visível.
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); } };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${solid ? 'bg-paper/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-xl' : 'bg-transparent'}`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between gap-6 px-5 sm:px-8 lg:h-20 lg:px-12">
          <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="Patas & Asas — início" onClick={() => setOpen(false)}>
            <Image src="/brand/logo-patas-asas.png" alt="" width={300} height={300} className="h-11 w-11 rounded-full shadow-[0_2px_10px_-4px_rgb(37_26_44/.5)] lg:h-12 lg:w-12" preload />
            <span className="leading-none">
              <span className="block font-display text-[1.32rem] tracking-[-0.02em]">Patas <em className="text-pink">&amp;</em> Asas</span>
              <span className="label mt-1 hidden text-[0.58rem] tracking-[0.2em] text-ink-2 sm:block">Pet shop · Clínica veterinária</span>
            </span>
          </a>

          <nav aria-label="Principal" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={active === item.href ? 'true' : undefined}
                    className="relative rounded-full px-3.5 py-2 text-[0.9rem] font-semibold text-ink-2 transition-colors hover:text-ink aria-[current=true]:text-ink"
                  >
                    {item.label}
                    <span className={`absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left rounded-full bg-pink transition-transform duration-500 ${active === item.href ? 'scale-x-100' : 'scale-x-0'}`} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href={whatsappLink('agendar')} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden min-h-11 px-5 sm:inline-flex" data-wa="agendar">
              Agendar <Arrow />
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="relative flex h-11 items-center gap-3 rounded-full border border-ink/15 bg-cream/70 pl-4 pr-3 text-[0.8rem] font-bold uppercase tracking-[0.12em] xl:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((v) => !v)}
            >
              <span>{open ? 'Fechar' : 'Menu'}</span>
              <span className="relative block h-3 w-5" aria-hidden="true">
                <span className={`absolute left-0 top-0 h-[2px] w-5 rounded bg-ink transition-transform duration-500 ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
                <span className={`absolute bottom-0 left-0 h-[2px] rounded bg-ink transition-all duration-500 ${open ? 'w-5 -translate-y-[5px] -rotate-45' : 'w-3.5'}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div id="menu-mobile" className="menu-sheet fixed inset-0 z-40 flex flex-col bg-paper pt-[4.5rem] xl:hidden" data-open={open} aria-hidden={!open} inert={!open}>
        <nav aria-label="Menu" className="flex-1 overflow-y-auto px-6 pb-6 pt-6 sm:px-10">
          <ol className="divide-y divide-line border-y border-line">
            {nav.map((item, i) => (
              <li key={item.href} data-item style={{ ['--i' as string]: i }}>
                <a href={item.href} onClick={() => setOpen(false)} className="group flex items-baseline gap-4 py-[0.9rem] sm:py-4">
                  <span className="w-7 font-display text-sm italic text-pink">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-[clamp(1.9rem,8vw,2.8rem)] leading-none tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1.5">{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="border-t border-line bg-cream px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5 sm:px-10" data-item style={{ ['--i' as string]: nav.length }}>
          <a href={whatsappLink('agendar')} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full" data-wa="agendar">
            <WhatsappGlyph /> Agendar pelo WhatsApp
          </a>
          <div className="mt-4 flex items-center justify-between gap-4 text-sm text-ink-2">
            <span>{site.address.short} · {site.address.city}</span>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-semibold text-ink"><InstagramGlyph className="h-4 w-4" />{site.instagram.handle}</a>
          </div>
        </div>
      </div>
    </>
  );
}
