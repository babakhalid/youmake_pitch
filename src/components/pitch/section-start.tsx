import Iridescence from "@/components/iridescence";
import type { StartContent } from "@/lib/audience/types";
import { Eyebrow } from "./ui";

type Props = {
  content?: StartContent;
};

export function SectionStart({ content }: Props) {
  return (
    <div className="h-screen relative overflow-hidden">
      <div className="container h-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 px-6 md:px-8 pt-16 pb-20 md:py-0">
        {/* Iridescent sky panel */}
        <div className="relative w-full max-w-md md:max-w-none md:w-[42%] h-[26%] min-h-[160px] md:h-[68%] rounded-[1.5rem] md:rounded-[1.75rem] overflow-hidden shrink-0">
          <Iridescence
            color={[0.66, 0.76, 0.97]}
            speed={0.85}
            amplitude={0.1}
            mouseReact={false}
          />
          <div className="absolute inset-0 grain pointer-events-none" />
        </div>

        {/* Wordmark */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Eyebrow>Youmake — Pitch</Eyebrow>
          <h1 className="font-serif text-[clamp(56px,13vw,150px)] leading-[0.95] tracking-[-0.02em] mt-3 md:mt-5">
            YouMake
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-muted-foreground mt-4 md:mt-6 max-w-md text-balance">
            {content?.tagline ?? "Describe it. Ship it."}
          </p>
        </div>
      </div>
    </div>
  );
}
