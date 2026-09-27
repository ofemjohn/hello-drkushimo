"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryItem } from "@/components/gallery/GalleryItem";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { galleryImages } from "@/data/gallery";

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="scroll-mt-20 bg-midnight py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Moments"
          headline="Ministry, Scholarship & Life"
          theme="dark"
          className="mb-12 lg:mb-14"
        />

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((item, i) => (
            <GalleryItem key={item.id} item={item} onOpen={() => setLightboxIndex(i)} />
          ))}
        </div>
      </div>

      {lightboxIndex !== null ? (
        <GalleryLightbox
          items={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      ) : null}
    </section>
  );
}
