import { reviews } from '@/content/reviews';
import { SectionHead } from './section-head';
import { Arrow } from './icons';
import { whatsappLink } from '@/lib/whatsapp';

export function Reviews() {
  return (
    <section id="avaliacoes" aria-labelledby="avaliacoes-title" className="bg-cream py-[clamp(5rem,9vw,8rem)]">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <SectionHead n="07" label="Quem confia" title={<span id="avaliacoes-title">A palavra de quem <em className="text-pink">confia.</em></span>} />

        {reviews.length > 0 ? (
          <ul className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <li key={i} className="border-t border-line pt-6" data-reveal style={{ ['--i' as string]: i }}>
                <blockquote className="font-display text-[1.45rem] leading-snug tracking-[-0.01em]">“{r.quote}”</blockquote>
                <p className="mt-5 text-sm text-ink-2"><strong className="text-ink">{r.author}</strong>{r.pet ? ` · tutor(a) de ${r.pet}` : ''}{r.source ? ` · via ${r.source}` : ''}</p>
              </li>
            ))}
          </ul>
        ) : (
          /* Estado sem avaliações publicadas: convite real, sem depoimento fictício. */
          <div className="mt-14 grid gap-8 rounded-[2rem] border border-line bg-paper p-7 sm:p-10 lg:grid-cols-12 lg:items-center lg:p-14" data-reveal>
            <p className="font-display text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] lg:col-span-8">
              Seu pet já é da casa? Conte como foi a experiência — sua opinião ajuda outros tutores a conhecerem <em className="text-pink">a Patas &amp; Asas.</em>
            </p>
            <div className="lg:col-span-4 lg:justify-self-end">
              <a href={whatsappLink('avaliacao')} target="_blank" rel="noopener noreferrer" className="btn btn-primary" data-wa="avaliacao">Deixar minha avaliação <Arrow /></a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
