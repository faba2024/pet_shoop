import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Clinic } from '@/components/clinic';
import { Grooming } from '@/components/grooming';
import { Hotel } from '@/components/hotel';
import { TaxiDog } from '@/components/taxi-dog';
import { Shop } from '@/components/shop';
import { Reviews } from '@/components/reviews';
import { Instagram } from '@/components/instagram';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { SiteFooter } from '@/components/site-footer';
import { WhatsappDock } from '@/components/whatsapp-dock';
import { RevealRoot } from '@/components/reveal-root';

export default function Home() {
  return (
    <>
      <a href="#servicos" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cream">Pular para o conteúdo</a>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Clinic />
        <Grooming />
        <Hotel />
        <TaxiDog />
        <Shop />
        <Reviews />
        <Instagram />
        <About />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsappDock />
      <RevealRoot />
    </>
  );
}
