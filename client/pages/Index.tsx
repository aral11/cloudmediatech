import { SiteLayout } from "@/components/site-layout";
import { HeroSection } from "@/components/home/hero-section";
import { WhatWeDo } from "@/components/home/what-we-do";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { HowItWorks } from "@/components/home/how-it-works";
import { PackagesSection } from "@/components/packages/packages-section";
import { FinalCta } from "@/components/home/final-cta";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function Index() {
  useDocumentMeta(
    "Cloud Media Tech Solutions | Affordable Website Development for Businesses",
    "Looking for affordable website development? Cloud Media Tech Solutions builds professional business websites, e-commerce platforms and digital solutions for startups and growing businesses.",
    "/",
  );

  return (
    <SiteLayout>
      <HeroSection />
      <WhatWeDo />
      <WhyChooseUs />
      <HowItWorks />
      <PackagesSection />
      <FinalCta />
    </SiteLayout>
  );
}
