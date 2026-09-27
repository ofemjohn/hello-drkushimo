import { Mail, MessageCircle, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig, whatsappHref } from "@/data/site";

export function Contact() {
  const methods = [
    siteConfig.email
      ? { key: "email", label: "Send an Email", href: `mailto:${siteConfig.email}`, icon: Mail }
      : null,
    siteConfig.phone
      ? { key: "phone", label: "Call Now", href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`, icon: Phone }
      : null,
    siteConfig.whatsapp
      ? {
          key: "whatsapp",
          label: "Chat on WhatsApp",
          href: whatsappHref(siteConfig.whatsapp, "Hi Dr. Kushimo! I'd love to connect."),
          icon: MessageCircle,
        }
      : null,
  ].filter((m): m is { key: string; label: string; href: string; icon: typeof Mail } => m !== null);

  return (
    <section id="contact" className="scroll-mt-20 bg-cream py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Let's Connect"
          headline={
            <>
              Have a Question,
              <br />
              Invitation or Word of Encouragement?
            </>
          }
          supporting="Reach out about speaking engagements, ministry partnerships, or public health consultancy — I'd love to hear from you."
          align="center"
          className="mb-12 items-center [&_p]:mx-auto"
        />

        {methods.length > 0 ? (
          <Reveal className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            {methods.map(({ key, label, href, icon: Icon }, i) => (
              <Button
                key={key}
                href={href}
                target={key === "whatsapp" ? "_blank" : undefined}
                rel={key === "whatsapp" ? "noreferrer noopener" : undefined}
                variant={i === 0 ? "solid" : "outline"}
                icon={<Icon className="h-4 w-4" strokeWidth={1.5} />}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                {label}
              </Button>
            ))}
          </Reveal>
        ) : (
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy/40">
            Contact details coming soon
          </p>
        )}
      </div>
    </section>
  );
}
