import { describe, expect, it } from "vitest";
import { buildEnquiryMessage, buildEnquiryUrl } from "@/lib/enquiry";

const values = {
  name: "Asha Rao",
  businessName: "Rao & Co",
  businessType: "Cafe",
  phone: "+91 98765 43210",
  email: "asha@example.com",
  packageValue: "business",
  requirement: "New Website",
  additionalDetails: "  Need online menu  ",
};

describe("buildEnquiryMessage", () => {
  it("inserts customer and package details", () => {
    const message = buildEnquiryMessage(values);
    expect(message).toContain("Name: Asha Rao");
    expect(message).toContain("Business Type: Cafe");
    expect(message).toContain("Package Selected: Business");
    expect(message).toContain("Package Price: ₹19,999");
    expect(message).toContain("Requirement: New Website");
    expect(message).toContain("Need online menu");
  });

  it("marks an unselected package as to be confirmed", () => {
    const message = buildEnquiryMessage({ ...values, packageValue: "not-sure" });
    expect(message).toContain("Package Price: To be confirmed");
  });

  it("uses the WhatsApp click-to-chat format with encoded text", () => {
    const url = buildEnquiryUrl(values);
    expect(url.startsWith("https://wa.me/918105784258?text=")).toBe(true);
    expect(url).not.toContain(" ");
    expect(decodeURIComponent(url.split("?text=")[1])).toContain("Rao & Co");
  });
});
