import data from '@/content/_images.json';

export type Photo = { src: string; width: number; height: number; blur: string; real: boolean };
type Key = keyof typeof data;

/** Fotos do site. `real: true` = foto do perfil @pataseasas; as demais são banco de imagens (Unsplash) para a demonstração. */
export const photos = data as Record<Key, Photo>;
export type PhotoKey = Key;
