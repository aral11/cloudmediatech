import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ConceptFrame } from "@/components/portfolio/concept-frame";
import type { PortfolioConcept } from "@/components/portfolio/concept-types";

type ConceptCardProps = {
  concept: PortfolioConcept;
  onView: (concept: PortfolioConcept) => void;
};

export function ConceptCard({ concept, onView }: ConceptCardProps) {
  const { Site } = concept;

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="bg-muted p-4 sm:p-5">
        <ConceptFrame title={concept.name}>
          <Site />
        </ConceptFrame>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-1 flex-col">
          <span className="w-fit rounded-full border border-tech-500 px-3 py-1 text-xs font-semibold tracking-wider text-tech-500">
            DESIGN CONCEPT
          </span>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {concept.category}
          </p>
          <h3 className="mt-1 text-xl font-poppins font-bold">{concept.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{concept.description}</p>
          <p className="mt-4 text-sm">
            <span className="text-muted-foreground">Industry: </span>
            <span className="font-medium">{concept.industry}</span>
          </p>
        </div>

        <Button
          variant="outline"
          className="mt-6 w-full border-tech-500 font-semibold text-tech-500 hover:bg-tech-500 hover:text-white"
          onClick={() => onView(concept)}
        >
          View Concept
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </Card>
  );
}
