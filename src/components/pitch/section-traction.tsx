import type { TractionContent } from "@/lib/audience/types";
import { Eyebrow, SectionLabel } from "./ui";

const DEFAULT_METRICS = [
  { label: "Signups", sublabel: "190 in the last 30 days", value: "~500", showPing: true },
  { label: "Growth", sublabel: "Signups, month over month", value: "2x", showPing: false },
  { label: "MRR", sublabel: "7 paying subscribers", value: "$160", showPing: true },
  { label: "Retention", sublabel: "Longest customer — a freelancer shipping client sites", value: "9+ mo", showPing: false },
  { label: "Client Handoffs", sublabel: "Organic in-product transfers", value: "7", showPing: true },
  { label: "Agency Partners", sublabel: "Inbound applications", value: "4", showPing: false },
];

type Props = {
  content?: TractionContent;
};

export function SectionTraction({ content }: Props) {
  const sectionLabel = content?.sectionLabel ?? "Traction";
  const metrics = content?.metrics ?? DEFAULT_METRICS;
  const bottomText =
    content?.bottomText ??
    "Freelancers ship client sites on YouMake — and hand them off in-product.";

  return (
    <div className="h-screen relative overflow-hidden">
      <SectionLabel>{sectionLabel}</SectionLabel>

      <div className="container h-full flex flex-col px-4 md:px-8 py-20 md:py-16 overflow-y-auto md:overflow-visible">
        <div className="m-auto w-full max-w-5xl flex flex-col items-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 w-full">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="relative border border-border bg-card rounded-[1.5rem] p-4 md:p-6 flex flex-col h-[130px] sm:h-[150px] md:h-[210px] transition-colors duration-300 hover:bg-accent/40"
              >
                <Eyebrow>{metric.label}</Eyebrow>
                {metric.sublabel && (
                  <p className="text-muted-foreground/70 text-xs mt-1">
                    {metric.sublabel}
                  </p>
                )}
                <div className="mt-auto flex items-center gap-2 md:gap-3">
                  {metric.showPing !== false && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-ring" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-ring" />
                    </span>
                  )}
                  <span className="font-semibold tabular-nums tracking-[-0.05em] text-3xl sm:text-4xl md:text-6xl">
                    {metric.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-sm md:text-lg mt-6 md:mt-10 text-center">
            {bottomText}
          </p>
        </div>
      </div>
    </div>
  );
}
