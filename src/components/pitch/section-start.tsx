import Iridescence from "@/components/iridescence";
import type { StartContent } from "@/lib/audience/types";

type Props = {
  content?: StartContent;
};

export function SectionStart({ content }: Props) {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Iridescence Card */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-[35%] md:w-[40%] h-[40%] md:h-[70%] z-[5] rounded-2xl md:rounded-3xl overflow-hidden">
        <Iridescence
          color={[0.3, 0.4, 0.8]}
          speed={1.0}
          amplitude={0.1}
          mouseReact={true}
        />
      </div>

      <div className="container h-screen flex flex-col items-center justify-center">
        <h1 className="text-[70px] md:text-[330px] z-20">
          YouMake
        </h1>
        <p className="text-lg md:text-4xl z-20 -mt-2 md:-mt-12 tracking-wide self-end pr-4 md:pr-8">
          {content?.tagline ?? "Build at the speed of thought"}
        </p>
      </div>
    </div>
  );
}
