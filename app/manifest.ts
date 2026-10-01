import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Patas & Asas — Pet Shop e Clínica Veterinária',
    short_name: 'Patas & Asas',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f1e8',
    theme_color: '#f7f1e8',
    lang: 'pt-BR',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
