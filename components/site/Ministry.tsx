import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ministryEntries } from "@/data/ministry";

export function Ministry() {
  return (
    <section className="bg-midnight py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Ministry & Impact"
          headline="Building, Empowering, Serving"
          theme="dark"
          className="mb-14 lg:mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ministryEntries.map((entry, i) => (
            <Reveal
              key={entry.name}
              delay={i * 60}
              className="flex flex-col gap-3 border border-ivory/12 p-6"
            >
              <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold">
                {entry.role}
              </span>
              <h3 className="font-display text-xl font-medium leading-snug text-ivory">
                {entry.name}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-ivory/70">{entry.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
