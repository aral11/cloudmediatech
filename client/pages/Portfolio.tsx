import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteLayout } from "@/components/site-layout";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { buildWhatsAppUrl } from "@/lib/site";
import { ExternalLink, MessageSquare } from "lucide-react";

const samples = [
  {
    title: "Decoremporiums",
    description:
      "Interior design website with elegant layouts and modern aesthetics.",
    label: "Client Project",
    labelClass: "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
    url: "https://www.decoremporiums.com",
    actionLabel: "Visit Site",
  },
  {
    title: "Photo Studio Website",
    description:
      "Concept for photographers and studios, with portfolio galleries and a booking system.",
    label: "Concept",
    labelClass: "bg-blue-500 text-white",
    url: "https://cmt-platform.com/",
    actionLabel: "View Concept",
  },
  {
    title: "Online Store",
    description:
      "Concept for an online shop, with a product catalog, shopping cart and payment integration.",
    label: "Concept",
    labelClass: "bg-blue-500 text-white",
    url: "https://cmt-platform.com/",
    actionLabel: "View Concept",
  },
];

export default function Portfolio() {
  useDocumentMeta(
    "Portfolio | Cloud Media Tech Solutions",
    "Website projects by Cloud Media Tech Solutions, including a live client site and concept designs.",
  );

  return (
    <SiteLayout>
      <section className="pt-28 pb-12 sm:pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4 sm:mb-6">
              Our Portfolio
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              A live client project and concept designs showing the kind of
              websites we build. Concepts are not client work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {samples.map((sample, index) => (
              <Card
                key={sample.title}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-gradient-to-br from-tech-50 to-tech-100 dark:from-tech-900 dark:to-tech-800">
                  <img
                    src="/placeholder.svg"
                    alt={sample.title}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                  <span
                    className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold ${sample.labelClass}`}
                  >
                    {sample.label}
                  </span>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{sample.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {sample.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Button
                    variant="outline"
                    className="w-full h-11 text-sm"
                    onClick={() => window.open(sample.url, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {sample.actionLabel}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Button
              size="lg"
              className="bg-tech-500 hover:bg-tech-600 text-white font-semibold h-12 sm:h-14 px-6 sm:px-8"
              onClick={() =>
                window.open(
                  buildWhatsAppUrl(
                    "Hi Cloud Media Tech, I have a project I'd like to discuss.",
                  ),
                  "_blank",
                )
              }
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
