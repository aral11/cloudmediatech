import { COMMITMENT } from "@/lib/about-content";

export function AboutCommitment() {
  return (
    <section aria-labelledby="about-commitment-heading" className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-tech-500 mb-3">
          Our Commitment
        </p>
        <h2
          id="about-commitment-heading"
          className="text-3xl sm:text-4xl font-poppins font-bold leading-tight mb-6"
        >
          {COMMITMENT.heading}
        </h2>
        <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {COMMITMENT.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
