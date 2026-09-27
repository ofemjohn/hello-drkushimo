import Image from "next/image";
import { ZoomIn } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";

type GalleryItemProps = {
  item: GalleryImage;
  onOpen: () => void;
};

export function GalleryItem({ item, onOpen }: GalleryItemProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open photograph: ${item.alt}`}
      className="group relative mb-4 block w-full break-inside-avoid overflow-hidden bg-navy/10 focus-visible:outline-gold"
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        loading="lazy"
        className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        style={{ aspectRatio: `${item.width} / ${item.height}` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center bg-midnight/0 opacity-0 transition-all duration-300 group-hover:bg-midnight/25 group-hover:opacity-100"
      >
        <ZoomIn className="h-6 w-6 text-ivory" strokeWidth={1.25} />
      </div>
    </button>
  );
}
