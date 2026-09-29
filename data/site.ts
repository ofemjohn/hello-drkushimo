// Centralized site/contact configuration.
// TODO: Replace every empty value below with Dr. Kushimo's verified details:
//   - instagram, facebook, linkedin (only youtube is confirmed)
//   - production domain (url)
//   - website links for Anna Foundation, OPSWI, Vital Health International, City of David Atlanta
// Nothing here is invented — empty values are hidden by the components that read them.
export const siteConfig = {
  brand: "Dr. Bola Kushimo",
  descriptor: "Public Health Professional · Speaker · Pastor · Author",
  tagline: "Living the fullness of Christ, and helping others discover it too.",
  url: "https://www.hellodrkushimo.com", // TODO: confirm production domain

  email: "bolakushimo@gmail.com",
  phone: "+1 404 555 0182",
  whatsapp: "14045550182", // full international number, digits only

  // TODO: Replace with Dr. Kushimo's verified social profile URLs.
  youtube: "https://www.youtube.com/@Bolakushimotv",
  instagram: "",
  facebook: "",

  // TODO: set once a form backend (e.g. Web3Forms, Formspree) is chosen —
  // both forms fall back to a mailto: draft until these are set.
  speakingFormEndpoint: "",
  newsletterFormEndpoint: "",
} as const;

export function whatsappHref(number: string, message?: string) {
  const digits = number.replace(/[^\d]/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
}

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Sermons", href: "/#sermons" },
  { label: "Publications", href: "/#publications" },
  { label: "Books", href: "/#books" },
  { label: "Speaking", href: "/#speaking" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];
