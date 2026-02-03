import Image from "next/image";

export function SectionTeam() {
  return (
    <div className="h-screen relative overflow-hidden">
      <span className="absolute left-16 md:left-20 top-4 text-lg z-10">
        Who we are
      </span>

      <div className="container h-screen flex flex-col items-center justify-center py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl items-center">
          {/* Team Cards */}
          <div className="flex flex-col gap-5 flex-1">
            {/* Khalid BABA */}
            <div className="group relative border border-border bg-[#121212] rounded-2xl p-5 md:p-8 flex gap-4 md:gap-6 transition-all duration-300 hover:border-[#333]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10 flex gap-4 md:gap-6 items-start">
                <Image
                  src="/DSC07008.jpg"
                  alt="Khalid BABA"
                  width={120}
                  height={120}
                  quality={100}
                  className="rounded-full object-cover w-16 h-16 md:w-28 md:h-28 flex-shrink-0"
                />
                <div className="flex flex-col">
                  <h2 className="text-xl md:text-2xl font-medium">Khalid BABA</h2>
                  <span className="text-[#878787] text-xs md:text-sm">Co-founder</span>
                  <p className="text-[#878787] text-xs md:text-sm mt-2 md:mt-3 leading-relaxed">
                    PhD in AI and Education. Former Head of Mission at UM6P, helping departments create digital solutions. Saw the struggle for non-technical people and decided to build YouMake for them.
                  </p>
                </div>
              </div>
            </div>

            {/* Hajar B. */}
            <div className="group relative border border-border bg-[#121212] rounded-2xl p-5 md:p-8 flex gap-4 md:gap-6 transition-all duration-300 hover:border-[#333]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10 flex gap-4 md:gap-6 items-start">
                <Image
                  src="/hajarbaba.png"
                  alt="Hajar B."
                  width={120}
                  height={120}
                  quality={100}
                  className="rounded-full object-cover w-16 h-16 md:w-28 md:h-28 flex-shrink-0"
                />
                <div className="flex flex-col">
                  <h2 className="text-xl md:text-2xl font-medium">Hajar B.</h2>
                  <span className="text-[#878787] text-xs md:text-sm">Co-founder</span>
                  <p className="text-[#878787] text-xs md:text-sm mt-2 md:mt-3 leading-relaxed">
                    Influencer and Master in Digital Marketing. Leading growth and community building for YouMake.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="flex-1 flex flex-col items-center justify-center gap-3 md:gap-4 mt-6 md:mt-0">
            <span className="text-[#878787] text-xs uppercase tracking-widest">Mission Statement</span>
            <h2 className="text-2xl md:text-4xl font-medium text-center leading-tight">
              Empowering everyone to build software, no coding required.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
