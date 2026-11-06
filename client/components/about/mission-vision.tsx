import { Eye, Target } from "lucide-react";
import { MISSION_VISION } from "@/lib/about-content";

export function MissionVision() {
  const { mission, vision } = MISSION_VISION;

  return (
    <section aria-labelledby="mission-vision-heading" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 id="mission-vision-heading" className="sr-only">
          Mission and vision
        </h2>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <article className="group rounded-3xl bg-slate-900 text-white p-8 sm:p-10 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-tech-500/20 text-cloud-300 mb-6">
              <Target className="h-7 w-7" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cloud-300 mb-3">
              {mission.label}
            </p>
            <h3 className="text-2xl sm:text-3xl font-poppins font-bold leading-tight mb-4">
              {mission.headline}
            </h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{mission.body}</p>
          </article>

          <article className="group rounded-3xl bg-gradient-to-br from-tech-500 to-cloud-600 text-white p-8 sm:p-10 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white mb-6">
              <Eye className="h-7 w-7" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-3">
              {vision.label}
            </p>
            <h3 className="text-2xl sm:text-3xl font-poppins font-bold leading-tight mb-4">
              {vision.headline}
            </h3>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">{vision.body}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
