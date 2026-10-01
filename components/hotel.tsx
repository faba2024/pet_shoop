import { Photo } from './photo';
import { SectionHead } from './section-head';
import { Arrow } from './icons';
import { whatsappLink } from '@/lib/whatsapp';

const promises = [
  { t: 'Conforto', d: 'Um cantinho tranquilo para descansar entre um carinho e outro.' },
  { t: 'Carinho', d: 'Atenção de verdade, para ele sentir menos a sua falta.' },
  { t: 'Supervisão', d: 'Uma equipe atenta ao bem-estar dele no dia a dia da estadia.' },
  { t: 'Rotina tranquila', d: 'Conte para nós as manias e preferências dele: a ideia é que ele se sinta em casa.' },
];

export function Hotel() {
  return (
    <section id="hotel" aria-labelledby="hotel-title" className="relative overflow-hidden bg-ink py-[clamp(5rem,10vw,9rem)] text-cream">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgb(246_184_28/.16),transparent_65%)]" />
      <div className="relative mx-auto grid max-w-[90rem] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-12">
        <div className="relative lg:col-span-5">
          <Photo name="hotel-cama" alt="Cachorro descansando entre lençóis brancos e macios" sizes="(min-width:1024px) 38vw, 90vw" className="arch mx-auto aspect-[4/5] max-w-[30rem] !bg-ink-2 lg:aspect-[3/4]" position="50% 78%" />
          <Photo name="hotel-gato" alt="Gato dormindo enroladinho em um edredom" sizes="(min-width:1024px) 16vw, 40vw" className="absolute -bottom-8 right-0 aspect-square w-[38%] max-w-[13rem] border-[6px] border-ink !bg-ink-2 sm:right-6 lg:-right-6" position="50% 50%" />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHead n="04" label="Hotel Pet" tone="cream" title={<span id="hotel-title">Uma segunda casa para o seu <em className="text-sun">melhor amigo.</em></span>} />
          <p className="mt-7 max-w-lg text-cream/75" data-reveal style={{ ['--i' as string]: 2 }}>
            Viagem, compromisso ou um dia corrido: enquanto você resolve a vida, ele fica em um lugar acolhedor, cercado de cuidado.
          </p>
          <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {promises.map((p, i) => (
              <div key={p.t} className="border-t border-cream/15 pt-5" data-reveal style={{ ['--i' as string]: i }}>
                <dt className="flex items-center gap-3 font-display text-[1.45rem] leading-tight">
                  <span className="h-1.5 w-1.5 rounded-full bg-sun" aria-hidden="true" />{p.t}
                </dt>
                <dd className="mt-2 text-[0.95rem] leading-snug text-cream/70">{p.d}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4" data-reveal>
            <a href={whatsappLink('hotel')} target="_blank" rel="noopener noreferrer" className="btn bg-cream text-ink hover:bg-sun" data-wa="hotel">
              Consultar Hotel Pet <Arrow />
            </a>
            <p className="max-w-[18rem] text-sm text-cream/60">Disponibilidade, condições e o que levar: a gente explica tudo pelo WhatsApp.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
