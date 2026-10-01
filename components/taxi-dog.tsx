import { Photo } from './photo';
import { Arrow } from './icons';
import { whatsappLink } from '@/lib/whatsapp';

export function TaxiDog() {
  return (
    <section id="taxi-dog" aria-labelledby="taxi-title" className="bg-paper py-[clamp(4rem,8vw,7rem)]">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="relative grid overflow-hidden rounded-[2rem] bg-sun text-ink lg:grid-cols-12" data-inview>
          <div className="relative z-10 p-7 sm:p-10 lg:col-span-6 lg:p-14">
            <p className="label flex items-center gap-3"><span className="font-display text-[0.95rem] normal-case italic tracking-normal">N.º 05</span><span className="h-px w-8 bg-ink/40" aria-hidden="true" />Taxi Dog</p>
            <h2 id="taxi-title" className="heading mt-5 text-[clamp(2.2rem,4.6vw,3.9rem)]">Seu pet vai e volta com <em>todo cuidado.</em></h2>
            <p className="mt-5 max-w-md text-ink/75">Buscamos e levamos seu pet para os atendimentos. Consulte os bairros atendidos e os horários disponíveis.</p>
            <a href={whatsappLink('taxi')} target="_blank" rel="noopener noreferrer" className="btn btn-ink mt-8" data-wa="taxi">
              Consultar Taxi Dog <Arrow />
            </a>
          </div>

          <div className="relative min-h-[19rem] lg:col-span-6 lg:min-h-0">
            {/* Trajeto casa → Patas & Asas: a linha se desenha ao entrar na tela */}
            <svg viewBox="0 0 560 360" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <path d="M60 300 C 160 300, 150 170, 260 170 S 380 60, 500 70" fill="none" stroke="rgb(37 26 44 / .28)" strokeWidth="2.5" className="route-path" strokeLinecap="round" />
              <path d="M60 300 C 160 300, 150 170, 260 170 S 380 60, 500 70" fill="none" stroke="#e3007f" strokeWidth="3.5" className="route-draw" strokeLinecap="round" />
              <circle cx="60" cy="300" r="9" fill="#251a2c" />
              <circle cx="500" cy="70" r="11" fill="#e3007f" stroke="#fffbf5" strokeWidth="4" />
              <text x="36" y="338" textAnchor="start" className="fill-ink font-sans text-[15px] font-bold uppercase tracking-[0.14em]">Sua casa</text>
              <text x="528" y="40" textAnchor="end" className="fill-ink font-sans text-[15px] font-bold uppercase tracking-[0.14em]">Patas &amp; Asas</text>
            </svg>
            <Photo name="taxi-pug" alt="Pug acomodado com segurança em uma caminha de transporte dentro do carro" sizes="(min-width:1024px) 16vw, 40vw" className="absolute bottom-6 right-6 aspect-square w-[42%] max-w-[15rem] !rounded-full border-[6px] border-cream shadow-[0_20px_40px_-20px_rgb(37_26_44/.6)] sm:bottom-8 sm:right-10" position="50% 45%" />
          </div>
        </div>
      </div>
    </section>
  );
}
