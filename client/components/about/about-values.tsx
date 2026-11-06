import { ABOUT_VALUES } from "@/lib/about-content";

export function AboutValues() {
  return (
    <section aria-labelledby="about-values-heading" className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-tech-500 mb-3">
            Our Values
          </p>
          <h2 id="about-values-heading" className="text-3xl sm:text-4xl font-poppins font-bold">
            What We Believe In
          </h2>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {ABOUT_VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <li
                key={value.title}
                className="group rounded-2xl bg-card border border-border p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-tech-50 text-tech-500 mb-5 transition-colors duration-300 group-hover:bg-tech-500 group-hover:text-white dark:bg-tech-900/40">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-poppins font-semibold mb-2">{value.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
