import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ConceptShowcase } from "@/components/portfolio/concept-showcase";
import { ProjectCard } from "@/components/portfolio/project-card";
import { SiteLayout } from "@/components/site-layout";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function Portfolio() {
  useDocumentMeta("/portfolio");

  return (
    <SiteLayout>
      <section className="pt-28 pb-12 sm:pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4 sm:mb-6">
              Our Work. Our Creations.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Every business has a story. We help bring that story online through thoughtfully
              designed websites and digital experiences.
            </p>
          </div>

          <div className="mb-16 sm:mb-20">
            <ProjectCard />
          </div>

          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-2">Concept Designs</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Explore the possibilities. Discover how we can transform your business idea into a
              professional digital experience.
            </p>
          </div>

          <ConceptShowcase />

          <div className="text-center mt-12 sm:mt-16">
            <Button
              asChild
              size="lg"
              className="bg-tech-500 hover:bg-tech-600 text-white font-semibold h-12 sm:h-14 px-6 sm:px-8"
            >
              <Link to="/contact">
                Want something like this? Get a Free Website Review
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
