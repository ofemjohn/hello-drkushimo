import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { siteConfig } from "@/data/site";
import { shortBio } from "@/data/about";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand} | ${siteConfig.descriptor}`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: shortBio,
  openGraph: {
    title: `${siteConfig.brand} | ${siteConfig.descriptor}`,
    description: shortBio,
    siteName: siteConfig.brand,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} | ${siteConfig.descriptor}`,
    description: shortBio,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-ivory text-navy"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
