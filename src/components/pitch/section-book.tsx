"use client";

import { CalEmbed } from "@/components/cal-embed";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Declare Umami types
declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, unknown>) => void;
    };
  }
}

export function SectionBook() {
  const trackSignupClick = () => {
    if (window.umami) {
      window.umami.track("signup-click", { source: "pitch-deck" });
    }
  };

  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-16 right-4 md:left-20 md:right-8 top-4 flex justify-between text-lg">
        <span>Book a meeting</span>
        <Link href="http://youmake.dev/signin" onClick={trackSignupClick}>
          <Button variant="outline">Sign up</Button>
        </Link>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="h-[400px] md:h-[600px] px-4 md:px-0 text-center flex flex-col items-center justify-center">
          <CalEmbed calLink="pontus-midday/30min" />
        </div>
      </div>
    </div>
  );
}
