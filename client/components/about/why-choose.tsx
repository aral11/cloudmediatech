import { WHY_CHOOSE_US } from "@/lib/about-content";

export function WhyChooseUs() {
  return (
    <section
      aria-labelledby="about-why-heading"
      className="py-16 sm:py-24 bg-muted/40"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <h2
            id="about-why-heading"
            className="text-3xl sm:text-4xl font-poppins font-bold mb-4"
          >
            Why Choose Us
          </h2>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="group rounded-2xl bg-card border border-border p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-tech-50 text-tech-500 mb-5 transition-colors duration-300 group-hover:bg-tech-500 group-hover:text-white dark:bg-tech-900/40">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-poppins font-semibold mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
