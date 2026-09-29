import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SpeakingForm } from "@/components/site/SpeakingForm";

export function Speaking() {
  return (
    <section id="speaking" className="scroll-mt-20 bg-navy py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Book Me for Speaking"
          headline="Invite Dr. Kushimo to Your Next Gathering"
          supporting="From church services and conferences to public health forums and leadership retreats, Dr. Kushimo brings scholarship, faith and story together for every audience."
          theme="dark"
          align="center"
          className="mb-10 items-center [&_p]:mx-auto"
        />
        <Reveal delay={80}>
          <SpeakingForm />
        </Reveal>
      </div>
    </section>
  );
}
