import "./globals.css";
import type { Metadata } from "next";
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
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
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main className="pt-0 md:pt-16">{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
