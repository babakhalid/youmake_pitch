import type { MissionContent } from "@/lib/audience/types";
import { SectionLabel } from "./ui";

type Props = {
  content?: MissionContent;
};

export function SectionMission({ content }: Props) {
  return (
    <div className="h-screen relative overflow-hidden">
      <SectionLabel>{content?.sectionLabel ?? "Our Mission"}</SectionLabel>

      <div className="container h-screen flex flex-col items-center justify-center px-4 md:px-8">
        {/* Ink surface + sky glow — the brand's high-emphasis gesture */}
        <div className="relative w-full max-w-4xl overflow-hidden rounded-[1.75rem] bg-[#14151C] px-8 py-16 md:px-20 md:py-28">
          <div className="absolute inset-0 sky-glow" aria-hidden />
          <div className="absolute inset-0 grain pointer-events-none" aria-hidden />

          <div className="relative z-10 flex flex-col items-center gap-5 text-center">
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-white/60">
              Mission Statement
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight text-balance">
              {content?.statement ??
                "Empowering everyone to build software, no coding required."}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
