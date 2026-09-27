import { Play } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

// Note: YouTube channel pages can't be embedded directly in an <iframe> (they
// send X-Frame-Options: deny). Once a specific sermon video ID is available,
// swap this card for a proper `<iframe src="https://www.youtube.com/embed/<id>">`.
export function Sermons() {
  return (
    <section id="sermons" className="scroll-mt-20 bg-cream py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12">
        <SectionHeading
          eyebrow="Watch the Latest Sermon"
          headline="Heartfelt, Practical, Rooted in God's Word"
          supporting="New messages are shared regularly on the Bola Kushimo TV YouTube channel — subscribe to stay close to the latest teaching."
        />

        <Reveal delay={100}>
          <a
            href={siteConfig.youtube}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative flex aspect-video w-full flex-col items-center justify-center gap-4 overflow-hidden bg-navy text-ivory transition-colors hover:bg-midnight"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ivory/40 transition-transform group-hover:scale-110">
              <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
            </span>
            <span className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-ivory/80">
              Bola Kushimo TV on YouTube
            </span>
          </a>
          <Button href={siteConfig.youtube} target="_blank" rel="noreferrer noopener" variant="outline" className="mt-6">
            Visit the Channel &rarr;
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
