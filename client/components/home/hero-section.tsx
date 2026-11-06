import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOGO_URL, buildWhatsAppUrl } from "@/lib/site";

export function HeroSection() {
  return (
    <section
      id="home"
      className="pt-28 pb-16 min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-tech-50 via-cloud-50 to-background animate-gradient-x bg-[length:400%_400%]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-slide-in-left">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 leading-tight">
              A website that brings you customers, not just compliments.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg">
              We build fast, modern and affordable websites for restaurants,
              clinics, shops, startups and growing businesses. Clear design,
              simple process, real results you can measure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-tech-500 hover:bg-tech-600 text-white px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 h-12 sm:h-14"
              >
                <Link to="/contact">Get a Free Website Review</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold rounded-xl h-12 sm:h-14"
                onClick={() =>
                  window.open(
                    buildWhatsAppUrl(
                      "Hi Cloud Media Tech, I'd like to chat about a website.",
                    ),
                    "_blank",
                  )
                }
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <img
                src={LOGO_URL}
                alt="Cloud Media Tech Solutions logo"
                className="h-64 w-auto animate-floating drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-tech-500/20 rounded-full blur-3xl animate-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
