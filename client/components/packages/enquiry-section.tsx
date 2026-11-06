import { EnquiryForm } from "@/components/packages/enquiry-form";

const SAMPLE_ENQUIRY = `NEW WEBSITE ENQUIRY

Name: Aral D'Souza
Business Name: New
Business Type: Hotel
Phone / WhatsApp: 8105003858
Email: aral.dsouza@cloudmediatechsolutions.com

Requirement: New Website
Package: Not yet selected

Additional Details: PFA`;

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
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 id="enquiry-heading" className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
            Let&apos;s Build Your Website!
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Tell us about your business. Your details open in WhatsApp, ready to send.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_20rem] gap-8 lg:gap-10 max-w-6xl mx-auto items-start">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <EnquiryForm selectedPackage={selectedPackage} onPackageChange={onPackageChange} />
          </div>

          <aside className="rounded-3xl bg-slate-900 text-white p-6 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cloud-300 mb-3">
              Sample enquiry
            </p>
            <pre className="whitespace-pre-wrap break-words font-mono text-xs sm:text-sm leading-relaxed text-slate-200">
              {SAMPLE_ENQUIRY}
            </pre>
            <p className="mt-4 text-xs text-slate-400">
              This is an example of how enquiries are organised, not a fixed customer record.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
