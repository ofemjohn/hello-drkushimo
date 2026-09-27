// Centralized site/contact configuration.
// TODO: Replace every empty value below with Dr. Kushimo's verified details:
//   - email, phone (for the Contact section)
//   - instagram, facebook, linkedin (only youtube is confirmed)
//   - production domain (url)
//   - website links for Anna Foundation, OPSWI, Vital Health International, City of David Atlanta
// Nothing here is invented — empty values are hidden by the components that read them.
export const siteConfig = {
  brand: "Dr. Bola Kushimo",
  descriptor: "Public Health Scholar · Pastor · Author",
  tagline: "Living the fullness of Christ, and helping others discover it too.",
  url: "https://www.hellodrkushimo.com", // TODO: confirm production domain

  // TODO: Replace with Dr. Kushimo's verified contact details.
  email: "",
  phone: "",

  // TODO: Replace with Dr. Kushimo's verified social profile URLs.
  youtube: "https://www.youtube.com/@Bolakushimotv",
  instagram: "",
  facebook: "",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Sermons", href: "#sermons" },
  { label: "Publications", href: "#publications" },
  { label: "Books", href: "#books" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
];
