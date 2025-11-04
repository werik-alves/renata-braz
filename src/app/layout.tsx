import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappFloat from "../components/WhatsappFloat";
import { Poppins } from "next/font/google";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, defaultOpenGraph, defaultTwitter, canonicalForPath } from "../lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: "/assets/icon.png", type: "image/png", sizes: "any" },
      { url: "/assets/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/assets/icon.png", type: "image/png", sizes: "64x64" },
    ],
    apple: [{ url: "/assets/icon.png", type: "image/png", sizes: "180x180" }],
  },
  // viewport removido daqui conforme recomendação da API
  alternates: {
    canonical: canonicalForPath("/"),
  },
  openGraph: {
    ...defaultOpenGraph,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    ...defaultTwitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <head>
        <meta name="adopt-website-id" content="419460d1-a05a-4e0b-a41f-ea697b4aa6f7" />
        <script src="//tag.goadopt.io/injector.js?website_code=419460d1-a05a-4e0b-a41f-ea697b4aa6f7" className="adopt-injector"></script>
      </head>
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main className="pt-0 md:pt-16">{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
