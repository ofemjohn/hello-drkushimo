// TODO: replace every placeholder with a real photograph from Dr. Kushimo's
// approved album once it's accessible (the shared iCloud link provided could
// not be loaded — it requires opening in a browser with JavaScript enabled).
export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const galleryImages: GalleryImage[] = [
  { id: "gallery-01", src: "/images/gallery/gallery-01.svg", alt: "Placeholder — a real photograph of Dr. Kushimo will appear here", width: 1200, height: 1500 },
  { id: "gallery-02", src: "/images/gallery/gallery-02.svg", alt: "Placeholder — a real photograph of Dr. Kushimo will appear here", width: 1500, height: 1000 },
  { id: "gallery-03", src: "/images/gallery/gallery-03.svg", alt: "Placeholder — a real photograph of Dr. Kushimo will appear here", width: 1200, height: 1200 },
  { id: "gallery-04", src: "/images/gallery/gallery-04.svg", alt: "Placeholder — a real photograph of Dr. Kushimo will appear here", width: 1500, height: 1000 },
  { id: "gallery-05", src: "/images/gallery/gallery-05.svg", alt: "Placeholder — a real photograph of Dr. Kushimo will appear here", width: 1200, height: 1500 },
  { id: "gallery-06", src: "/images/gallery/gallery-06.svg", alt: "Placeholder — a real photograph of Dr. Kushimo will appear here", width: 1600, height: 1067 },
];
