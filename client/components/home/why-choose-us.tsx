const reasons = [
  {
    title: "Clear pricing.",
    description: "You know the cost before we start.",
  },
  {
    title: "Mobile-first.",
    description:
      "Built to work well on phones, where most customers browse.",
  },
  {
    title: "Built to be found.",
    description: "Basic search optimisation is included in every site.",
  },
  {
    title: "Direct communication.",
    description: "You talk to the person building your website.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold">
            Why businesses choose us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl border border-border bg-card p-6 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-poppins font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
