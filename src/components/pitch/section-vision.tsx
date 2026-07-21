import type { VisionContent } from "@/lib/audience/types";
import { SectionLabel } from "./ui";

type Props = {
  content?: VisionContent;
};

export function SectionVision({ content }: Props) {
  return (
    <div className="h-screen relative w-screen overflow-hidden">
      <SectionLabel>{content?.sectionLabel ?? "Our vision"}</SectionLabel>

      <div className="flex flex-col h-screen justify-center container">
        <h1 className="font-serif text-[clamp(40px,9vw,110px)] px-4 md:px-0 text-center leading-[0.98] tracking-[-0.02em] text-balance">
          {content?.heading ?? "A world where everyone is a maker."}
        </h1>
      </div>
    </div>
  );
}
