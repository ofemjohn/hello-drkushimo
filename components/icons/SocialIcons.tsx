// lucide-react no longer ships brand/logo glyphs, so the handful of social
// marks the site needs are recreated here as minimal thin-line SVGs.
type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.1" cy="6.9" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M13.6 20.3v-6.4h2.1l.3-2.5h-2.4V9.8c0-.7.2-1.2 1.2-1.2h1.3V6.4a17 17 0 0 0-1.9-.1c-1.9 0-3.2 1.1-3.2 3.2v1.9H8.9v2.5H11v6.4" strokeLinejoin="round" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.3v5.4l4.6-2.7-4.6-2.7Z" strokeLinejoin="round" />
    </svg>
  );
}
