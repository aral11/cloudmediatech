import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ConceptFrame } from "@/components/portfolio/concept-frame";
import type { PortfolioConcept } from "@/components/portfolio/concept-types";
import { buildWhatsAppUrl } from "@/lib/site";

type ConceptModalProps = {
  concept: PortfolioConcept | null;
  onClose: () => void;
};

export function ConceptModal({ concept, onClose }: ConceptModalProps) {
  return (
    <Dialog open={concept !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto p-4 sm:p-6">
        {concept && (
          <>
            <DialogHeader>
              <span className="w-fit rounded-full border border-tech-500 px-3 py-1 text-xs font-semibold tracking-wider text-tech-500">
                DESIGN CONCEPT
              </span>
              <DialogTitle className="font-poppins text-2xl">{concept.name}</DialogTitle>
              <DialogDescription>
                {concept.category} · {concept.industry}
              </DialogDescription>
            </DialogHeader>

            <ConceptFrame title={concept.name} fullHeight>
              <concept.Site />
            </ConceptFrame>

            <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl bg-muted p-5 sm:flex-row sm:items-center">
              <div>
                <p className="font-poppins text-lg font-bold">Want a Website Like This?</p>
                <p className="text-sm text-muted-foreground">
                  Tell us about your business and we will design a website that fits your goals.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full bg-tech-500 font-semibold text-white hover:bg-tech-600 sm:w-auto"
              >
                <a
                  href={buildWhatsAppUrl(
                    `Hi, I'd like a website like the "${concept.name}" concept (${concept.category}). Please share details.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                  Get Your Website
                </a>
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
