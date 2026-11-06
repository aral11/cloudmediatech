import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/services";

const homeServices = services.slice(0, 4);

export function ServicesTeaser() {
  return (
    <section id="services" className="py-12 sm:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold mb-4 sm:mb-6">
            Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Everything you need to get your business online
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {homeServices.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="bg-tech-100 dark:bg-tech-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-tech-500 group-hover:text-white transition-colors duration-300">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-14">
          <Button asChild variant="outline" size="lg" className="h-12 px-6 font-semibold">
            <Link to="/services">See All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
