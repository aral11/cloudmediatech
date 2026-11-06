import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WEBSITE_PACKAGES, PACKAGE_NOTE, type PackageId, type WebsitePackage } from "@/lib/packages";
import { cn } from "@/lib/utils";

const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;

type PackageCardsProps = {
  onSelectPackage: (id: PackageId) => void;
};

export function PackageCards({ onSelectPackage }: PackageCardsProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
        {WEBSITE_PACKAGES.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} onSelect={() => onSelectPackage(pkg.id)} />
        ))}
      </div>
      <p className="max-w-3xl mx-auto mt-8 text-center text-sm text-muted-foreground leading-relaxed">
        {PACKAGE_NOTE}
      </p>
    </div>
  );
}

function PackageCard({ pkg, onSelect }: { pkg: WebsitePackage; onSelect: () => void }) {
  const handleSelect = () => {
    onSelect();
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <article
      className={cn(
        "relative flex flex-col overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        pkg.highlighted
          ? "border-tech-500 ring-2 ring-tech-500 shadow-2xl md:-my-4"
          : "border-border shadow-sm",
      )}
    >
      {pkg.highlighted && (
        <div className="bg-gradient-to-r from-tech-500 to-cloud-500 py-2 text-center text-sm font-semibold tracking-wider text-white">
          MOST POPULAR
        </div>
      )}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <h3 className="text-xl sm:text-2xl font-poppins font-bold">{pkg.name}</h3>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed min-h-[3.5rem]">
          {pkg.positioning}
        </p>
        <div className="mt-6">
          <span className="text-4xl sm:text-5xl font-bold text-tech-500">{formatPrice(pkg.price)}</span>
          <p className="text-xs text-muted-foreground mt-1">Starting price, subject to confirmation</p>
        </div>

        <ul className="mt-6 space-y-3 flex-1">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="h-5 w-5 flex-shrink-0 text-tech-500 mt-0.5" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          onClick={handleSelect}
          className={cn(
            "mt-8 w-full h-12 sm:h-14 font-semibold text-sm sm:text-base transition-all active:scale-95",
            pkg.highlighted
              ? "bg-tech-500 hover:bg-tech-600 text-white"
              : "bg-tech-100 text-tech-700 hover:bg-tech-200 dark:bg-tech-900 dark:text-tech-100 dark:hover:bg-tech-800",
          )}
        >
          {pkg.cta}
        </Button>
      </div>
    </article>
  );
}
