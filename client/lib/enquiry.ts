import { ENQUIRY_PACKAGE_OPTIONS } from "@/lib/packages";
import { buildWhatsAppUrl } from "@/lib/site";

export type EnquiryValues = {
  name: string;
  businessName: string;
  businessType: string;
  phone: string;
  email: string;
  packageValue: string;
  requirement: string;
  additionalDetails: string;
};

export function buildEnquiryMessage(values: EnquiryValues) {
  const selected = ENQUIRY_PACKAGE_OPTIONS.find(
    (option) => option.value === values.packageValue,
  );

  return [
    "Hello Cloud Media Tech Solutions,",
    "",
    "I would like to enquire about website development.",
    "",
    "CUSTOMER DETAILS",
    "",
    `Name: ${values.name}`,
    `Business Name: ${values.businessName}`,
    `Business Type: ${values.businessType}`,
    `Phone / WhatsApp: ${values.phone}`,
    `Email: ${values.email}`,
    "",
    "PROJECT DETAILS",
    "",
    `Package Selected: ${selected?.name ?? "Not selected"}`,
    `Package Price: ${selected?.price ?? "To be confirmed"}`,
    `Requirement: ${values.requirement}`,
    "",
    "Additional Details:",
    values.additionalDetails.trim() || "None provided",
    "",
    "I would like to discuss my website project and receive further information.",
    "",
    "Thank you!",
  ].join("\n");
}

export function buildEnquiryUrl(values: EnquiryValues) {
  return buildWhatsAppUrl(buildEnquiryMessage(values));
}
