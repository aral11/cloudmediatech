import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ABOUT_SERVICES, SERVICES_HEADING, type AboutService } from "@/lib/about-content";

function ServiceCard({ service }: { service: AboutService }) {
  const Icon = service.icon;
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-tech-500/50 hover:shadow-xl">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-tech-500 to-cloud-500 text-white mb-5 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-poppins font-semibold mb-2">{service.title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
        {service.description}
      </p>
      <Link
        to="/services"
        aria-label={`Learn more about ${service.title}`}
        className="mt-5 inline-flex items-center text-sm font-semibold text-tech-500 hover:text-tech-600"
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}

export function AboutServices() {
  return (
    <section
      id="services"
      aria-labelledby="about-services-heading"
      className="scroll-mt-24 py-16 sm:py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-tech-500 mb-3">
            What We Do
          </p>
          <h2
            id="about-services-heading"
            className="text-3xl sm:text-4xl font-poppins font-bold"
          >
            {SERVICES_HEADING}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ABOUT_SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
