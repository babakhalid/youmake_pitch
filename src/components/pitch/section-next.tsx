import Image from "next/image";
import type { NextContent } from "@/lib/audience/types";
import apps from "./apps.png";
import engine from "./engine.png";
import invoice from "./invoice.png";
import ai from "./midday-ai.png";
import { Card } from "./ui";

type Props = {
  content?: NextContent;
};

export function SectionNext({ content }: Props) {
  return (
    <div className="h-screen relative w-screen overflow-hidden">
      <span className="absolute left-16 md:left-20 top-4 text-lg">
        {content?.sectionLabel ?? "Whats coming next"}
      </span>
      <div className="flex flex-col h-screen justify-center container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 px-4 md:px-0">
          <Card className="h-[180px] md:h-[260px]">
            <h2 className="text-sm md:text-lg">B2B Contract</h2>
            <span />
            <Image src={invoice} width={200} alt="B2B Contract" quality={100} className="w-full" />
          </Card>

          <Card className="h-[180px] md:h-[260px]">
            <h2 className="text-sm md:text-lg">Scaling</h2>
            <span />
            <Image src={engine} width={200} alt="Scaling" quality={100} className="w-full" />
          </Card>

          <Card className="h-[180px] md:h-[260px]">
            <h2 className="text-sm md:text-lg">YouMake Model</h2>
            <span />
            <Image src={ai} width={200} alt="YouMake Model" quality={100} className="w-full" />
          </Card>

          <Card className="h-[180px] md:h-[260px]">
            <h2 className="text-sm md:text-lg">Connectors</h2>
            <span />
            <Image src={apps} width={200} alt="Connectors" quality={100} className="w-full" />
          </Card>
        </div>
      </div>
    </div>
  );
}
