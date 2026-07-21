import Image from "next/image";
import Iridescence from "@/components/iridescence";
import type { SolutionContent } from "@/lib/audience/types";
import overview from "./overview.png";
import { Eyebrow, SectionLabel } from "./ui";

type Props = {
  content?: SolutionContent;
};

const STEPS = [
  {
    step: "Step 1",
    title: "Describe",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
  {
    step: "Step 2",
    title: "Build",
    icon: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </>
    ),
  },
  {
    step: "Step 3",
    title: "Deploy",
    icon: (
      <>
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
      </>
    ),
  },
];

export function SectionSolution({ content }: Props) {
  return (
    <div className="h-screen relative overflow-hidden">
      <SectionLabel>{content?.sectionLabel ?? "The Solution"}</SectionLabel>

      <div className="container h-full flex flex-col px-4 md:px-8 py-20 md:py-16 overflow-y-auto md:overflow-visible">
        <div className="m-auto w-full max-w-5xl flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full items-center">
          {/* Left - Steps grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1 w-full">
            {STEPS.map((step) => (
              <div
                key={step.title}
                className="relative border border-border bg-card rounded-[1.5rem] p-4 md:p-6 flex flex-col h-[120px] md:h-[160px] transition-colors duration-300 hover:bg-accent/40"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {step.icon}
                  </svg>
                </div>
                <div className="mt-auto">
                  <Eyebrow>{step.step}</Eyebrow>
                  <h3 className="text-xl font-medium tracking-[-0.02em] mt-1">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}

            {/* Iridescent sky tile */}
            <div className="relative rounded-[1.5rem] overflow-hidden h-[120px] md:h-[160px]">
              <Iridescence
                color={[0.68, 0.78, 0.98]}
                speed={0.85}
                amplitude={0.1}
                mouseReact={false}
              />
              <div className="absolute inset-0 grain pointer-events-none" />
            </div>
          </div>

          {/* Right - Product screenshot */}
          <div className="flex-1 justify-center hidden md:flex">
            <div className="rounded-[1.5rem] overflow-hidden border border-border">
              <Image
                src={overview}
                alt="YouMake Overview"
                width={400}
                height={540}
                quality={100}
                className="object-cover"
              />
            </div>
          </div>
        </div>

          {/* Bottom slogan */}
          <p className="font-serif text-2xl md:text-4xl mt-8 md:mt-14 text-center tracking-[-0.01em]">
            {content?.bottomSlogan ?? "Describe it. Build it. Deploy it."}
          </p>
        </div>
      </div>
    </div>
  );
}
