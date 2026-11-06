export function ConceptPreview() {
  return (
    <div aria-hidden="true" className="h-48 bg-muted p-4 sm:p-5">
      <div className="h-full overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
        </div>
        <div className="space-y-3 p-3">
          <div className="h-3 w-2/3 rounded bg-tech-500" />
          <div className="h-2 w-full rounded bg-muted-foreground/20" />
          <div className="h-2 w-5/6 rounded bg-muted-foreground/20" />
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="h-12 rounded bg-tech-100" />
            <div className="h-12 rounded bg-tech-100" />
            <div className="h-12 rounded bg-tech-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
