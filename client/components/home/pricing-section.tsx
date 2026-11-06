import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buildWhatsAppUrl } from "@/lib/site";

const plans = [
  {
    title: "Starter Website",
    price: "₹4,999",
    description: "Perfect for portfolios & small businesses",
    features: [
      "1–3 pages",
      "Mobile responsive",
      "Contact form",
      "WhatsApp integration",
      "Basic SEO",
      "1 month support",
    ],
    highlighted: false,
  },
  {
    title: "Business Website",
    price: "₹9,999",
    description: "For studios, hotels & service businesses",
    features: [
      "5–7 pages",
      "Image gallery",
      "Services showcase",
      "Custom design",
      "Google Maps embed",
      "SEO optimization",
      "3 months support",
    ],
    highlighted: true,
  },
  {
    title: "Ecommerce Website",
    price: "₹19,999",
    description: "Complete online stores",
    features: [
      "Product catalog",
      "Shopping cart",
      "Payment gateway integration",
      "Admin panel",
      "Inventory tracking",
      "Mobile responsive",
      "6 months support",
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold mb-4 sm:mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional websites at affordable prices. Choose the perfect plan
            for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.title}
              className={`animate-fade-in overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "ring-2 ring-tech-500 md:scale-105 shadow-2xl"
                  : "hover:shadow-lg"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="bg-tech-500 text-white py-2 text-center font-semibold text-sm">
                  MOST POPULAR
                </div>
              )}
              <CardHeader className={plan.highlighted ? "pt-4" : ""}>
                <CardTitle className="text-lg sm:text-2xl">{plan.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base mt-2">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-tech-500">{plan.price}</span>
                  <p className="text-sm text-muted-foreground mt-1">One-time payment</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-tech-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs text-tech-600 font-bold">✓</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className={`w-full font-semibold h-12 sm:h-14 text-sm sm:text-base transition-all active:scale-95 ${
                    plan.highlighted
                      ? "bg-tech-500 hover:bg-tech-600 text-white"
                      : "bg-tech-100 text-tech-700 hover:bg-tech-200 dark:bg-tech-900 dark:text-tech-100 dark:hover:bg-tech-800"
                  }`}
                  onClick={() =>
                    window.open(
                      buildWhatsAppUrl(
                        `Hi Cloud Media Tech, I'm interested in the ${plan.title} package.`,
                      ),
                      "_blank",
                    )
                  }
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
