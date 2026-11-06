import { APPROACH } from "@/lib/about-content";

export function AboutApproach() {
  return (
    <section aria-labelledby="about-approach-heading" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-tech-500 mb-3">
            Our Approach
          </p>
          <h2 id="about-approach-heading" className="text-3xl sm:text-4xl font-poppins font-bold">
            {APPROACH.heading}
          </h2>
        </div>

        <ol className="grid gap-8 lg:grid-cols-4 lg:gap-6 max-w-6xl mx-auto">
          {APPROACH.steps.map((step) => (
            <li key={step.number} className="flex gap-5 lg:flex-col lg:gap-4">
              <span className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-tech-500 to-cloud-600 text-lg font-poppins font-bold text-white shadow-lg">
                {step.number}
              </span>
              <div>
                <h3 className="text-xl font-poppins font-semibold mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
