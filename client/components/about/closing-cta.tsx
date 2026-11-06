import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FINAL_CTA, PROMISE } from "@/lib/about-content";

export function OurPromise() {
  return (
    <section aria-labelledby="promise-heading" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 id="promise-heading" className="text-3xl sm:text-4xl font-poppins font-bold mb-6">
          {PROMISE.title}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {PROMISE.description}
        </p>
      </div>
    </section>
  );
}

export function ClosingCta() {
  return (
    <section
      aria-labelledby="closing-cta-heading"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-tech-900 text-white py-16 sm:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-tech-500/20 via-transparent to-cloud-500/20 animate-gradient-x bg-[length:400%_400%]" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <h2
          id="closing-cta-heading"
          className="text-3xl sm:text-5xl font-poppins font-bold leading-tight mb-6"
        >
          {FINAL_CTA.headline}
        </h2>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
          {FINAL_CTA.description}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-tech-500 hover:bg-tech-600 text-white font-semibold h-12 sm:h-14 px-6 sm:px-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          <Link to={FINAL_CTA.cta.to}>
            {FINAL_CTA.cta.label}
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
