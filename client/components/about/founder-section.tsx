import { Quote } from "lucide-react";
import { FOUNDER, FOUNDER_PHOTO_URL } from "@/lib/about-content";

function FounderPortrait() {
  if (FOUNDER_PHOTO_URL) {
    return (
      <img
        src={FOUNDER_PHOTO_URL}
        alt={`Portrait of ${FOUNDER.name}, founder of Cloud Media Tech Solutions`}
        className="h-64 w-64 sm:h-80 sm:w-80 rounded-3xl object-cover shadow-2xl ring-4 ring-tech-500/30"
        loading="lazy"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label="Founder photo placeholder"
      className="flex h-64 w-64 sm:h-80 sm:w-80 flex-col items-center justify-center gap-2 rounded-3xl bg-gradient-to-br from-tech-500 to-cloud-500 text-white shadow-2xl ring-4 ring-tech-500/30"
    >
      <span className="text-6xl font-poppins font-bold">AD</span>
      <span className="text-sm text-white/80">Founder photo placeholder</span>
    </div>
  );
}

export function FounderSection() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="relative overflow-hidden bg-slate-900 text-white py-16 sm:py-24"
    >
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-cloud-400/20 blur-3xl" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <FounderPortrait />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cloud-300 mb-3">
              Meet the Founder
            </p>
            <h2 id="founder-heading" className="text-3xl sm:text-4xl font-poppins font-bold mb-2">
              {FOUNDER.name}
            </h2>
            <p className="text-base sm:text-lg text-cloud-200 mb-6">{FOUNDER.designation}</p>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {FOUNDER.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <Quote className="h-8 w-8 text-tech-400 mb-3" aria-hidden="true" />
              <p className="text-lg sm:text-xl font-poppins italic leading-relaxed text-white">
                {FOUNDER.quote}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
