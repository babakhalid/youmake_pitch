import type { TractionContent } from "@/lib/audience/types";

const DEFAULT_METRICS = [
  { label: "Signups", value: "175", showPing: true },
  { label: "Projects", value: "371", showPing: true },
  { label: "Deployed", value: "68", showPing: true },
  { label: "Messages", sublabel: "Users & AI Agents", value: "66.6K", showPing: false },
  { label: "MRR", value: "$245", showPing: true },
  { label: "Average", sublabel: "Per paying user", value: "$61", showPing: false },
];

type Props = {
  content?: TractionContent;
};

export function SectionTraction({ content }: Props) {
  const sectionLabel = content?.sectionLabel ?? "Traction";
  const metrics = content?.metrics ?? DEFAULT_METRICS;
  const bottomText = content?.bottomText ?? "Early traction with paying customers";

  return (
    <div className="h-screen relative overflow-hidden">
      <span className="absolute left-16 md:left-20 top-4 text-lg z-10">
        {sectionLabel}
      </span>

      <div className="container h-screen flex flex-col items-center justify-center py-16 px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 w-full max-w-5xl">
          {metrics.map((metric) => (
            <div key={metric.label} className="group relative border border-border bg-[#121212] rounded-2xl p-4 md:p-6 flex flex-col h-[160px] md:h-[220px] transition-all duration-300 hover:border-[#333]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-[#878787] text-xs uppercase tracking-widest">{metric.label}</span>
                {metric.sublabel && (
                  <p className="text-[#555] text-xs mt-1">{metric.sublabel}</p>
                )}
                <div className="mt-auto flex items-center gap-2 md:gap-3">
                  {metric.showPing !== false && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                  )}
                  <span className="font-mono text-4xl md:text-7xl font-medium">{metric.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-[#555] text-sm md:text-lg mt-6 md:mt-10 text-center tracking-wide">
          {bottomText}
        </p>
      </div>
    </div>
  );
}
