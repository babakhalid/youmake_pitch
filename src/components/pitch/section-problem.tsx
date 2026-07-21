import Iridescence from "@/components/iridescence";
import type { ProblemContent } from "@/lib/audience/types";
import { Eyebrow, SectionLabel } from "./ui";

const DEFAULT_CARDS = [
  { label: "Time", text: "It takes too long." },
  { label: "Cost", text: "It costs too much." },
  { label: "Complexity", text: "It’s too complicated." },
];

type Props = {
  content?: ProblemContent;
};

function ProblemCard({ card }: { card?: { label: string; text: string } }) {
  if (!card) return null;

  return (
    <div className="relative border border-border bg-card rounded-[1.5rem] p-5 md:p-6 flex flex-col h-[120px] md:h-[180px] transition-colors duration-300 hover:bg-accent/40">
      <Eyebrow>{card.label}</Eyebrow>
      <h3 className="text-xl md:text-2xl font-medium tracking-[-0.02em] mt-auto leading-tight">
        {card.text}
      </h3>
    </div>
  );
}

export function SectionProblem({ content }: Props) {
  const sectionLabel = content?.sectionLabel ?? "The Problem";
  const cards = content?.cards ?? DEFAULT_CARDS;
  const bottomText =
    content?.bottomText ??
    "Great ideas never launch. Businesses miss opportunities. Entrepreneurs stay stuck.";

  return (
    <div className="h-screen relative overflow-hidden">
      <SectionLabel>{sectionLabel}</SectionLabel>

      <div className="container h-full flex flex-col px-4 md:px-8 py-20 md:py-16 overflow-y-auto md:overflow-visible">
        <div className="m-auto w-full max-w-2xl flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full">
            <ProblemCard card={cards[0]} />

            {/* Iridescent sky tile */}
            <div className="relative rounded-[1.5rem] overflow-hidden h-[120px] md:h-[180px]">
              <Iridescence
                color={[0.68, 0.78, 0.98]}
                speed={0.85}
                amplitude={0.1}
                mouseReact={false}
              />
              <div className="absolute inset-0 grain pointer-events-none" />
            </div>

            <ProblemCard card={cards[1]} />
            <ProblemCard card={cards[2]} />
          </div>

          <p className="text-muted-foreground text-base md:text-lg mt-8 md:mt-12 text-center max-w-xl leading-relaxed text-balance">
            {bottomText}
          </p>
        </div>
      </div>
    </div>
  );
}
