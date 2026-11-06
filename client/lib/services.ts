import {
  AppWindow,
  Building2,
  Megaphone,
  Palette,
  RefreshCw,
  Rocket,
  Search,
  ShoppingCart,
  Workflow,
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
    title: "Website Design and Development",
    description:
      "A clean, modern site that explains what you do and makes it easy to contact you.",
  },
  {
    icon: Building2,
    title: "Business Websites",
    description:
      "Ideal for restaurants, clinics, agencies, schools and local businesses that want a credible online home.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    description:
      "Show products, take orders and manage your store without technical stress.",
  },
  {
    icon: AppWindow,
    title: "Custom Web Applications",
    description:
      "Booking systems, dashboards and tools built around how your business actually works.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "One focused page for a campaign, offer or event, designed to get enquiries.",
  },
  {
    icon: RefreshCw,
    title: "Redesign and Maintenance",
    description:
      "We refresh outdated sites and keep them secure and up to date.",
  },
  {
    icon: Search,
    title: "SEO and Optimisation",
    description:
      "Make your site faster and easier for Google and customers to understand.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing and Branding",
    description:
      "Social media creatives and brand basics that match your website.",
  },
  {
    icon: Workflow,
    title: "Business Automation and Consulting",
    description:
      "Reduce manual work with simple tools and automation.",
  },
];
