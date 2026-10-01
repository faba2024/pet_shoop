/** Selo circular com texto em volta — assinatura da marca. */
export function Seal({ className = '', text = 'Campos dos Goytacazes · RJ · Pet shop & clínica · ' }: { className?: string; text?: string }) {
  return (
    <div className={`grid place-items-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="seal-spin absolute inset-0 h-full w-full">
        <defs><path id="seal-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
        <text className="fill-current font-sans text-[12.5px] font-bold uppercase tracking-[0.12em]">
          <textPath href="#seal-circle" textLength="486" lengthAdjust="spacingAndGlyphs">{text}</textPath>
        </text>
      </svg>
      <span className="font-display text-[2.1rem] italic leading-none">P<span className="text-pink">&amp;</span>A</span>
    </div>
  );
}
