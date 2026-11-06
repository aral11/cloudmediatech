import { Check, Minus } from "lucide-react";
import { COMPARISON_ROWS, WEBSITE_PACKAGES, type ComparisonValue } from "@/lib/packages";

function ComparisonCell({ value }: { value: ComparisonValue }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium">{value}</span>;
  }
  return value ? (
    <Check className="mx-auto h-5 w-5 text-tech-500" aria-label="Included" />
  ) : (
    <Minus className="mx-auto h-5 w-5 text-muted-foreground/50" aria-label="Not included" />
  );
}

export function PackageComparison() {
  return (
    <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
      <table className="w-full min-w-[560px] text-left text-sm sm:text-base">
        <caption className="sr-only">Compare website packages</caption>
        <thead className="bg-muted/60">
          <tr>
            <th scope="col" className="p-4 font-semibold">Feature</th>
            {WEBSITE_PACKAGES.map((pkg) => (
              <th key={pkg.id} scope="col" className="p-4 text-center font-semibold">
                {pkg.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARISON_ROWS.map((row) => (
            <tr key={row.label} className="border-t border-border">
              <th scope="row" className="p-4 font-medium text-muted-foreground">
                {row.label}
              </th>
              {WEBSITE_PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center">
                  <ComparisonCell value={row.values[pkg.id]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
