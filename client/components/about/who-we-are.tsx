import { WHO_WE_ARE } from "@/lib/about-content";

export function WhoWeAre() {
  return (
    <section aria-labelledby="who-we-are-heading" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[5fr_6fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-tech-500 mb-3">
              Who We Are
            </p>
            <h2
              id="who-we-are-heading"
              className="text-3xl sm:text-4xl font-poppins font-bold leading-tight"
            >
              {WHO_WE_ARE.heading}
            </h2>
          </div>
          <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {WHO_WE_ARE.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
