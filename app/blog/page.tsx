import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsletterSignup } from "@/components/site/NewsletterSignup";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Reflections on faith, leadership and public health from Dr. Bola Kushimo.",
};

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <section className="scroll-mt-20 bg-ivory py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="The Blog"
              headline="Reflections on Faith &amp; Leadership"
              align="center"
              className="mb-10 items-center [&_p]:mx-auto"
            />

            {blogPosts.length === 0 ? (
              <div className="flex flex-col items-center gap-6">
                <p className="font-sans text-sm uppercase tracking-[0.2em] text-navy/40">
                  New posts coming soon
                </p>
                <p className="max-w-md font-sans text-[0.95rem] leading-relaxed text-navy/70">
                  Leave your email below and be the first to know when a new post goes up.
                </p>
                <NewsletterSignup />
              </div>
            ) : null}
          </div>
        </section>

        {blogPosts.length > 0 ? (
          <section className="bg-ivory pb-24">
            <div className="mx-auto flex max-w-3xl flex-col gap-10 px-5 sm:px-8 lg:px-12">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-2 border-b border-navy/10 pb-10"
                >
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <h2 className="font-display text-2xl font-medium text-navy transition-colors group-hover:text-gold sm:text-3xl">
                    {post.title}
                  </h2>
                  <p className="font-sans text-[0.95rem] leading-relaxed text-navy/70">{post.excerpt}</p>
                </Link>
              ))}

              <div className="flex flex-col items-center gap-4 pt-4 text-center">
                <p className="font-sans text-sm text-navy/70">
                  Want a note when a new post goes up?
                </p>
                <NewsletterSignup />
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
