import { SiteLayout } from "@/components/site-layout";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { AboutHero } from "@/components/about/about-hero";
import { WhoWeAre } from "@/components/about/who-we-are";
import { WhyWeStarted } from "@/components/about/why-we-started";
import { MissionVision } from "@/components/about/mission-vision";
import { AboutValues } from "@/components/about/about-values";
import { AboutServices } from "@/components/about/about-services";
import { WhoWeServe } from "@/components/about/who-we-serve";
import { FounderSection } from "@/components/about/founder-section";
import { AboutApproach } from "@/components/about/about-approach";
import { AboutCommitment } from "@/components/about/about-commitment";
import { ClosingCta } from "@/components/about/closing-cta";

export default function About() {
  useDocumentMeta("/about");

  return (
    <SiteLayout>
      <AboutHero />
      <WhoWeAre />
      <WhyWeStarted />
      <MissionVision />
      <AboutValues />
      <AboutServices />
      <WhoWeServe />
      <FounderSection />
      <AboutApproach />
      <AboutCommitment />
      <ClosingCta />
    </SiteLayout>
  );
}
