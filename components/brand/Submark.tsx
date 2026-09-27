import { cn } from "@/lib/utils";

type SubmarkProps = {
  theme?: "light" | "dark";
  /** Filled circle (favicon/app-icon style) vs. an outlined ring (watermark style). */
  variant?: "outline" | "filled";
  className?: string;
};

/**
 * The circular "BK" monogram used as favicon, compact mobile mark, and
 * watermark base. Pure inline SVG so it stays crisp at 16px and at 512px.
 */
export function Submark({ theme = "light", variant = "outline", className }: SubmarkProps) {
  const ink = theme === "light" ? "#16233a" : "#faf6ef";
  const fill = variant === "filled" ? ink : "none";
  const stroke = ink;
  const textFill = variant === "filled" ? (theme === "light" ? "#faf6ef" : "#16233a") : ink;

  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-8 w-8", className)}
      role="img"
      aria-label="Dr. Bola Kushimo monogram"
    >
      <circle cx="32" cy="32" r="30" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="var(--font-display), 'Fraunces', serif"
        fontSize="24"
        fill={textFill}
      >
        BK
      </text>
    </svg>
  );
}
