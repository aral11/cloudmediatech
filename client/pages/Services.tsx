import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteLayout } from "@/components/site-layout";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { buildWhatsAppUrl } from "@/lib/site";
import { services } from "@/lib/services";
import { MessageSquare } from "lucide-react";

export default function Services() {
  useDocumentMeta(
    "Website Design, Ecommerce & SEO Services | Cloud Media Tech Solutions",
    "Website design, ecommerce stores, landing pages, redesigns, SEO setup and web applications for small businesses.",
  );

  return (
    <SiteLayout>
      <section className="pt-28 pb-12 sm:pb-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4 sm:mb-6">
              Website Services for Growing Businesses
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              From a first website to a full redesign, we build websites that
              are fast on phones and easy for customers to use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="bg-tech-100 dark:bg-tech-800 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-tech-500 group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-12 sm:mt-16">
            <Button
              size="lg"
              className="bg-tech-500 hover:bg-tech-600 text-white font-semibold h-12 sm:h-14 px-6 sm:px-8"
              onClick={() =>
                window.open(
                  buildWhatsAppUrl(
                    "Hi Cloud Media Tech, I'd like a free website audit.",
                  ),
                  "_blank",
                )
              }
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Free Website Audit
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold h-12 sm:h-14 px-6 sm:px-8"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
