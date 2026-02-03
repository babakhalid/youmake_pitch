export function SectionTraction() {
  return (
    <div className="h-screen relative overflow-hidden">
      <span className="absolute left-16 md:left-20 top-4 text-lg z-10">
        Traction
      </span>

      <div className="container h-screen flex flex-col items-center justify-center py-16 px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 w-full max-w-5xl">
          {/* Card 1 - Signups */}
          <div className="group relative border border-border bg-[#121212] rounded-2xl p-4 md:p-6 flex flex-col h-[160px] md:h-[220px] transition-all duration-300 hover:border-[#333]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[#878787] text-xs uppercase tracking-widest">Signups</span>
              <div className="mt-auto flex items-center gap-2 md:gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="font-mono text-4xl md:text-7xl font-medium">165</span>
              </div>
            </div>
          </div>

          {/* Card 2 - Projects */}
          <div className="group relative border border-border bg-[#121212] rounded-2xl p-4 md:p-6 flex flex-col h-[160px] md:h-[220px] transition-all duration-300 hover:border-[#333]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[#878787] text-xs uppercase tracking-widest">Projects</span>
              <div className="mt-auto flex items-center gap-2 md:gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="font-mono text-4xl md:text-7xl font-medium">371</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Deployed */}
          <div className="group relative border border-border bg-[#121212] rounded-2xl p-4 md:p-6 flex flex-col h-[160px] md:h-[220px] transition-all duration-300 hover:border-[#333]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[#878787] text-xs uppercase tracking-widest">Deployed</span>
              <div className="mt-auto flex items-center gap-2 md:gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="font-mono text-4xl md:text-7xl font-medium">68</span>
              </div>
            </div>
          </div>

          {/* Card 4 - Messages */}
          <div className="group relative border border-border bg-[#121212] rounded-2xl p-4 md:p-6 flex flex-col h-[160px] md:h-[220px] transition-all duration-300 hover:border-[#333]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[#878787] text-xs uppercase tracking-widest">Messages</span>
              <p className="text-[#555] text-xs mt-1">Users & AI Agents</p>
              <span className="mt-auto font-mono text-4xl md:text-7xl font-medium">66.6K</span>
            </div>
          </div>

          {/* Card 5 - MRR */}
          <div className="group relative border border-border bg-[#121212] rounded-2xl p-4 md:p-6 flex flex-col h-[160px] md:h-[220px] transition-all duration-300 hover:border-[#333]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[#878787] text-xs uppercase tracking-widest">MRR</span>
              <div className="mt-auto flex items-center gap-2 md:gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="font-mono text-4xl md:text-7xl font-medium">$245</span>
              </div>
            </div>
          </div>

          {/* Card 6 - Average */}
          <div className="group relative border border-border bg-[#121212] rounded-2xl p-4 md:p-6 flex flex-col h-[160px] md:h-[220px] transition-all duration-300 hover:border-[#333]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[#878787] text-xs uppercase tracking-widest">Average</span>
              <p className="text-[#555] text-xs mt-1">Per paying user</p>
              <span className="mt-auto font-mono text-4xl md:text-7xl font-medium">$61</span>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-[#555] text-sm md:text-lg mt-6 md:mt-10 text-center tracking-wide">
          Early traction with paying customers
        </p>
      </div>
    </div>
  );
}
