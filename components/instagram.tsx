import { Photo } from './photo';
import { InstagramGlyph, ArrowUpRight } from './icons';
import { site } from '@/content/site';
import type { PhotoKey } from '@/lib/images';

/**
 * Prévia do Instagram com fotos reais do perfil @pataseasas.
 * Para um feed automático, substitua `posts` por dados da Instagram Graph API
 * (token do perfil comercial) buscados no servidor e revalidados periodicamente.
 */
const posts: { photo: PhotoKey; alt: string; cls: string; pos?: string }[] = [
  { photo: 'pom-laco', alt: 'Lulu branco com laço vermelho depois do banho', cls: 'aspect-[3/4] lg:mt-10' },
  { photo: 'beijo-filhote', alt: 'Tutora beijando um filhote de dachshund no colo', cls: 'aspect-[3/4]', pos: '50% 35%' },
  { photo: 'spitz-colo', alt: 'Spitz alemão laranja e branco no colo da equipe', cls: 'aspect-[3/4] lg:mt-16', pos: '50% 40%' },
  { photo: 'pom-sorriso', alt: 'Lulu branco sorrindo deitado em um cenário de fotos', cls: 'aspect-[3/4] lg:mt-4' },
  { photo: 'vet-mariana-pom', alt: 'Médica veterinária segurando um lulu no consultório', cls: 'aspect-[3/4] lg:mt-12', pos: '50% 30%' },
];

export function Instagram() {
  return (
    <section id="instagram" aria-labelledby="instagram-title" className="overflow-hidden bg-paper py-[clamp(5rem,9vw,8rem)]">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label text-mute" data-reveal>{site.instagram.handle}</p>
            <h2 id="instagram-title" className="display mt-4 text-[clamp(3rem,8vw,7rem)]" data-reveal style={{ ['--i' as string]: 1 }}>Quem ama pet <em className="text-pink">entende.</em></h2>
          </div>
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost self-start lg:self-auto" data-reveal style={{ ['--i' as string]: 2 }}>
            <InstagramGlyph className="h-[1.1rem] w-[1.1rem]" /> Seguir no Instagram
          </a>
        </div>
      </div>

      <ul className="scroller mt-12 flex snap-x snap-mandatory scroll-px-5 gap-4 sm:scroll-px-8 overflow-x-auto px-5 sm:px-8 lg:mx-auto lg:grid lg:max-w-[90rem] lg:grid-cols-5 lg:items-start lg:gap-5 lg:overflow-visible lg:px-12">
        {posts.map((p, i) => (
          <li key={p.photo} className="w-[62%] shrink-0 snap-start sm:w-[38%] lg:w-auto" data-reveal style={{ ['--i' as string]: i }}>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="group relative block" aria-label={`Ver no Instagram: ${p.alt}`}>
              <Photo name={p.photo} alt={p.alt} sizes="(min-width:1024px) 18vw, (min-width:640px) 38vw, 62vw" className={p.cls} position={p.pos} />
              <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-cream/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true"><ArrowUpRight className="h-4 w-4" /></span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
