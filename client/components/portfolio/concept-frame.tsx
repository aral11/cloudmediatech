import type { ReactNode } from "react";
import { useFitScale } from "@/hooks/use-fit-scale";

export const CONCEPT_WIDTH = 1200;

type ConceptFrameProps = {
  title: string;
  children: ReactNode;
  fullHeight?: boolean;
};

export function ConceptFrame({ title, children, fullHeight = false }: ConceptFrameProps) {
  const { containerRef, contentRef, scale, contentHeight } = useFitScale(CONCEPT_WIDTH);

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-green-400" />
        <span className="ml-3 truncate text-xs text-slate-500">{title}</span>
      </div>
      <div
        ref={containerRef}
        aria-hidden={!fullHeight}
        className={fullHeight ? "relative w-full overflow-hidden" : "relative aspect-[4/3] w-full overflow-hidden"}
        style={fullHeight ? { height: contentHeight * scale } : undefined}
      >
        <div
          ref={contentRef}
          className="absolute left-0 top-0 origin-top-left"
          style={{ width: CONCEPT_WIDTH, transform: `scale(${scale})` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
