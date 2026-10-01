import Image from 'next/image';
import { photos, type PhotoKey } from '@/lib/images';

type Props = {
  name: PhotoKey;
  alt: string;
  sizes: string;
  className?: string;
  imgClassName?: string;
  preload?: boolean;
  position?: string;
};

/** Foto com preenchimento do contêiner, placeholder desfocado e tamanhos responsivos. */
export function Photo({ name, alt, sizes, className = '', imgClassName = '', preload, position }: Props) {
  const p = photos[name];
  return (
    <div className={`photo ${className}`}>
      <Image
        src={p.src}
        alt={alt}
        fill
        sizes={sizes}
        placeholder="blur"
        blurDataURL={p.blur}
        preload={preload}
        quality={75}
        className={`object-cover ${imgClassName}`}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
