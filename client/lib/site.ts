export const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F010d7df9751a411d85bb96dd347f726b%2F1c866cd6ca314033a207be72d9b9a58d?format=webp&width=800";

export const SITE_URL = "https://www.cloudmediatechsolutions.com";

export const CONTACT_EMAIL = "contact@cloudmediatechsolutions.com";

export const INSTAGRAM_URL = "https://instagram.com/cloudmediatech";

export const LOCATIONS = "Mumbai & Mangalore, India";

const WHATSAPP_NUMBER = "918105784258";

export function buildWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
