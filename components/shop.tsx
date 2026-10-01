import { Photo } from './photo';
import { SectionHead } from './section-head';
import { WhatsappGlyph } from './icons';
import { whatsappLink } from '@/lib/whatsapp';
import type { PhotoKey } from '@/lib/images';

const shelf: { t: string; d: string; photo: PhotoKey; alt: string; pos?: string }[] = [
  { t: 'Medicamentos', d: 'Com orientação veterinária, sempre.', photo: 'prod-remedio', alt: 'Frasco de comprimidos aberto sobre fundo claro', pos: '50% 60%' },
  { t: 'Higiene', d: 'Shampoos e itens para o cuidado diário.', photo: 'prod-higiene', alt: 'Cão na banheira ao lado de um frasco de shampoo', pos: '55% 50%' },
  { t: 'Acessórios', d: 'Guias, coleiras e o necessário para o passeio.', photo: 'prod-guia', alt: 'Guia azul-turquesa apoiada em um tronco', pos: '50% 55%' },
  { t: 'Snacks', d: 'Petiscos para recompensar e mimar.', photo: 'prod-ossinhos', alt: 'Biscoitos em formato de osso sobre fundo rosa', pos: '50% 50%' },
  { t: 'Cuidados', d: 'Escovas e itens para a rotina em casa.', photo: 'prod-escova', alt: 'Cão de pelo branco sendo escovado com uma escova rosa', pos: '55% 50%' },
];

export function Shop() {
  return (
    <section id="farmacia" aria-labelledby="farmacia-title" className="bg-paper pb-[clamp(5rem,10vw,9rem)] pt-[clamp(3rem,6vw,5rem)]">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHead n="06" label="Farmácia & Pet Shop" className="lg:col-span-7" title={<span id="farmacia-title">Uma curadoria do que faz bem <em className="text-pink">a ele.</em></span>} />
          <div className="lg:col-span-4 lg:col-start-9" data-reveal style={{ ['--i' as string]: 2 }}>
            <p className="text-ink-2">Itens escolhidos para a saúde, a higiene e os mimos do dia a dia. Consulte a disponibilidade e tire dúvidas direto com a equipe.</p>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:mt-20 lg:grid-cols-5 lg:items-start">
          {shelf.map((s, i) => (
            <li key={s.t} className={`group ${i === 0 ? 'col-span-2 lg:col-span-1' : ''} ${i % 2 ? 'lg:mt-14' : ''}`} data-reveal style={{ ['--i' as string]: i }}>
              <a href={whatsappLink('farmacia')} target="_blank" rel="noopener noreferrer" data-wa="farmacia" className="block">
                <Photo name={s.photo} alt={s.alt} sizes="(min-width:1024px) 18vw, (min-width:640px) 45vw, 50vw" className={i === 0 ? 'aspect-[16/10] lg:aspect-[3/4]' : 'aspect-[3/4]'} position={s.pos} />
                <div className="mt-4 flex items-baseline justify-between gap-3 border-b border-line pb-3">
                  <h3 className="font-display text-[1.35rem] leading-tight">{s.t}</h3>
                  <span className="font-display text-sm italic text-pink">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="mt-2 text-[0.92rem] leading-snug text-ink-2">{s.d}</p>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center" data-reveal>
          <a href={whatsappLink('farmacia')} target="_blank" rel="noopener noreferrer" className="btn btn-ink" data-wa="farmacia">
            <WhatsappGlyph className="h-[1.1rem] w-[1.1rem]" /> Consultar produtos<span className="hidden sm:inline">&nbsp;pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
