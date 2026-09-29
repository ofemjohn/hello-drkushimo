import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { NewsletterSignup } from "@/components/site/NewsletterSignup";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="pt-32">
        <article className="mx-auto max-w-2xl px-5 pb-24 sm:px-8 lg:px-12">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-navy/60 transition-colors hover:text-navy"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Posts
          </Link>
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <h1 className="mt-3 font-display text-4xl font-medium leading-[1.05] text-navy sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-8 flex flex-col gap-5">
            {post.body.map((paragraph, i) => (
              <p key={i} className="font-sans text-[1.05rem] leading-relaxed text-navy/80">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 border-t border-navy/10 pt-10 text-center">
            <p className="font-sans text-sm text-navy/70">Want a note when the next post goes up?</p>
            <NewsletterSignup />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
