import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PackageCards } from "@/components/packages/package-cards";
import { PackageComparison } from "@/components/packages/package-comparison";
import { PackageFaq } from "@/components/packages/package-faq";
import { EnquirySection } from "@/components/packages/enquiry-section";
import type { PackageId } from "@/lib/packages";

export function PackagesSection() {
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleSelectPackage = (id: PackageId) => setSelectedPackage(id);

  return (
    <>
      <section
        id="packages"
        aria-labelledby="packages-heading"
        className="scroll-mt-24 bg-gradient-to-b from-background to-card py-16 sm:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 id="packages-heading" className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
              Website Development Packages
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Choose the package that fits where your business is today. Compare features, then send
              your requirements on WhatsApp in a few steps.
            </p>
          </div>

          <PackageCards onSelectPackage={handleSelectPackage} />

          <div className="mt-16 sm:mt-20">
            <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-center mb-8">
              Compare Packages
            </h3>
            <PackageComparison />
          </div>

          <div className="mt-16 sm:mt-20">
            <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-center mb-8">
              Frequently Asked Questions
            </h3>
            <PackageFaq />
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 sm:h-14 px-6 sm:px-8 font-semibold rounded-xl"
            >
              <a href="#enquiry">Get a Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      <EnquirySection selectedPackage={selectedPackage} onPackageChange={setSelectedPackage} />
    </>
  );
}
