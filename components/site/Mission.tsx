import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { missionStatement } from "@/data/about";

export function Mission() {
  return (
    <section className="bg-ivory py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="I'm So Glad You're Here"
          headline="A Life Devoted to Christ, Expressed Fully"
          align="center"
          className="mb-10 items-center"
        />
        <Reveal className="flex flex-col gap-6" delay={80}>
          {missionStatement.map((paragraph, i) => (
            <p key={i} className="font-sans text-[1.05rem] leading-relaxed text-navy/75">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
