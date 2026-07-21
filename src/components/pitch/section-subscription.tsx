import type { SubscriptionContent } from "@/lib/audience/types";
import { cn } from "@/lib/utils";
import { Eyebrow, SectionLabel } from "./ui";

type Props = {
  content?: SubscriptionContent;
};

const AI_STRATEGY = [
  {
    phase: "Now",
    title: "Best-in-class AI",
    description:
      "Leveraging state-of-the-art models from leading providers with a 50% markup on token costs.",
    stat: "50%",
    statLabel: "gross margin on AI usage",
    featured: false,
  },
  {
    phase: "Next",
    title: "Our Own Model",
    description:
      "Open-source LLM fine-tuned on our data with custom tools and skills. Dramatically improved margins.",
    stat: "80%+",
    statLabel: "target gross margin",
    featured: true,
  },
];

const REVENUE_STREAMS = [
  { tier: "Primary", title: "Subscriptions", description: "Monthly recurring revenue" },
  { tier: "Secondary", title: "Token Packs", description: "High-margin upsells" },
  { tier: "Tertiary", title: "Hosting", description: "Deployment & domains" },
  { tier: "Future", title: "B2B", description: "Enterprise contracts" },
];

export function SectionSubscription({ content }: Props) {
  return (
    <div className="h-screen relative overflow-hidden">
      <SectionLabel>{content?.sectionLabel ?? "Revenue Model"}</SectionLabel>

      <div className="container h-full flex flex-col px-4 md:px-8 py-20 md:py-16 overflow-y-auto md:overflow-visible">
        <div className="m-auto w-full max-w-5xl">
          {/* AI model strategy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {AI_STRATEGY.map((item) => (
              <div
                key={item.phase}
                className={cn(
                  "relative border border-border bg-card rounded-[1.5rem] p-5 md:p-8 transition-colors duration-300 hover:bg-accent/40",
                  item.featured && "ring-1 ring-foreground/20 border-foreground/20"
                )}
              >
                <Eyebrow>{item.phase}</Eyebrow>
                <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] mt-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-3 md:mt-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-baseline gap-3 mt-4 md:mt-6">
                  <span className="text-xl md:text-2xl font-semibold tabular-nums tracking-[-0.04em]">
                    {item.stat}
                  </span>
                  <span className="text-muted-foreground/70 text-xs">
                    {item.statLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Revenue streams */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {REVENUE_STREAMS.map((stream) => (
              <div
                key={stream.title}
                className="relative border border-border bg-card rounded-[1.5rem] p-4 md:p-6 transition-colors duration-300 hover:bg-accent/40"
              >
                <Eyebrow>{stream.tier}</Eyebrow>
                <h3 className="text-lg md:text-xl font-medium tracking-[-0.02em] mt-2">
                  {stream.title}
                </h3>
                <p className="text-muted-foreground/70 text-xs mt-2 md:mt-3">
                  {stream.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-base md:text-lg mt-6 md:mt-10 text-center">
            {content?.bottomText ??
              "Clear path to 80%+ margins with proprietary AI"}
          </p>
        </div>
      </div>
    </div>
  );
}
