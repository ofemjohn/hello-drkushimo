"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

type Status = "idle" | "submitting" | "sent" | "error";

export function NewsletterSignup() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "");

    // TODO: once siteConfig.newsletterFormEndpoint is set (e.g. a Web3Forms
    // or Formspree endpoint, or a real newsletter tool like Buttondown),
    // this posts straight to it. Until then, fall back to a mailto: draft.
    if (siteConfig.newsletterFormEndpoint) {
      setStatus("submitting");
      try {
        const res = await fetch(siteConfig.newsletterFormEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email, source: "blog-newsletter" }),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      "Add me to the blog list",
    )}&body=${encodeURIComponent(`Please add this email to the monthly blog list: ${email}`)}`;
    setStatus("sent");
    form.reset();
  }

  if (status === "sent") {
    return (
      <p className="font-sans text-sm text-navy/70">
        {siteConfig.newsletterFormEndpoint
          ? "You're on the list — thank you!"
          : "Opening your email app to confirm your spot on the list."}
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
      suppressHydrationWarning
    >
      <input
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        className="w-full max-w-xs border border-navy/20 bg-transparent px-4 py-3 font-sans text-sm text-navy placeholder:text-navy/40 outline-none transition-colors focus:border-gold sm:w-64"
      />
      <Button
        type="submit"
        variant="solid"
        disabled={status === "submitting"}
        icon={<Mail className="h-3.5 w-3.5" />}
        iconPosition="left"
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Notify Me"}
      </Button>
      {status === "error" ? (
        <p className="w-full text-center font-sans text-xs text-red-600">Something went wrong — try again.</p>
      ) : null}
    </form>
  );
}
