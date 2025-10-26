import { SITE_NAME, SITE_URL } from "./seo";
import { assets } from "./assets";
import { sanitizeDigits } from "./links";

function absoluteUrl(path?: string): string | undefined {
  if (!path) return undefined;
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function buildOpeningHours() {
  const moFr = process.env.NEXT_PUBLIC_BUSINESS_OPENING_HOURS_MO_FR; // Ex.: "09:00-18:00"
  const sa = process.env.NEXT_PUBLIC_BUSINESS_OPENING_HOURS_SA;
  const su = process.env.NEXT_PUBLIC_BUSINESS_OPENING_HOURS_SU;
  const specs: any[] = [];
  const toSpec = (range: string | undefined, days: string[]) => {
    if (!range) return;
    const [opens, closes] = range.split("-");
    specs.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days,
      opens,
      closes,
    });
  };
  toSpec(moFr, ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]);
  toSpec(sa, ["Saturday"]);
  toSpec(su, ["Sunday"]);
  return specs;
}

export function buildLocalBusinessJsonLd() {
  const BUSINESS_NAME = process.env.NEXT_PUBLIC_BUSINESS_NAME || SITE_NAME;
  const EMAIL = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || process.env.CONTACT_TO_EMAIL || process.env.CONTACT_FROM_EMAIL || "";
  const TELEPHONE = process.env.NEXT_PUBLIC_BUSINESS_TELEPHONE || "";

  const sameAs: string[] = [];
  const instagramUsername = process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || "contadora.renatabraz";
  if (instagramUsername) sameAs.push(`https://www.instagram.com/${instagramUsername}/`);
  const whatsappRaw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const waDigits = sanitizeDigits(whatsappRaw);
  if (waDigits) sameAs.push(`https://wa.me/${waDigits}`);

  const address = {
    streetAddress: process.env.NEXT_PUBLIC_BUSINESS_STREET_ADDRESS || undefined,
    addressLocality: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LOCALITY || undefined,
    addressRegion: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_REGION || undefined,
    postalCode: process.env.NEXT_PUBLIC_BUSINESS_POSTAL_CODE || undefined,
    addressCountry: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_COUNTRY || "BR",
  };

  const openingHoursSpecification = buildOpeningHours();

  const lat = process.env.NEXT_PUBLIC_BUSINESS_LAT;
  const lng = process.env.NEXT_PUBLIC_BUSINESS_LNG;

  const jsonLd: any = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AccountingService", "ProfessionalService"],
    name: BUSINESS_NAME,
    url: SITE_URL,
    image: absoluteUrl(assets.logo),
    logo: absoluteUrl(assets.logo),
  };

  if (EMAIL) jsonLd.email = EMAIL;
  if (TELEPHONE) jsonLd.telephone = TELEPHONE;

  const cleanedAddr: any = {};
  for (const [k, v] of Object.entries(address)) if (v) cleanedAddr[k] = v;
  if (Object.keys(cleanedAddr).length) {
    jsonLd.address = { "@type": "PostalAddress", ...cleanedAddr };
  }

  if (openingHoursSpecification.length) {
    jsonLd.openingHoursSpecification = openingHoursSpecification;
  }

  if (lat && lng) {
    jsonLd.geo = { "@type": "GeoCoordinates", latitude: Number(lat), longitude: Number(lng) };
  }

  if (sameAs.length) jsonLd.sameAs = sameAs;

  return jsonLd;
}