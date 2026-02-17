import type { VisionContent } from "@/lib/audience/types";

type Props = {
  content?: VisionContent;
};

export function SectionVision({ content }: Props) {
  return (
    <div className="h-screen relative w-screen overflow-hidden">
      <span className="absolute left-16 md:left-20 top-4 text-lg">
        {content?.sectionLabel ?? "Our vision"}
      </span>
      <div className="flex flex-col h-screen justify-center container">
        <h1 className="text-[45px] px-4 md:px-0 md:text-[122px] font-medium text-center leading-none">
          {content?.heading ?? "A world where everyone is a maker."}
        </h1>
      </div>
    </div>
  );
}
