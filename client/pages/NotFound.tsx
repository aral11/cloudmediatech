import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found | Cloud Media Tech Solutions";
    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const previous = robots?.getAttribute("content") ?? null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");
    return () => {
      robots?.setAttribute("content", previous ?? "index, follow");
    };
  }, [location.pathname]);

  return (
    <SiteLayout>
      <section className="min-h-[70vh] flex items-center pt-28 pb-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-tech-500 mb-4">
            Error 404
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-4">
            This page could not be found
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            The page you are looking for may have moved or no longer exists. Explore our services or get in touch and we will help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-tech-500 hover:bg-tech-600 text-white rounded-xl">
              <Link to="/">Return to Home</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
