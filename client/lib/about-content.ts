import {
  AppWindow,
  Globe,
  HeartHandshake,
  Layers,
  Lightbulb,
  Megaphone,
  Palette,
  Rocket,
  Search,
  Server,
  ShoppingCart,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Wallet,
  Workflow,
  Wrench,
  Building2,
  type LucideIcon,
} from "lucide-react";

export const FOUNDER_PHOTO_URL: string | null = null;

export const HERO = {
  eyebrow: "Every Business Deserves a Website.",
  headline: "Your Business Deserves to Be Online.",
  description:
    "We believe every business deserves a professional digital identity. From small businesses and startups to growing enterprises, we make websites and digital solutions accessible, affordable and simple.",
  primaryCta: { label: "Get Started", to: "/contact" },
  secondaryCta: { label: "Explore Our Services", to: "/services" },
};

export const COMPANY_OVERVIEW = {
  title: "About Cloud Media Tech Solutions",
  paragraphs: [
    "Cloud Media Tech Solutions is a technology-driven startup founded by Aral Aldrin John D'Souza. Our mission is to make digital solutions accessible and affordable for businesses of every size.",
    "We believe having a website should not be a luxury reserved for large corporations. Every entrepreneur, local business and growing organisation deserves an opportunity to establish its identity online.",
    "We bring website development, digital services and business technology solutions together under one platform.",
  ],
};

export const STORY = {
  title: "Our Story: Why We Started",
  problems: [
    "Many small businesses cannot afford expensive website development.",
    "Many entrepreneurs struggle to find reliable digital service providers.",
    "Many businesses still lack a professional online identity.",
    "Digital transformation should be accessible to everyone.",
  ],
  bridge:
    "Cloud Media Tech Solutions was created to close this gap. We keep our packages simple and our process straightforward, so a small shop or a first-time founder can get a professional online presence without a large budget.",
};

export const MISSION_VISION = {
  mission:
    "To empower small and medium-sized businesses, entrepreneurs and startups with affordable, reliable and accessible digital solutions.",
  vision:
    "A world where every business has a website, every entrepreneur has a digital identity, and no business is left behind because of technology costs.",
};

export type AboutService = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const ABOUT_SERVICES: AboutService[] = [
  {
    title: "Business Website Development",
    description:
      "A professional website that presents your business clearly on every phone and computer.",
    icon: Globe,
  },
  {
    title: "E-commerce Website Development",
    description:
      "An online store with product pages and a simple checkout, ready to start selling.",
    icon: ShoppingCart,
  },
  {
    title: "Landing Page Development",
    description:
      "A focused page built to turn visitors into enquiries for a campaign, offer or launch.",
    icon: Rocket,
  },
  {
    title: "Custom Web Applications",
    description:
      "Tailored web tools that fit the way your business already works.",
    icon: AppWindow,
  },
  {
    title: "UI/UX Design",
    description:
      "Clean layouts and easy navigation that make your website simple to use.",
    icon: Palette,
  },
  {
    title: "Digital Marketing",
    description:
      "Campaigns and content that help people discover your business online.",
    icon: Megaphone,
  },
  {
    title: "SEO Solutions",
    description:
      "Practical search optimisation so people looking for your services can find you.",
    icon: Search,
  },
  {
    title: "Domain & Web Hosting",
    description:
      "Domain registration and reliable hosting, set up and managed for you.",
    icon: Server,
  },
  {
    title: "Website Maintenance",
    description:
      "Regular updates and small changes so your website stays current.",
    icon: Wrench,
  },
  {
    title: "Business Automation",
    description:
      "Simple automations that save time on repeated tasks like enquiries and follow-ups.",
    icon: Workflow,
  },
];

export const WHO_WE_SERVE = [
  { label: "Small businesses", icon: Store },
  { label: "Medium-sized businesses", icon: Building2 },
  { label: "Startups", icon: Rocket },
  { label: "Entrepreneurs", icon: Lightbulb },
];

export const WHY_CHOOSE_US = [
  {
    title: "Affordable Digital Solutions",
    description: "Professional quality built to fit a small budget.",
    icon: Wallet,
  },
  {
    title: "One Platform, Multiple Services",
    description:
      "Websites, marketing and digital tools handled in one place, with one point of contact.",
    icon: Layers,
  },
  {
    title: "Business-Focused Approach",
    description:
      "We start with what your business needs to achieve, then choose the technology to match.",
    icon: Target,
  },
  {
    title: "Modern Technology",
    description:
      "Fast, responsive websites built with current tools that work on every device.",
    icon: Sparkles,
  },
  {
    title: "Responsive Customer Support",
    description: "Questions go to a real person on WhatsApp or email.",
    icon: HeartHandshake,
  },
  {
    title: "Solutions That Grow With Your Business",
    description:
      "Start with the essentials and add features as your business expands.",
    icon: TrendingUp,
  },
];

export const FOUNDER = {
  name: "Aral Aldrin John D'Souza",
  designation: "Founder, Cloud Media Tech Solutions",
  paragraphs: [
    "Cloud Media Tech Solutions was founded by Aral Aldrin John D'Souza with a vision of making technology accessible to businesses of every size.",
    "With a background in computer applications, cybersecurity and software development, he aims to combine technology, creativity and business understanding to deliver practical and affordable digital solutions.",
    "His philosophy is simple: Every business deserves a digital identity, regardless of its budget.",
  ],
  quote:
    "You shouldn't need a massive budget to make your business visible to the world. Every business deserves an opportunity to grow digitally.",
};

export const PROMISE = {
  title: "Our Promise",
  description:
    "We will keep our pricing affordable, communicate clearly at every step, and build websites that can grow with your business.",
};

export const FINAL_CTA = {
  headline: "Your Business. Your Website. Your Digital Future.",
  description:
    "Let's make your business visible to the world. Start your digital journey with Cloud Media Tech Solutions.",
  cta: { label: "Let's Build Your Website.", to: "/contact" },
};
