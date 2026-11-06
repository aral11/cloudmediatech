import { ENQUIRY_PACKAGE_OPTIONS } from "@/lib/packages";
import { buildWhatsAppUrl } from "@/lib/site";

export type EnquiryValues = {
  name: string;
  businessName: string;
  businessCategory: string;
  phone: string;
  email: string;
  serviceRequired: string;
  packageValue: string;
  projectRequirements: string;
};

export function buildEnquiryMessage(values: EnquiryValues) {
  const selected = ENQUIRY_PACKAGE_OPTIONS.find(
    (option) => option.value === values.packageValue,
  );

  return [
    "Hello Cloud Media Tech Solutions,",
    "",
    "I would like to discuss a website project.",
    "",
    "CUSTOMER DETAILS",
    "",
    `Name: ${values.name}`,
    `Business Name: ${values.businessName}`,
    `Business Category: ${values.businessCategory}`,
    `Phone / WhatsApp: ${values.phone}`,
    `Email: ${values.email}`,
    "",
    "PROJECT DETAILS",
    "",
    `Service Required: ${values.serviceRequired}`,
    `Preferred Package: ${selected?.name ?? "Not selected"}`,
    `Package Price: ${selected?.price ?? "To be confirmed"}`,
    "",
    "Project Requirements:",
    values.projectRequirements.trim(),
    "",
    "Thank you!",
  ].join("\n");
}

export function buildEnquiryUrl(values: EnquiryValues) {
  return buildWhatsAppUrl(buildEnquiryMessage(values));
}
