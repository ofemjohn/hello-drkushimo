// Dev utility: regenerates the warm ivory/navy/gold placeholder SVGs used
// across the site until Dr. Kushimo's real photography and book covers are
// supplied. Run with: node scripts/generate-placeholders.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const publicDir = join(root, "..", "public");

const palette = ["#16233A", "#0D1522", "#B4924B", "#6F6A5E"];

function placeholderSvg({ width, height, label, sub }) {
  const id = `g-${Math.random().toString(36).slice(2, 8)}`;
  const c1 = palette[0];
  const c2 = palette[(label.length + width) % palette.length];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}" />
      <stop offset="100%" stop-color="${c2}" />
    </linearGradient>
    <pattern id="${id}-lines" width="28" height="28" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="28" stroke="#FAF6EF" stroke-opacity="0.05" stroke-width="1" />
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#${id})" />
  <rect width="${width}" height="${height}" fill="url(#${id}-lines)" />
  <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" fill="none" stroke="#FAF6EF" stroke-opacity="0.14" />
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${Math.max(14, Math.round(width * 0.028))}" letter-spacing="${Math.round(width * 0.004)}" fill="#FAF6EF" fill-opacity="0.85" font-weight="600">${label.toUpperCase()}</text>
  <text x="50%" y="${height / 2 + Math.round(width * 0.045)}" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="${Math.max(10, Math.round(width * 0.016))}" letter-spacing="${Math.round(width * 0.003)}" fill="#FAF6EF" fill-opacity="0.5">${sub}</text>
</svg>`;
}

function write(relativePath, opts) {
  const full = join(publicDir, relativePath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, placeholderSvg(opts));
  console.log("wrote", relativePath);
}

// Hero
write("images/hero/hero.svg", { width: 1920, height: 1281, label: "Portrait", sub: "PLACEHOLDER — REPLACE WITH REAL PHOTOGRAPHY" });

// About
write("images/about/portrait.svg", { width: 1200, height: 1500, label: "Dr. Kushimo", sub: "PLACEHOLDER — REPLACE WITH REAL PORTRAIT" });

// Book covers
write("images/books/book-01.svg", { width: 800, height: 1200, label: "Book One", sub: "COMING SOON" });
write("images/books/book-02.svg", { width: 800, height: 1200, label: "Book Two", sub: "COMING SOON" });

// Gallery grid — varied orientations
const gallery = [
  ["gallery-01", 1200, 1500],
  ["gallery-02", 1500, 1000],
  ["gallery-03", 1200, 1200],
  ["gallery-04", 1500, 1000],
  ["gallery-05", 1200, 1500],
  ["gallery-06", 1600, 1067],
];
for (const [file, width, height] of gallery) {
  write(`images/gallery/${file}.svg`, { width, height, label: "Gallery", sub: "PLACEHOLDER" });
}

console.log("Done.");
