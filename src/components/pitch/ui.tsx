import { cn } from "@/lib/utils";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow absolute left-16 md:left-24 top-[27px] z-10 flex items-center gap-2">
      <span aria-hidden className="inline-block w-3 border-t border-border" />
      {children}
    </span>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("eyebrow", className)}>{children}</span>;
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex border flex-col items-center justify-center border-border bg-card px-3 pt-3 pb-3 space-y-2 rounded-[1.5rem] transition-colors duration-300 hover:bg-accent/40 overflow-hidden",
        className
      )}
    >
      <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
        {children}
      </div>
    </div>
  );
}
