import Image from "next/image";
import Iridescence from "@/components/iridescence";
import overview from "./overview.png";

export function SectionSolution() {
  return (
    <div className="min-h-screen relative">
      <span className="absolute left-16 md:left-20 top-4 text-lg z-10">
        The Solution
      </span>

      <div className="container min-h-screen flex flex-col items-center justify-center px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl items-center">
          {/* Left - Cards Grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1 w-full">
            {/* Card 1 - Describe */}
            <div className="group relative border border-border bg-[#121212] rounded-2xl p-4 md:p-6 flex flex-col h-[120px] md:h-[160px] transition-all duration-300 hover:border-[#333]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div className="mt-auto">
                  <span className="text-[#878787] text-xs uppercase tracking-widest">Step 1</span>
                  <h3 className="text-xl font-medium mt-1">Describe</h3>
                </div>
              </div>
            </div>

            {/* Card 2 - Build */}
            <div className="group relative border border-border bg-[#121212] rounded-2xl p-4 md:p-6 flex flex-col h-[120px] md:h-[160px] transition-all duration-300 hover:border-[#333]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                    <polyline points="2 17 12 22 22 17"/>
                    <polyline points="2 12 12 17 22 12"/>
                  </svg>
                </div>
                <div className="mt-auto">
                  <span className="text-[#878787] text-xs uppercase tracking-widest">Step 2</span>
                  <h3 className="text-xl font-medium mt-1">Build</h3>
                </div>
              </div>
            </div>

            {/* Card 3 - Ship */}
            <div className="group relative border border-border bg-[#121212] rounded-2xl p-4 md:p-6 flex flex-col h-[120px] md:h-[160px] transition-all duration-300 hover:border-[#333]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13"/>
                    <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </div>
                <div className="mt-auto">
                  <span className="text-[#878787] text-xs uppercase tracking-widest">Step 3</span>
                  <h3 className="text-xl font-medium mt-1">Ship</h3>
                </div>
              </div>
            </div>

            {/* Card 4 - Iridescence */}
            <div className="rounded-2xl overflow-hidden h-[120px] md:h-[160px] hidden md:block">
              <Iridescence
                color={[0.3, 0.5, 0.7]}
                speed={0.6}
                amplitude={0.1}
                mouseReact={true}
              />
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex-1 justify-center hidden md:flex">
            <div className="rounded-2xl overflow-hidden border border-border">
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

        {/* Bottom Slogan */}
        <p className="text-xl md:text-2xl font-medium mt-8 md:mt-12 text-center tracking-wide">
          Describe it. Build it. Ship it.
        </p>
      </div>
    </div>
  );
}
