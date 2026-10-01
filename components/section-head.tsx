import type { ReactNode } from 'react';

/** Cabeçalho de capítulo: número editorial + rótulo + título. */
export function SectionHead({ n, label, title, tone = 'ink', className = '' }: { n: string; label: string; title: ReactNode; tone?: 'ink' | 'cream'; className?: string }) {
  const sub = tone === 'cream' ? 'text-cream/70' : 'text-mute';
  return (
    <header className={className}>
      <p className={`label flex items-center gap-3 ${sub}`} data-reveal>
        <span className="font-display text-[0.95rem] normal-case tracking-normal italic text-pink">N.º {n}</span>
        <span className="h-px w-8 bg-current opacity-40" aria-hidden="true" />
        {label}
      </p>
      <h2 className="heading mt-5 text-[clamp(2.4rem,5.4vw,4.6rem)]" data-reveal style={{ ['--i' as string]: 1 }}>{title}</h2>
    </header>
  );
}
