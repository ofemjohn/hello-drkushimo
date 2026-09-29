import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

// TODO: update featuredVideoId whenever there's a newer sermon to feature —
// find it in the video's YouTube URL: youtube.com/watch?v=<this-part>.
const featuredVideoId = "MeTI14jZL5c"; // "Generational Patterns"

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
          <div className="aspect-video w-full overflow-hidden bg-navy">
            <iframe
              src={`https://www.youtube.com/embed/${featuredVideoId}`}
              title="Generational Patterns — Dr. Bola Kushimo"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <Button href={siteConfig.youtube} target="_blank" rel="noreferrer noopener" variant="outline" className="mt-6">
            Visit the Channel &rarr;
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
