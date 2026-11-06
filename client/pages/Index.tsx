import { Button } from "@/components/ui/button";
import { LaunchOfferModal } from "@/components/launch-offer-modal";
import { SiteLayout } from "@/components/site-layout";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesTeaser } from "@/components/home/services-teaser";
import { PricingSection } from "@/components/home/pricing-section";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { buildWhatsAppUrl } from "@/lib/site";
import { MessageSquare } from "lucide-react";

export default function Index() {
  useDocumentMeta(
    "Affordable Website Development for Businesses | Cloud Media Tech Solutions",
    "Get a fast, mobile-friendly business website built for you, starting at ₹4,999 with Cloud Media Tech Solutions.",
  );

  return (
    <SiteLayout>
      <LaunchOfferModal />

      <HeroSection />

      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-tech-500/30 py-8 sm:py-12 px-4 overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-tech-500/5 backdrop-blur-3xl"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-tech-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs sm:text-sm font-semibold text-tech-400 mb-3 uppercase tracking-wider">
              ✨ Special Launch Offer
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-poppins font-bold text-white mb-4 leading-tight">
              Professional business websites starting from ₹4,999
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed">
              Choose a plan that fits your business — Starter{" "}
              <span className="font-bold text-tech-400">₹4,999</span> | Business{" "}
              <span className="font-bold text-tech-400">₹9,999</span> |
              Ecommerce <span className="font-bold text-tech-400">₹19,999</span>
            </p>
            <Button
              size="lg"
              className="bg-tech-500 hover:bg-tech-600 text-white font-semibold px-6 sm:px-8 py-6 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 h-12 sm:h-14"
              onClick={() =>
                window.open(
                  buildWhatsAppUrl(
                    "Hi Cloud Media Tech, I'm interested in your website plans. Can you tell me more about the ₹4,999, ₹9,999, or ₹19,999 plans?",
                  ),
                  "_blank",
                )
              }
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Launch Offer
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold mb-4 sm:mb-6">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Cloud Media Tech Solutions specializes in building modern,
              scalable, and user-friendly websites and web applications. We
              focus on creating professional business websites, ecommerce
              platforms, and custom web solutions that help businesses build a
              strong digital presence.
            </p>
          </div>
        </div>
      </section>

      <ServicesTeaser />
      <PricingSection />
    </SiteLayout>
  );
}
