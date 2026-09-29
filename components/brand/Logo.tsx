import { cn } from "@/lib/utils";

type LogoProps = {
  /** The background this logo sits on — determines ink color, not layout. */
  theme?: "light" | "dark";
  layout?: "horizontal" | "stacked";
  showDescriptor?: boolean;
  className?: string;
};

/**
 * The Dr. Bola Kushimo wordmark, set in Playfair Display (distinct from the
 * body's Fraunces/Inter), with the descriptor tracked out beneath in the UI
 * sans. The surname is not italicized, per Dr. Kushimo's request.
 */
export function Logo({
  theme = "light",
  layout = "horizontal",
  showDescriptor = true,
  className,
}: LogoProps) {
  const ink = theme === "light" ? "text-navy" : "text-ivory";
  const descriptorInk = theme === "light" ? "text-navy/60" : "text-ivory/65";

  return (
    <span
      className={cn(
        "inline-flex select-none items-baseline gap-2",
        layout === "stacked" ? "flex-col items-start gap-1" : "flex-row",
        className,
      )}
    >
      <span className={cn("font-wordmark text-[1.4em] leading-none tracking-tight", ink)}>
        Dr. Bola Kushimo
      </span>
      {showDescriptor ? (
        <span
          className={cn(
            "font-sans text-[0.28em] font-medium uppercase tracking-[0.28em]",
            layout === "horizontal" && "self-center pt-[0.15em]",
            descriptorInk,
          )}
        >
          Faith &amp; Leadership
        </span>
      ) : null}
    </span>
  );
}
