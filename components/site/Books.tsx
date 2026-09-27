import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { books } from "@/data/books";

export function Books() {
  return (
    <section id="books" className="scroll-mt-20 bg-cream py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Resources"
          headline="Coming Soon"
          supporting="Two new books are on the way. Details on titles, pricing and how to order will be announced here as soon as they're ready."
          className="mb-14 lg:mb-16"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:max-w-2xl">
          {books.map((book, i) => (
            <Reveal key={book.id} delay={i * 80} className="flex flex-col gap-4">
              <div className="relative aspect-[2/3] w-full overflow-hidden bg-navy/10">
                <Image
                  src={book.cover}
                  alt={`Placeholder cover — ${book.label}, coming soon`}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 text-center">
                <span className="font-display text-lg font-medium text-navy">{book.label}</span>
                <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold">
                  Coming Soon
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
