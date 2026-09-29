// How to publish a new post (no code experience needed):
//   1. Add a new object to the top of `blogPosts` below, following the shape
//      of BlogPost — give it a unique `slug` (used in the URL, e.g. "grace"
//      becomes /blog/grace), a `title`, an ISO `date`, a one-sentence
//      `excerpt` for the list page, and `body` as an array of paragraphs.
//   2. Save the file, commit, and push to GitHub — the live site redeploys
//      automatically once it's connected to a host (see deployment notes).
// Dr. Kushimo can send the text to John (or paste it here herself once shown
// how) and this file is the only thing that needs to change.
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [];
