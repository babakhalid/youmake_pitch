import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const siteUrl = "https://pitch.youmake.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YouMake - Build at the Speed of Thought",
    template: "%s | YouMake",
  },
  description:
    "YouMake empowers everyone to build software without coding. Describe your idea, let AI build it, and ship in minutes. See our investor pitch deck.",
  keywords: [
    "YouMake",
    "no-code",
    "AI development",
    "software builder",
    "pitch deck",
    "startup",
    "AI-powered",
    "app builder",
    "build without code",
    "rapid prototyping",
  ],
  authors: [{ name: "YouMake", url: "https://youmake.dev" }],
  creator: "YouMake",
  publisher: "YouMake",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo_yomake_white.png",
    apple: "/logo_yomake_white.png",
    shortcut: "/logo_yomake_white.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "YouMake",
    title: "YouMake - Build at the Speed of Thought",
    description:
      "Empowering everyone to build software without coding. Describe it. Build it. Ship it.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YouMake - Build at the Speed of Thought",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouMake - Build at the Speed of Thought",
    description:
      "Empowering everyone to build software without coding. Describe it. Build it. Ship it.",
    images: ["/og-image.png"],
    creator: "@youmakedev",
    site: "@youmakedev",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://umami-production-5ee7.up.railway.app/script.js"
          data-website-id="8ddba21e-5a4b-4610-845f-6a2cf4b7cc46"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
