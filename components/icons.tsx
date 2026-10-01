type P = { className?: string };

export const Arrow = ({ className = 'arrow h-4 w-4' }: P) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export const ArrowUpRight = ({ className = 'arrow h-4 w-4' }: P) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14 14 6m-7 0h7v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/** Glifo do WhatsApp (marca do serviço, usado apenas para identificar o canal). */
export const WhatsappGlyph = ({ className = 'h-5 w-5' }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.88 2.4 1.01 2.57c.12.16 1.74 2.66 4.22 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.29Z" /></svg>
);

export const InstagramGlyph = ({ className = 'h-5 w-5' }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
);

export const Pin = ({ className = 'h-5 w-5' }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);

/** Marca de pata desenhada à mão — usada como pontuação, nunca como ícone de serviço. */
export const PawMark = ({ className = 'h-4 w-4' }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><ellipse cx="12" cy="16" rx="4.6" ry="3.9" /><ellipse cx="5.6" cy="10.4" rx="1.9" ry="2.4" transform="rotate(-18 5.6 10.4)" /><ellipse cx="9.4" cy="6.6" rx="1.9" ry="2.5" transform="rotate(-6 9.4 6.6)" /><ellipse cx="14.6" cy="6.6" rx="1.9" ry="2.5" transform="rotate(6 14.6 6.6)" /><ellipse cx="18.4" cy="10.4" rx="1.9" ry="2.4" transform="rotate(18 18.4 10.4)" /></svg>
);
