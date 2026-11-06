import { CircleAlert, Sparkles } from "lucide-react";
import { WHY_WE_STARTED } from "@/lib/about-content";

export function WhyWeStarted() {
  return (
    <section aria-labelledby="why-we-started-heading" className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-tech-500 mb-3">
            Why We Started
          </p>
          <h2
            id="why-we-started-heading"
            className="text-3xl sm:text-4xl font-poppins font-bold leading-tight mb-6"
          >
            {WHY_WE_STARTED.heading}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {WHY_WE_STARTED.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <article className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-sm">
            <CircleAlert className="h-10 w-10 text-tech-500 mb-5" aria-hidden="true" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              The Challenge
            </h3>
            <p className="text-lg sm:text-xl font-poppins font-semibold leading-relaxed">
              {WHY_WE_STARTED.challenge}
            </p>
          </article>

          <article className="rounded-3xl bg-gradient-to-br from-tech-500 to-cloud-600 text-white p-8 sm:p-10 shadow-xl">
            <Sparkles className="h-10 w-10 text-white mb-5" aria-hidden="true" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-3">
              Our Response
            </h3>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-white/95">
              {WHY_WE_STARTED.response.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
