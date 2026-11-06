import {
  AppWindow,
  Briefcase,
  Building2,
  Globe,
  Hotel,
  Lightbulb,
  Megaphone,
  Palette,
  Rocket,
  Search,
  Server,
  ShoppingBag,
  ShoppingCart,
  Store,
  UtensilsCrossed,
  Users,
  Wallet,
  Workflow,
  Wrench,
  Accessibility,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

export const FOUNDER_PHOTO_URL: string | null =
  "https://cdn.builder.io/api/v1/image/assets%2F010d7df9751a411d85bb96dd347f726b%2F5f61e502134f4e7288a374d7b4888243?format=webp&width=800&height=1200";

export const HERO = {
  eyebrow: "Affordable Website Development for Businesses.",
  headline: "Technology Should Be Accessible to Every Business.",
  description:
    "At Cloud Media Tech Solutions, we believe every business deserves a professional digital presence. We make website development and digital solutions affordable, accessible and simple for businesses of every size.",
  primaryCta: { label: "Explore Our Services", to: "/services" },
  secondaryCta: { label: "Get in Touch", to: "/contact" },
};

export const WHO_WE_ARE = {
  heading: "More Than a Technology Company. A Partner in Your Digital Journey.",
  paragraphs: [
    "Cloud Media Tech Solutions is a technology-driven startup founded by Aral Aldrin John D'Souza.",
    "We started with a simple observation: while businesses are increasingly moving online, many small businesses, entrepreneurs and startups still find professional website development expensive or complicated.",
    "We believe this should not be a barrier.",
    "Our goal is to make professional website development and digital solutions accessible to everyone, regardless of business size or budget.",
    "From business websites and e-commerce platforms to custom web applications and digital services, we aim to bring everything businesses need to establish and strengthen their online presence under one platform.",
  ],
};

export const WHY_WE_STARTED = {
  heading: "Built on a Simple Belief. Every Business Deserves a Website.",
  intro:
    "Every business has something valuable to offer. A local restaurant, a family-owned hotel, a retail store, a startup or an independent professional deserves the same opportunity to reach customers online.",
  challenge:
    "However, professional digital solutions have often been out of reach for smaller businesses because of cost and complexity.",
  response: [
    "We started Cloud Media Tech Solutions to help change that.",
    "Our aim is to simplify technology, remove unnecessary barriers and give businesses an affordable way to establish their digital identity.",
  ],
};

export const MISSION_VISION = {
  mission: {
    label: "Our Mission",
    headline: "Making Digital Growth Accessible.",
    body: "Our mission is to empower small and medium-sized businesses, startups and entrepreneurs with affordable, reliable and professional digital solutions that help them establish an online presence and grow with confidence.",
  },
  vision: {
    label: "Our Vision",
    headline: "A Website for Every Business. Opportunities Without Limits.",
    body: "Our vision is to create a digital ecosystem where every business, regardless of its size or budget, has access to the technology and tools needed to compete in an increasingly digital world.",
  },
};

export type AboutValue = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const ABOUT_VALUES: AboutValue[] = [
  {
    title: "Accessibility",
    description:
      "Technology and professional websites should be accessible to businesses of every size.",
    icon: Accessibility,
  },
  {
    title: "Affordability",
    description:
      "Quality digital solutions should not require an unreasonable investment.",
    icon: Wallet,
  },
  {
    title: "Innovation",
    description:
      "We embrace modern technology to create useful, effective and scalable digital experiences.",
    icon: Lightbulb,
  },
  {
    title: "Partnership",
    description:
      "We believe in building long-term relationships and supporting businesses as they grow.",
    icon: HeartHandshake,
  },
];

export type AboutService = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES_HEADING = "Everything Your Business Needs to Grow Digitally.";

export const ABOUT_SERVICES: AboutService[] = [
  {
    title: "Business Website Development",
    description:
      "A professional website that presents your business clearly on every phone and computer.",
    icon: Globe,
  },
  {
    title: "E-commerce Development",
    description:
      "An online store with product pages and a simple checkout, ready to start selling.",
    icon: ShoppingCart,
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
    title: "SEO Solutions",
    description:
      "Practical search optimisation so people looking for your services can find you.",
    icon: Search,
  },
  {
    title: "Digital Marketing",
    description:
      "Campaigns and content that help people discover your business online.",
    icon: Megaphone,
  },
  {
    title: "Domain and Hosting",
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

export const WHO_WE_SERVE = {
  heading: "Built for Businesses Like Yours.",
  description:
    "Our solutions are designed to meet different business requirements and budgets.",
  audiences: [
    { label: "Small and local businesses", icon: Store },
    { label: "Medium-sized enterprises", icon: Building2 },
    { label: "Startups and entrepreneurs", icon: Rocket },
    { label: "Hotels and hospitality businesses", icon: Hotel },
    { label: "Restaurants and cafes", icon: UtensilsCrossed },
    { label: "Retail and e-commerce businesses", icon: ShoppingBag },
    { label: "Freelancers and consultants", icon: Briefcase },
    { label: "Professional service providers", icon: Users },
  ] satisfies { label: string; icon: LucideIcon }[],
};

export const FOUNDER = {
  name: "Aral Aldrin John D'Souza",
  designation: "Founder – Cloud Media Tech Solutions",
  paragraphs: [
    "Cloud Media Tech Solutions was founded by Aral Aldrin John D'Souza with a vision of making professional digital solutions accessible to businesses of every size.",
    "With an educational background in computer applications and cybersecurity, alongside experience in software development, he brings together technology, creativity and business understanding to build practical digital solutions.",
    "His belief is that every business deserves an opportunity to establish its identity online, without being restricted by expensive development costs.",
  ],
  quote:
    "You shouldn't need a massive budget to make your business visible to the world. Every business deserves an opportunity to grow digitally.",
};

export const APPROACH = {
  heading: "Simple Process. Meaningful Results.",
  steps: [
    {
      number: "01",
      title: "Understand",
      description: "We understand your business, goals and requirements.",
    },
    {
      number: "02",
      title: "Plan",
      description: "We identify the right website and digital solution for your needs.",
    },
    {
      number: "03",
      title: "Build",
      description: "We design and develop a professional digital experience.",
    },
    {
      number: "04",
      title: "Support",
      description:
        "We help you take your business online and discuss further improvements as your business grows.",
    },
  ],
};

export const COMMITMENT = {
  heading: "We Don't Just Build Websites. We Help Businesses Move Forward.",
  paragraphs: [
    "Whether you are launching your first business website, building an online store or modernising your existing digital presence, Cloud Media Tech Solutions aims to make the journey straightforward, affordable and professional.",
    "Your business has a story. Let's help the world discover it.",
  ],
};

export const FINAL_CTA = {
  headline: "Ready to Take Your Business Online?",
  description:
    "Let's create a digital presence that reflects your business, connects with your customers and supports your growth.",
  primaryCta: { label: "Start Your Project", href: "/#enquiry" },
  secondaryCta: { label: "Explore Our Packages", href: "/#packages" },
};
