import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-layout";
import { useDocumentMeta } from "@/hooks/use-document-meta";

const values = ["Professional", "Modern", "Reliable", "Customer-focused"];

export default function About() {
  useDocumentMeta(
    "About Cloud Media Tech Solutions | Website Development in India",
    "Learn about Cloud Media Tech Solutions, a website development team in India helping small businesses, startups and professionals grow online.",
  );

  return (
    <SiteLayout>
      <section className="pt-28 pb-12 sm:pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-6 sm:mb-8 text-center">
            Technology that helps real businesses grow online.
          </h1>
          <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Cloud Media Tech Solutions was founded by Aral Aldrin John
              D'Souza to help startups, small businesses and professionals build
              a strong, professional online presence.
            </p>
            <p>
              We believe a good website should be simple, fast and affordable,
              and should help you get customers.
            </p>
          </div>

          <div className="mt-10 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-poppins font-semibold mb-4">
              Our values
            </h2>
            <ul className="flex flex-wrap gap-3">
              {values.map((value) => (
                <li
                  key={value}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Button
              asChild
              size="lg"
              className="bg-tech-500 hover:bg-tech-600 text-white font-semibold h-12 sm:h-14 px-6 sm:px-8"
            >
              <Link to="/contact">Talk to us</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
