import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { site, fullAddress } from '@/content/site';

const fraunces = localFont({
  src: [
    { path: './fonts/Fraunces.woff2', weight: '100 900', style: 'normal' },
    { path: './fonts/Fraunces-Italic.woff2', weight: '100 900', style: 'italic' },
  ],
  variable: '--font-fraunces',
  display: 'swap',
  fallback: ['Iowan Old Style', 'Georgia', 'serif'],
});

const manrope = localFont({
  src: [{ path: './fonts/Manrope.woff2', weight: '200 800', style: 'normal' }],
  variable: '--font-manrope',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
});

const title = 'Patas & Asas — Pet Shop e Clínica Veterinária em Campos dos Goytacazes';
const description = 'Clínica veterinária, banho e tosa, hotel pet, farmácia, Taxi Dog e petiscos em um só lugar. Patas & Asas: o lugar preferido do seu pet, na Av. Alberto Lamego, 793.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: '%s · Patas & Asas' },
  description,
  applicationName: site.name,
  keywords: ['pet shop Campos dos Goytacazes', 'clínica veterinária Campos dos Goytacazes', 'banho e tosa', 'hotel pet', 'farmácia pet', 'taxi dog', 'Patas & Asas'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'pt_BR', url: '/', siteName: site.name, title, description },
  twitter: { card: 'summary_large_image', title, description },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: '#f7f1e8', width: 'device-width', initialScale: 1 };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['VeterinaryCare', 'PetStore'],
  '@id': `${site.url}/#negocio`,
  name: site.name,
  description,
  slogan: site.tagline,
  url: site.url,
  image: `${site.url}/opengraph-image.jpg`,
  logo: `${site.url}/brand/logo-patas-asas.png`,
  telephone: '+55 22 99863-9400',
  address: { '@type': 'PostalAddress', streetAddress: site.address.street, addressLocality: site.address.city, addressRegion: site.address.state, postalCode: site.address.postalCode, addressCountry: 'BR' },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
  sameAs: [site.instagram.url],
  employee: site.vets.map((v) => ({ '@type': 'Person', name: v.name.replace('Dra. ', ''), jobTitle: v.role })),
  makesOffer: ['Consulta veterinária', 'Banho e tosa', 'Hotel para pets', 'Farmácia veterinária', 'Taxi Dog', 'Petiscos e snacks'].map((n) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n } })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`no-js ${fraunces.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.remove('no-js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
