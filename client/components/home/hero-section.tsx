import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LOGO_URL, buildWhatsAppUrl } from "@/lib/site";

export function HeroSection() {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-tech-50 via-cloud-50 to-background animate-gradient-x bg-[length:400%_400%]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-slide-in-left">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              <span className="text-foreground">Affordable Websites for</span>
              <br />
              <span className="text-tech-500">Small Businesses,</span>
              <br />
              <span className="text-foreground">Studios & Hotels</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              We design and build fast, mobile-friendly websites and online
              stores, starting at ₹4,999.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-tech-500 hover:bg-tech-600 text-white px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 h-12 sm:h-14"
                onClick={() =>
                  window.open(
                    buildWhatsAppUrl(
                      "Hi Cloud Media Tech, I'd like a free website audit.",
                    ),
                    "_blank",
                  )
                }
              >
                Free Website Audit
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold rounded-xl h-12 sm:h-14"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <img
                src={LOGO_URL}
                alt="Cloud Media Tech Logo"
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
