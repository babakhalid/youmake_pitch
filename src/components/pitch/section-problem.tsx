import Iridescence from "@/components/iridescence";

export function SectionProblem() {
  return (
    <div className="h-screen relative overflow-hidden">
      <span className="absolute left-16 md:left-20 top-4 text-lg z-10">
        The Problem
      </span>

      <div className="container h-screen flex flex-col items-center justify-center px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 w-full max-w-2xl">
          {/* Card 1 - Too Long */}
          <div className="group relative border border-border bg-[#121212] rounded-2xl p-6 flex flex-col h-[140px] md:h-[180px] transition-all duration-300 hover:border-[#333]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[#878787] text-xs uppercase tracking-widest">Time</span>
              <h3 className="text-xl md:text-2xl font-medium mt-auto leading-tight">It takes too long.</h3>
            </div>
          </div>

          {/* Card 2 - Iridescence */}
          <div className="rounded-2xl overflow-hidden h-[140px] md:h-[180px]">
            <Iridescence
              color={[0.2, 0.6, 0.8]}
              speed={0.6}
              amplitude={0.1}
              mouseReact={true}
            />
          </div>

          {/* Card 3 - Too Expensive */}
          <div className="group relative border border-border bg-[#121212] rounded-2xl p-6 flex flex-col h-[140px] md:h-[180px] transition-all duration-300 hover:border-[#333]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[#878787] text-xs uppercase tracking-widest">Cost</span>
              <h3 className="text-xl md:text-2xl font-medium mt-auto leading-tight">It costs too much.</h3>
            </div>
          </div>

          {/* Card 4 - Too Complicated */}
          <div className="group relative border border-border bg-[#121212] rounded-2xl p-6 flex flex-col h-[140px] md:h-[180px] transition-all duration-300 hover:border-[#333]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[#878787] text-xs uppercase tracking-widest">Complexity</span>
              <h3 className="text-xl md:text-2xl font-medium mt-auto leading-tight">It&apos;s too complicated.</h3>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-[#555] text-lg mt-10 text-center tracking-wide">
          Great ideas never launch. Businesses miss opportunities. Entrepreneurs stay stuck.
        </p>
      </div>
    </div>
  );
}
