import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ConceptPreview } from "@/components/portfolio/concept-preview";
import { ProjectCard } from "@/components/portfolio/project-card";
import { SiteLayout } from "@/components/site-layout";
import { useDocumentMeta } from "@/hooks/use-document-meta";

const concepts = [
  {
    title: "Restaurant Website",
    description:
      "Menu, table booking and WhatsApp ordering in one place.",
  },
  {
    title: "Clinic Website",
    description:
      "Appointment requests, doctor profiles and clinic details in one place.",
  },
  {
    title: "Small Online Store",
    description:
      "Product catalogue, simple checkout and order tracking for a small shop.",
  },
];

export default function Portfolio() {
  useDocumentMeta(
    "Website Design Portfolio | Cloud Media Tech Solutions",
    "Completed website projects and concept designs by Cloud Media Tech Solutions, including a live interior design website in Mangaluru.",
  );

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
              Examples of what we can build for other industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {concepts.map((concept, index) => (
              <Card
                key={concept.title}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <ConceptPreview />
                  <span className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold bg-tech-500 text-white">
                    Concept design
                  </span>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{concept.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {concept.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

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
