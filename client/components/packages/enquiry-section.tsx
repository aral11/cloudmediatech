import { EnquiryForm } from "@/components/packages/enquiry-form";

type EnquirySectionProps = {
  selectedPackage: string;
  onPackageChange: (value: string) => void;
};

export function EnquirySection({ selectedPackage, onPackageChange }: EnquirySectionProps) {
  return (
    <section
      id="enquiry"
      aria-labelledby="enquiry-heading"
      className="scroll-mt-24 bg-muted/40 py-16 sm:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <h2 id="enquiry-heading" className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
            Let&apos;s Build Your Website
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Tell us a little about your business and what you need. Our team will get in touch to
            help you find the right digital solution.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm">
          <EnquiryForm selectedPackage={selectedPackage} onPackageChange={onPackageChange} />
        </div>
      </div>
    </section>
  );
}
