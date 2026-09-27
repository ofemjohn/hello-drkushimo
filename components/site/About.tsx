import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { fullBio, education, honors, stats } from "@/data/about";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-ivory py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-12">
        <Reveal className="relative aspect-[4/5] w-full overflow-hidden bg-cream lg:sticky lg:top-28 lg:aspect-[4/5]">
          <Image
            src="/images/about/portrait.jpg"
            alt="Portrait of Dr. Bola Kushimo seated, smiling"
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            loading="lazy"
            className="object-cover"
          />
        </Reveal>

        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow="About Dr. Kushimo" headline="Biography" as="h2" />

          <Reveal delay={80} className="flex flex-col gap-5">
            {fullBio.map((paragraph, i) => (
              <p key={i} className="max-w-2xl font-sans text-[0.95rem] leading-relaxed text-navy/75">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-1 gap-8 border-t border-navy/10 pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-display text-3xl font-medium text-navy">{stat.value}</span>
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-navy/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={160} className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Education
              </span>
              <ul className="flex flex-col gap-2 font-sans text-sm leading-relaxed text-navy/75">
                {education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Honors
              </span>
              <ul className="flex flex-col gap-2 font-sans text-sm leading-relaxed text-navy/75">
                {honors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
