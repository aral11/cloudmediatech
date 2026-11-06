import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { SiteLayout } from "@/components/site-layout";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { CONTACT_EMAIL, buildWhatsAppUrl } from "@/lib/site";
import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  useDocumentMeta(
    "Contact Us | Cloud Media Tech Solutions",
    "Contact Cloud Media Tech Solutions by form, WhatsApp or email to discuss your website.",
  );

  return (
    <SiteLayout>
      <section className="pt-28 pb-12 sm:pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Tell us about your business and we will get back to you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Send a message</CardTitle>
                <CardDescription>
                  Opens WhatsApp with your message ready to send.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Reach us directly</CardTitle>
                <CardDescription>Prefer to message us? Use either channel below.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white h-12 sm:h-14 text-sm sm:text-base font-semibold active:scale-95"
                  onClick={() => window.open(buildWhatsAppUrl(), "_blank")}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full h-12 sm:h-14 text-sm sm:text-base font-semibold"
                >
                  <a href={`mailto:${CONTACT_EMAIL}`} className="break-all">
                    <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                    {CONTACT_EMAIL}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
