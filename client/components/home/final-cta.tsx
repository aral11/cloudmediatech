import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold mb-4 sm:mb-6">
          Your Business Deserves a Website.
        </h2>
        <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
          From your first business website to a complete online store, Cloud Media Tech Solutions
          helps you take your business into the digital world without breaking your budget.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-tech-500 hover:bg-tech-600 text-white font-semibold px-6 sm:px-8 h-12 sm:h-14"
        >
          <a href="#enquiry">Start Your Website Today</a>
        </Button>
      </div>
    </section>
  );
}
