import { Building2, RefreshCw, Rocket, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const offerings = [
  {
    icon: Building2,
    title: "Business websites",
    description:
      "Professional sites that make you look trustworthy from the first click.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce websites",
    description: "Online stores that make it easy for customers to buy.",
  },
  {
    icon: Rocket,
    title: "Landing pages",
    description: "Focused pages built to turn visitors into enquiries.",
  },
  {
    icon: RefreshCw,
    title: "Redesign and maintenance",
    description:
      "Give an old site a fresh start and keep it running smoothly.",
  },
];

export function WhatWeDo() {
  return (
    <section id="services" className="py-12 sm:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold">
            What we do
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {offerings.map((item, index) => (
            <Card
              key={item.title}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="bg-tech-100 dark:bg-tech-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-tech-500 group-hover:text-white transition-colors duration-300">
                  <item.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
