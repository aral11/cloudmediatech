import { SiteLayout } from "@/components/site-layout";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { AboutHero } from "@/components/about/about-hero";
import { AboutOverview, AboutStory } from "@/components/about/about-story";
import { MissionVision } from "@/components/about/mission-vision";
import { AboutServices } from "@/components/about/about-services";
import { WhoWeServe } from "@/components/about/who-we-serve";
import { WhyChooseUs } from "@/components/about/why-choose";
import { FounderSection } from "@/components/about/founder-section";
import { ClosingCta, OurPromise } from "@/components/about/closing-cta";

export default function About() {
  useDocumentMeta(
    "About Cloud Media Tech Solutions | Website Development in India",
    "Learn about Cloud Media Tech Solutions, a website development team in India helping small businesses, startups and professionals grow online.",
  );

  return (
    <SiteLayout>
      <AboutHero />
      <AboutOverview />
      <AboutStory />
      <MissionVision />
      <AboutServices />
      <WhoWeServe />
      <WhyChooseUs />
      <FounderSection />
      <OurPromise />
      <ClosingCta />
    </SiteLayout>
  );
}
