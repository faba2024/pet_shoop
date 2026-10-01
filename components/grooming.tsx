import { Photo } from './photo';
import { SectionHead } from './section-head';
import { Arrow, InstagramGlyph } from './icons';
import { whatsappLink } from '@/lib/whatsapp';
import { site } from '@/content/site';
import type { PhotoKey } from '@/lib/images';

const ritual: { t: string; d: string; photo: PhotoKey; alt: string; aspect: string; pos?: string }[] = [
  { t: 'Banho', d: 'Água na temperatura certa, produtos adequados à pelagem e muito carinho.', photo: 'banho-lavando', alt: 'Cachorrinho molhado tomando banho', aspect: 'aspect-[4/5]', pos: '40% 50%' },
  { t: 'Secagem', d: 'Feita com calma, respeitando o tempo e o conforto de cada pet.', photo: 'secagem', alt: 'Cão de pelo longo sendo secado com secador e escova', aspect: 'aspect-[4/5] lg:aspect-[3/4]', pos: '45% 50%' },
  { t: 'Escova & tosa', d: 'Escovação e tosa com atenção a cada detalhe.', photo: 'tosa-mesa', alt: 'Spitz branco sendo escovado sobre a mesa de tosa', aspect: 'aspect-[4/5]', pos: '62% 50%' },
  { t: 'Pronto para o colo', d: 'Limpinho, cheiroso e feliz para voltar para casa.', photo: 'roupao', alt: 'Maltês enrolado em uma toalha depois do banho', aspect: 'aspect-[4/5] lg:aspect-[3/4]', pos: '50% 30%' },
];

export function Grooming() {
  return (
    <section id="banho-e-tosa" aria-labelledby="banho-title" className="relative overflow-hidden bg-blush py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-6">
            <SectionHead n="03" label="Banho & Tosa" title={<span id="banho-title">Seu pet limpo, cheiroso e <em className="text-pink">feliz.</em></span>} />
            <p className="mt-7 max-w-md text-ink-2" data-reveal style={{ ['--i' as string]: 2 }}>
              Mais do que estética: um momento de cuidado, sem pressa, em que cada pet é tratado com o carinho que ele recebe em casa.
            </p>
            <a href={whatsappLink('banho')} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-9" data-wa="banho" data-reveal style={{ ['--i' as string]: 3 }}>
              Agendar banho e tosa <Arrow />
            </a>
          </div>

          {/* Resultados reais publicados no perfil da casa */}
          <figure className="relative lg:col-span-6" data-reveal style={{ ['--i' as string]: 1 }}>
            <div className="relative mx-auto flex max-w-[36rem] justify-center gap-4 sm:gap-6">
              <div className="w-[48%] -rotate-[3deg] rounded-[1.4rem] bg-cream p-2.5 pb-10 shadow-[0_30px_60px_-30px_rgb(37_26_44/.45)] transition-transform duration-700 hover:-rotate-1">
                <Photo name="pom-laco" alt="Lulu-da-pomerânia branco com laço vermelho depois do banho e tosa" sizes="(min-width:1024px) 17vw, 45vw" className="aspect-[3/4] !rounded-[1rem]" />
              </div>
              <div className="mt-12 w-[48%] rotate-[2.5deg] rounded-[1.4rem] bg-cream p-2.5 pb-10 shadow-[0_30px_60px_-30px_rgb(37_26_44/.45)] transition-transform duration-700 hover:rotate-1">
                <Photo name="pom-sorriso" alt="Lulu-da-pomerânia branco sorrindo, com a pelagem fofa depois da tosa" sizes="(min-width:1024px) 17vw, 45vw" className="aspect-[3/4] !rounded-[1rem]" position="50% 45%" />
              </div>
            </div>
            <figcaption className="mt-6 flex items-center justify-center gap-2 text-sm text-ink-2">
              <InstagramGlyph className="h-4 w-4 text-pink" /> Clientes da casa, direto do <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="font-bold text-ink underline decoration-pink decoration-2 underline-offset-4">{site.instagram.handle}</a>
            </figcaption>
          </figure>
        </div>

        <div className="mt-20 lg:mt-28">
          <div className="flex items-end justify-between gap-6">
            <h3 className="heading text-[clamp(1.7rem,2.6vw,2.4rem)]" data-reveal>O ritual, passo a passo</h3>
            <p className="label hidden text-mute sm:block lg:hidden" aria-hidden="true">Deslize →</p>
          </div>
          <ol className="scroller -mx-5 mt-8 flex snap-x snap-mandatory scroll-px-5 gap-4 sm:scroll-px-8 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:items-start lg:gap-6 lg:overflow-visible lg:px-0">
            {ritual.map((s, i) => (
              <li key={s.t} className={`w-[72%] shrink-0 snap-start sm:w-[44%] lg:w-auto ${i % 2 ? 'lg:mt-16' : ''}`} data-reveal style={{ ['--i' as string]: i }}>
                <Photo name={s.photo} alt={s.alt} sizes="(min-width:1024px) 22vw, (min-width:640px) 44vw, 72vw" className={s.aspect} position={s.pos} />
                <div className="mt-4 flex gap-3">
                  <span className="font-display text-lg italic text-pink">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4 className="font-display text-[1.35rem] leading-tight">{s.t}</h4>
                    <p className="mt-1 text-[0.93rem] leading-snug text-ink-2">{s.d}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
