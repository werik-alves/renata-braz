import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappFloat from "../components/WhatsappFloat";

export const metadata: Metadata = {
  title: "Conflui Contabilidade",
  description: "Site oficial Conflui Contabilidade",
  icons: {
    icon: [
      { url: "/assets/icon.png", type: "image/png", sizes: "any" },
      { url: "/assets/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/assets/icon.png", type: "image/png", sizes: "64x64" },
    ],
    apple: [{ url: "/assets/icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
