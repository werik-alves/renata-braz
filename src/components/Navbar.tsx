import Link from "next/link";
import Image from "next/image";
import { byNodeId, assets } from "../lib/assets";

export default function Navbar() {
  const logoSrc = byNodeId("");
  return (
    <nav className="w-full bg-[#383330] text-foreground">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={assets.logo}
              alt="Logo"
              width={50}
              height={40}
              priority
            />
            <span className="sr-only">Início</span>
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#about" className="hover:opacity-80">Sobre</Link>
            <Link href="#services" className="hover:opacity-80">Serviços</Link>
            <Link href="#gallery" className="hover:opacity-80">Galeria</Link>
            <Link href="#contact" className="font-medium hover:opacity-80">Contato</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}