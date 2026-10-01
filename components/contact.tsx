import { SectionHead } from './section-head';
import { Arrow, InstagramGlyph, Pin, WhatsappGlyph } from './icons';
import { maps, site } from '@/content/site';
import { whatsappLink } from '@/lib/whatsapp';

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-paper py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <div className="lg:col-span-5">
          <SectionHead n="09" label="Contato" title={<span id="contato-title">Vem conhecer a <em className="text-pink">Patas &amp; Asas.</em></span>} />

          <dl className="mt-10 divide-y divide-line border-y border-line" data-reveal style={{ ['--i' as string]: 2 }}>
            <div className="grid grid-cols-[2rem_1fr] gap-3 py-5">
              <dt className="pt-0.5 text-pink"><Pin /><span className="sr-only">Endereço</span></dt>
              <dd>
                <p className="font-display text-[1.35rem] leading-tight">{site.address.street}</p>
                <p className="text-ink-2">{site.address.city} · {site.address.state} · {site.address.postalCode}</p>
              </dd>
            </div>
            <div className="grid grid-cols-[2rem_1fr] gap-3 py-5">
              <dt className="pt-0.5 text-pink"><WhatsappGlyph /><span className="sr-only">WhatsApp</span></dt>
              <dd><a href={whatsappLink('geral')} target="_blank" rel="noopener noreferrer" className="link-line font-display text-[1.35rem] font-normal" data-wa="geral">{site.whatsapp.display}</a></dd>
            </div>
            <div className="grid grid-cols-[2rem_1fr] gap-3 py-5">
              <dt className="pt-0.5 text-pink"><InstagramGlyph /><span className="sr-only">Instagram</span></dt>
              <dd><a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="link-line font-display text-[1.35rem] font-normal">{site.instagram.handle}</a></dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3" data-reveal style={{ ['--i' as string]: 3 }}>
            <a href={whatsappLink('geral')} target="_blank" rel="noopener noreferrer" className="btn btn-primary" data-wa="geral"><WhatsappGlyph className="h-[1.1rem] w-[1.1rem]" /> Abrir WhatsApp</a>
            <a href={maps.directions} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Como chegar <Arrow /></a>
          </div>
        </div>

        <div className="lg:col-span-7" data-reveal style={{ ['--i' as string]: 1 }}>
          <figure className="relative h-full min-h-[24rem] overflow-hidden rounded-[2rem] border border-line bg-paper-2 lg:min-h-[36rem]">
            <iframe
              title={`Mapa: ${site.name}, ${site.address.street}, ${site.address.city}`}
              src={maps.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 [filter:grayscale(.55)_sepia(.12)_contrast(1.02)]"
            />
            <figcaption className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-cream/95 px-4 py-2 text-sm font-bold shadow-[0_8px_20px_-10px_rgb(37_26_44/.5)]">
              <span className="h-2 w-2 rounded-full bg-pink" aria-hidden="true" /> {site.address.short}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
