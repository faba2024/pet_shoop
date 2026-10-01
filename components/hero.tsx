import { Photo } from './photo';
import { Parallax } from './parallax';
import { Seal } from './seal';
import { Arrow, WhatsappGlyph } from './icons';
import { whatsappLink } from '@/lib/whatsapp';

/**
 * Abertura em formato de cartaz: o fundo rosé continua o estúdio da fotografia,
 * o retrato ocupa a direita sem moldura e o nome da marca atravessa a base como um masthead.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#cfaaba_0%,#c59dae_55%,#9c7181_100%)] text-ink"
    >
      {/* Retrato: no desktop ocupa a direita com a borda esquerda dissolvida no palco; no mobile, o topo. */}
      <div className="absolute inset-x-0 top-0 h-[64svh] min-h-[26rem] [mask-image:linear-gradient(to_bottom,#000_62%,transparent_100%)] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-auto lg:w-[66%] lg:[mask-image:linear-gradient(to_right,transparent_0%,#000_24%)]">
        <Parallax speed={0.06} className="absolute -inset-y-10 inset-x-0">
          <Photo
            name="hero"
            alt="Cão pastor-australiano sorrindo diante de um fundo rosado"
            sizes="(min-width: 1024px) 66vw, 100vw"
            preload
            className="h-full w-full !rounded-none !bg-transparent"
            imgClassName="object-[40%_22%] lg:object-[24%_30%]"
          />
        </Parallax>
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-[90rem] grid-rows-[1fr_auto] px-5 pt-[calc(64svh-4rem)] sm:px-8 lg:min-h-[max(100svh,44rem)] lg:pt-28 lg:px-12">
        <div className="max-w-[40rem] self-center pb-8 lg:pb-4">
          <p className="label fade-in inline-flex items-center gap-2.5 rounded-full bg-cream/70 px-3.5 py-2 text-[0.66rem] text-ink backdrop-blur" style={{ ['--i' as string]: 0 }}>
            <span className="h-1.5 w-1.5 rounded-full bg-pink" aria-hidden="true" />
            Pet Shop + Clínica Veterinária
          </p>
          <h1 id="hero-title" className="heading mt-6 text-[clamp(2.65rem,6.2vw,5.6rem)] !leading-[0.98]">
            <span className="line-mask" style={{ ['--i' as string]: 0 }}><span>Cuidado completo</span></span>{' '}
            <span className="line-mask" style={{ ['--i' as string]: 1 }}><span>para quem faz parte</span></span>{' '}
            <span className="line-mask" style={{ ['--i' as string]: 2 }}><span>da <em className="text-[#7a0042]">família.</em></span></span>
          </h1>
          <p className="fade-in mt-6 max-w-[30rem] text-[1.08rem] leading-relaxed text-ink/80" style={{ ['--i' as string]: 1 }}>
            Veterinária, banho e tosa, hotel, farmácia e tudo que seu pet precisa em um só lugar.
          </p>
          <div className="fade-in mt-9 flex flex-wrap gap-3" style={{ ['--i' as string]: 2 }}>
            <a href={whatsappLink('agendar')} target="_blank" rel="noopener noreferrer" className="btn btn-primary" data-wa="agendar">
              Agendar atendimento <Arrow />
            </a>
            <a href={whatsappLink('geral')} target="_blank" rel="noopener noreferrer" className="btn btn-ink" data-wa="geral">
              <WhatsappGlyph className="h-[1.1rem] w-[1.1rem]" /> Falar no WhatsApp
            </a>
          </div>
        </div>

        <Seal className="absolute right-4 top-[5.25rem] h-24 w-24 text-cream sm:right-8 sm:h-28 sm:w-28 lg:right-12 lg:top-28 lg:h-36 lg:w-36" />

        {/* Masthead: decorativo, o nome real está no cabeçalho e no h1 da página. */}
        <p aria-hidden="true" className="display pointer-events-none -mx-1 select-none whitespace-nowrap pb-[0.06em] text-[clamp(4.6rem,min(19vw,30svh),19rem)] leading-[0.78] text-cream mix-blend-soft-light lg:mix-blend-normal lg:text-cream/95">
          <span className="line-mask"><span style={{ animationDelay: '380ms' }}>Patas <em className="text-[#ffd9ea]">&amp;</em> Asas</span></span>
        </p>
      </div>

    </section>
  );
}
