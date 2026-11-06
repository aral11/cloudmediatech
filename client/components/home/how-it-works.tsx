const steps = [
  {
    title: "Free review",
    description: "Tell us about your business and goals.",
  },
  {
    title: "Plan and design",
    description: "We share a layout and design for your approval.",
  },
  {
    title: "Build and test",
    description:
      "We build, test on phones and computers, and fix issues.",
  },
  {
    title: "Launch and support",
    description:
      "We go live and stay available for changes.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 sm:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold">
            How it works
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <li key={step.title} className="text-center">
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-tech-500 text-lg font-bold text-white">
                {index + 1}
              </span>
              <h3 className="text-lg font-poppins font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
