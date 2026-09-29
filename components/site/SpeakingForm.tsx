"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

const inputClasses =
  "w-full border border-ivory/25 bg-transparent px-4 py-3 font-sans text-sm text-ivory placeholder:text-ivory/40 outline-none transition-colors focus:border-gold";

type Status = "idle" | "submitting" | "sent" | "error";

export function SpeakingForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const eventName = String(data.get("event") ?? "");
    const eventDate = String(data.get("date") ?? "");
    const message = String(data.get("message") ?? "");

    // TODO: once siteConfig.speakingFormEndpoint is set (e.g. a Web3Forms or
    // Formspree endpoint), this posts straight to it and the submitter never
    // leaves the page. Until then, fall back to a pre-filled mailto: draft.
    if (siteConfig.speakingFormEndpoint) {
      setStatus("submitting");
      try {
        const res = await fetch(siteConfig.speakingFormEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, event: eventName, date: eventDate, message }),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    const subject = encodeURIComponent(`Speaking request: ${eventName || "New inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nEvent/Organization: ${eventName}\nPreferred date: ${eventDate}\n\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  if (status === "sent") {
    return (
      <p className="font-sans text-sm text-ivory/80">
        {siteConfig.speakingFormEndpoint
          ? "Thank you — your request has been sent. Dr. Kushimo's team will be in touch soon."
          : "Opening your email app with the details filled in — just hit send."}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left" suppressHydrationWarning>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="name" type="text" required placeholder="Your name" className={inputClasses} suppressHydrationWarning />
        <input name="email" type="email" required placeholder="Your email" className={inputClasses} suppressHydrationWarning />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="event" type="text" required placeholder="Event or organization" className={inputClasses} suppressHydrationWarning />
        <input name="date" type="text" placeholder="Preferred date (optional)" className={inputClasses} suppressHydrationWarning />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Tell us about the event and audience"
        className={inputClasses}
        suppressHydrationWarning
      />
      <Button
        type="submit"
        variant="gold"
        disabled={status === "submitting"}
        icon={<Send className="h-3.5 w-3.5" />}
        iconPosition="left"
        className="self-center"
      >
        {status === "submitting" ? "Sending…" : "Send Request"}
      </Button>
      {status === "error" ? (
        <p className="text-center font-sans text-xs text-red-300">
          Something went wrong — please email {siteConfig.email} directly.
        </p>
      ) : null}
    </form>
  );
}
