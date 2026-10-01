'use client';

import { useEffect, useRef, useState } from 'react';
import type { WhatsappTopic } from '@/content/site';
import { whatsappLink } from '@/lib/whatsapp';
import { WhatsappGlyph } from './icons';

/** Assunto do WhatsApp de acordo com a seção que está na tela. */
const bySection: Record<string, { topic: WhatsappTopic; label: string }> = {
  servicos: { topic: 'agendar', label: 'Agendar atendimento' },
  clinica: { topic: 'clinica', label: 'Agendar consulta' },
  'banho-e-tosa': { topic: 'banho', label: 'Agendar banho e tosa' },
  hotel: { topic: 'hotel', label: 'Consultar Hotel Pet' },
  'taxi-dog': { topic: 'taxi', label: 'Consultar Taxi Dog' },
  farmacia: { topic: 'farmacia', label: 'Consultar produtos' },
};

const topics: { topic: WhatsappTopic; label: string }[] = [
  { topic: 'clinica', label: 'Consulta veterinária' },
  { topic: 'banho', label: 'Banho e tosa' },
  { topic: 'hotel', label: 'Hotel Pet' },
  { topic: 'taxi', label: 'Taxi Dog' },
  { topic: 'farmacia', label: 'Farmácia e produtos' },
  { topic: 'geral', label: 'Outro assunto' },
];

export function WhatsappDock() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState<{ topic: WhatsappTopic; label: string }>({ topic: 'geral', label: 'Fale com a gente' });
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.getElementById('inicio');
    const contact = document.getElementById('contato');
    let heroVisible = true, contactVisible = false;
    const sync = () => setVisible(!heroVisible && !contactVisible);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.target === hero) heroVisible = e.intersectionRatio > 0.35;
        else if (e.target === contact) contactVisible = e.isIntersecting;
      });
      sync();
    }, { threshold: [0, 0.35] });
    if (hero) io.observe(hero);
    if (contact) io.observe(contact);

    const sec = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setCurrent(bySection[e.target.id] ?? { topic: 'geral', label: 'Fale com a gente' });
      });
    }, { rootMargin: '-50% 0px -50% 0px' });
    document.querySelectorAll('main > section[id]').forEach((s) => sec.observe(s));
    return () => { io.disconnect(); sec.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => { if (!boxRef.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open]);

  return (
    <div
      ref={boxRef}
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-30 transition-[opacity,transform] duration-500 sm:right-6 ${visible || open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
      data-testid="whatsapp-dock"
    >
      <div
        id="whatsapp-topics"
        role="menu"
        aria-label="Escolha o assunto"
        className={`absolute bottom-[calc(100%+0.6rem)] right-0 w-64 origin-bottom-right rounded-3xl border border-line bg-cream p-2 shadow-[0_24px_60px_-24px_rgb(37_26_44/.55)] transition-[opacity,transform,visibility] duration-300 ${open ? 'visible scale-100 opacity-100' : 'pointer-events-none invisible scale-95 opacity-0'}`}
      >
        <p className="label px-3 pb-1 pt-2 text-[0.6rem] text-mute">Sobre o que vamos conversar?</p>
        {topics.map((t) => (
          <a key={t.topic} role="menuitem" href={whatsappLink(t.topic)} target="_blank" rel="noopener noreferrer" data-wa={t.topic} tabIndex={open ? 0 : -1}
            className="flex items-center justify-between rounded-2xl px-3 py-2.5 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-blush">
            {t.label}<span aria-hidden="true" className="text-pink">→</span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-1.5 rounded-full bg-ink p-1.5 pl-1.5 text-cream shadow-[0_18px_40px_-16px_rgb(37_26_44/.7)]">
        <a href={whatsappLink(current.topic)} target="_blank" rel="noopener noreferrer" data-wa={current.topic}
          className="flex h-11 items-center gap-2.5 rounded-full pl-1 pr-3 text-[0.9rem] font-bold" aria-label={`WhatsApp: ${current.label}`}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#25d366] text-ink"><WhatsappGlyph className="h-[1.15rem] w-[1.15rem]" /></span>
          <span className="max-w-[11rem] truncate">{current.label}</span>
        </a>
        <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="whatsapp-topics" aria-label="Escolher outro assunto"
          className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 transition-colors hover:bg-cream/20">
          <svg viewBox="0 0 20 20" className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-45' : ''}`} aria-hidden="true"><path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
      </div>
    </div>
  );
}
