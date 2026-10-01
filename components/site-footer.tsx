import { nav, site } from '@/content/site';
import { whatsappLink } from '@/lib/whatsapp';
import { PawMark } from './icons';

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink pb-28 pt-20 text-cream sm:pb-24">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-tight tracking-[-0.02em]">{site.tagline}</p>
            <p className="mt-4 max-w-sm text-cream/60">{site.legalLine} · {site.address.short}, {site.address.city} – {site.address.state}</p>
          </div>
          <nav aria-label="Rodapé" className="lg:col-span-3 lg:col-start-7">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-cream/75">
              {nav.map((n) => <li key={n.href}><a href={n.href} className="transition-colors hover:text-cream">{n.label}</a></li>)}
            </ul>
          </nav>
          <div className="space-y-2.5 text-cream/75 lg:col-span-3">
            <p><a href={whatsappLink('geral')} target="_blank" rel="noopener noreferrer" className="hover:text-cream" data-wa="geral">WhatsApp {site.whatsapp.display}</a></p>
            <p><a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-cream">Instagram {site.instagram.handle}</a></p>
          </div>
        </div>

        <p aria-hidden="true" className="display mt-16 select-none whitespace-nowrap text-[clamp(3.6rem,15.5vw,15rem)] leading-[0.85] text-cream/[0.07]">Patas &amp; Asas</p>

        <div className="mt-8 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2"><PawMark className="h-3.5 w-3.5 text-pink" /> © {new Date().getFullYear()} {site.name}. Feito com carinho em Campos dos Goytacazes.</p>
          <p>Algumas fotografias são ilustrativas (Unsplash). Fotos da equipe e dos clientes: {site.instagram.handle}.</p>
        </div>
      </div>
    </footer>
  );
}
