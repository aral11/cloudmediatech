import { useState } from "react";
import { ConceptCard } from "@/components/portfolio/concept-card";
import { ConceptModal } from "@/components/portfolio/concept-modal";
import type { PortfolioConcept } from "@/components/portfolio/concept-types";
import { ClinicSite } from "@/components/portfolio/concept-sites/clinic-site";
import { CorporateSite } from "@/components/portfolio/concept-sites/corporate-site";
import { ResortSite } from "@/components/portfolio/concept-sites/resort-site";
import { RestaurantSite } from "@/components/portfolio/concept-sites/restaurant-site";
import { StoreSite } from "@/components/portfolio/concept-sites/store-site";

const concepts: PortfolioConcept[] = [
  {
    name: "Ember & Oak",
    category: "Restaurant Website",
    industry: "Restaurants & Dining",
    description: "Menu categories, table reservations and WhatsApp ordering for a dining brand.",
    Site: RestaurantSite,
  },
  {
    name: "CarePoint Clinic",
    category: "Clinic Website",
    industry: "Healthcare & Clinics",
    description: "Doctor profiles, medical services, online appointment booking and clinic hours.",
    Site: ClinicSite,
  },
  {
    name: "Azure Bay Resort",
    category: "Hotel & Resort Website",
    industry: "Hotels & Resorts",
    description: "Room categories, booking enquiries, amenities and location details for guests.",
    Site: ResortSite,
  },
  {
    name: "Lumé Store",
    category: "E-commerce Website",
    industry: "Online Retail",
    description: "Product catalogue, category navigation, cart and promotional banners.",
    Site: StoreSite,
  },
  {
    name: "Northstar Consulting",
    category: "Business & Corporate Website",
    industry: "Corporate & Professional Services",
    description: "Company hero, services, achievements and a clear contact call-to-action.",
    Site: CorporateSite,
  },
];

export function ConceptShowcase() {
  const [selected, setSelected] = useState<PortfolioConcept | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {concepts.map((concept) => (
          <ConceptCard key={concept.name} concept={concept} onView={setSelected} />
        ))}
      </div>
      <ConceptModal concept={selected} onClose={() => setSelected(null)} />
    </>
  );
}
