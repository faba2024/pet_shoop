import { Photo } from './photo';
import { SectionHead } from './section-head';
import { Arrow, ArrowUpRight } from './icons';
import { whatsappLink } from '@/lib/whatsapp';
import type { PhotoKey } from '@/lib/images';
import type { WhatsappTopic } from '@/content/site';

const minor: { title: string; text: string; cta: string; photo: PhotoKey; alt: string; topic: WhatsappTopic; href?: string }[] = [
  { title: 'Farmácia Pet', text: 'Medicamentos e itens de cuidado do dia a dia, com orientação de quem entende.', cta: 'Consultar produtos', photo: 'farmacia-suplemento', alt: 'Tutor oferecendo um suplemento mastigável a um cão', topic: 'farmacia', href: '#farmacia' },
  { title: 'Taxi Dog', text: 'Seu pet vai e volta com todo cuidado. Consulte bairros e horários.', cta: 'Consultar Taxi Dog', photo: 'taxi-pug', alt: 'Pug acomodado em uma cama de transporte no carro', topic: 'taxi', href: '#taxi-dog' },
  { title: 'Petiscos & Snacks', text: 'Mimos para recompensar, treinar e deixar o dia mais feliz.', cta: 'Ver petiscos', photo: 'snack-ciano', alt: 'Cão recebendo um petisco da mão do tutor', topic: 'petiscos' },
];

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="relative bg-paper py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHead n="01" label="O que fazemos" className="lg:col-span-8" title={<span id="servicos-title">Tudo o que seu pet precisa, <em className="text-pink">no mesmo endereço.</em></span>} />
          <p className="max-w-md text-ink-2 lg:col-span-4 lg:justify-self-end" data-reveal style={{ ['--i' as string]: 2 }}>
            Da consulta ao banho, da farmácia ao hotel: um só lugar, uma só equipe, e o seu pet sempre tratado com carinho.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-6">
          {/* Destaque: clínica */}
          <a href="#clinica" className="group relative block lg:col-span-7 lg:row-span-2" data-reveal>
            <Photo name="clinica" alt="Buldogue francês tranquilo sobre a mesa de atendimento de um consultório" sizes="(min-width:1024px) 56vw, 100vw" className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[44rem]" position="50% 55%" />
            <div className="pointer-events-none absolute inset-0 rounded-[var(--radius-photo)] bg-[linear-gradient(to_top,rgb(37_26_44/.82)_0%,rgb(37_26_44/.15)_50%,transparent_70%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-cream sm:p-9">
              <p className="label text-cream/80">Clínica veterinária</p>
              <h3 className="heading mt-3 max-w-[22ch] text-[clamp(1.9rem,3.4vw,3rem)]">Consultas, acompanhamento e cuidado preventivo.</h3>
              <span className="link-line mt-6 text-[0.95rem]">Conhecer a clínica <Arrow /></span>
            </div>
            <span className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-cream text-ink transition-transform duration-500 group-hover:rotate-45" aria-hidden="true"><ArrowUpRight className="h-5 w-5" /></span>
          </a>

          {/* Intermediários: banho e tosa + hotel */}
          <a href="#banho-e-tosa" className="group grid gap-5 sm:grid-cols-[1.1fr_1fr] sm:items-end lg:col-span-5 lg:grid-cols-1" data-reveal style={{ ['--i' as string]: 1 }}>
            <Photo name="banho-toalha" alt="Spitz alemão com a cabeça enrolada em uma toalha rosa sendo escovado" sizes="(min-width:1024px) 38vw, (min-width:640px) 52vw, 100vw" className="aspect-[4/3] lg:aspect-[16/10]" position="50% 35%" />
            <div className="pb-1">
              <p className="label text-pink-deep">Banho &amp; Tosa</p>
              <h3 className="heading mt-2 text-[clamp(1.6rem,2.4vw,2.2rem)]">Limpinho, cheiroso e feliz.</h3>
              <p className="mt-2 text-ink-2">Banho, secagem e tosa feitos com paciência — para ele voltar para casa leve.</p>
              <span className="link-line mt-4 text-[0.95rem]">Ver banho &amp; tosa <Arrow /></span>
            </div>
          </a>
          <a href="#hotel" className="group grid gap-5 sm:grid-cols-[1.1fr_1fr] sm:items-end lg:col-span-5 lg:grid-cols-1" data-reveal style={{ ['--i' as string]: 2 }}>
            <Photo name="hotel-manta" alt="Cachorro dormindo enrolado em uma manta de tricô" sizes="(min-width:1024px) 38vw, (min-width:640px) 52vw, 100vw" className="aspect-[4/3] lg:aspect-[16/10]" position="50% 62%" />
            <div className="pb-1">
              <p className="label text-pink-deep">Hotel Pet</p>
              <h3 className="heading mt-2 text-[clamp(1.6rem,2.4vw,2.2rem)]">Uma segunda casa enquanto você está fora.</h3>
              <span className="link-line mt-4 text-[0.95rem]">Ver hotel pet <Arrow /></span>
            </div>
          </a>
        </div>

        {/* Menores: índice com miniaturas */}
        <ul className="mt-14 grid border-t border-line lg:mt-20 lg:grid-cols-3">
          {minor.map((s, i) => (
            <li key={s.title} className="border-b border-line lg:border-b-0 lg:[&:not(:last-child)]:border-r" data-reveal style={{ ['--i' as string]: i }}>
              <a href={s.href ?? whatsappLink(s.topic)} {...(s.href ? {} : { target: '_blank', rel: 'noopener noreferrer', 'data-wa': s.topic })} className="group flex gap-5 py-7 lg:px-7 lg:first:pl-0">
                <Photo name={s.photo} alt={s.alt} sizes="112px" className="h-24 w-24 shrink-0 !rounded-2xl sm:h-28 sm:w-28" />
                <div className="min-w-0">
                  <h3 className="font-display text-[1.45rem] leading-tight tracking-[-0.015em]">{s.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-snug text-ink-2">{s.text}</p>
                  <span className="link-line mt-3 text-[0.85rem] text-pink-deep">{s.cta} <Arrow className="arrow h-3.5 w-3.5" /></span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
