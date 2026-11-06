import { cn } from "@/lib/utils";

export function LaptopMockup({ className }: { className?: string }) {
  return (
    <div className={cn("w-full max-w-md", className)} aria-hidden="true">
      <div className="rounded-t-2xl border-[10px] border-slate-700 bg-slate-800 p-2 shadow-2xl">
        <div className="h-full rounded-md bg-gradient-to-br from-tech-500 to-cloud-500 p-4 space-y-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            <span className="h-2 w-2 rounded-full bg-white/50" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </div>
          <div className="h-3 w-3/5 rounded bg-white/90" />
          <div className="h-2 w-4/5 rounded bg-white/60" />
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="h-14 rounded-lg bg-white/25" />
            <div className="h-14 rounded-lg bg-white/25" />
            <div className="h-14 rounded-lg bg-white/25" />
          </div>
        </div>
      </div>
      <div className="mx-auto h-3 w-[110%] -translate-x-[4.5%] rounded-b-xl bg-slate-600 shadow-lg" />
    </div>
  );
}

export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-40 sm:w-48 rounded-[2rem] border-[8px] border-slate-800 bg-slate-900 p-2 shadow-2xl",
        className,
      )}
      aria-hidden="true"
    >
      <div className="rounded-[1.25rem] bg-gradient-to-b from-cloud-500 to-tech-600 p-3 h-72 sm:h-80 space-y-3">
        <div className="h-2 w-1/3 mx-auto rounded-full bg-white/60" />
        <div className="h-3 w-4/5 rounded bg-white/90" />
        <div className="h-2 w-full rounded bg-white/60" />
        <div className="h-2 w-5/6 rounded bg-white/60" />
        <div className="h-24 rounded-xl bg-white/25 mt-4" />
        <div className="h-8 rounded-full bg-white mt-4" />
      </div>
    </div>
  );
}
