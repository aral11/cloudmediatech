import { WHO_WE_SERVE } from "@/lib/about-content";

export function WhoWeServe() {
  return (
    <section aria-labelledby="who-we-serve-heading" className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-tech-500 mb-3">
            Who We Serve
          </p>
          <h2 id="who-we-serve-heading" className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
            {WHO_WE_SERVE.heading}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">{WHO_WE_SERVE.description}</p>
        </div>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {WHO_WE_SERVE.audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <li
                key={audience.label}
                className="flex flex-col items-center text-center gap-4 rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-tech-50 text-tech-500 dark:bg-tech-900/40">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <span className="font-semibold text-sm sm:text-base">{audience.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
