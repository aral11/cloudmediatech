import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { SiteLayout } from "@/components/site-layout";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { CONTACT_EMAIL, INSTAGRAM_URL, LOCATIONS, buildWhatsAppUrl } from "@/lib/site";
import { Instagram, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  useDocumentMeta(
    "Contact Cloud Media Tech Solutions | Get a Website Quote",
    "Get in touch for a free website review or quote. Reach us on WhatsApp or email.",
    "/contact",
  );

  return (
    <SiteLayout>
      <section className="pt-28 pb-12 sm:pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
            <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-tech-500 mb-4">
              Affordable Website Development for Businesses.
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4 sm:mb-6">
              Let's talk about your website.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Tell us about your business and we'll reply with clear next steps.
              No pressure, no obligation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="animate-fade-in lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Request a free review</CardTitle>
                <CardDescription>
                  Opens WhatsApp with your details ready to send.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            <Card className="animate-fade-in h-fit">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Reach us directly</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white h-12 text-sm sm:text-base font-semibold active:scale-95"
                  onClick={() => window.open(buildWhatsAppUrl(), "_blank")}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </Button>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 text-sm sm:text-base break-all hover:text-tech-500 transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 text-tech-500" />
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm sm:text-base hover:text-tech-500 transition-colors"
                >
                  <Instagram className="h-5 w-5 flex-shrink-0 text-tech-500" />
                  @cloudmediatech
                </a>
                <div className="flex items-center gap-3 text-sm sm:text-base">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-tech-500" />
                  {LOCATIONS}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
