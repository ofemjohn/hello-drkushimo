import Image from "next/image";
import { Play, CalendarHeart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { shortBio } from "@/data/about";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[95svh] min-h-[640px] w-full items-end overflow-hidden bg-midnight md:min-h-[760px]"
    >
      <Image
        src="/images/hero/hero.jpg"
        alt="Dr. Bola Kushimo smiling in academic regalia"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/35 to-midnight/50"
      />

      <div className="relative z-10 flex w-full flex-col gap-16 px-5 pb-10 pt-32 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
        <div className="flex flex-col items-start gap-6 sm:max-w-2xl">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Public Health Scholar &middot; Pastor &middot; Author
          </span>
          <h1 className="font-display text-5xl font-medium leading-[1.05] text-ivory sm:text-7xl md:text-7xl">
            Living the
            <br />
            Fullness of Christ
          </h1>
          <p className="max-w-md font-sans text-[0.95rem] leading-relaxed text-ivory/80">
            {shortBio}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Button href="#sermons" variant="gold" icon={<Play className="h-3.5 w-3.5" fill="currentColor" />} iconPosition="left">
              Watch the Latest Sermon
            </Button>
            <Button href="#speaking" variant="outline-inverse" icon={<CalendarHeart className="h-3.5 w-3.5" />} iconPosition="left">
              Book Me to Speak
            </Button>
          </div>
        </div>

        <a
          href="#about"
          className="group flex items-center gap-2 font-sans text-[0.65rem] font-medium uppercase tracking-[0.3em] text-ivory/70 transition-colors hover:text-ivory"
        >
          Scroll
          <span aria-hidden className="inline-block transition-transform group-hover:translate-y-0.5">
            &darr;
          </span>
        </a>
      </div>
    </section>
  );
}
