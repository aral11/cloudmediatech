export type PackageId = "starter" | "business" | "ecommerce";

export type WebsitePackage = {
  id: PackageId;
  name: string;
  price: number;
  positioning: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const PACKAGE_NOTE =
  "Final scope, third-party charges, hosting, domain and payment gateway costs are subject to confirmation.";

export const WEBSITE_PACKAGES: WebsitePackage[] = [
  {
    id: "starter",
    name: "Starter Website",
    price: 9999,
    positioning:
      "Perfect for small businesses and individuals who want to establish their first online presence.",
    features: [
      "Professional business website",
      "Up to 5 website pages",
      "Mobile-responsive design",
      "Modern UI/UX",
      "About Us section",
      "Services section",
      "Contact Us section",
      "WhatsApp integration",
      "Google Maps integration",
      "Basic SEO setup",
      "Contact enquiry form",
      "Social media integration",
    ],
    cta: "Get Started",
  },
  {
    id: "business",
    name: "Business Website",
    price: 19999,
    positioning:
      "Ideal for growing businesses that need a more professional and feature-rich website.",
    features: [
      "Professional website",
      "Up to 10 website pages",
      "Premium UI/UX design",
      "Mobile and tablet responsiveness",
      "Advanced contact forms",
      "WhatsApp integration",
      "Google Maps integration",
      "SEO-friendly structure",
      "Blog / News section",
      "Image gallery",
      "Social media integration",
      "Google Analytics integration",
      "Speed optimisation",
    ],
    cta: "Choose Business Plan",
    highlighted: true,
  },
  {
    id: "ecommerce",
    name: "E-commerce / Premium Website",
    price: 39999,
    positioning:
      "Complete digital solution for businesses looking to sell products and services online.",
    features: [
      "Premium website design",
      "E-commerce functionality",
      "Product catalogue",
      "Product management",
      "Shopping cart",
      "Checkout functionality",
      "Payment gateway integration",
      "Order management",
      "Customer registration and login",
      "Mobile-responsive design",
      "WhatsApp integration",
      "SEO-friendly setup",
      "Admin dashboard",
      "Basic analytics",
      "Social media integration",
    ],
    cta: "Get Premium Website",
  },
];

export type ComparisonValue = boolean | string;

export const COMPARISON_ROWS: {
  label: string;
  values: Record<PackageId, ComparisonValue>;
}[] = [
  {
    label: "Pages",
    values: { starter: "Up to 5", business: "Up to 10", ecommerce: "Custom" },
  },
  {
    label: "Mobile-responsive design",
    values: { starter: true, business: true, ecommerce: true },
  },
  {
    label: "WhatsApp integration",
    values: { starter: true, business: true, ecommerce: true },
  },
  {
    label: "Google Maps integration",
    values: { starter: true, business: true, ecommerce: false },
  },
  {
    label: "Basic SEO setup",
    values: { starter: true, business: true, ecommerce: true },
  },
  {
    label: "Blog / news section",
    values: { starter: false, business: true, ecommerce: false },
  },
  {
    label: "Image gallery",
    values: { starter: false, business: true, ecommerce: false },
  },
  {
    label: "Google Analytics integration",
    values: { starter: false, business: true, ecommerce: false },
  },
  {
    label: "Online store, cart and checkout",
    values: { starter: false, business: false, ecommerce: true },
  },
  {
    label: "Payment gateway integration",
    values: { starter: false, business: false, ecommerce: true },
  },
  {
    label: "Customer login and order management",
    values: { starter: false, business: false, ecommerce: true },
  },
  {
    label: "Admin dashboard",
    values: { starter: false, business: false, ecommerce: true },
  },
];

export const FAQS = [
  {
    question: "Do I need technical knowledge to manage my website?",
    answer:
      "No. We help you get started and explain how to manage your website.",
  },
  {
    question: "Are domain and hosting included?",
    answer:
      "These depend on the selected package and final quotation. Any additional recurring costs will be communicated clearly.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Yes. You can discuss additional features and upgrades as your business grows.",
  },
  {
    question: "Do you develop hotel websites?",
    answer:
      "Yes. We can build professional websites for hotels, resorts, restaurants and hospitality businesses.",
  },
  {
    question: "Can I integrate online booking?",
    answer:
      "Yes. Booking functionality can be discussed and quoted according to your requirements.",
  },
];

export const ENQUIRY_PACKAGE_OPTIONS = [
  { value: "starter", label: "Starter – ₹9,999", name: "Starter", price: "₹9,999" },
  { value: "business", label: "Business – ₹19,999", name: "Business", price: "₹19,999" },
  { value: "ecommerce", label: "E-commerce – ₹39,999", name: "E-commerce", price: "₹39,999" },
  {
    value: "not-sure",
    label: "Not Sure – Need Assistance",
    name: "Not Sure – Need Assistance",
    price: "To be confirmed",
  },
];

export const ENQUIRY_REQUIREMENT_OPTIONS = [
  "New Website",
  "Existing Website Redesign",
  "E-commerce Website",
  "Website Maintenance",
  "Other Digital Solutions",
];
