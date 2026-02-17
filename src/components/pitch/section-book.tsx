"use client";

import { CalEmbed } from "@/components/cal-embed";
import type { BookContent } from "@/lib/audience/types";

// Declare Umami types
declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, unknown>) => void;
    };
  }
}

type Props = {
  content?: BookContent;
};

export function SectionBook({ content }: Props) {
  const trackSignupClick = () => {
    if (window.umami) {
      window.umami.track("signup-click", { source: "pitch-deck" });
    }
  };

  return (
    <div className="h-screen relative w-screen overflow-hidden">
      <span className="absolute left-16 md:left-20 top-4 text-lg">
        {content?.sectionLabel ?? "Book a meeting"}
      </span>
      <div className="flex flex-col h-screen justify-center container">
        <div className="w-full max-w-4xl mx-auto h-[500px] md:h-[650px] px-4 md:px-0">
          <CalEmbed calLink={content?.calLink ?? "baba-khalid-wvcubm/30min"} />
        </div>
      </div>
    </div>
  );
}
