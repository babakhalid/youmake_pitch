import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "YouMake - Pitch Deck",
  description: "Build at the speed of thought",
  icons: {
    icon: "/logo_yomake_white.png",
    apple: "/logo_yomake_white.png",
  },
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
