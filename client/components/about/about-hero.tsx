import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO } from "@/lib/about-content";
import { LaptopMockup, PhoneMockup } from "@/components/about/device-mockup";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-28 pb-16 sm:pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-tech-900 animate-gradient-x bg-[length:400%_400%]" />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-tech-500/30 blur-3xl animate-glow" />
      <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-cloud-400/20 blur-3xl animate-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-block rounded-full border border-cloud-400/40 bg-white/5 px-4 py-1.5 text-sm font-medium text-cloud-200 mb-6">
              {HERO.eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-6">
              {HERO.headline}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
              {HERO.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-tech-500 hover:bg-tech-600 text-white font-semibold h-12 sm:h-14 px-6 sm:px-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Link to={HERO.primaryCta.to}>{HERO.primaryCta.label}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 sm:h-14 px-6 sm:px-8 rounded-xl border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link to={HERO.secondaryCta.to}>
                  {HERO.secondaryCta.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center items-end min-h-[280px] sm:min-h-[360px]">
            <LaptopMockup className="drop-shadow-2xl animate-floating" />
            <PhoneMockup className="absolute -bottom-6 -right-2 sm:right-4 drop-shadow-2xl animate-floating" />
          </div>
        </div>
      </div>
    </section>
  );
}
