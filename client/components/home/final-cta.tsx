import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold mb-4 sm:mb-6">
          Not sure what your website needs?
        </h2>
        <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
          Get a free review of your online presence. No obligation.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-tech-500 hover:bg-tech-600 text-white font-semibold px-6 sm:px-8 h-12 sm:h-14"
        >
          <Link to="/contact">Get a Free Website Review</Link>
        </Button>
      </div>
    </section>
  );
}
