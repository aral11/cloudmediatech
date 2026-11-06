import { SiteLayout } from "@/components/site-layout";
import { HeroSection } from "@/components/home/hero-section";
import { WhatWeDo } from "@/components/home/what-we-do";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { HowItWorks } from "@/components/home/how-it-works";
import { PackagesSection } from "@/components/packages/packages-section";
import { FinalCta } from "@/components/home/final-cta";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function Index() {
  useDocumentMeta("/");

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
