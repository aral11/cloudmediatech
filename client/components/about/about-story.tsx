import { CircleCheck } from "lucide-react";
import { COMPANY_OVERVIEW, STORY } from "@/lib/about-content";

export function AboutOverview() {
  return (
    <section
      aria-labelledby="about-overview-heading"
      className="py-16 sm:py-24 bg-background"
    >
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2
          id="about-overview-heading"
          className="text-3xl sm:text-4xl font-poppins font-bold mb-6"
        >
          {COMPANY_OVERVIEW.title}
        </h2>
        <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {COMPANY_OVERVIEW.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutStory() {
  return (
    <section
      aria-labelledby="about-story-heading"
      className="py-16 sm:py-24 bg-muted/40"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2
            id="about-story-heading"
            className="text-3xl sm:text-4xl font-poppins font-bold mb-4"
          >
            {STORY.title}
          </h2>
        </div>

        <ul className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {STORY.problems.map((problem) => (
            <li
              key={problem}
              className="flex gap-3 rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CircleCheck className="h-6 w-6 flex-shrink-0 text-tech-500 mt-0.5" aria-hidden="true" />
              <span className="text-base sm:text-lg font-medium">{problem}</span>
            </li>
          ))}
        </ul>

        <p className="max-w-3xl mx-auto mt-10 sm:mt-12 rounded-2xl bg-gradient-to-r from-tech-500 to-cloud-500 p-6 sm:p-8 text-center text-base sm:text-lg text-white leading-relaxed shadow-xl">
          {STORY.bridge}
        </p>
      </div>
    </section>
  );
}
