export const SITE_NAME = "Conflui Contabilidade";
export const SITE_DESCRIPTION = "Contabilidade digital para profissionais: abertura de empresa, assessoria fiscal e emissão de notas. Atendimento ágil e especializado.";

// Defina NEXT_PUBLIC_SITE_URL no .env.local para produção (ex.: https://www.seudominio.com)
const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const SITE_URL = envSiteUrl.replace(/\/$/, ""); // remove barra final

export const defaultOpenGraph = {
  type: "website" as const,
  locale: "pt_BR",
  siteName: SITE_NAME,
  url: SITE_URL,
  images: [
    {
      url: `${SITE_URL}/assets/hero.png`,
      width: 1200,
      height: 630,
      alt: SITE_NAME,
    },
  ],
};

export const defaultTwitter = {
  card: "summary_large_image" as const,
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  images: [`${SITE_URL}/assets/hero.png`],
};

export const canonicalForPath = (path: string = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;