import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: any; className?: string }) {
  return (
    <div
      className={cn(
        "group relative flex border flex-col items-center justify-center border-border bg-[#121212] px-3 pt-3 pb-3 space-y-2 rounded-2xl transition-all duration-300 hover:border-[#333] hover:shadow-lg hover:shadow-black/20 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
        {children}
      </div>
    </div>
  );
}

export function Grid() {
  return (
    <div className="pointer-events-none absolute inset-0 flex justify-center">
      <div className="h-full w-full grid-cols-6 gap-3.5 px-4 grid">
        <div className="border-r-[1px] border-[#161616]" />
        <div className="border-r-[1px] border-[#161616]" />
        <div className="border-r-[1px] border-[#161616]" />
        <div className="border-r-[1px] border-[#161616]" />
        <div className="border-r-[1px] border-[#161616]" />
      </div>
      <div className="h-full w-full absolute flex justify-between flex-col">
        <div className="border-t-[1px] border-[#161616]" />
        <div className="border-t-[1px] border-[#161616]" />
        <div className="border-t-[1px] border-[#161616]" />
        <div className="border-t-[1px] border-[#161616]" />
        <div className="border-t-[1px] border-[#161616]" />
      </div>
    </div>
  );
}
