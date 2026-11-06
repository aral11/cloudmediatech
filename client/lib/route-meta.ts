export type RouteMeta = { title: string; description: string };

export const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "Cloud Media Tech Solutions | Affordable Website Development for Businesses",
    description:
      "Looking for affordable website development? Cloud Media Tech Solutions builds professional business websites, e-commerce platforms and digital solutions for startups and growing businesses.",
  },
  "/about": {
    title: "About Cloud Media Tech Solutions | Our Story & Vision",
    description:
      "Learn about Cloud Media Tech Solutions, a website development team in India helping small businesses, startups and professionals grow online.",
  },
  "/services": {
    title: "Website Development & Digital Solutions | Cloud Media Tech Solutions",
    description:
      "Business websites, online stores, landing pages, redesigns and SEO for small businesses and startups. See what we can build for you.",
  },
  "/portfolio": {
    title: "Our Website Design & Development Portfolio | Cloud Media Tech Solutions",
    description:
      "Completed website projects and concept designs by Cloud Media Tech Solutions, including a live interior design website in Mangaluru.",
  },
  "/contact": {
    title: "Contact Cloud Media Tech Solutions | Get a Website Quote",
    description:
      "Get in touch for a free website review or quote. Reach us on WhatsApp or email.",
  },
};

export const PRERENDERED_ROUTES = Object.keys(ROUTE_META).filter((path) => path !== "/");
