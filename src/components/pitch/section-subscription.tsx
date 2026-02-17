import type { SubscriptionContent } from "@/lib/audience/types";

type Props = {
  content?: SubscriptionContent;
};

export function SectionSubscription({ content }: Props) {
  return (
    <div className="h-screen relative overflow-hidden">
      <span className="absolute left-16 md:left-20 top-4 text-lg z-10">
        {content?.sectionLabel ?? "Revenue Model"}
      </span>

      <div className="container h-screen flex flex-col items-center justify-center py-16 px-4 md:px-8">
        <div className="w-full max-w-5xl">
          {/* AI Model Strategy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Now - Best in class */}
            <div className="group relative border border-border bg-[#121212] rounded-2xl p-5 md:p-8 transition-all duration-300 hover:border-[#333]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <span className="text-[#878787] text-xs uppercase tracking-widest">Now</span>
                <h3 className="text-2xl md:text-3xl font-medium mt-2">Best-in-class AI</h3>
                <p className="text-[#878787] text-xs md:text-sm mt-3 md:mt-4 leading-relaxed">
                  Leveraging state-of-the-art models from leading providers with a 50% markup on token costs.
                </p>
                <div className="flex items-center gap-3 mt-4 md:mt-6">
                  <span className="text-xl md:text-2xl font-medium">50%</span>
                  <span className="text-[#555] text-xs">gross margin on AI usage</span>
                </div>
              </div>
            </div>

            {/* Next - Own Model */}
            <div className="group relative border border-white/20 bg-[#121212] rounded-2xl p-5 md:p-8 transition-all duration-300 hover:border-white/40">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <span className="text-[#878787] text-xs uppercase tracking-widest">Next</span>
                <h3 className="text-2xl md:text-3xl font-medium mt-2">Our Own Model</h3>
                <p className="text-[#878787] text-xs md:text-sm mt-3 md:mt-4 leading-relaxed">
                  Open-source LLM fine-tuned on our data with custom tools and skills. Dramatically improved margins.
                </p>
                <div className="flex items-center gap-3 mt-4 md:mt-6">
                  <span className="text-xl md:text-2xl font-medium">80%+</span>
                  <span className="text-[#555] text-xs">target gross margin</span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Streams */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Subscriptions */}
            <div className="group relative border border-border bg-[#121212] rounded-2xl p-4 md:p-6 transition-all duration-300 hover:border-[#333]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <span className="text-[#878787] text-xs uppercase tracking-widest">Primary</span>
                <h3 className="text-lg md:text-xl font-medium mt-2">Subscriptions</h3>
                <p className="text-[#555] text-xs mt-2 md:mt-3">Monthly recurring revenue</p>
              </div>
            </div>

            {/* Token Packs */}
            <div className="group relative border border-border bg-[#121212] rounded-2xl p-4 md:p-6 transition-all duration-300 hover:border-[#333]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <span className="text-[#878787] text-xs uppercase tracking-widest">Secondary</span>
                <h3 className="text-lg md:text-xl font-medium mt-2">Token Packs</h3>
                <p className="text-[#555] text-xs mt-2 md:mt-3">High-margin upsells</p>
              </div>
            </div>

            {/* Hosting & Domains */}
            <div className="group relative border border-border bg-[#121212] rounded-2xl p-4 md:p-6 transition-all duration-300 hover:border-[#333]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <span className="text-[#878787] text-xs uppercase tracking-widest">Tertiary</span>
                <h3 className="text-lg md:text-xl font-medium mt-2">Hosting</h3>
                <p className="text-[#555] text-xs mt-2 md:mt-3">Deployment & domains</p>
              </div>
            </div>

            {/* B2B */}
            <div className="group relative border border-border bg-[#121212] rounded-2xl p-4 md:p-6 transition-all duration-300 hover:border-[#333]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <span className="text-[#878787] text-xs uppercase tracking-widest">Future</span>
                <h3 className="text-lg md:text-xl font-medium mt-2">B2B</h3>
                <p className="text-[#555] text-xs mt-2 md:mt-3">Enterprise contracts</p>
              </div>
            </div>
          </div>

          {/* Bottom Summary */}
          <p className="text-[#555] text-base md:text-lg mt-6 md:mt-10 text-center tracking-wide">
            {content?.bottomText ?? "Clear path to 80%+ margins with proprietary AI"}
          </p>
        </div>
      </div>
    </div>
  );
}
