import Link from "next/link";
import { Card } from "./ui";

export function SectionVision() {
  return (
    <div className="h-screen relative w-screen overflow-hidden">
      <div className="absolute left-16 right-4 md:left-20 md:right-8 top-4 flex justify-between text-lg">
        <span>Our vision</span>
        <span className="text-[#878787]">
          <Link href="/">youmake.dev</Link>
        </span>
      </div>
      <div className="flex flex-col h-screen justify-center container">
        <h1 className="text-[45px] px-4 md:px-0 md:text-[122px] font-medium text-center leading-none">
          A world where everyone is a maker.
        </h1>
      </div>
    </div>
  );
}
