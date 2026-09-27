import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { publications } from "@/data/publications";

export function Publications() {
  return (
    <section id="publications" className="scroll-mt-20 bg-ivory py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Research"
          headline="Public Health Publications"
          className="mb-12"
        />

        <div className="flex flex-col gap-4">
          {publications.map((pub, i) => (
            <Reveal key={pub.doi} delay={i * 60}>
              <a
                href={pub.doiHref}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex flex-col gap-2 border border-navy/12 p-6 transition-colors hover:border-gold/60"
              >
                <h3 className="font-display text-lg font-medium leading-snug text-navy">
                  {pub.title}
                </h3>
                <p className="font-sans text-sm text-navy/65">
                  {pub.authors} {pub.journal}, {pub.year}.
                </p>
                <span className="mt-1 inline-flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-gold">
                  DOI: {pub.doi}
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
