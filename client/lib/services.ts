import {
  AppWindow,
  Code,
  Palette,
  RefreshCw,
  Rocket,
  Search,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Palette,
    title: "Website Design",
    description:
      "Clean, modern layouts designed around your brand and your customers.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Websites",
    description:
      "Online stores with product catalogs, shopping carts and payment gateway integration.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "Focused pages built to turn visitors into enquiries, bookings or sales.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Refresh an outdated site with a new design and mobile-friendly layouts.",
  },
  {
    icon: Search,
    title: "SEO Setup",
    description:
      "Basic on-page SEO, plus Google Search Console and Analytics setup.",
  },
  {
    icon: AppWindow,
    title: "Web Applications",
    description:
      "Custom web applications and business tools built to your requirements.",
  },
];
