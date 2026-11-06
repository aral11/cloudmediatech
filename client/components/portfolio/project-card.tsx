import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const DECOR_EMPORIUMS_URL = "https://decoremporiums.com/";

export function ProjectCard() {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative bg-muted p-4 sm:p-6">
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="ml-3 truncate text-xs text-muted-foreground">decoremporiums.com</span>
            </div>
            <img
              src="/portfolio/decor-emporiums.png"
              alt="Homepage of the Decor Emporiums website"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover object-top"
            />
          </div>
          <span className="absolute top-7 right-7 sm:top-9 sm:right-9 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold tracking-wide text-white">
            PROJECT COMPLETED
          </span>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-tech-500 mb-2">
              Website Design &amp; Development
            </p>
            <CardTitle className="text-2xl sm:text-3xl font-poppins">Decor Emporiums</CardTitle>
          </CardHeader>

          <div className="space-y-4">
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
              <dt className="text-muted-foreground">Industry</dt>
              <dd className="font-medium">Interior Design</dd>
              <dt className="text-muted-foreground">Location</dt>
              <dd className="flex items-center gap-1.5 font-medium">
                <MapPin className="h-4 w-4 text-tech-500" aria-hidden="true" />
                Mangaluru, India
              </dd>
            </dl>
            <CardDescription className="text-sm sm:text-base leading-relaxed">
              We designed and developed the website for Decor Emporiums, creating a professional
              digital presence that showcases its interior design business, services and brand
              identity. The site gives visitors an engaging browsing experience while presenting the
              business professionally online.
            </CardDescription>
          </div>

          <div className="pt-6">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-tech-500 hover:bg-tech-600 text-white font-semibold h-12 sm:h-14 px-6"
            >
              <a href={DECOR_EMPORIUMS_URL} target="_blank" rel="noopener noreferrer">
                Visit Live Website
                <ExternalLink className="h-4 w-4 ml-2" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
