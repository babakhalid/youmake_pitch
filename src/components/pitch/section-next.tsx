import Image from "next/image";
import Link from "next/link";
import app from "./app.png";
import apps from "./apps.png";
import engine from "./engine.png";
import invoice from "./invoice.png";
import ai from "./midday-ai.png";
import { Card } from "./ui";

export function SectionNext() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-16 right-4 md:left-20 md:right-8 top-4 flex justify-between text-lg">
        <span>Whats coming next</span>
        <span className="text-[#878787]">
          <Link href="/">youmake.dev</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-3 gap-5 px-4 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="space-y-5">
            <Card className="min-h-[260px]">
              <h2 className="text-lg">B2B Contract</h2>
              <span />
              <Image src={invoice} width={300} alt="B2B Contract" quality={100} />
            </Card>

            <Card className="min-h-[260px]">
              <h2 className="text-lg">Scaling</h2>
              <span />
              <Image src={engine} width={300} alt="Scaling" quality={100} />
            </Card>
          </div>
          <div className="space-y-5">
            <Card className="min-h-[260px]">
              <h2 className="text-lg">YouMake Model</h2>
              <span />
              <Image src={ai} width={300} alt="YouMake Model" quality={100} />
            </Card>

            <Card className="min-h-[260px]">
              <h2 className="text-lg">Connectors</h2>
              <span />
              <Image
                src={apps}
                width={300}
                alt="Connectors"
                quality={100}
              />
            </Card>
          </div>

          <div className="ml-auto w-full max-w-[820px] h-full border border-border p-5 bg-[#0C0C0C]">
            <h2 className="mb-16 block text-lg">Native app</h2>
            <span />
            <Image src={app} width={600} alt="App" quality={100} />
          </div>
        </div>
      </div>
    </div>
  );
}
