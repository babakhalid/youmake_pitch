import type { MissionContent } from "@/lib/audience/types";

type Props = {
  content?: MissionContent;
};

export function SectionMission({ content }: Props) {
  return (
    <div className="h-screen relative overflow-hidden">
      <span className="absolute left-16 md:left-20 top-4 text-lg z-10">
        {content?.sectionLabel ?? "Our Mission"}
      </span>

      <div className="container h-screen flex flex-col items-center justify-center px-4 md:px-8">
        <div className="max-w-3xl flex flex-col items-center gap-4">
          <span className="text-[#878787] text-xs uppercase tracking-widest">
            Mission Statement
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-center leading-tight">
            {content?.statement ?? "Empowering everyone to build software, no coding required."}
          </h2>
        </div>
      </div>
    </div>
  );
}
