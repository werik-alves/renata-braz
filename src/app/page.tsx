import Hero from "../components/Hero";
import ContactStrip from "../components/ContactStrip";
import Plans from "../components/Plans";
import About from "../components/About";
import Diferenciais from "../components/Diferenciais";
import Depoimento from "../components/Depoimento";
import Contact from "../components/Contact";
import Especilidades from "@/components/Especilidades";
import Conteudo from "@/components/Conteudo";

import Script from "next/script";
import { SITE_NAME, SITE_URL } from "../lib/seo";
import { buildLocalBusinessJsonLd } from "../lib/business";

export default function Page() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/icon.png`,
    sameAs: [
      // Adicione perfis oficiais quando disponíveis
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };

  return (
    <main>
      <Script id="jsonld-organization" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(orgJsonLd)}
      </Script>
      <Script id="jsonld-website" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(websiteJsonLd)}
      </Script>
      <Script id="jsonld-localbusiness" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(buildLocalBusinessJsonLd())}
      </Script>

      <Hero />
      <ContactStrip />
      <About />
      <Especilidades />
      <Conteudo />
      <Plans />
      <Diferenciais />
      <Depoimento />
      <Contact />
    </main>
  );
}