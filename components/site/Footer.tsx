import { Logo } from "@/components/brand/Logo";
import { navItems, siteConfig } from "@/data/site";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons/SocialIcons";

const socialLinks = [
  { href: siteConfig.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: siteConfig.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: siteConfig.facebook, label: "Facebook", Icon: FacebookIcon },
].filter((link) => link.href);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-midnight py-14">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-10 px-5 text-center sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:text-left lg:px-12">
        <div className="flex flex-col items-center gap-1 lg:items-start">
          <Logo theme="dark" layout="stacked" className="text-base" />
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ivory/65 transition-colors hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {socialLinks.length > 0 ? (
          <ul className="flex items-center justify-center gap-4">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="text-ivory/65 transition-colors hover:text-ivory"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mx-auto mt-10 max-w-[1600px] border-t border-ivory/10 px-5 pt-6 text-center sm:px-8 lg:px-12">
        <p className="font-sans text-xs text-ivory/45">
          {siteConfig.tagline} &middot; &copy; {year} {siteConfig.brand}
        </p>
      </div>
    </footer>
  );
}
