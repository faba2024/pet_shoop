import { Photo } from './photo';
import { SectionHead } from './section-head';
import { site } from '@/content/site';

const services = ['Clínica veterinária', 'Banho e tosa', 'Hotel Pet', 'Farmácia Pet', 'Taxi Dog', 'Petiscos e snacks'];

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-cream py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto grid max-w-[90rem] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <div className="relative lg:col-span-5">
          <Photo name="beijo-filhote" alt="Tutora dando um beijo em um filhote de dachshund no colo" sizes="(min-width:1024px) 36vw, 90vw" className="aspect-[4/5] max-w-[32rem]" position="50% 35%" />
          <p className="absolute -bottom-6 left-6 max-w-[16rem] rotate-[-2deg] rounded-2xl bg-pink px-5 py-4 font-display text-[1.35rem] leading-tight text-white shadow-[0_20px_40px_-20px_rgb(179_0_95/.8)] sm:left-auto sm:right-0 lg:-right-10" data-reveal>
            {site.tagline}
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
          <SectionHead n="08" label="Sobre" title={<span id="sobre-title">Mais que pet shop. Um lugar feito para <em className="text-pink">cuidar.</em></span>} />
          <div className="mt-8 max-w-xl space-y-5 text-[1.08rem] text-ink-2" data-reveal style={{ ['--i' as string]: 2 }}>
            <p>
              Em Campos dos Goytacazes, a Patas &amp; Asas reúne saúde, higiene, hospedagem e mimos em um só endereço — para facilitar a vida de quem tem pet e deixar o pet feliz.
            </p>
            <p>À frente da clínica estão as médicas veterinárias <strong className="font-semibold text-ink">Thais Fontana</strong> e <strong className="font-semibold text-ink">Mariana Fontana</strong>.</p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2.5" data-reveal style={{ ['--i' as string]: 3 }}>
            {services.map((s) => (
              <li key={s} className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-semibold text-ink-2">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
