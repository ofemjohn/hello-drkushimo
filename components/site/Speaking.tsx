import { CalendarHeart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Speaking() {
  return (
    <section id="speaking" className="scroll-mt-20 bg-navy py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Book Me for Speaking"
          headline="Invite Dr. Kushimo to Your Next Gathering"
          supporting="From church services and conferences to public health forums and leadership retreats, Dr. Kushimo brings scholarship, faith and story together for every audience."
          theme="dark"
          align="center"
          className="mb-10 items-center [&_p]:mx-auto"
        />
        <Reveal delay={80}>
          <Button href="#contact" variant="gold" icon={<CalendarHeart className="h-4 w-4" />} iconPosition="left">
            Request a Speaking Engagement
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
