import { Photo } from './photo';
import { SectionHead } from './section-head';
import { Arrow } from './icons';
import { whatsappLink } from '@/lib/whatsapp';

const care = [
  { t: 'Consultas', d: 'Avaliação cuidadosa, com tempo para ouvir você e examinar seu pet com calma.' },
  { t: 'Acompanhamento', d: 'Retornos e atenção à evolução de cada fase da vida, do filhote ao idoso.' },
  { t: 'Orientação', d: 'Explicações claras sobre cuidados, alimentação e rotina em casa.' },
  { t: 'Cuidados preventivos', d: 'Prevenir é a forma mais gentil de cuidar — e a que evita sustos.' },
];

export function Clinic() {
  return (
    <section id="clinica" aria-labelledby="clinica-title" className="relative bg-cream py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto grid max-w-[90rem] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHead n="02" label="Clínica veterinária" title={<span id="clinica-title">Saúde também é uma forma de <em className="text-pink">amor.</em></span>} />
            <p className="mt-7 max-w-md text-ink-2" data-reveal style={{ ['--i' as string]: 2 }}>
              Atendimento conduzido pelas médicas veterinárias Thais Fontana e Mariana Fontana, com a mesma delicadeza que você tem com o seu pet.
            </p>
            <ol className="mt-10 border-t border-line">
              {care.map((c, i) => (
                <li key={c.t} className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-b border-line py-5" data-reveal style={{ ['--i' as string]: i }}>
                  <span className="pt-1 font-display text-sm italic text-sky-deep">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display text-[1.4rem] leading-tight tracking-[-0.01em]">{c.t}</h3>
                    <p className="mt-1 text-[0.95rem] leading-snug text-ink-2">{c.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a href={whatsappLink('clinica')} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-10" data-wa="clinica" data-reveal>
              Agendar consulta <Arrow />
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="grid grid-cols-6 gap-4 sm:gap-5">
            <Photo name="vet-chihuahua" alt="Chihuahua sendo examinado com carinho em um consultório veterinário" sizes="(min-width:1024px) 34vw, 66vw" className="col-span-4 aspect-[3/4]" position="50% 40%" />
            <div className="col-span-2 flex flex-col justify-end gap-4 sm:gap-5">
              <div className="rounded-[var(--radius-photo)] bg-paper p-4 sm:p-5" data-reveal>
                <span className="block h-2 w-2 rounded-full bg-sky" aria-hidden="true" />
                <p className="mt-3 font-display text-[1.05rem] leading-snug sm:text-[1.25rem]">“O lugar preferido do seu pet.”</p>
                <p className="label mt-3 text-[0.58rem] text-mute">Patas &amp; Asas</p>
              </div>
              <Photo name="vet-gato" alt="Gato branco sendo examinado por mãos com luvas" sizes="(min-width:1024px) 17vw, 33vw" className="aspect-[3/4]" position="50% 45%" />
            </div>
          </div>

          <div className="mt-16" id="veterinarias">
            <p className="label text-mute" data-reveal>Quem cuida</p>
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:gap-5">
              <li data-reveal>
                {/* Espaço reservado para a foto real da Dra. Thais (substituir por /images/dra-thais.webp). */}
                <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[var(--radius-photo)] border border-dashed border-line bg-[radial-gradient(circle_at_30%_20%,#fff_0%,var(--color-paper)_70%)]">
                  <span className="font-display text-[clamp(3.5rem,9vw,5.5rem)] italic leading-none text-ink/15">TF</span>
                  <span className="label absolute bottom-4 left-4 text-[0.58rem] text-mute">Retrato em breve</span>
                </div>
                <h3 className="mt-4 font-display text-[clamp(1.15rem,3.6vw,1.5rem)] leading-tight">Dra. Thais Fontana</h3>
                <p className="text-[0.95rem] text-ink-2">Médica veterinária</p>
              </li>
              <li data-reveal style={{ ['--i' as string]: 1 }}>
                <Photo name="vet-mariana-pom" alt="Dra. Mariana Fontana segurando um lulu-da-pomerânia no consultório" sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw" className="aspect-[4/5]" position="50% 30%" />
                <h3 className="mt-4 font-display text-[clamp(1.15rem,3.6vw,1.5rem)] leading-tight">Dra. Mariana Fontana</h3>
                <p className="text-[0.95rem] text-ink-2">Médica veterinária</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
